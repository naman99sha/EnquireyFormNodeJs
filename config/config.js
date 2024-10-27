import dotenv from 'dotenv'

dotenv.config()

// We are using freeze to make the env config immutable
export default Object.freeze({
    PORT: process.env.PORT
})