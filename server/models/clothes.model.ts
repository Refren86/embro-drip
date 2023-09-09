import { Schema, model } from 'mongoose';

const clothesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    // New, Discount, Recommended
    type: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    color: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    priceWithDiscount: {
      type: Number,
      required: false,
    },
    category: [{
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    }],
    images: [String],
  },
  {
    timestamps: true,
  }
);

export default model("Clothes", clothesSchema);
