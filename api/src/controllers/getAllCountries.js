const axios = require('axios');
const {Activity, Country } = require('../db.js');
const { Op } = require("sequelize");

const getApiCountry = async () => {
    const countriesAPI = await axios.get('https://restcountries.com/v3/all')
    const countries = countriesAPI.data.map(country => {
        const continent = country.continents;
        const capitale = country.capital;
        return {
            id: country.cca3,
            name: country.name.common,
            image: country.flags ? country.flags[1] : "Not image",
            continent: continent ? continent[0] : "Not continent",
            capital: capitale ? capitale[0] : "Not capital",
            subregion: country.subregion || "Antartica",
            area: country.area,
            population: country.population
        }
    })
    return countries;
}


const getCountriesDB = async (req, res, next) => {
    try {
        const count = await Country.count()
        if (count === 0) {
            const countries = await getApiCountry();
        
            await Promise.all(
                countries.map((e) =>
                    Country.findOrCreate({
                        where: { name: e.name },
                        defaults: { ...e },
                    })
                )
            );
        }
    } catch (error) {
        return next(error);
    }
}

const getAllCountry = async (req, res) => {
    try {
        const queryName = req.query.name;
        await getCountriesDB();
        if(!queryName){
            const allCountry = await Country.findAll({include: [{ model: Activity }]})
            return res.status(200).json(allCountry)
        }
        const countryFilter = await Country.findAll({
            where: {
                name: {
                    [Op.iRegexp]: queryName,
                }
            },
            include: [{ model: Activity }]
        })
        return res.status(200).json(countryFilter? countryFilter : "No se encontro un pais con ese nombre")

    } catch (error) {
        res.status(404).send(error.msg)
    }
}

const getIdCountry = async (req, res) => {
    try {
        const idCountry = req.params.id;
        await getCountriesDB()
        if(idCountry){
            const countryFilter = await Country.findAll({
                where: {
                    id: {
                        [Op.eq]: idCountry
                    }
                },
                include: [{model: Activity}]
            })
            res.status(200).json(countryFilter)
        }
    } catch (error) {
        res.status(404).send(error.msg)
    }
}



module.exports = {getAllCountry, getIdCountry, getCountriesDB }