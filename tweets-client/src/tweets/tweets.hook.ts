import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { TweetModel, TweetPost } from './tweet.model';

export function getTweets(): Promise<TweetModel[]> {
  return axios.get('/tweets').then(res => res.data);
}

export async function postTweet(tweet: TweetPost): Promise<TweetModel> {
  return axios.post('/tweets', tweet).then(res => res.data);
}

export const useHttpCall = <P, F>(call: (parameter?: P) => Promise<F>) => {
  const [tweets, setTweets] = useState<F>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTweets = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const result = await call();
      setTweets(result);
    } catch (error) {
      setIsError(true);
      console.log('Tweets fetch error', error);
    }

    setIsLoading(false);
  }, [call]);

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

  return { tweets, isError, isLoading };
};
