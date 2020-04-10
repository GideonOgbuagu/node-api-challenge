const express = require("express");

const Action = require("../data/helpers/actionModel.js");

const router = express.Router()


router.get("/", (req, res) => {
    Action.get()
           .then(project => {
               res.status(200).json(project);
           })
})


router.get("/:id", (req, res) => {
    const { id } = req.params;
    Action.get(id)
           .then(project => {
               res.status(200).json(project)
           })
})

// router.get("/:id", (req, res) => {
//     Action.get()
//           .then(action => {
//               res.status(200).json(action)
//           })

// })


router.post("/", (req, res) => {
    const data = req.body;
    Action.insert(data)
           .then(project => {
               console.log(project)
               res.status(201).json(project)
           })
           .catch(err => {
               res.status(500).json({error: "Action data could not be inserted"})
           })
           
})

router.put("/:id", (req, res) => {
    const {id } = req.params;
    const { project_id, description, notes } = req.body;
    Action.update(id,  { project_id, description, notes })
           .then(updated => {
               console.log(updated)
               res.status(200).json(updated)
           })
           .catch(err => {
               console.log(err)
               res.status(500).json({error: "Error updating Action data"});
           })
})


// router.delete("/:id", (req, res) => {
//     const { id } = req.params;
//     Project.remove(id)
//            .then(() => {
//                if(id) {
//                    res.status(200).json({message: "project deleted"});
//                } else {
//                    res.status(404).json({ message: "Not found" })
//                }
//            })
//            .catch(err => {
//                console.log(err);
//                res.status(500).json({ error: "data could not be deleted from the database"});
//            })
// })

module.exports = router;





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