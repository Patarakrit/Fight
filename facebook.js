const request = require('request');
const _ = require('underscore')._;
const url = require('url');

const apiVersion = 'v2.1'
const pageId = '1517897278540114'
const limit = 25
const accessToken = '189801921181156|AoDoG__MMH4uKQJICVVTATtszHw'

var requestUrl = url.format({
    protocol: 'https',
    hostname: 'graph.facebook.com',
    pathname: apiVersion + '/' + pageId + '/posts',
    query: {
        limit: limit,
        access_token: accessToken,
        fields: 'message,likes.limit(0).summary(true)'
    }
})

request(requestUrl, function(err, response, body) {
    if (err) {
        console.error('error', err);
        return;
    }

    body = JSON.parse(body);

    const max = _.max(body.data, function(d) {
        return d.likes.summary.total_count;
    })
    console.log("max = ", JSON.stringify(max, null, 4));
})
