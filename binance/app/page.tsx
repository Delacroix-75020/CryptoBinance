'use client';

import { useEffect, useState } from 'react';
import CryptoTrade from '@/components/CryptoTrade';

export default function CryptoPage() {
  const [ws, setWs] = useState<WebSocket | null>(null);

    // Créer la connexion WebSocket
    const websocket = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

    // Définir comment gérer les messages entrants
    websocket.onmessage = (event) => {
      const sotckObject = JSON.parse(event.data);
      // Stocker l'objet WebSocket dans l'état
      setWs(sotckObject.p);
    };

  return (
    <div>
      <CryptoTrade data={ws}/>
    </div>
  );
}
