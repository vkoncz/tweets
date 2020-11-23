import axios from 'axios';
import { useCallback, useState } from 'react';
import { TweetModel, TweetPost } from '../models/tweet.model';

async function postTweet(tweet: TweetPost): Promise<TweetModel> {
  return axios.post('/tweets/', tweet).then(res => res.data);
}

export const usePostTweets = (tweet: TweetPost) => {
  const [tweets, setTweets] = useState<TweetModel | undefined>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendTweet = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const result = await postTweet(tweet);
      setTweets(result);
    } catch (error) {
      setIsError(true);
      console.log('Tweets fetch error', error);
    }

    setIsLoading(false);
  }, [tweet]);

  return { tweets, isError, isLoading, sendTweet };
};
