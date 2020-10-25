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
<<<<<<< HEAD

router.get("/api/pods", (req, res) => {
    db.Pod.findAll().then(pods => {
        res.json(pods)
    })
})

// Find ALL available PODS
router.get("/parent",(req,res)=>{
=======
// Find ALL available PODS for parents
router.get("/parent/view",(req,res)=>{
>>>>>>> 39392817e80091b80c477876d15602213e31ae87
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson=pods.map(pod=>pod.toJSON());
<<<<<<< HEAD
        console.log(podsJson)
        res.render("parent",podsJson);
    })
})

=======
        console.log("podsJson from teacher view api call/ whats in it? " ,podsJson)
        res.render("parent",podsJson);
    })
})
>>>>>>> 39392817e80091b80c477876d15602213e31ae87
module.exports = router;