const express = require("express");
const router = express.Router();

const raeume = require("../models/rooms.js");

router.get("/", function (req, res, next) {
  res.render("Dashboard");
});

router.get("/Buchungsdetails", function (req, res, next) {
  res.render("Buchungsdetails");
});

router.get("/Raumdetails", function (req, res, next) {
  res.render("Raumdetails");
});

router.get("/Seminar_Anlegen", function (req, res, next) {
  res.render("Seminar_Anlegen");
});

router.get("/RaeumeListe", function (req, res, next) {
  res.render("RaeumeListe", { raeumeList: raeume });
});

router.use(function (req, res, next) {
    res.status(404).render("404");
});

// Router zugreifbar machen
module.exports = router;