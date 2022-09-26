const express = require('express');
const router = express.Router();
const {getAllCountry, getIdCountry} = require('../controllers/getAllCountries.js');
//const {Activity, Country} = require('../db.js');

//router.use(express.json());

router.get('/countries', getAllCountry);

router.get('/countries/:id', getIdCountry);

module.exports = router;