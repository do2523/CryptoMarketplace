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

    useEffect(() => {
        const getWallet = async (): Promise<Wallet> => {
            
            // GET request using fetch inside useEffect React hook
            const response = await fetch('http://localhost:5000/api/wallet', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            });

            return await response.json();
        };

        getWallet().then((result) => {
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
    
    return <>
        <h1>Bitcoin</h1>
        <br/>
        <a>Wallet address: {wallet.address}</a>
        <br/>
        <a>Balance: {balance.balance}</a>
    </>
}