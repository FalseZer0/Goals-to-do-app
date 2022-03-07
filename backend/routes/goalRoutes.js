//this is a common js practice, usually imports are used on the frontend side
const express = require('express');
const router = express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController');
//to replace routes with similar/same endpoints we can rewrite this
// router.get('/',getGoals);
// router.post('/',setGoal);
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(protect,getGoals).post(protect,setGoal);

router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal);

//.get() handles incoming get requests
//.send() sends a text message
//.json() sends a json object 
//.status(200) idk doesnt change anything

module.exports = router;