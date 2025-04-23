import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema(
  {
    title: String,
    text: String,
  },
  { autoCreate: false, autoIndex: true }
);

const Item = mongoose.model("Item", itemSchema);
;
export default Item;
