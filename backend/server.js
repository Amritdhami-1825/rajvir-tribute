const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb://localhost:27017/rajvirdb";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const infoSchema = new mongoose.Schema({
  section: String,
  content: String,
});

const Info = mongoose.model("Info", infoSchema);

app.get("/api/info", async (req, res) => {
  const data = await Info.find();
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
