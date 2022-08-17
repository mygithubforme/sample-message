var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hola Amigo!",
    user: "J",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sample Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {});
});

router.post('/new', function(req, res, next){
  messages.push({
    text: req.body.messagetxt,
    user: req.body.username,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
