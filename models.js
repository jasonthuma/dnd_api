const mongoose = require("mongoose");

const playerAndMonsterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  armor_class: {
    type: Number,
    required: true,
  },
  init_bonus: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Entry", playerAndMonsterSchema);
