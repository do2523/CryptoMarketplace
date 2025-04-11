import { useState, useEffect } from "react";
import {getEtheriumPrice} from "../../../backend/routes/etherium"


export default function EtheriumDisplay() {
    const [ethusd, setethusd] = useState("");

    useEffect(() => {
        const getEtherium = async(): Promise<void> => {
            const response = await fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=6JZJYXBXT1J3R2F2TFHCNHK2ANNT9C8A5I`)
            const data =  await response.json();
            if (data.result && data.result.ethusd) {
                setethusd(data.result.ethusd);
            }
        }
        getEtherium()
    }, []);

    return(
        <p>Etherium Price: {ethusd}</p>
    )
}