import express from 'express'
import config from './config/config.js'
import router from './router/router.js'
import cors from 'cors'

const {PORT} = config

const app = express()

app.use(cors())

app.use(express.json()) //To make the body content convert to json by default

app.use('/', router)

app.listen(3000, () => {
    console.info(`Server is running on port ${PORT}`)
})