const express = require("express");

const Project = require("../data/helpers/projectModel.js")

const router = express.Router()

router.get("/", (req, res) => {
    Project.get()
           .then(project => {
               res.status(200).json(project);
           })
})

router


module.exports = router;


