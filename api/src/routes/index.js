const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const conutriesRouter = require('./countries.js')
const activitiesRouter = require('./activities.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', conutriesRouter)
router.use('/', activitiesRouter)

module.exports = router;
