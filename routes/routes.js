const express = require('express')
const router = express.Router()
const getControllers = require('../controllers/getControllers')
const postControllers = require('../controllers/postControllers')

//CLIENT ROUTES
router.get('/landing', getControllers.landing)
router.post('/signUp', postControllers.signUp)
router.post('/signIn', postControllers.signIn)
router.post('/logOut', postControllers.logOut)
router.post('/forgotPassword', postControllers.forgotPassword)

router.post('/deposit', postControllers.deposit)
router.post('/withdraw', postControllers.withdraw)

router.get('/userInfo', getControllers.userInfo)
router.get('/transactionHistory', getControllers.transactionHistory)

router.get('/marketInfo', getControllers.marketInfo)

router.post('/createOrder', postControllers.createOrder)
router.post('/cancelOrder', postControllers.cancelOrder)
router.get('/orderInfo', getControllers.orderInfo)

router.get('/orderBook', getControllers.orderBook)

module.exports = router
