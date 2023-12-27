import express from 'express'
import usersRouter from './routes/users.routes'
import morgan from 'morgan'

// import databaseService from './services/database.services'
import { config } from 'dotenv'
import { defaultErrorHandler } from './middlewares/error.middewares'
config()

const app = express()

const port = process.env.PORT || 4000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/users', usersRouter)

app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
