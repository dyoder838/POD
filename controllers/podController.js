const express = require('express');
const router = express.Router();
const db = require('../models');

// Student Signup
router.post('/signup/student', (req, res) => {
    console.log(req.body)
    db.Student.create({
        first_name: req.body.studentFirst,
        last_name: req.body.studentLast,
    }).then(function(student){
        student.addPod(req.body.StudentId)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("server error")
    })
})

// Find ALL available PODS for 
router.get("/pods",(req,res)=>{
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson=pods.map(pod=>pod.toJSON());
        console.log("podsJson from teacher view api call/ whats in it? " ,podsJson)
        res.render("teacher",podsJson);
    })
})


module.export = router;