export interface TweetModel {
  _id: string;
  date: string;
  userId: string;
  userName: string;
  content: string;
}

export type TweetPost = Omit<TweetModel, '_id' | 'date'>;
