var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/', function(req, res, next) {
  console.log('Form Data:', req.body);
  res.send(`
    <h3>Thank you! Your message has been received.</h3>
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <p>Message: ${req.body.message}</p>
    <a href="/contact">Go back to contact page</a>
  `);
});

module.exports = router;
