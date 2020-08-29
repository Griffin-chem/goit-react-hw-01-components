import React from 'react';
import {
  StatisticBlock,
  Title,
  StatList,
  StatItem,
  Label,
  Percent
} from './styledStatistic';
import PropTypes from 'prop-types';

const Statistic = ({ title, stats }) => (
  <StatisticBlock>
  {title && (<Title>{title}</Title>)}
  <StatList>
    {stats.map(({label, percentage, id}) => (
    <StatItem key = {id}>
      <Label>{label}</Label>
      <Percent>{percentage}%</Percent>
    </StatItem>
    ))}
  </StatList>
</StatisticBlock>
);

Statistic.defaultProps = {
  title: ""
};

console.log(StatItem);

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
}

export default Statistic