import { Router } from 'express';
import { Tweet } from './tweets.model';
import { addTweet, getTweets } from './tweets.service';

const tweetsRouter = Router();

//GET localhost:8080/tweets
tweetsRouter.get('/tweets', async (req, res) => {
  try {
    const result = await getTweets();
    res.json(result);
  } catch (error) {
    res.status(503).send('Database connection error');
  }
});

//POST localhost:8080/tweets
tweetsRouter.post('/tweets', async (req, res) => {
  const { body } = req;

  if (!validateTweet(body)) return res.status(400).send('Invalid or missing parameter');

  try {
    const result = await addTweet(body);
    res.status(201).json(result);
  } catch {
    res.status(503).send('Database connection error');
  }
});

function validateTweet(body: Tweet): body is Tweet {
  return (
    body &&
    typeof body.content === 'string' &&
    typeof body.userId === 'string' &&
    typeof body.userName === 'string'
  );
}

export default tweetsRouter;
