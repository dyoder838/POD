const express = require("express");
const router = express.Router();
const db = require("../models")

router.get('/teacher',function(req,res){
    res.render("teacher",{});
})

module.exports = router;