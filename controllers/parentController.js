const express = require('express');
const router= express.Router();
const db = require('../models');

// sign up
router.post("/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(function () {
        res.redirect(307, "/login");
    }).catch(function (err) {
        console.log(err);
        res.json(err);
    });
});

module.exports = router;