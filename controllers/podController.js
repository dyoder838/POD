const db = require("../models");
const router = require("./authController");

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

router.get("/api/pods", (req, res) => {
    db.Pod.findAll().then(pods => {
        res.json(pods)
    })
})

// Find ALL available PODS
router.get("/parents",(req,res)=>{
    db.Pod.findAll({
        include: [db.Parent,db.Student]
    }).then(pods=>{
        const podsJson=pods.map(pod=>pod.toJSON());
        console.log(podsJson)
        res.render("parent",podsJson);
    })
})

module.exports = router;