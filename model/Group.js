import mongoose from "mongoose";

const Group = new mongoose.Schema({
  name: {type: String, required: true}
})

export default mongoose.model('Group', Group)