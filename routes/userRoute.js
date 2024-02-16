const express = require('express')
const router = express.Router()
const { login, logout } = require('../controllers/authController')
const validate = require('../middleware/validate')
const {check} = require('express-validator')
const {verify} = require('../middleware/verify')
const {authenticateUser, getAllUsers} = require('../controllers/userController')

router.post(
    '/login',
    check('email')
        .isEmail()
        .withMessage('Enter a valid email address')
        .normalizeEmail(),
    check('password').not().isEmpty(),
    validate,
    login
)

router.get('/authenticate', verify, authenticateUser)

router.get('/logout', verify, logout)

router.get('/getUsers',verify, getAllUsers)

module.exports = router