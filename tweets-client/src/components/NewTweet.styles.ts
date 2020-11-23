import styled from 'styled-components';

export const NewTweetContainer = styled.div`
  border: 1px solid rgb(56, 68, 77);
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const TweetEdit = styled.span.attrs({ role: 'textbox' })`
  font-size: 19px;
  font-weight: 400;
  outline: 0px;

  :empty:before {
    content: "What's happening?";
    color: rgb(181, 181, 181);
  }
`;

export const TweetActions = styled.div`
  border-top: 1px solid rgb(181, 181, 181);
  margin-top: 7px;
  padding-top: 7px;
  display: flex;
  justify-content: flex-end;
`;

export const AddTweet = styled.div.attrs({ role: 'button' })`
  background-color: rgb(29, 161, 242);
  font-weight: 700;
  font-size: 15px;

  width: 74px;
  height: 39px;
  border-radius: 99px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: rgb(23, 123, 185);
  }
`;
