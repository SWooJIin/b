import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import Item from "./model/Item.js";
const app = express();
const PORT = 8000;
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

const username = encodeURIComponent("sonwoojin");
const password = encodeURIComponent("l2oCE3C8GKj12073");

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.rhtdam3.mongodb.net/`
  )
  .then(() => {
    console.log("DBconnected");
  })
  .catch((e) => {
    console.error(e);
  });

router.get("/", async (req, res) => {
  try {
    const list = await Item.find();
    res.json(list);
    console.log(list);

    res.send("hi");
  } catch (error) {}
});

router.get("/:id/", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findById(id);
    res.json(item);
  } catch (error) {
    res.json("not available")
  }
});

router.post("/", async (req, res) => {
  const newItem = new Item(req.body);
  const saved = await newItem.save();
  res.status(201).json(saved);
});

router.put("/:id/", async (req, res) => {
  const id = req.params.id;
  const updatedData = await Item.findByIdAndUpdate(id, req.body);
  res.json(updatedData);
});

router.delete("/:id/", async (req, res) => {
  const id = req.params.id;
  await Item.findByIdAndDelete(id);
  res.json(201).json();
});

app.use("/", router);

app.listen(PORT, () => {
  console.log("app listening port 8000");
});
