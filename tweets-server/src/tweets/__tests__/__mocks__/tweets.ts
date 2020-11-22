import { Tweet } from '../../tweets.model';

export const tweetsMock: Tweet[] = [
  {
    id: 'test-id',
    content: 'test-content',
    date: new Date(2020, 0, 1),
    userId: 'test-user-id',
    userName: 'test-user-name',
  },
  {
    id: 'test-id-2',
    content: 'test-content-2',
    date: new Date(2021, 0, 1),
    userId: 'test-user-id-2',
    userName: 'test-user-name-2',
  },
];
