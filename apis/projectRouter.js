const express = require("express");

const Project = require("../data/helpers/projectModel.js")

const router = express.Router()

router.get("/", (req, res) => {
    Project.get()
           .then(project => {
               res.status(200).json(project);
           })
})

router.post("/", (req, res) => {
    const { name, description } = req.body;
    Project.insert({ name, description })
           .then(project => {
               res.status(201).json(project)
           })
})


module.exports = router;


