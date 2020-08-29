import styled from 'styled-components';

const StatisticBlock = styled.section`
  width: 270px;
  background-color: #ffffff;
  font-family: serif;
  box-shadow: 0px 0px 3px 2px #0000ff;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 16px;
  color: #475965;
  line-height: 70px;
  height: 70px;
  text-transform: uppercase;
  text-align: center;
`;

const StatList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: stretch;
  list-style: none;
`;

const StatItem = styled.li`
  width: auto;
  background-color: #ff00ff;
`;

const Label = styled.span`
  display: block;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #ffffff;
`;

const Percent = styled.span`
  display: block;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: #ffffff;
`;

export {
  StatisticBlock,
  Title,
  StatList,
  StatItem,
  Label,
  Percent
}