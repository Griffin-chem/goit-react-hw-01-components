import styled from 'styled-components';

const StatBlock = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #f3f6f9;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const StatItem = styled.li`
  border: 1px solid gray;
  padding-bottom: 16px;

  &:last-child {
    border-bottom-right-radius: 5px;
  }

  &:first-child {
    border-bottom-left-radius: 5px;
  }
`;

const Label = styled.span`
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #768696;
  line-height: 20px;
`;

const Quantity = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #1f3349;
  line-height: 20px;
`;

export {
  StatBlock,
  StatItem,
  Label,
  Quantity
}