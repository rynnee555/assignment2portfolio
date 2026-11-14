
var express = require('express');
var router = express.Router();

// This route opens the Home page.
router.get('/', function(req, res) {
    res.render('index');
});

// This route opens the About Me page.
router.get('/about', function(req, res) {
    res.render('about');
});

 // This route opens the Projects page.
router.get('/projects', function(req, res) {
    res.render('projects');
});

// Contact Me page
router.get('/contact', function(req, res) {
    res.render('contact');
});

module.exports = router;
