import React, { useState } from "react";
import TransactionTable from "./components/TransactionTable";
import { useSearchParams } from "react-router-dom";

export default function Wallet() {
    // todo: implement search
    const [searchParams, setSearchParams] = useSearchParams();

    const [address, setAddress] = useState(searchParams.get("address"));

    const [input, setInput] = useState("");

    const [seed, setSeed] = useState(1);

    const reset = () => {
        setSeed(Math.random());
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setAddress(input)
        setSearchParams({ address: input })

        reset();
    };
    
    return <>
        <h1 className="text-2xl font-bold mb-4 text-center">Bitcoin</h1>
        <br/>

        {address ? <div>
            <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mb-6 flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Bitcoin wallet address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Search
            </button>
            </form>

            <TransactionTable wallet_address={address} key={seed} />
        </div> :
        <div>
            <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mb-6 flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Bitcoin wallet address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Search
            </button>
            </form>
        </div>
        }
       
    </>
}