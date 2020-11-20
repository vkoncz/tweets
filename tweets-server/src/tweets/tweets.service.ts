import { Tweet } from './tweets.model';

export async function getTweets(): Promise<Tweet[]> {
  return await new Promise(resolve => {
    resolve([
      {
        id: '1',
        content: 'csirip',
        date: new Date(),
        userId: '12',
        userName: 'Viktor',
      },
      {
        id: '2',
        content: 'csirip',
        date: new Date(),
        userId: '13',
        userName: 'Viktor2',
      },
    ]);
  });
}
