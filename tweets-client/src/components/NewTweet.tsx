import React, { useEffect, useState } from 'react';
import { usePostTweets } from '../hooks/postTweets.hook';
import { TweetModel } from '../models/tweet.model';
import { AddTweet, NewTweetContainer, TweetActions, TweetEdit } from './NewTweet.styles';

interface Props {
  onTweetAdd: (tweet: TweetModel) => void;
}

const NewTweet: React.FC<Props> = ({ onTweetAdd }) => {
  const [tweet, setTweet] = useState('');
  const { sendTweet, tweets } = usePostTweets({
    content: tweet,
    userId: '@viktor1',
    userName: 'Viktor',
  });

  useEffect(() => {
    if (tweets) {
      onTweetAdd(tweets);
    }
  }, [onTweetAdd, tweets]);

  return (
    <NewTweetContainer>
      <TweetEdit onInput={event => setTweet(event.currentTarget.textContent!)} contentEditable />
      <TweetActions>
        <AddTweet onClick={sendTweet}>Tweet</AddTweet>
      </TweetActions>
    </NewTweetContainer>
  );
};

export default NewTweet;
