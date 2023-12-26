import express from 'express'
import databaseService from './services/database.services'
import { config } from 'dotenv'
config()

const app = express()

const port = process.env.PORT || 4000

databaseService.sequelize

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
