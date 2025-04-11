import { useEffect, useState } from "react";
import TransactionTable from "./components/TransactionTable";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Wallet() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // todo: implement search
    const [searchParams, setSearchParams] = useSearchParams();

    const [address, setAddress] = useState(queryParams.get('address'));

    console.log(address);

    const [btcPrice, setBtcPrice] = useState("");

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
        <a>Wallet address: {address}</a>
        <br/>
        <a>Current bitcoin price: {btcPrice} USD</a>
        <TransactionTable wallet_address={address} />
    </>
}