'use strict'
let pageId = '1517897278540114'
var Promise = require('promise');

var maxTime = 5 * 1000

main();

function main() {
    getMaxComment(pageId).then(getMinLike).then(getMaxLike);
}

function getMaxComment(pageId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let error;
            if (Math.random() < 0.1) {
                error = 'unknown error'
                console.error(error);
                reject(error);
            }
            let result = 10

            console.log("pageId = ", JSON.stringify(pageId, null, 4));
            resolve(pageId);

        }, maxTime * Math.random())
    })
}

function getMinLike(pageId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let error;
            if (Math.random() < 0.1) {
                error = 'unknown error'
                console.error(error);
                reject(error);
            }
            let result = 11

            console.log("pageId = ", JSON.stringify(pageId, null, 4));
            resolve(pageId);

        }, maxTime * Math.random())
    })
}

function getMaxLike(pageId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let error;
            if (Math.random() < 0.1) {
                error = 'unknown error'
                console.error(error);
                reject(error);
            }
            let result = 12

            console.log("pageId = ", JSON.stringify(pageId, null, 4));
            resolve(pageId);
        }, maxTime * Math.random())
    })
}
