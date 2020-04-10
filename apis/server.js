const express = require("express");

const server = express();
server.use(express.json())

const projectRouter = require("./projectRouter.js")
const actionRouter = require("./actionRouter.js")

server.use("/api/users", projectRouter)


server.get("/", (req, res) => {
    res.send("<h2>Hello from the localhost</h2>");
})

module.exports = server;