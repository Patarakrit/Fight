const request = require('request');
const _ = require('underscore')._;
const url = require('url');

const yamljs = require('yamljs');
const config = yamljs.load('config.yml');

var requestUrl = url.format({
    protocol: 'https',
    hostname: 'graph.facebook.com',
    pathname: config.apiVersion + '/' + config.pageId + '/posts',
    query: {
        limit: config.limit,
        access_token: config.accessToken,
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
