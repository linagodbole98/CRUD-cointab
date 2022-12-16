const express = require("express")
const router = express.Router()
const {getUsers,getUser, createUser,deleteUser,putUser} = require("../controller/users")

router.get("/users", getUsers)
router.post("/users", createUser)
router.get("/users/:id",getUser)
router.delete("/users/:id",deleteUser)
router.put("/users/:id",putUser)


module.exports= router
