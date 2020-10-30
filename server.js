const express = require('express'); 
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

var PORT = process.env.PORT || 5000;
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// GET 
app.get('/', function(req, res) {
    res.send('You are on the homepage');
  });


  // POST 
  app.post("/post", function(req, res) {
	console.log(req.body);
    res.send(`Welcome ${req.body.user}`);

});

// DELETE
app.delete("/delete", function(req, res){
	console.log(req.body);
    res.json({delete: true});
});

// PUT 
app.put("/put/:id", function(req, res) {
    res.send(`Task ${req.params.id} updated`);
});


app.listen(PORT, function(){
    console.log("Server running on port: ", PORT);
    
})