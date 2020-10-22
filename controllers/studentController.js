const express = require('express');
const router= express.Router();
const db = require('../models');

// GET route for ALL STUDENTS
router.get("/", function (req, res) {
    db.Student.findAll({})
        .then(function (dbStudent) {
            res.json(dbStudent);
        });
});

// GET route for SINGLE STUDENTS
router.get("/:id", function (req, res) {
    db.Student.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbStudent) {
        res.json(name);
    });
});

// POST route for saving NEW STUDENT
router.post("/", function (req, res) {
    db.Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }).then(function (dbStudent) {
        res.json(dbStudent);
    });
});

// DELETE route for Student
router.delete("/:id", function (req, res) {
    db.Student.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbStudent) {
        res.json(dbStudent);
    })
})

module.exports = router;