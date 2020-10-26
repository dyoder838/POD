const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", (req, res) => {
    res.render("login", { user: req.session.user })
})
router.get("/signup/parent", (req, res) => {
    res.render("parentsignup", { user: req.session.user })
})

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