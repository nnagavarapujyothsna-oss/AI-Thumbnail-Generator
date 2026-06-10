const mongoose = require("mongoose");

const thumbnailSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    title: String,

    imageUrl: String,

    prompt: String,

    mode: String,

    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Thumbnail", thumbnailSchema);