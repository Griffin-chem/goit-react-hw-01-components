import styled from 'styled-components';

const Wrapper = styled.div`
font-family: 'Lato', sans-serif;
  width: 250px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px 2px rgb(104, 103, 103);
`;

const Description = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 100px;
  margin-bottom: 24px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #122236;
`;

const Tag = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #768696;
  line-height: 32px;
`;

const Location = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #768696;
  line-height: 32px;
`;

export {
  Wrapper, 
  Description, 
  Avatar, 
  Name,
  Tag,
  Location
}