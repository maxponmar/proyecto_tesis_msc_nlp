const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/healtcheck", async (req, res) => {
  try {
    const response = await axios.get(
      "http://66.94.124.10:4000/api/healthcheck"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

router.get("/startfreeling", async (req, res) => {
  try {
    const response = await axios.get(
      "http://66.94.124.10:4000/api/startfreeling"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

router.post("/analyze", async (req, res) => {
  const text = req.body.text;

  try {
    const response = await axios.post("http://66.94.124.10:4000/api/freeling", {
      text: text,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

module.exports = router;
