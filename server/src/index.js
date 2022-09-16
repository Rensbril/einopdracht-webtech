import express, { json } from "express";
const app = express();
const port = process.env.port || 8080;

import auth from "./routes/auth.js";

app.use(json());
app.use("/auth", auth);

app.get("/", (req, res) => {
  console.log(req);
  // res.send('Hello World!')
  res.json({ msg: "hello world" });
  ``;
});

app.use("/api/products", import("./routes/products.js").default);
app.use("api/auctions", import("./routes/auctions.js").default);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
