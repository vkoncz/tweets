import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Tweets from '../Tweets';
import axios from 'axios';
import { tweetMock } from './Tweet.test';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('Tweets error', async () => {
  mockedAxios.get.mockRejectedValue({});
  const { getByText } = render(<Tweets />);

  await waitFor(() => expect(getByText(/error/i)).toBeInTheDocument());
});

test('Tweets receive content', async () => {
  mockedAxios.get.mockResolvedValue({ data: [tweetMock] });
  const { getByText } = render(<Tweets />);

  await waitFor(() => expect(getByText(/loading/i)).toBeInTheDocument());
  await waitFor(() => expect(getByText(/test-content/i)).toBeInTheDocument());
});
