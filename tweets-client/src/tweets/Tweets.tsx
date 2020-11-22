import React from 'react';
import Tweet from './Tweet';
import { getTweets, useHttpCall } from './tweets.hook';
import { TweetsContainer } from './Tweets.styles';

const Tweets: React.FC = () => {
  const { tweets, isError, isLoading } = useHttpCall(getTweets);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred, please try it later</p>;

  return (
    <TweetsContainer>
      {tweets && tweets.map(tweet => <Tweet key={tweet._id} {...tweet} />)}
    </TweetsContainer>
  );
};

export default Tweets;
