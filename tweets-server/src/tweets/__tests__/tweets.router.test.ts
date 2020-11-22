import request from 'supertest';
import tweetsRouter from '../tweets.router';
import express from 'express';
import { tweetsMock } from './__mocks__/tweets';

jest.mock('../tweets.service');
import * as tweetsService from '../tweets.service';
const mockedTweetsService = tweetsService as jest.Mocked<typeof tweetsService>;

const app = express().use(tweetsRouter);

test('GET /tweets', async () => {
  mockedTweetsService.getTweets.mockResolvedValue(tweetsMock);

  await request(app)
    .get('/tweets')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(JSON.stringify(tweetsMock));
});
