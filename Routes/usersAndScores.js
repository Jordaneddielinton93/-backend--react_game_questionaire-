import express from "express";
import { getAllUsersAndScores } from "../models/usersAndScores/getAllUsers.js";


let Router= express.Router()

console.log("hi")
Router.get("/",async (req,res)=>{
  let allUsers = await getAllUsersAndScores()
  
  res.json(allUsers)
})

export default Router