import { Router } from 'express'
import * as recipesCtrl from '../controllers/recipes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
console.log('made it to router')
router.get('/:query', recipesCtrl.searchRecipes)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
