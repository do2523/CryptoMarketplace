import { useState, useEffect } from "react";
import {getEtheriumPrice} from "../../../backend/routes/etherium"


export default function EtheriumDisplay() {
    const [ethusd, setethusd] = useState("");

    useEffect(() => {
        const getEtherium = async(): Promise<void> => {
            const response = await fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.REACT_APP_API_KEY}`)
            const data =  await response.json();
            if (data.result && data.result.ethusd) {
                setethusd(data.result.ethusd);
            }
        }
        getEtherium()
    }, []);

    return(
        <p>{ethusd}</p>
    )
}