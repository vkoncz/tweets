import { tweetsCollection } from '../database/mongo-connection';
import { Tweet, TweetDto } from './tweets.model';

export function getTweets(): Promise<Tweet[]> {
  return tweetsCollection.find().toArray();
}

export async function addTweet(tweet: TweetDto): Promise<Tweet> {
  const response = await tweetsCollection.insertOne(tweet);

  return response.ops[0];
}
