import React from 'react';
import NewTweet from './NewTweet';
import Tweet from './Tweet';
import { useFetchTweets } from '../hooks/fetchTweets.hook';
import { TweetsContainer } from './Tweets.styles';

const Tweets: React.FC = () => {
  const { tweets, isError, isLoading, addNewTweet } = useFetchTweets();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred, please try it later</p>;

  return (
    <TweetsContainer>
      <NewTweet onTweetAdd={addNewTweet} />
      {tweets && tweets.map(tweet => <Tweet key={tweet._id} {...tweet} />)}
    </TweetsContainer>
  );
};

export default Tweets;
