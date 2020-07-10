var express = require("express");
var router = express.Router();
var fs = require("fs");

router.post("/:type/:component", function(req, res, next) {
  let source =
    "../src/components/" +
    req.params.type +
    "/" +
    req.params.component +
    "/index.js";
  if (
    req.params.component.split("_")[req.params.component.split.length - 1] ===
    "temp"
  ) {
    console.log(source);
    fs.writeFile(source, req.body.code, { encoding: "utf-8" }, function(
      err,
      data
    ) {
      if (!err) {
        console.log("Saved code : " + req.body.code);
        res.send(req.body);
        res.end();
      } else {
        console.log(err);
      }
    });
  } else {
    res.status(403);
    res.send("Not allowed to directly edit components.");
  }
});

module.exports = router;
