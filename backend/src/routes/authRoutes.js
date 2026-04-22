const express = require("express");
const router = express.Router();
const passport = require("../config/passport");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  authController.googleCallback
);

router.get("/protegido",
  authMiddleware,
  authController.protegido
);

module.exports = router;