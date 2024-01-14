import { Product } from '../schemas/Products.schema'
import { ParamsDictionary } from 'express-serve-static-core'

export interface ReceiptmentProductsReqBody {
  delivery_person_name: string
  according_to: string
  according_number: number
  according_date: string
  according_by: string
  id_inventory: number
  organizational_unit: string
  organization_department: string
  date_receipment: string
  number_receipment: number
  debt: string
  having_yes: string
  products: Product[]
}
export interface ProductReqBody {
  products: Product[]
}
