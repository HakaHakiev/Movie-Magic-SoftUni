const router = require("express").Router();

const homeController = require("./controllers/homeController");
const movieController = require("./controllers/movieController");
const castController = require("./controllers/castController");
const authController = require("./controllers/authController");
const { validate } = require("./utils/errorUtils");

router.use("/auth", authController); // 4
router.use("/cast", castController); // 3
router.use(movieController); // 2
router.use(homeController); // 1

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
