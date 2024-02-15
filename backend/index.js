import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'

/* CONFIGURATION */
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/client', clientRoutes)
app.use('/general', generalRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)

// CONNECT TO SERVER AND MONGODB
app.listen(process.env.PORT, () => {
    console.log('Server is running')
})
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Successfully connected to database')
}).catch((err) => {
    console.log(err)
})
