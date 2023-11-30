const express = require("express");
const router = express.Router();
const user = require("./users");
const authentication = require("./authentication");

router.use(user);
router.use(authentication);
module.exports = router;
