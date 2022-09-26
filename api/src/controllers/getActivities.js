const {Activity, Country } = require('../db.js');
const { Op } = require("sequelize");
const {getCountriesDB} = require('../controllers/getAllCountries.js');
const datos = require('./dates.js');

const getActivities = async (req, res, next) => {
    try {
        await getCountriesDB();
        let activities = await Activity.findAll({
            include: {model: Country}
        })
        if(activities.length<1){
            for(let i=0; i<datos.length; i++){
                const {name, difficulty, duration, season, countryID} = datos[i];
                const nuevaActividad = await Activity.create({name, difficulty, duration, season})
                countryID.map(async (id) => {
                    const country = await Country.findAll({where: {id: id}})
                    if(country) nuevaActividad.addCountry(country);
                })
            }
        }
        res.status(200).json(await Activity.findAll({include: [{model: Country}]}))
    } catch (error) {
        return next(error);
    }
}

const postActivites = async (req, res, next) => {
    try {
        const {name, difficulty, duration, season, countryID} = req.body;
        if(!name || !difficulty || !duration || !season || !countryID){
            return res.status(400).send("Faltan datos");
        }
        await getCountriesDB();
        const activitiesDB = await Activity.findAll();
        const filterActivity = await activitiesDB.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        if(filterActivity.length>0){
            return res.status(400).send("La actividad ya existe");
        }
        const activityCreate = await Activity.create({name, difficulty, duration, season});
        const creado = await activityCreate.addCountry(countryID)
        const relacion = await Activity.findOne({
            where: {name: name},
            include: {model: Country}
        })
        res.status(200).json(relacion);
    } catch (error) {
        return next(error)
    }
}


module.exports = {getActivities, postActivites}