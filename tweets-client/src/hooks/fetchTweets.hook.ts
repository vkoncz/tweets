import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { TweetModel } from '../models/tweet.model';

function getTweets(): Promise<TweetModel[]> {
  return axios.get('/tweets').then(res => res.data);
}

export const useFetchTweets = () => {
  const [tweets, setTweets] = useState<TweetModel[]>([]);
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

  const addNewTweet = useCallback((tweet: TweetModel) => {
    setTweets(tweetList => [tweet, ...tweetList]);
  }, []);

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

  return { tweets, isError, isLoading, addNewTweet };
};
