import express from 'express'
import cors from 'cors'
import { createWallet, getBalance } from "./routes/bitcoin.ts"
import coinRoutes from './routes/coinRoutes.ts'
import 'dotenv/config';

const app = express();
app.use(cors())

app.use(express.json())

app.post('/api/wallet', createWallet);
app.get("/api/getBalance", getBalance);
app.use('/api/coins', coinRoutes);
app.use('/api/coins/Bitcoin', coinRoutes)


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${5000}!`)
})

