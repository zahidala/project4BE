const express = require('express')
const router = express.Router()

router.use(express.json())

const authCntrl = require('../controllers/auth')

router.post('/auth/signup', authCntrl.auth_signup_post)
router.post('/auth/signin', authCntrl.auth_signin_post)

module.exports = router

// const router = require('express').Router();

// // Controller
// const authCntrl = require("../controllers/auth");

// // Routes
// router.get("/auth/signup", authCntrl.auth_signup_get);
// router.post("/auth/signup", authCntrl.auth_signup_post);

// router.get('/auth/signin', authCntrl.auth_signin_get);
// router.post('/auth/signin', authCntrl.auth_signin_post);

// router.get("/auth/logout", authCntrl.auth_logout_get);
// // Exports
// module.exports = router;