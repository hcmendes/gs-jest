var express = require('express');
var router = express.Router();

const sum = require('./logic/sum')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // const mySum = sum(1, 2)
  res.send({mensagem: 'testando'});
});

module.exports = router;
