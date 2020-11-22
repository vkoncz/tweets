import express from 'express';
import { connectToMongodb } from './database/mongo-connection';
import { serverPort } from './params';
import tweetsRouter from './tweets/tweets.router';

const app = express();

(async () => {
  await connectToMongodb();

  app.use(tweetsRouter);

  app.listen(serverPort, () => {
    console.log(`Tweets server started at port ${serverPort}`);
  });
})();

export default app;
