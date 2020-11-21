import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Tweet } from './tweets.model';

export function getTweets(): Promise<Tweet[]> {
  return axios.get('/tweets').then(res => res.data);
}

export const useTweetFetch = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTweets = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const result = await getTweets();
      setTweets(result);
    } catch (error) {
      setIsError(true);
      console.log('Tweets fetch error', error);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

  return { tweets, isError, isLoading };
};
