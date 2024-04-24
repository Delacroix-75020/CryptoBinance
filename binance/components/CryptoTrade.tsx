'use client';

import { FC } from 'react';

interface CryptoData {
    _c18: string,  // Le symbole de la cryptomonnaie
    _c9: number,   // Supposons que ce soit le prix actuel
    _c17: number,  // Une autre donnée pertinente, peut-être un volume ou une variation de prix
}

interface Props {
        data: {
            data: CryptoData[];
        };
}

const CryptoTrade: FC<Props> = ({ data }) => {
    const cryptos = data.data;
    console.log(cryptos);  // Utile pour le débogage
    
    return (
        <div>
            {cryptos.map((crypto, index) => (
                <div key={index} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <img src={`https://cdn.jsdelivr.net/gh/vadimmalykhin/binance-icons/crypto/${crypto._c18}.svg`} alt={crypto._c18} />
                    <h1>{crypto._c18}</h1>
                    <p>Prix: ${crypto._c9.toFixed(2)}</p> {/* Afficher le prix avec deux décimales */}
                    <p>Donnée supplémentaire: {crypto._c17}</p>
                </div>
            ))}
        </div>
    );
};

export default CryptoTrade;
