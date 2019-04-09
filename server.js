const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
module.exports = app;

app.use("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "/myPersonalWebsite/public/index.html")
  );
});

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
