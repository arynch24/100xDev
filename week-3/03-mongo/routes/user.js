const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index');

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic 
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    })
        .then(() => {
            res.json({
                message: 'User created successfully'
            })
        })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
        .then((course) => {
            res.json({
                Course: course
            })
        })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;

    const username = req.headers.username;
    const password = req.headers.password;

    User.updateOne({
        username: username,
        password: password
    },
        {
            $push: {
                purchasedCourse: courseId
            }
        }).then(() => {
            res.json({
                message: "Purchase completed!"
            })
        })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username: username,
        password: password
    })
        .then((user) => {
            Course.find({
                _id:{
                    "$in":user.purchasedCourse
                }
            }).then((c)=>{
                res.json({
                    purchasedCourses:c
                })
            })
        })
});

module.exports = router