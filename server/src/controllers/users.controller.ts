import { Request, Response, NextFunction } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'
import userService from '~/services/user.services'

export const getLocateController = async (req: Request, res: Response, next: NextFunction) => {
  const data = await userService.getLocation()
  return res.json({
    status: HTTP_STATUS.OK,
    message: USERS_MESSAGES.GET_INVENTORY_LOCATION_SUCCESS,
    data
  })
}
export const createLocateController = async (req: Request, res: Response, next: NextFunction) => {
  // const data = await userService.getLocation()
  // return res.json({
  //   status: HTTP_STATUS.OK,
  //   message: USERS_MESSAGES.GET_INVENTORY_LOCATION_SUCCESS,
  //   data
  // })
}
export const createReceiptmentAndProducts = async (req: Request, res: Response, next: NextFunction) => {}
