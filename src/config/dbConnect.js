import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const PASSW = process.env['DB_PASSW']

mongoose.connect(`mongodb+srv://admin:${PASSW}@cluster0.g61sp.mongodb.net/alura-node`)

let db = mongoose.connection

export default db