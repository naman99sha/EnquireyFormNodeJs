import express from 'express'
import config from './config/config.js'
import router from './router/router.js'

const {PORT} = config

const app = express()

app.use(express.json()) //To make the body content convert to json by default

app.use('/', router)

app.listen(3000, () => {
    console.info(`Server is running on port ${PORT}`)
})