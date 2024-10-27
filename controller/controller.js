import { ZodError } from 'zod';
import { enquirySchema } from '../helper/validator.js';
import { sheets } from '../service/googleSheet.js';
import config from '../config/config.js';
import dayjs from 'dayjs';

export const enquiryController = (req, res) => {
    try{
        //Body Validation using zod
        const body = enquirySchema.parse(req.body)
        const {name, email, category, message} = body

        const currentDate = dayjs().format('DD-MM-YYYY')
        //Google Sheet Entry
        sheets.spreadsheets.values.append({
            spreadsheetId: config.GOOGLE_SHEET_ID,
            range: 'Enquiry!A:E',
            insertDataOption: 'INSERT_ROWS',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[name, email, category, message, currentDate]]
            }
        }).catch((err) => {
            console.error(err.response.data.error)
        })
        //Send response
        res.status(201).json({
            success:true,
            message:"Sucess"
        })
    }
    catch (err){
        if (err instanceof ZodError) {
            return res.status(422).json({
                success:false,
                message:err.errors
            })
        }
        else{res.sendStatus(500)}
    }
}