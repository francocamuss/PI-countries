const express = require('express');
const router = express.Router();
const {getActivities, postActivites} = require('../controllers/getActivities.js')


//router.use(express.json())

router.get('/activities/', getActivities);

router.post('/activities', postActivites);

module.exports = router;
