import request from 'supertest';
import express from 'express';
import { tweetForPost, tweetsMock } from './__mocks__/tweets';
import * as tweetsService from '../tweets.service';
import tweetsRouter from '../tweets.router';

jest.mock('../../params', () => ({
  mongoConnection: '',
}));
jest.mock('../tweets.service');
const mockedTweetsService = tweetsService as jest.Mocked<typeof tweetsService>;

const app = express().use(express.json()).use(tweetsRouter);

test('GET /tweets successful', async () => {
  mockedTweetsService.getTweets.mockResolvedValue(tweetsMock);

  await request(app)
    .get('/tweets')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(JSON.stringify(tweetsMock));
});

test('GET /tweets fails', async () => {
  mockedTweetsService.getTweets.mockRejectedValue({});

  await request(app).get('/tweets').expect(503);
});

test('POST /tweets successful', async () => {
  mockedTweetsService.addTweet.mockResolvedValue(tweetForPost);

  await request(app)
    .post('/tweets')
    .send(tweetForPost)
    .expect(201)
    .expect(JSON.stringify(tweetForPost));
});

test('POST /tweets fails', async () => {
  mockedTweetsService.addTweet.mockRejectedValue({});

  await request(app).post('/tweets').send(tweetForPost).expect(503);
});
