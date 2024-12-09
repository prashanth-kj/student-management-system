import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import approutes from './src/routes/index.js'
dotenv.config()

const PORT=process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use('/',approutes)

app.listen(PORT,()=>console.log(`app is lisening port ${PORT}`))

