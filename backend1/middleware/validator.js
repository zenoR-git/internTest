function validate(req,res,next){
    var name = req.body.name;
    if (name === "" || name === undefined){
        throw new Error("name missing")
    }
    else if ((req.body.contact.mobileNumber!= "" && req.body.contact.mobileNumber != undefined) && !(/^\d{10}$/.test(req.body.contact.mobileNumber))){
        throw new Error("phone number wrong")
    }
    else if ((req.body.contact.contactEmail!= "" && req.body.contact.mobileNumber != undefined)&&!(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/).test(req.body.contact.contactEmail)){
        throw new Error("Email wrong")
    }
    next()
}

module.exports = validate