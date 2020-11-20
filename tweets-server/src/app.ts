import express from 'express';
import { serverPort } from './params';
import tweetsRouter from './tweets/tweets.router';

const app = express();

app.use(tweetsRouter);

app.listen(serverPort, () => {
  console.log(`Tweets server started at port ${serverPort}`);
});

export default app;
