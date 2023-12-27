import { Pool } from 'pg'
import { config } from 'dotenv'
config()

export const pool = new Pool({
  user: process.env.POSTGRES_USER as string,
  host: process.env.POSTGRES_HOST as string,
  password: process.env.POSTGRES_PASSWORD as string,
  database: process.env.POSTGRES_DB as string,
  port: process.env.POSTGRES_PORT as unknown as number
})

// import { Sequelize } from 'sequelize'
// import { config } from 'dotenv'
// import { Test } from '~/models/schemas/Test'
// config()

// class DatabaseService {
//   public sequelize?: Sequelize
//   private POSTGRES_DB = process.env.POSTGRES_DB as string
//   private POSTGRES_HOST = process.env.POSTGRES_HOST as string
//   private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number
//   private POSTGRES_USER = process.env.POSTGRES_USER as string
//   private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string
//   constructor() {
//     this.connectToPostgresSQL()
//   }
//   private async connectToPostgresSQL() {
//     this.sequelize = new Sequelize({
//       database: this.POSTGRES_DB,
//       username: this.POSTGRES_USER,
//       password: this.POSTGRES_PASSWORD,
//       host: this.POSTGRES_HOST,
//       port: this.POSTGRES_PORT,
//       dialect: 'postgres'
//     })
//     ;(this.sequelize as any).addModels([Test])

//     await this.sequelize
//       .authenticate()
//       .then(() => {
//         console.log('Connect database PostgreSQL successfully!')
//       })
//       .catch((err) => {
//         console.log('Connect database failed!')
//       })
//   }
// }

// const databaseService = new DatabaseService()
// export default databaseService
