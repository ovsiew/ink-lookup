let express = require("express");
let app = express();
let port = 4000;

let path = require("path");
let fs = require("fs");

// Configuration
app.use(express.static(path.join(__dirname, "/static")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// ========================================
// Routing
// ========================================

// Homepage
app.get("/", function(req, res) {
    res.sendFile("index.html");
});

// View table
app.get("/view-ink", function(req, res) {

});

// Downloads
app.get("/excel-sheet", function(req, res) {
    
});

// Requisition instructions
app.get("/requisition-instructions", function(req, res) {
    res.sendFile("requisition-instructions.html");
});

// About
app.get("/about", function(req, res) {
    res.sendFile("about.html");
});

// Start
app.listen(port, () => {
    console.log("Listening on " + port);
});