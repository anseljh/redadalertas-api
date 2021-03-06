import mongoose, { Schema } from 'mongoose';

export const raidSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  description: String,
  location: {
    type: [Number],
    required: true,
    index: '2d',
  },
  type: {
    type: String,
    required: true,
    enum: ['workplace', 'home', 'checkpoint'],
  },
  verified: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default mongoose.model('Raid', raidSchema);
