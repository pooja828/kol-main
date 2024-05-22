const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Kol = new Schema({
  author: ObjectId,
  name: { type: String },
  imageUrl: { type: String },
  followers: { type: Number },
  posts: { type: Number },
  following: { type: Number },
  industry: { type: String },
  engagement: { type: String },
  demographics: { type: String },
  tags: { type: [String] }
});

module.exports = mongoose.model('Kol', Kol);