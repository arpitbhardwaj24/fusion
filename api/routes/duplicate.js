var express = require('express');
var router = express.Router();
var ncp = require('ncp').ncp;

ncp.limit = 16;


router.get('/:component', function (req, res, next){
 let source = '../src/components/' + req.params.component;
 let destination = '../src/components/' + req.params.component + "_temp";
 ncp(source, destination, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('done!');
    res.send("Success");
   });
})

module.exports = router;