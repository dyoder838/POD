const express = require('express');
const router= express.Router();
const db = require('../models');

router.get('/',function(req,res){
    res.render("login",{});
})

router.get('/signup/parent',function(req,res){
    res.render("parentsignup",{});
})

router.get('/signup/teacher',function(req,res){
    res.render("teachersignup",{});
})

router.get('/parent',function(req,res){
    res.render("parent",{});
})

router.get('/teacher',function(req,res){
    res.render("teacher",{});
})


module.exports = router;

// Routes: /, api/teacher, 

// Main Page -login and signup

// auth controllers- /api/signup-create an account POST send to db, when click on login sends POST to api/login---create 
// htmlroutes (rendering all the html and handlebars)- click on sign up then render handlebars for, "/signup"- to create account