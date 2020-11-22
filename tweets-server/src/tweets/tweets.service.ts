import { tweetsCollection } from '../database/mongo-connection';
import { Tweet } from './tweets.model';

export function getTweets(): Promise<Tweet[]> {
  return tweetsCollection.find().toArray();
}

export async function addTweet(tweet: Tweet): Promise<Tweet> {
  tweet.date = new Date();
  const response = await tweetsCollection.insertOne(tweet);

  return response.ops[0];
}
