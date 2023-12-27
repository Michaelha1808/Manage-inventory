import { Router } from 'express'
import { getLocateController } from '~/controllers/users.controller'
import { wrapRequestHandler } from '~/utils/handlers'
const router = Router()
router.get('/inventory', wrapRequestHandler(getLocateController))
export default router
