import 'dotenv/config'
import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import productRoutes from './routes/productRoutes.js'
import { notFoundMiddleware, errorHandlerMiddleware } from './middleware/errorHandlerMiddleware.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from Ecommerce App' })
})

app.use('/api/products', productRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

export default app