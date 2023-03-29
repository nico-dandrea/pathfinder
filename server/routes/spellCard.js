const express = require('express')
const router = express.Router()
const SpellCardController = require('../controllers/spellCard')

router.get('/spellCards', SpellCardController.getAll)
router.get('/spellCards/:id', SpellCardController.getById)
router.post('/spellCards', SpellCardController.create)
router.patch('/spellCards/:id', SpellCardController.update)
router.delete('/spellCards/:id', SpellCardController.destroy)

module.exports = router
