import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'clothes',
    },
  ],
});

export default model('Category', categorySchema);
