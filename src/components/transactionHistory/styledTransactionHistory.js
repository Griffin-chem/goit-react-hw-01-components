import styled from 'styled-components';

const Table = styled.table`
  width: 500px;
  margin: 0 auto;
  box-shadow: 0px 3px 3px 2px #aaaaaa
`;

const THead = styled.thead`
  background-color: #00bcd4;
  color: #ffffff;
  font-size: 13px;
  line-height: 50px;
  text-transform: uppercase;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
`;

const TRow = styled.tr`
  color: #5c6975;
  font-size: 15px;
  line-height: 50px;
  text-transform: capitalize;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  text-align: center;

  &:nth-child(2n) {
    background-color: #ecf2f3;
  }
`;

export {
  Table,
  THead,
  TRow
}