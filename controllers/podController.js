const express = require('express');
const router = express.Router();
const db = require('../models');
 
// Find ALL available PODS for teachers
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
// Find ALL available PODS for parents
router.get("/parent/view",(req,res)=>{
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson=pods.map(pod=>pod.toJSON());
        console.log("podsJson from teacher view api call/ whats in it? " ,podsJson)
        res.render("parent",{teacher: podsJson});
    })
})
module.exports = router;