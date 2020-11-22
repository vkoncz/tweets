import { ObjectId } from 'mongodb';
import { Tweet } from '../../tweets.model';

export const tweetsMock: Tweet[] = [
  {
    _id: new ObjectId(),
    content: 'test-content',
    date: new Date(2020, 0, 1),
    userId: 'test-user-id',
    userName: 'test-user-name',
  },
  {
    _id: new ObjectId(),
    content: 'test-content-2',
    date: new Date(2021, 0, 1),
    userId: 'test-user-id-2',
    userName: 'test-user-name-2',
  },
];

export const tweetForPost: Omit<Tweet, '_id' | 'date'> = {
  content: 'post test content',
  userId: 'post test user id',
  userName: 'post test user name',
};
