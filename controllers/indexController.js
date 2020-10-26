const express = require('express');
const router = express.Router();
const db = require('../models');

// Home page
router.get("/", (req, res) => {
    res.render("login", { user: req.session.user })
})

// Parent Sign up page
router.get("/signup/parent", (req, res) => {
    res.render("parentsignup", { user: req.session.user })
})

// Parent page
router.get("/parent",(req,res)=>{
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson=pods.map(pod=>pod.toJSON());
        console.log(podsJson)
        const hbsObj = {
            user: req.session.user,
            parent: podsJson
        }
        console.log(hbsObj)
        res.render("parent", hbsObj);
    })
})

// Teacher Sign up page
router.get('/signup/teacher',function(req,res){
    res.render("teachersignup",{ user: req.session.user });
})

// Teacer page
router.get("/teacher",(req,res)=>{
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson=pods.map(pod=>pod.toJSON());
        console.log(podsJson)
        const hbsObj = {
            user: req.session.user,
            teacher: podsJson
        }
        res.render("teacher", hbsObj);
    })
})

module.exports = router