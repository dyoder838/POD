const express = require("express");
const router = express.Router();
const db = require("../models")

router.get('/parent',function(req,res){
    res.render("parent",{});
})

module.exports = router;