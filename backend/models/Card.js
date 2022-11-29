const mongoose = require('mongoose');

const Card = mongoose.model('Card', {
  flag: String,
  titulo: String,
  projeto: String,
  previsaoDeTermino: String,
  descricao:String,
  codigo:String,
  equipe: String
})

module.exports = Card