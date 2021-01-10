const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    description: String,
    address: {
      country: {
        required: true,
        type: String,
      },
      region: {
        required: true,
        type: String,
      },
      city: {
        required: true,
        type: String,
      },
      road: {
        required: true,
        type: String,
      },
    },
    facilities: {
      parking: {
        required: true,
        type: Boolean,
      },
      breakfast: {
        required: true,
        type: Boolean,
      },
      pet: {
        required: true,
        type: Boolean,
      },
      wifi: {
        required: true,
        type: Boolean,
      },
      restaurant: {
        required: true,
        type: Boolean,
      },
      gym: {
        required: true,
        type: Boolean,
      },
      pool: {
        required: true,
        type: Boolean,
      },
      bar: {
        required: true,
        type: Boolean,
      },
    },
    room: {
      required: true,
      type: Number,
    },
    price: {
      required: true,
      type: Number,
    },
    imageUrl: {
      required: true,
      type: [String],
    },
    userId: {
      ref: "User",
      type: mongoose.Types.ObjectId,
    },
    // comments: [
    //   {
    //     ref: "User",
    //     type: mongoose.Types.ObjectId,
    //   },
    // ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

PostSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
});

module.exports = mongoose.model("Post", PostSchema);
