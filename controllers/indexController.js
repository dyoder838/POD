const express = require("express");
const router = express.Router();
const db = require("../models")

router.get('/',function(req,res){
    res.render("login",{});
})

router.get('/signup',function(req,res){
    res.render("signup",{});
})

router.get('/parent',function(req,res){
    res.render("parent",{});
})

router.get('/teacher',function(req,res){
    res.render("teacher",{});
})

module.exports = router;