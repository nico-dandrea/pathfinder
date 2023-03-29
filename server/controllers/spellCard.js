/* eslint-disable space-before-function-paren */
const SpellCard = require('../models/spellCard')

module.exports = {
  // Retrieves a collection of all spell cards
  async getAll(req, res, next) {
    await SpellCard.find()
      .then((spellCards) => res.status(200).json(spellCards.data))
      .catch((err) => next(err))
  },

  // Retrieves a single spell card
  async getById(req, res, next) {
    await SpellCard.findById(req.params.id)
      .then((spellCards) => res.status(200).json(spellCards))
      .catch((err) => next(err))
  },

  // Create a new spell card
  async create(req, res, next) {
    const spellCard = new SpellCard(req.body)
    await spellCard.save()
      .then((spellCard) => res.status(200).json(spellCard.id))
      .catch((err) => next(err))
  },

  // Updates an existing spell card
  async update(req, res, next) {
    await SpellCard.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: false })
      .then((spellCard) => res.status(200).json(spellCard.id))
      .catch((err) => next(err))
  },

  async destroy(req, res, next) {
    await SpellCard.findByIdAndDelete(req.params.id)
      .then((spellCard) => res.status(204).end())
      .catch((err) => next(err))
  }
}
