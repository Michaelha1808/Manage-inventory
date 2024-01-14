import { Router } from 'express'
import {
  createProductController,
  createReceiptmentAndProducts,
  deleteProductController,
  deleteReceiptmentController,
  getLocateController,
  updateProductController,
  updateReceiptmentController
} from '~/controllers/users.controller'
import { createReceipmentAndProductValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const router = Router()

/**
 * Description. Lấy vị trí và địa điểm của kho
 * Path: /inventory
 * Method: Get
 */
router.get('/inventory', wrapRequestHandler(getLocateController))
/**
 * Description. Tạo phiếu nhập kho, sẽ tạo luôn phiếu nhập kho và sản phẩm trong kho luôn
 * Path: /login
 * Method: Post
 * Body:{ delivery_person_name: string,
 * according_to:string,
 * according_number:number,
 * according_date: string,
 * according_by:string,
 * id_inventory:number,
 * organizational_unit:string,
 * organization_department: string,
 * date_receipment:string,
 * date_receipment:string,
 * number_receipment:string,
 * debt:string,
 * having:yes
 * products:[
 * {
 *  ma_sp:string,
 *  name:string,
 *  unit: string,
 *  quantity_by_doc:number,
 *  quantity_real:number,
 *  price:number,
 * total_price: number
 * }
 * ]
 *
 *     }
 */
router.post('/receiptment', createReceipmentAndProductValidator, wrapRequestHandler(createReceiptmentAndProducts))

router.post('/product', wrapRequestHandler(createProductController))

router.patch('/receiptment/:receiptmentId', wrapRequestHandler(updateReceiptmentController))

router.patch('/product/:productId', wrapRequestHandler(updateProductController))

router.delete('/receiptment/:receiptmentId', wrapRequestHandler(deleteReceiptmentController))

router.delete('/product/:productId', wrapRequestHandler(deleteProductController))

export default router
