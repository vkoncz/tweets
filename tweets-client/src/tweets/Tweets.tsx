import React from 'react';
import Tweet from './Tweet';
import { useTweetFetch } from './tweets.hook';
import { TweetsContainer } from './Tweets.styles';

const Tweets: React.FC = () => {
  const { tweets, isError, isLoading } = useTweetFetch();

  return (
    <TweetsContainer>
      {tweets.map(tweet => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </TweetsContainer>
  );
};

export default Tweets;
