import React from 'react';
import Tweet from './Tweet';
import { useTweetFetch } from './tweets.hook';
import { TweetsContainer } from './Tweets.styles';

const Tweets: React.FC = () => {
  const { tweets, isError, isLoading } = useTweetFetch();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred, please try it later</p>;

  return (
    <TweetsContainer>
      {tweets.map(tweet => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </TweetsContainer>
  );
};

export default Tweets;
