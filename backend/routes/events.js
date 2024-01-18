const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

const events = [];

// Créer un événement
router.post("/", (req, res) => {
  const { name, description, startDate, endDate, timezone } = req.body;
  const newEvent = new Event(name, description, startDate, endDate, timezone);
  events.push(newEvent);
  res.json(newEvent);
});

// Lister les événements
router.get("/", (req, res) => {
  res.json(events);
});

module.exports = router;
