const express = require('express');
const router = express.Router();
const db = require('../models');


// these are all API routes 
// Find ALL available PODS for 
router.get("/teacher/view",(req,res)=>{
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson=pods.map(pod=>pod.toJSON());
        console.log("podsJson from teacher view api call/ whats in it? " ,podsJson)
        res.render("teacher",podsJson);
    })
})

router.get("/parent/view",(req,res)=>{
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson=pods.map(pod=>pod.toJSON());
        console.log("podsJson from teacher view api call/ whats in it? " ,podsJson)
        res.render("parent",podsJson);
    })
})
module.exports = router;