import { Sequelize } from 'sequelize'
import { config } from 'dotenv'
config()

class DatabaseService {
  public sequelize?: Sequelize
  private POSTGRES_DB = process.env.POSTGRES_DB as string
  private POSTGRES_HOST = process.env.POSTGRES_HOST as string
  private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number
  private POSTGRES_USER = process.env.POSTGRES_USER as string
  private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string
  constructor() {
    this.connectToPostgresSQL()
  }
  private async connectToPostgresSQL() {
    this.sequelize = new Sequelize({
      database: this.POSTGRES_DB,
      username: this.POSTGRES_USER,
      password: this.POSTGRES_PASSWORD,
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,
      dialect: 'postgres'
    })
    await this.sequelize
      .authenticate()
      .then(() => {
        console.log('Connect database PostgreSQL successfully!')
      })
      .catch((err) => {
        console.log('Connect database failed!')
      })
  }
}

const databaseService = new DatabaseService()
export default databaseService
