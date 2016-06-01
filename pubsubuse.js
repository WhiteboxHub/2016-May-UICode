var pubsub = require("./pubsub");
console.log(pubsub);

var successFn = function(res, body){
    console.log(res);
}

var failureFn = function(err)
{
    console.log(err);
}

pubsub = pubsub.request('http://uiprogrammer.com').then(successFn).error(failureFn);

pubsub = pubsub.request('http://google.com').then(successFn).then(successFn).error(failureFn);

console.log('I feel I am done');