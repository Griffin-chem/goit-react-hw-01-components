import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  THead,
  TRow
} from './styledTransactionHistory';

const TableHead = () => (
  <THead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </THead>
);

const TableBody = ({items}) => (
  <tbody>
    {items.map(({id, type, amount, currency}) => (
    <TRow key = {id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TRow>
    ))}
  </tbody>
)

const Transactions = ({items}) => (
  <Table>
    <TableHead></TableHead>
    <TableBody items = {items}></TableBody>
  </Table>
);

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    })).isRequired
}

export {Transactions}