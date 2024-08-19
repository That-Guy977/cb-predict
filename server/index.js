import express from "express";

const port = 3000;

const data = {
  BK: 251,
  CM: 1154,
  KKN: null,
  NMA: 726,
  PLK: 1406,
  PKN: 864,
  SK: 1429,
  UB: 756,
};

const app = express();
app.use(express.json({ type: "*/*" }));
app.use("/assets", express.static("./assets"))
app.use(express.static("./dashboard"))

app.get("/cape", (req, res) => {
  res.json(data);
});
app.put("/cape", (req, res) => {
  for (const id in data) {
    data[id] = req.body[id];
  }
  res.sendStatus(204);
});

app.listen(port, () => console.log("App listening on port 3000"));
