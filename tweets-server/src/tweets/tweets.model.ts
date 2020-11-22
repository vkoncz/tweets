import { ObjectId } from 'mongodb';

export interface Tweet {
  _id?: ObjectId;
  date: string;
  userId: string;
  userName: string;
  content: string;
}

export type TweetDto = Omit<Tweet, '_id'> & {
  id?: string;
};
