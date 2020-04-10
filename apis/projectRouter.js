const express = require("express");

const Project = require("../data/helpers/projectModel.js");
const Action = require("../data/helpers/actionModel.js");

const router = express.Router()


router.get("/", (req, res) => {
    Project.get()
           .then(project => {
               res.status(200).json(project);
           })
})


router.get("/:id", (req, res) => {
    const { id } = req.params;
    Project.get(id)
           .then(project => {
               res.status(200).json(project)
           })
})

router.get("/:id/actions", (req, res) => {
    Action.get()
          .then(action => {
              res.status(200).json(action)
          })

})

router.get("/:id/actions/:project_id", (req, res) => {
    // const { description, notes } = req.body;
    const { project_id} = req.params;
    Project.getProjectActions(project_id)
          .then(action => {
              if(action) {
                res.status(200).json(action)
              } else {
                res.status(404).json({error: "Not found"});
              }
          })
          .catch(err => {
              console.log(err)
              res.status(500).json({error: "could be not retrieved from the database"})
          })

})


// router.get("/:id/actions/:action_id", (req, res) => {
//     // const { description, notes } = req.body;
//     const { action_id} = req.params;
//     Action.get(action_id)
//           .then(action => {
//               if(action) {
//                 res.status(200).json(action)
//               } else {
//                 res.status(404).json({error: "Not found"});
//               }
//           })
//           .catch(err => {
//               console.log(err)
//               res.status(500).json({error: "could be not retrieved from the database"})
//           })

// })



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
    Project.remove(id)
           .then(() => {
               if(id) {
                   res.status(200).json({message: "project deleted"});
               } else {
                   res.status(404).json({ message: "Not found" })
               }
           })
           .catch(err => {
               console.log(err);
               res.status(500).json({ error: "data could not be deleted from the database"});
           })
})

module.exports = router;


