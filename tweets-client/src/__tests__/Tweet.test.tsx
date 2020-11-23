import React from 'react';
import { render } from '@testing-library/react';
import { TweetModel } from '../models/tweet.model';
import Tweet from '../components/Tweet';
export const tweetMock: TweetModel = {
  _id: 'test-id',
  content: 'test-content',
  date: '2019-12-31T23:00:00.000Z',
  userId: 'test-user-id',
  userName: 'test-user-name',
};

test('Tweet snapshot', () => {
  const { container } = render(<Tweet {...tweetMock} />);

  expect(container).toMatchSnapshot();
});
