const express = require("express");
const app = express();
const port = process.env.port || 8080;

const auth = require("./routes/auth");

app.use(express.json());
app.use(express.static("public"));

app.use("/auth", auth);
app.use("/api/auctions", require("./routes/auctions.js"));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
