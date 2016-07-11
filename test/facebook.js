const expect = require('chai').expect;
const should = require('chai').should();
const Facebook = require('../libs/facebook.js');
const yamljs = require('yamljs');

const config = yamljs.load('config.yml');

const facebook = new Facebook(config);

describe('Facebook', function() {
    describe('#getMaxLike()', function() {
        it('should return highest like of page', function(done) {
            facebook.findMaxLike('1517897278540114', function(err, maxLikeObj) {
                should.not.exist(err);
                expect(maxLikeObj.likes.summary.total_count).to.be.a('number');
                done();
            })
        });
    });
});
