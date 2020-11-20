import { Router } from 'express';
import { getTweets } from './tweets.service';

const tweetsRouter = Router();

//localhost:8080/tweets
tweetsRouter.get('/tweets', async (req, res) => {
  const result = await getTweets();

  res.json(result);
});

export default tweetsRouter;
