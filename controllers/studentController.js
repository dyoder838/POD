const express = require('express');
const router= express.Router();
const db = require('../models');

// GET route for ALL STUDENTS -- draft
router.get("/api/students", function (req, res) {
    db.Student.findAll({})
        .then(function (dbStudent) {
            res.json(dbStudent);
        });
});

// GET route for SINGLE STUDENTS -- draft
router.get("/:id", function (req, res) {
    db.Student.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbStudent) {
        res.json(name);
    });
});



// DELETE route for Student -- draft
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