import {z} from 'zod'

export const enquirySchema = z.object({
    name: z.string().min(2).max(60),
    email: z.string().email(),
    category: z.enum(['Service Request', 'Feedback', 'Complaint']),
    message: z.string().min(3).max(200)
})
.required()