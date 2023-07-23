const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')

console.log("Reached authRoutes")

router.route('/').post(loginLimiter, authController.login)

router.route('/refresh').get(authController.refresh)

router.route('/logout').post(authController.logout)

module.exports = router
