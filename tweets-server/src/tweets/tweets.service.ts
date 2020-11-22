import { tweetsCollection } from '../database/mongo-connection';
import { Tweet } from './tweets.model';

export function getTweets(): Promise<Tweet[]> {
  return tweetsCollection.find().toArray();
}
