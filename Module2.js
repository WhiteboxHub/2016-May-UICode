function getPerson(name, email, phone) {
    
    var getDetails = function() {
        return name + ":" + email + ":" + phone;
    }
    
    return {
        getDetails: getDetails
    }
}

module.exports = getPerson;