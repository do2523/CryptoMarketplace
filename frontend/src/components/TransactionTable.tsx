import { useEffect, useState } from "react";

type WalletProps = {
    hash160: string,
    address: string,
    n_tx: number,
    n_unredeemed: number,
    total_received: number,
    total_sent: number,
    final_balance: number,
    txs: [{
        hash: string,
        ver: number,
        vin_sz: number,
        vout_sz: number,
        size: number,
        weight: number,
        fee: number,
        relayed_by: string,
        lock_time: number,
        tx_index: number,
        double_spend: boolean,
        time: number,
        block_index: number,
        block_eight: number,
        inputs: [],
        out: [],
        result: number,
        balance: number,
    }]
}

export default function TransactionTable({ wallet_address }: { wallet_address: string | null }) {
    const formatAmount = (value: number) => (value / 1e8).toFixed(8);

    const [data, setData] = useState({} as WalletProps);
    const [tooManyRequests, setTooManyRequests] = useState(false);
    
    useEffect(() => {
        const getTransactions = async (): Promise<WalletProps> => {
            console.log("sending");
            const response = await fetch(`http://localhost:5000/api/getTransactions?address=${wallet_address}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            console.log(response.status);

            if (response.status == 429) {
                setTooManyRequests(true);
            } else {
                setTooManyRequests(false);
            }

            return await response.json();
        };

        getTransactions().then((result) => {
            setData(result);
        });
    }, [wallet_address]);
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Transaction History for {wallet_address}</h2>
        <div className="overflow-x-auto">
        {data.txs ? 
            <table className="min-w-full dark rounded-xl shadow-md">
            <thead>
                <tr className="dark text-left text-sm font-semibold text-gray-300">
                <th className="p-3">Date</th>
                <th className="p-3">Type</th>
                <th className="p-3">Amount (BTC)</th>
                <th className="p-3">Fee (BTC)</th>
                <th className="p-3">Balance (BTC)</th>
                <th className="p-3">Transaction</th>
                </tr>
            </thead>
            <tbody>
                {data.txs.map((tx) => {
                const isSent = tx.result < 0;
                const rowStyle = isSent ? "text-red-600" : "text-green-600";
                return (
                    <tr key={tx.hash} className="border-t text-sm hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="p-3">{new Date(tx.time * 1000).toLocaleString()}</td>
                    <td className={`p-3 font-medium ${rowStyle}`}>
                        {isSent ? "Sent" : "Received"}
                    </td>
                    <td className="p-3">{formatAmount(Math.abs(tx.result))}</td>
                    <td className="p-3">{formatAmount(tx.fee)}</td>
                    <td className="p-3">{formatAmount(tx.balance)}</td>
                    <td className="p-">
                        <a
                        // href={`https://www.blockchain.com/btc/tx/${tx.hash}`}
                        // target="_blank"
                        // rel="noopener noreferrer"
                        >
                        {tx.hash.slice(0, 10)}...
                        </a>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table> : tooManyRequests ? <p className="text-lg font-bold mb-4 text-red-600 text-center">Too many requests</p> : "Loading..."
        }
        </div>
      </div>
    );
  };