var request = require("request");

function PubSub() {
    
    var successFns = [];
    var failureFns = [];
    
    this.then = function(fn) {
        successFns.push(fn);
        return this;
    }
    
    this.error = function(fn) {
        failureFns.push(fn);
        return this;
    }
    
    var resolve = function(res, body) {
        for(var i in successFns)
        {
            successFns[i](res, body);
        }
    }
    
    var fail = function(err) {
        for(var i in failureFns)
        {
            failureFns[i](err);
        }
    }
    
    this.request = function(url) {
        request(url, function(err, response, body){
            if(err)
            {
                fail(err);
            }
            else
            {
                resolve(response, body);
            }
            
        });
        return this;
    }
    
}

module.exports = new PubSub();