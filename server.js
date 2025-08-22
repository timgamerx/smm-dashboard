const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());

const API_URL = "https://smm-heaven.net/api/v2";
const API_KEY = "ffcd43013a9bcba8055bbce71640b140";

app.post("/api/place-order", async (req, res) => {
  const { service, link, quantity } = req.body;
  const params = new URLSearchParams({
    key: API_KEY,
    action: "add",
    service,
    link,
    quantity,
  });

  try {
    const apiRes = await fetch(API_URL, { method: "POST", body: params });
    const json = await apiRes.json();
    res.json(json); // contains {"order": 12345}
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  ß;
});

app.listen(3000, () => console.log("Backend running on port 3000"));
