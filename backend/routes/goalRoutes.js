//this is a common js practice, usually imports are used on the frontend side
const express = require('express');
const router = express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController');
//to replace routes with similar/same endpoints we can rewrite this
// router.get('/',getGoals);
// router.post('/',setGoal);
router.route('/').get(getGoals).post(setGoal);

router.route('/:id').put(updateGoal).delete(deleteGoal);

//.get() handles incoming get requests
//.send() sends a text message
//.json() sends a json object 
//.status(200) idk doesnt change anything

module.exports = router;