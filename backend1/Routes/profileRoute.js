const {
    editProfile,addProfile
} = require("../controller/profileController");
const validator = require("../middleware/validator");

const express = require("express");
const router = express.Router({ mergeParams: true });

router.post('/edit',validator,editProfile);


module.exports = router;