
import { cache, useState } from 'react';
import CryptoTrade from '@/components/CryptoTrade';

export default async function CryptoPage() {
  // const [ws, setWs] = useState<WebSocket | null>(null);

  //   // Créer la connexion WebSocket
  //   const websocket = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

  //   // Définir comment gérer les messages entrants
  //   websocket.onmessage = (event) => {
  //     const sotckObject = JSON.parse(event.data);
  //     // Stocker l'objet WebSocket dans l'état
  //     setWs(sotckObject.p);
  //   };

    const response = await fetch('http://localhost:3000/api/getcrypto', { cache: 'no-cache' });
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    console.log(data)
    

  return (
    <div></div>
  );
}
