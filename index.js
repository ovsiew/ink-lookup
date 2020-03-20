let express = require("express");
let app = express();
let port = 4000;

let path = require("path");
let fs = require("fs");

// ========================================
// Config
// ========================================
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
app.get("/ink-table", function(req, res) {

    // load selection page
    

    // get results from submitting selection page url

    // load table.pug with those results

    res.render("table.pug", { "test": "Test Content"});


});

// Downloads
app.get("/excel-sheet", function(req, res) {
    // load excel sheet file from assets folder
});

// Requisition instructions
app.get("/requisition-instructions", function(req, res) {
    res.sendFile("requisition-instructions.html");
});

// About
app.get("/about", function(req, res) {
    res.sendFile("about.html");
});

// Help
app.get("/help", function(req, res) {
    res.sendFile("help.html");
});

// ========================================
// Start server on port 4000
// ========================================
app.listen(port, () => {
    console.log("Listening on " + port);
});