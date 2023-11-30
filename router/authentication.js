const express = require("express");
const router = express.Router();
const controller = require("../app/controllers");
const { verifyJWT } = require("../app/utils/jwt");
router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", controller.authentication.register);
router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", controller.authentication.login);
router.get("/logout", controller.authentication.logout);
router.get("/whoami", verifyJWT, controller.users.whoami);
router.get("/dashboard", verifyJWT, controller.authentication.dashboard);

module.exports = router;
