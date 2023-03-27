import { Router } from 'express'
import './controllers/spellCard'
const SpellCardController = require('./controllers/spellCard')
const router = Router()

router.get('/spellCards', SpellCardController.getAll)
router.get('/spellCards/:id', SpellCardController.getById)
router.post('/spellCards', SpellCardController.create)
router.get('/spellCards/:id', SpellCardController.update)
router.get('/spellCards/:id', SpellCardController.delete)

export default router
