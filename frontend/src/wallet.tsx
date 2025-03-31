import { useEffect, useState } from "react";

type Wallet = {
    address: string,
    private_key: string,
}

export default function Wallet() {
    const [wallet, setWallet] = useState({
        address: "",
        private_key: ""
    });

    const [balance, setBalance] = useState({
        balance: 0,
    });

    const [btcPrice, setBtcPrice] = useState("");

    useEffect(() => {
        const getWallet = async (): Promise<Wallet> => {
            
            // GET request using fetch inside useEffect React hook
            const response = await fetch('http://localhost:5000/api/wallet', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            return await response.json();
        };

        getWallet().then((result) => {
            // result.address = "bc1qk3hl2y0vel5way62v7827hxfvl5hc9w7g5ldpw";
            setWallet(result);
        });
    }, []);

    useEffect(() => {
        if (wallet.address == "") {
            return;
        }
        
        const getBalance = async(): Promise<{balance: number}> => {
            const response = await fetch(`http://localhost:5000/api/getBalance?address=${wallet.address}`);

            return await response.json();
        }

        getBalance().then((result) => {
            setBalance(result);
        });
    }, [wallet.address]);

    useEffect(() => {
        const getPrice = async(): Promise<number> => {
            const response = await fetch(`http://localhost:5000/api/getBtcPrice`);

            return await response.json();
        }
        const updateBitcoinPrice = () => {
            getPrice().then((result) => {
                setBtcPrice(result.toString());
            });
        }

        updateBitcoinPrice();

        setInterval(updateBitcoinPrice, 10000);
    });
    
    return <>
        <h1>Bitcoin</h1>
        <br/>
        <a>Wallet address: {wallet.address}</a>
        <br/>
        <a>Balance: {balance.balance} BTC</a>
        <br/>
        <a>Current bitcoin price: {btcPrice} USD</a>
    </>
}