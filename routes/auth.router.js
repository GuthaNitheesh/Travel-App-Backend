const express = require('express');
const CryptoJS = require("crypto-js");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();

const signupHandler = require("../controllers/signupController");

const loginHandler=require("../controllers/loginController");
router.route("/register")
    .post(signupHandler);


router.route("/login")
    .post(loginHandler);





module.exports = router