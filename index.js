var request = require('request');
var _ = require('underscore')._;

request('https://graph.facebook.com/v2.1/141108613290/posts?limit=25&fields=message,likes.limit(0).summary(true)&access_token=189801921181156|AoDoG__MMH4uKQJICVVTATtszHw', function(err, response, body) {
    if (err) {
        console.error('error', err);
        return;
    }        

    body = JSON.parse(body);

    var max = _.max(body.data, function(d) {
        return d.likes.summary.total_count;
    })
    console.log("max = ", JSON.stringify(max, null, 4));
})
