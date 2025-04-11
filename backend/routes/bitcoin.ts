import bitcoin from 'bitcoinjs-lib';
import ECPairFactory from 'ecpair';
import * as secp256k1 from 'tiny-secp256k1';

import express from 'express';

const ECPair = ECPairFactory(secp256k1);

type SingleAddress = {
  "hash160": string,
  "address": string,
  "n_tx": number,
  "n_unredeemed": number,
  "total_received": number,
  "total_sent": number,
  "final_balance": number,
  "txs": [string]
}

// Generate BTC Wallet
export function createWallet(_req: express.Request, res: express.Response) {
  const keyPair = ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({ pubkey: Buffer.from(keyPair.publicKey) });
  const private_key = keyPair.toWIF();

  res.json({
    address,
    private_key,
  });
};

// Get BTC Balance
export async function getBalance(req: express.Request, res: express.Response) {
  const address = req.query.address;

  const url = `https://blockchain.info/rawaddr/${address}`;
  const data = (await fetch(url));

  const address_data = await data.json() as SingleAddress;

  console.log(address_data.n_tx);
  console.log(address_data.total_received);
  console.log(address_data.total_sent);

  if (data.status == 429) {
    res.statusCode = 429;
    return;
  }
  
  res.json({ balance: address_data.final_balance / 1e8 }); // Convert satoshis to BTC
};

// Get transactions (limit of 50 per page)
export async function getTransactions(req: express.Request, res: express.Response) {
  const address = req.query.address;

  const url = `https://blockchain.info/rawaddr/${address}`;
  const data = (await fetch(url));

  const address_data = await data.json();

  console.log(address_data);

  if (data.status == 429) {
    res.statusCode = 429;
    return;
  }
  
  res.json(address_data); // Convert satoshis to BTC
};

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

export async function getBitcoinPrice(_req: express.Request, res: express.Response) {
    const response = await fetch(COINGECKO_API_URL);

    if (!response.ok || response.status == 429) {
      res.status(response.status);
      return;
    }
    
    const data = await response.json() as {bitcoin: {usd: number}};

    const price = data.bitcoin.usd;

    if (typeof price !== 'number') {
      throw new Error('Invalid price data received from API');
    }

    res.json(price);
}

// Update the price every 5 seconds (adjust as needed)
// setInterval(updateBitcoinPrice, 10000);