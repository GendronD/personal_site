// index.js

/**
 * Required External Modules
 */

 const express = require("express");
 const path = require("path");

 /**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 * Routes Definitions
 */

 app.get("/", (req, res) => {
    // res.render("index", { title: "Home" });
    res.sendFile('index.html', {root : __dirname});
  });

  /**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

  /**
 *  App Configuration
 */

app.set("views", __dirname);
app.set("view engine", "html");