const Profile = require("../models/profileModel");
const uuid = require('uuid');

const editProfile = async (req,res)=>{
    try{
        
        profileData = req.body
        id  = req.params.id;
        console.log(id)
        newProfile = await Profile.findOneAndUpdate({userId: id},profileData,{new: true})
        console.log(newProfile)
        res.status(200).json({message: "updated successfully"})
    }
    catch(err){
        console.log(err)
        res.status(400).json({message: "[controller]: error occured"})
    }
    
}

const addProfile = async (req,res)=>{
    try{
        console.log(req.body)
        let newProfile = req.body
        newProfile.userId = uuid.v4()
        let doc = new Profile(newProfile)
        await doc.save();
        res.status(200).json({message: "added successfully"})
    }catch(err){
        console.log(err)
        res.status(400).json({message: "[controller]: error occured in adding data"})
    }
}



module.exports = {editProfile,addProfile}