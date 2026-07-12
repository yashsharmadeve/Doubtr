 import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { errorHandler } from './middleware/error.middleware'
import authRoutes from './modules/auth/auth.routes'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true
  }
})

// Middleware
app.use(helmet())
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes
app.use('/auth', authRoutes)

// Error handler — must be last
app.use(errorHandler)

const PORT = process.env.PORT || 4000
httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})