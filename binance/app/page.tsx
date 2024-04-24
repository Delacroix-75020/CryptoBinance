
import { cache, useState } from 'react';
import CryptoTrade from '@/components/CryptoTrade';
import { BASE_API_URL } from '@/lib/const';

  // const [ws, setWs] = useState<WebSocket | null>(null);
export default async function CryptoPage () {

  //   // Créer la connexion WebSocket
  //   const websocket = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

  //   // Définir comment gérer les messages entrants
  //   websocket.onmessage = (event) => {
  //     const sotckObject = JSON.parse(event.data);
  //     // Stocker l'objet WebSocket dans l'état
  //     setWs(sotckObject.p);
  //   };

    const response = await fetch(`${BASE_API_URL}/api/getcrypto`, { cache: 'no-cache' });
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    console.log(data)
    

  return (
    <div></div>
  );
}
