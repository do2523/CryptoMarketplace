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

  console.log(data);

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