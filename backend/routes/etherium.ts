import  express from 'express';

const ETHERSCAN_API_URL = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=6JZJYXBXT1J3R2F2TFHCNHK2ANNT9C8A5I"
export async function getEtheriumPrice(res: express.Response) {
    const response = await fetch(ETHERSCAN_API_URL);

    if (!response.ok || response.status == 429) {
        res.status(response.status);
        return;
    }

    const data = await response.json();

    return data;

}