import express from "express";

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
app.get("/cape", (req, res) => {
  res.json(data);
});

app.listen("3000");
