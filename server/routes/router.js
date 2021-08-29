const express = require('express');
const router = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Index Route
 *  @method GET /
 */
router.get('/', services.indexRoute);

/**
 *  @description Palettes Route
 *  @method GET /palettes
 */
router.get('/palettes', services.palettesRoute);

/**
 *  @description Palettes Route with Search Params
 *  @method GET /palettes
 */
 router.get('/palettes?search=:search', services.palettesRoute);

/**
 *  @description Index Route
 *  @method GET /generate
 */
router.get('/generate', services.generateRoute);

/**
 *  @description Index Route
 *  @method GET /saved
 */
router.get('/saved', services.savedRoute);

/**
 *  @description Index Route
 *  @method GET /about
 */
router.get('/about', services.aboutRoute);

/**
 *  @desription API Route
 *  @method GET/api/palettes
 */
router.post('/api/palettes', controller.create);
router.get('/api/palettes', controller.find);
router.put('/api/palettes/:id', controller.update);
router.delete('/api/palettes/:id', controller.delete);

module.exports = router;
