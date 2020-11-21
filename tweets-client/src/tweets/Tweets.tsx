import React from 'react';
import { useTweetFetch } from './tweets.hook';

const Tweets: React.FC = () => {
  const { tweets, isError, isLoading } = useTweetFetch();

  return (
    <>
      {tweets.map(tweet => (
        <p key={tweet.id}>{JSON.stringify(tweet)}</p>
      ))}
    </>
  );
};

export default Tweets;
