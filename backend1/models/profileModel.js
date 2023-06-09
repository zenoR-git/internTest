const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    country: String,
    state: String,
    city: String,
    pincode: Number,
},{ _id : false })

const ContactSchema = new mongoose.Schema({
    mobileNumber: Number,
    contactEmail: String,
    ScreenName: String,
},{ _id : false })

const ProfileSchema = new mongoose.Schema({
    userId: String,
    name: {
        type: "String",
        required: true,
    },
    status: String,
    sex: String,
    birthday: String,
    school: String,
    highSchool: String,
    lookingFor: String,
    interest: String,
    bio: String,
    address:{
        type: addressSchema
    },
    contact:{
        type: ContactSchema
    }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;