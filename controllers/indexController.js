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
        res.render("parent",podsJson);
    })
})

router.get("/signup/student", (req, res) => {
    if (req.session.user) {
        res.render("parent", { user: req.session.user })
    } else {
        res.redirect("/login")
    }
})

module.exports = router