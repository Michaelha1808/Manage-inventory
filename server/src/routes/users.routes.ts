import { Router } from 'express'
import { createReceiptmentAndProducts, getLocateController } from '~/controllers/users.controller'
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
router.post('/receiptment', wrapRequestHandler(createReceiptmentAndProducts))
export default router
