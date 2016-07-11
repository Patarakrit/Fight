const Twit = require('twit');

const twit = new Twit({
    consumer_key: 'oLril8uLzUtJUoRxvvrH44WRs',
    consumer_secret: 'WmuJkBPLNbK4x2mMXOcR6W44aZsjaAXj1SJ4RjXbtQR32VcV0p',
    access_token: '65665713-MRsL3Xt4VGHoweS9nPd09WBnI6Oj83fhEziXHocrW',
    access_token_secret: 'N1TYyJIL61G9xoZPYpgK0hmge0OOfn63wYeLKc7RFiXiX',
    timeout_ms: 60 * 1000,
})

twit.get('search/tweets', {
    q: 'zanroo since:2011-07-11',
    count: 100
}, function(err, data, response) {
    console.log("data = ", JSON.stringify(data, null, 4));
})
