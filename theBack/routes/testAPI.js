var express = require('express');
var router = express.Router();
var goog = require('../src/google-utils');

router.get("/", function(req, res, next) {
    res.send(goog);
})

module.exports = router;