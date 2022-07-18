import mongoose from "mongoose";

const Group = new mongoose.Schema({
  title: { type: String, required: true },
  tasks: { type: Array, default: [] },
});

export default mongoose.model("Group", Group);
