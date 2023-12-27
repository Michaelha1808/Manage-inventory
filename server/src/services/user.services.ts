import { pool } from '../services/database.services'
import { QueryResult } from 'pg'
import { Product } from '~/models/schemas/Products.schema'
import { Receiptment } from '~/models/schemas/Receiptment.shema'

class UserService {
  private async insertProduct(product: Product): Promise<number> {
    const sql =
      'INSERT INTO products (ma_sp, name, unit, quantity_by_doc, quantity_real, price, total_price) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    const values = [
      product.ma_sp,
      product.name,
      product.unit,
      product.quantity_by_doc,
      product.quantity_real,
      product.price,
      product.total_price
    ]
    const result = await pool.query(sql, values)
    return result.rows[0].id
  }
  async getLocation() {
    const { rows }: QueryResult = await pool.query('SELECT * FROM inventory_locationi')
    return rows
  }
  async createProducts(productsArray: Product[]): Promise<number[]> {
    const productIdsPromises = productsArray.map((product) => this.insertProduct(product))
    return Promise.all(productIdsPromises)
  }
  async createReceiptment(receiptment: Receiptment): Promise<number> {
    const sql = `INSERT INTO receiptment (delivery_person_name, according_to, according_number, according_date, according_by, id_inventory)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`
    const values = [
      receiptment.delivery_person_name,
      receiptment.according_to,
      receiptment.according_number,
      receiptment.according_date,
      receiptment.according_by,
      receiptment.id_inventory
    ]

    const result = await pool.query(sql, values)
    return result.rows[0].id // Trả về id của receiptment vừa được insert
  }
  async createTableReference() {}
}
const userService = new UserService()
export default userService
