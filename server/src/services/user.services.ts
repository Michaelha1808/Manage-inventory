import { InventoryLocation } from '~/models/schemas/InventoryLocation.schema'
import { pool } from '../services/database.services'
import { QueryResult } from 'pg'
import { Product } from '~/models/schemas/Products.schema'
import { Receiptment } from '~/models/schemas/Receiptment.shema'
import { ReceiptmentProduct } from '~/models/schemas/ReceiptmentProduct .schema'

class UserService {
  private async insertProduct(product: Product): Promise<number> {
    const sql = `INSERT INTO products (ma_sp, name, unit, quantity_by_doc, quantity_real, price, total_price) 
                 VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
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
    const { rows }: QueryResult<InventoryLocation> = await pool.query('SELECT * FROM inventory_locationi')

    const grouped = rows.reduce(
      (acc, item) => {
        if (!acc[item.name]) {
          acc[item.name] = []
        }
        acc[item.name].push(item)
        return acc
      },
      {} as Record<string, InventoryLocation[]>
    )

    // Chuyển đổi đối tượng thành mảng
    const groupedArray = Object.keys(grouped).map((name) => ({
      name,
      locations: grouped[name]
    }))

    return groupedArray
  }
  async createProducts(productsArray: Product[]): Promise<number[]> {
    const productIdsPromises = productsArray.map((product) => this.insertProduct(product))
    return Promise.all(productIdsPromises)
  }
  async createReceiptment(receiptment: Receiptment): Promise<number> {
    const sql = `INSERT INTO receiptment (delivery_person_name, according_to, according_number, according_date, according_by, id_inventory,organizational_unit,organization_department,date_receipment,number_receipment,debt,having_yes)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id`
    const values = [
      receiptment.delivery_person_name,
      receiptment.according_to,
      receiptment.according_number,
      receiptment.according_date,
      receiptment.according_by,
      receiptment.id_inventory,
      receiptment.organizational_unit,
      receiptment.organization_department,
      receiptment.date_receipment,
      receiptment.number_receipment,
      receiptment.debt,
      receiptment.having_yes
    ]

    const result = await pool.query(sql, values)
    return result.rows[0].id // Trả về id của receiptment vừa được insert
  }
  async createTableReference(receiptmentId: number, productIds: number[]): Promise<void> {
    const sql = `INSERT INTO receiptment_products (receiptment_id, product_id) VALUES ($1, $2)`
    const insertPromises = productIds.map((productId) => {
      const values = [receiptmentId, productId]
      return pool.query(sql, values)
    })
    await Promise.all(insertPromises)
  }
  async updateProduct(productId: number, product: Partial<Product>): Promise<void> {
    const updateFields: string[] = []
    const updateValues: any[] = []
    for (const [field, value] of Object.entries(product)) {
      updateFields.push(`${field} = $${updateValues.length + 1}`)
      updateValues.push(value)
    }
    updateValues.push(productId)
    const updateQuery = `UPDATE products SET ${updateFields.join(', ')} WHERE id = $${updateValues.length}`
    await pool.query(updateQuery, updateValues)
  }
  async updateReceiptment(receiptmentId: number, receiptment: Partial<Receiptment>): Promise<void> {
    const updateFields: string[] = []
    const updateValues: any[] = []
    for (const [field, value] of Object.entries(receiptment)) {
      updateFields.push(`${field} = $${updateValues.length + 1}`)
      updateValues.push(value)
    }
    updateValues.push(receiptmentId)
    const updateQuery = `UPDATE receiptment SET ${updateFields.join(', ')} WHERE id = $${updateValues.length}`
    await pool.query(updateQuery, updateValues)
  }
  async deleteProduct(productId: number): Promise<void> {
    const deleteProductQuery = 'DELETE FROM products WHERE id = $1 RETURNING id'
    const deleteReceiptmentProductsQuery = 'DELETE FROM receiptment_products WHERE product_id = $1'

    await Promise.all([
      pool.query(deleteProductQuery, [productId]),
      pool.query(deleteReceiptmentProductsQuery, [productId])
    ])
  }
  async deleteReceiptment(receiptmentId: number): Promise<void> {
    const deleteReceiptmentQuery = 'DELETE FROM receiptment WHERE id = $1'
    const deleteReceiptmentProductsQuery = 'DELETE FROM receiptment_products WHERE product_id = $1'

    await Promise.all([
      pool.query(deleteReceiptmentQuery, [receiptmentId]),
      pool.query(deleteReceiptmentProductsQuery, [receiptmentId])
    ])
  }
}
const userService = new UserService()
export default userService
