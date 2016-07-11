'use strict'
module.exports = Facebook;
const url = require('url');
const request = require('request');
const _ = require('underscore')._;

function Facebook(config) {
    this.config = config
}

Facebook.prototype.findMaxLike = function(pageId, callback) {
    let config = this.config
    const requestUrl = url.format({
        protocol: 'https',
        hostname: 'graph.facebook.com',
        pathname: config.apiVersion + '/' + pageId + '/posts',
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
        callback(null, max);
    })
}
