const {v4 : uuid} = require('uuid')

let users=[]

const getUsers =  (req,res)=>{
    res.send (users)
}

const createUser = (req, res)=>{
    const user = req.body
    users.push({...user,id:uuid() })
    console.log(users);
    res.send (users)
}

const getUser = (req,res)=>{
    console.log("req");
    const singleUser = users.filter((user)=>user.id === req.params.id)
    res.send(singleUser)
}

const deleteUser =(req,res)=>{
    users=  users.filter((user)=>user.id !== req.params.id)
    res.send(users)
}

const putUser =(req,res)=>{
    const user= users.find((user)=>user.id === req.params.id)
    user.name = req.body.name
    user.email = req.body.email
    user.contact = req.body.contact

    res.send("user update succesfully")
}


module.exports= {createUser, getUsers,getUser,deleteUser, putUser}