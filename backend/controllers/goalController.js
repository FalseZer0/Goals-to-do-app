const asyncHandler = require('express-async-handler');
//why async handler?
const Goal = require('../model/goalModel');
const User = require('../model/userModel');
//@desc     Get goals
//@route    GET /api/goalRoutes
//@access   Private
const getGoals = asyncHandler(async (req, res)=>{
    const goals = await Goal.find({user: req.user.id});

    res.status(200).json(goals);
});
//@desc     create goal
//@route    POST /api/goalRoutes
//@access   Private
const setGoal = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        //bad request
        res.status(400);
        throw new Error("Please add a text field")
    }
    const goal = await Goal.create({
        user: req.user.id,
        text: req.body.text
    })
    res.status(200).json(goal);
});
//@desc     update goal
//@route    PUT /api/goalRoutes/:id
//@access   Private
const updateGoal = asyncHandler(async (req,res)=>{
    //below 2 statements check if such a goal exists
    // const user = await User.findById(req.user.id);
    const user = req.user;
    //check for user
    if(!user){
        res.status(401);
        throw new Error("User not found");
    }   
    const goal = await Goal.findById(req.params.id);
    //logged user matches goal user
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error("User not authorized");
    }
    if(!goal){
        res.status(400);
        throw new Error("Goal is not found");
    }
    //updates the entry by id, new : True creates an entry if it doesnt exist. which is interestingly enough wont be reachable 
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new: true})
    res.status(200).json(updateGoal);
});
//@desc     delete goal
//@route    DELETE /api/goalRoutes/:id
//@access   Private
const deleteGoal = asyncHandler(async (req,res)=>{
    // const user = await User.findById(req.user.id);
    const user = req.user;
    //check for user
    if(!user){
        res.status(401);
        throw new Error("User not found");
    } 
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal is not found");
    }
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error("User not authorized");

    }
    
    await Goal.remove(goal);
    //await goal.remove();  
    res.status(200).json({message:`Delete goal ${req.params.id}`});
});



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}