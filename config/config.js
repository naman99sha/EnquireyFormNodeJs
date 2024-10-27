import dotenv from 'dotenv'

dotenv.config()

// We are using freeze to make the env config immutable
export default Object.freeze({
    PORT: process.env.PORT,
    // Google sheet
    GOOGLE_SHEET_CLIENT_EMAIL: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
    GOOGLE_SHEET_PRIVATE_KEY: process.env.GOOGLE_SHEET_PRIVATE_KEY,
    GOOGLE_SHEET_ID:process.env.GOOGLE_SHEET_ID
})