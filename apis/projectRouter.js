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

router.put("/:id", (req, res) => {
    const {id } = req.params;
    const { name, description } = req.body;
    Project.update(id, { name, description})
           .then(updated => {
               console.log(updated)
               res.status(200).json(updated)
           })
           .catch(err => {
               console.log(err)
               res.status(500).json({error: "Error updating Project data"});
           })
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    
})

module.exports = router;


