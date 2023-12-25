import {z} from 'zod'

const userSchemaValidation = z.object({
    fullName:z.string({required_error:'Full Name is required'}),
    email:z.string({required_error:'Email is required'})
})