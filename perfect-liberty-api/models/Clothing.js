const mongoose = require('mongoose');

const ClothingSchema = new mongoose.Schema({
  descricao: String,
  tipo: String,
  tamanho: String,
  quantidade: Number
});

module.exports = mongoose.model('Clothing', ClothingSchema);
