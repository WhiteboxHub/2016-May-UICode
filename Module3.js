function Utility() {
    
    var name;
    var email;
    var phone;
    
    var setDetails = function(n, e, p) {
        name = n;
        email = e;
        phone = p;
    }
    
    var getDetails = function() {
        return name + ":" + email + ":" + phone;
    }
    
    return {
        setDetails : setDetails,
        getDetails: getDetails
    }
    
    
}


module.exports = Utility();