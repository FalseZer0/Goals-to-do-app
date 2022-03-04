const asyncHandler = require('express-async-handler');
//why async handler?


//@desc     Get goals
//@route    GET /api/goalRoutes
//@access   Private
const getGoals = asyncHandler(async (req, res)=>{
    res.status(200).json({message:"get goals"});
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

    res.status(200).json({message:"set goal"});
});
//@desc     update goal
//@route    PUT /api/goalRoutes/:id
//@access   Private
const updateGoal = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`update goal ${req.params.id}`});
});
//@desc     delete goal
//@route    DELETE /api/goalRoutes/:id
//@access   Private
const deleteGoal = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Delete goal ${req.params.id}`});
});



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal

}