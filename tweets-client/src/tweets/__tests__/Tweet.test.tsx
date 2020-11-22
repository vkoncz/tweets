import React from 'react';
import { render } from '@testing-library/react';
import Tweet from '../Tweet';
import { TweetModel } from '../tweet.model';

export const tweetMock: TweetModel = {
  id: 'test-id',
  content: 'test-content',
  date: new Date(2020, 0, 1),
  userId: 'test-user-id',
  userName: 'test-user-name',
};

test('Tweet snapshot', () => {
  const { container } = render(<Tweet {...tweetMock} />);

  expect(container).toMatchSnapshot();
});
