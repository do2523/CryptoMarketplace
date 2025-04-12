import express from 'express'
import cors from 'cors'
import { createWallet, getBalance, getBitcoinPrice, getTransactions } from "./routes/bitcoin.ts"

const app = express();

app.use(cors())
app.use(express.json())

app.post('/api/wallet', createWallet);
app.get("/api/getBalance", getBalance);
app.get("/api/getBtcPrice", getBitcoinPrice);
//app.get("/api/getTransactions", getTransactions);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}!`)
})