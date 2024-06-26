'use client';

import { FC } from 'react';
import {
  flexRender,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
    // Filtrer les cryptos avec 'USDT' et ajouter des champs supplémentaires
    const cryptos = data.data
      .filter(crypto => crypto._c18.includes('USDT'))
      .map(crypto => {
        const parts = crypto._c18.split('USDT');
        return {
          ...crypto,
          symbol: parts[0], // L'élément 0 du split devient 'symbol'
          stablecoin: 'USDT' // L'élément 1 est toujours 'USDT' dans ce cas
        };
      });
    
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]"></TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Donnée supplémentaire</TableHead>
                    <TableHead className="text-right">LastPrice</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cryptos.map((crypto, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <img src={`https://cdn.jsdelivr.net/gh/vadimmalykhin/binance-icons/crypto/${crypto.symbol.toLowerCase()}.svg`} alt={crypto.symbol} />
                        </TableCell>
                        <TableCell className="font-medium">{crypto.symbol}/{crypto.stablecoin}</TableCell>
                        <TableCell>{crypto._c17}</TableCell>
                        <TableCell className="text-right">{crypto._c9.toFixed(3)}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default CryptoTrade;
