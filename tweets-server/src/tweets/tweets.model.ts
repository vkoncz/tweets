import { ObjectId } from 'mongodb';

export interface Tweet {
  _id?: ObjectId;
  date?: Date;
  userName: string;
  userId: string;
  content: string;
}
