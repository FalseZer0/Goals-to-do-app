const express = require('express');
const router = express.Router();
const {registerUser,loginUser,getMe} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');
router.post('/',registerUser);
router.post('/login',loginUser);
//protect this route
router.get('/me',protect,getMe);
module.exports = router;