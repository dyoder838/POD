// Require models
var db = require("../models");

// Routes
module.exports = function (app) {
    // GET route for ALL STUDENTS
    app.get("/api/student/", function (req, res) {
        db.Student.findAll({})
            .then(function (dbStudent) {
                res.json(dbStudent);
            });
    });

    // GET route for SINGLE STUDENTS
    app.get("/api/student/:id", function (req, res) {
        db.Student.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbStudent) {
            res.json(name);
        });
    });

    // POST route for saving NEW STUDENT
    app.post("/api/student", function (req, res) {
        db.Student.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }).then(function (dbStudent) {
            res.json(dbStudent);
        });
    });

    // DELETE route for Student
    app.delete("/api/student/:id", function (req, res) {
        db.Student.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbStudent) {
            res.json(dbStudent);
        })
    })



}

