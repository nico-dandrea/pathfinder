const mongoose = require('mongoose')

const spellCardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  castingComponents: { type: Array, required: true },
  actions: { type: Number, required: true },
  traits: { type: Array, required: true },
  traditions: { type: Array, required: true },
  range: { type: Number, required: true },
  level: { type: Number, required: true },
  description: { type: String, required: true }
})

const SpellCard = mongoose.model('SpellCard', spellCardSchema)

module.exports = SpellCard
