const express = require("express");

const freeling = require("./freeling");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Freeling Bridge API",
  });
});

router.use("/freeling", freeling);

module.exports = router;
