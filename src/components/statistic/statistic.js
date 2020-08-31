import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticBlock,
  Title,
  StatList,
  StatItem,
  Label,
  Percent
} from './StyledStatistic';

const randomColor = function () {
  return `rgb(${Math.floor(Math.random()*(256-180)+180)}, ${Math.floor(Math.random()*(256-180)+180)}, ${Math.floor(Math.random()*(256-180)+180)})`;
}

const Statistic = ({ title, stats }) => {
  const isTitled = Boolean(title);
  return (
  <StatisticBlock>
  {isTitled && (<Title>{title}</Title>)}
  <StatList>
    {stats.map(({label, percentage, id}) => (
    <StatItem key = {id} bgcolor = {randomColor()}>
      <Label>{label}</Label>
      <Percent>{percentage}%</Percent>
    </StatItem>
    ))}
  </StatList>
</StatisticBlock>
)};

Statistic.defaultProps = {
  title: ""
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
}

export default Statistic