const express = require('express');
const router= express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
    db.Parent.create({
        first_name: req.body.parentFirst,
        last_name: req.body.parentLast,
        email: req.body.parentEmail,
        password: req.body.parentPassword,
        monday: req.body.monday,
        tuesday: req.body.tuesday,
        wednesday: req.body.wednesday,
        thursday: req.body.thursday,
        friday: req.body.friday, 
    }).then(newUser => {
        req.session.user = {
            email: newUser.email,
            id: newUser.id
        }
        res.redirect("/parentpage")
    }).catch(err => {
        console.log(err);
        res.status(500).send("server error")
    })
})

router.post('/login', (req, res) => {
    db.Parent.findOne({
        where: { email: req.body.parentEmail }
    }).then(user => {
        //check if user entered password matches db password
        if (!user) {
            req.session.destroy();
            return res.status(401).send('incorrect email or password')

        } else if (bcrypt.compareSync(req.body.password, user.password)) {
            req.session.user = {
                email: user.email,
                id: user.id
            }
            return res.redirect("/")
        }
        else {
            req.session.destroy();
            return res.status(401).send('incorrect email or password')
        }
    })
})