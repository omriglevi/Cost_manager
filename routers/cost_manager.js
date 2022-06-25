const {Router} = require('express');
const { updateCost } = require('../controllers/cost');
const { addCostToUser, removeCostFromUser, createCostAndAddToUser } = require('../controllers/cost_manager');
const { getUser } = require('../controllers/user');
const { getRequestHandler, postRequestHandler, putRequestHandler, deleteRequestHandler, getReportHandler } = require('../routeHandlers/cost_manager');
const  router = Router()

router.get('/', getRequestHandler);
router.get('/report', getReportHandler)
router.post('/', postRequestHandler);
router.put('/', putRequestHandler);
router.delete('/', deleteRequestHandler);

module.exports = router