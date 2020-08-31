import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 2px #808080;
  flex-flow: row;
  width: 200px;
  margin: 5px auto;
  padding: 5px 0 5px 0;
  align-items: center;

  &:hover {
    box-shadow: 0px 3px 3px 2px ${({ isOnline }) => (isOnline ? 'rgb(50, 255, 50)' : 'rgb(255, 50, 50)' )};
  }
`;

const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  content: "";
  background-color: ${({ isOnline }) => (isOnline ? 'rgb(0, 255, 0)' : 'rgb(255, 0, 0)' )};
  border-radius: 50%;
  margin: 0 6px;
`;

const Avatar = styled.img`
  border-radius: 7%;
`;

const Name = styled.p`
  font-size: 16px;
  padding-left: 8px;
`;

export {
  Item,
  Status,
  Avatar,
  Name
}