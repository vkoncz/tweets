import { addTweet } from '../tweets.service';
import { tweetForPost } from './__mocks__/tweets';

jest.mock('../../database/mongo-connection', () => ({
  tweetsCollection: {
    insertOne: (value: unknown) => ({ ops: [value] }),
  },
}));

test('addTweet should define date', async () => {
  const res = await addTweet(tweetForPost);

  expect(res.date instanceof Date);
});
