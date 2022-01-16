import { MongoClient } from 'mongodb'

const openDB = async () => {
  const client = new MongoClient(process.env.MONGO_URI)

  await client.connect()

  return client.db('tiktokclone')
}

export default openDB
