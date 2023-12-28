import { Request, Response, NextFunction } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'
import { ReceiptmentProductsReqBody } from '~/models/requests/User.requests'
import userService from '~/services/user.services'
import { ParamsDictionary } from 'express-serve-static-core'

export const getLocateController = async (req: Request, res: Response, next: NextFunction) => {
  const data = await userService.getLocation()
  return res.json({
    status: HTTP_STATUS.OK,
    message: USERS_MESSAGES.GET_INVENTORY_LOCATION_SUCCESS,
    data
  })
}
export const createLocateController = async (
  req: Request<ParamsDictionary, any, ReceiptmentProductsReqBody>,
  res: Response,
  next: NextFunction
) => {
  const {
    delivery_person_name,
    according_to,
    according_number,
    according_date,
    according_by,
    id_inventory,
    organizational_unit,
    organization_department,
    date_receipment,
    number_receipment,
    debt,
    having_yes
  } = req.body
  const receiptments = {
    delivery_person_name,
    according_to,
    according_number,
    according_date: new Date(according_date),
    according_by,
    id_inventory,
    organizational_unit,
    organization_department,
    date_receipment: new Date(date_receipment),
    number_receipment,
    debt,
    having_yes
  }
  console.log(number_receipment)
  const arr_id_products = await userService.createProducts(req.body.products)
  const id_receiptment = await userService.createReceiptment(receiptments)
  await userService.createTableReference(id_receiptment, arr_id_products)
  return res.json({
    message: USERS_MESSAGES.CREATE_RECEIPTMENT_PRODUCT_SUCCESS
  })
}
export const createReceiptmentAndProducts = async (req: Request, res: Response, next: NextFunction) => {}
