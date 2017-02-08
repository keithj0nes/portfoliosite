var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3011, function(){
  console.log("listening on 3011");
})

// save front end changes -> run gulp
// save back end changes -> forever restartall
