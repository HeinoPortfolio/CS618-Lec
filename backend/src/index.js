// File will run the server
import dotenv from 'dotenv'
import { app } from './app.js'
import { initDatabase } from './db/init.js'

dotenv.config()

const PORT = process.env.PORT

await initDatabase()

app.listen(PORT)

console.info(`express server running on http://localhost:${PORT}`)
