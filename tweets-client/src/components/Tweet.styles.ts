import styled from 'styled-components';

export const TweetContainer = styled.article`
  border: 1px solid rgb(56, 68, 77);
  padding: 15px;
`;

export const TweetHeader = styled.p`
  margin: 0;
`;
export const UserName = styled.span`
  font-weight: 700;
`;
export const UserId = styled.span`
  color: rgb(136, 153, 166);
`;
export const TweetDate = styled(UserId)``;
export const TweetContent = styled.p`
  margin-bottom: 0;
`;
