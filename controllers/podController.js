const express = require('express');
const router = express.Router();
const db = require('../models');

// Get all parent PODS for parent page
router.get("/parent/view",(req,res)=>{
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson=pods.map(pod=>pod.toJSON());
        console.log("podsJson from teacher view api call/ whats in it? " ,podsJson)
        res.render("parent",{parent: podsJson});
    })
})

// Get all parent PODS for teacher page
router.get("/teacher/view",(req,res)=>{
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson = pods.map(podObj=> {
            return podObj.toJSON()
        })
        console.log("podsJson from teacher view api call/ whats in it? " ,podsJson)
        res.render("teacher",{teacher: podsJson});
    })
})

module.exports = router;