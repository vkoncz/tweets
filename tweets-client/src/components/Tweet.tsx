import moment from 'moment';
import React from 'react';
import { TweetModel } from '../models/tweet.model';
import {
  TweetContainer,
  TweetContent,
  TweetDate,
  TweetHeader,
  UserId,
  UserName,
} from './Tweet.styles';

const Tweet: React.FC<TweetModel> = ({ userName, userId, date, content }) => {
  return (
    <TweetContainer>
      <TweetHeader>
        <UserName>{userName}</UserName> <UserId>{userId}</UserId>
        <TweetDate> · {moment(date).fromNow()}</TweetDate>
      </TweetHeader>
      <TweetContent>{content}</TweetContent>
    </TweetContainer>
  );
};

export default Tweet;
