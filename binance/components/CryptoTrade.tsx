'use client';

import { FC, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface CryptoData {
    symbol: string,
    lastPrice: number,
    quoteVolume: number,
    prevClosePrice: number,
}

interface Props {
    data: {
        data: CryptoData[];
    };
}

const CryptoTrade: FC<Props> = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const cryptos = data.data
      .filter(crypto => crypto.symbol.includes(searchTerm.toUpperCase()) && crypto.symbol.includes('USDT'))
      .map(crypto => {
        const parts = crypto.symbol.split('USDT');
        return {
          ...crypto,
          symbol: parts[0],
          stablecoin: 'USDT'
        };
      });

    return (
        <div>
            <nav className="flex items-center justify-between bg-gray-800 p-4">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight ml-2">Crypto Trade</span>
                </div>
                <div className="flex">
                    <input
                        className="mr-2 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Rechercher par symbole..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Rechercher
                    </button>
                </div>
            </nav>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]"></TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Transactions totales</TableHead>
                        <TableHead>Variations</TableHead>
                        <TableHead className="text-right">LastPrice</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cryptos.map((crypto, index) => {
                        const variation = ((crypto.prevClosePrice - crypto.lastPrice) / crypto.prevClosePrice) * 100;
                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    <img src={`https://cdn.jsdelivr.net/gh/vadimmalykhin/binance-icons/crypto/${crypto.symbol.toLowerCase()}.svg`} alt={crypto.symbol} />
                                </TableCell>
                                <TableCell className="font-medium">{crypto.symbol}/{crypto.stablecoin}</TableCell>
                                <TableCell>{crypto.quoteVolume}</TableCell>
                                <TableCell className={`font-bold ${variation > 0 ? 'text-green-400' : 'text-red-400'}`}>{variation > 0 ? '+' : ''}{variation.toFixed(2)}%</TableCell>
                                <TableCell className="text-right">{crypto.lastPrice.toFixed(6)} $</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default CryptoTrade;
