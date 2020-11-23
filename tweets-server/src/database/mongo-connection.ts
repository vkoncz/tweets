import { Collection, MongoClient } from 'mongodb';
import { mongoConnection } from '../params';
import { Tweet } from '../tweets/tweets.model';

export let tweetsCollection: Collection<Tweet>;

export async function connectToMongodb(): Promise<void> {
  const client = await MongoClient.connect(mongoConnection, { useUnifiedTopology: true });
  const db = client.db('tweets');

  tweetsCollection = db.collection('tweets');
}
