import express from 'express'
import cors from 'cors'
import clientRoutes from './routes/client.js'

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/clients', clientRoutes)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${5000}!`)
})