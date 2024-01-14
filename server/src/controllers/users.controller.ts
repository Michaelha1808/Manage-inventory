import { Request, Response, NextFunction } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'
import { ProductReqBody, ReceiptmentProductsReqBody } from '~/models/requests/User.requests'
import userService from '~/services/user.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { StatusCode } from '~/constants/enums'

export const getLocateController = async (req: Request, res: Response, next: NextFunction) => {
  const data = await userService.getLocation()
  return res.json({
    status: StatusCode.Success,
    message: USERS_MESSAGES.GET_INVENTORY_LOCATION_SUCCESS,
    data
  })
}

export const createReceiptmentAndProducts = async (
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
  const arr_id_products = await userService.createProducts(req.body.products)
  const id_receiptment = await userService.createReceiptment(receiptments)
  await userService.createTableReference(id_receiptment, arr_id_products)
  return res.json({
    status: StatusCode.Success,
    message: USERS_MESSAGES.CREATE_RECEIPTMENT_PRODUCT_SUCCESS
  })
}
export const createProductController = async (
  req: Request<ParamsDictionary, any, ProductReqBody>,
  res: Response,
  next: NextFunction
) => {
  const product = req.body.products
  await userService.createProducts(product)
  return res.json({
    status: StatusCode.Success,
    message: USERS_MESSAGES.CREATE_PRODUCT_SUCCESS
  })
}

export const updateProductController = async (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.productId
  const productupdate = req.body
  await userService.updateProduct(Number(productId), productupdate)
  return res.json({
    status: StatusCode.Success,
    message: USERS_MESSAGES.UPDATE_PRODUCT_SUCCESS
  })
}
export const updateReceiptmentController = async (req: Request, res: Response, next: NextFunction) => {
  const receiptmentId = req.params.receiptmentId
  const receiptmentIdUpdate = req.body
  await userService.updateReceiptment(Number(receiptmentId), receiptmentIdUpdate)
  return res.json({
    status: StatusCode.Success,
    message: USERS_MESSAGES.UPDATE_RECEIPTMENT_SUCCESS
  })
}

export const deleteProductController = async (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.productId
  await userService.deleteProduct(Number(productId))
  return res.json({
    status: StatusCode.Success,
    message: USERS_MESSAGES.DELETE_PRODUCT_SUCCESS
  })
}

export const deleteReceiptmentController = async (req: Request, res: Response, next: NextFunction) => {
  const receiptmentId = req.params.receiptmentId
  await userService.deleteReceiptment(Number(receiptmentId))
  return res.json({
    status: StatusCode.Success,
    message: USERS_MESSAGES.DELETE_RECEIPTMENT_SUCCESS
  })
}

export const createLocateController = async (
  req: Request<ParamsDictionary, any, ReceiptmentProductsReqBody>,
  res: Response,
  next: NextFunction
) => {}
