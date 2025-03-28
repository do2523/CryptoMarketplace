import bitcoin from 'bitcoinjs-lib';
import ECPairFactory from 'ecpair';
import * as secp256k1 from 'tiny-secp256k1';
import axios from 'axios';

import express from 'express';

const ECPair = ECPairFactory(secp256k1);

// Generate BTC Wallet
export function createWallet(_req: express.Request, res: express.Response) {
  const keyPair = ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({ pubkey: Buffer.from(keyPair.publicKey) });
  const privateKey = keyPair.toWIF();

  res.json({
    address,
    privateKey,
  });
};

// Get BTC Balance
export async function getBalance(req: express.Request, res: express.Response) {
  const address = req.query.address;

  const url = `https://blockchain.info/q/addressbalance/${address}`;
  const { data } = await axios.get(url);
  res.json({ balance: data / 1e8 }); // Convert satoshis to BTC
};