var express = require('express');
var router = express.Router();
var fs = require('fs')

router.get('/:type/:component', function (req, res, next){
    let source = '../src/components/' + req.params.type + "/" + req.params.component + "/index.js";
    if (req.params.component.split("_")[req.params.component.split.length-1] === "temp") {
        fs.readFile(source, {encoding: 'utf-8'}, function(err,data){
            if (!err) {
                console.log('received data: ' + data);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            } else {
                console.log(err);
            }
        });
    } else {
        res.status(403);
        res.send("Not allowed to directly edit components.");
    };
})

module.exports = router;