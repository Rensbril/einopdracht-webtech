const express = require("express");
const app = express();
const port = process.env.port || 8080;

const auth = require("./routes/auth");

app.use(express.json());
app.use("/auth", auth);

app.get("/", (req, res) => {
  console.log(req);
  // res.send('Hello World!')
  res.json({ msg: "hello world" });
  ``;
});

app.use("/api/products", require("./routes/products.js"));
app.use("api/auctions", require("./routes/auctions.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
