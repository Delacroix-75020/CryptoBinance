
import { NextRequest } from 'next/server'
import { MONGO_DB_URI } from '@/lib/const'
import { MongoClient } from 'mongodb'

export async function GET(request:NextRequest) {
    const uri = MONGO_DB_URI as string
    const client = new MongoClient(uri)

    try {
        await client.connect();
        const database = client.db('admin')
        const collection = database.collection('binance_batch_top_20_asc')

        const binanceData = await collection.find({}).toArray()

        return new Response(
            JSON.stringify({ success: true, data: binanceData }),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
        } 
    catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ success: false, message: "Erreur lors de la récupération des données" }),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
        }
}