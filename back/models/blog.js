const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
});

module.exports = mongoose.model('Blog', blogSchema);
