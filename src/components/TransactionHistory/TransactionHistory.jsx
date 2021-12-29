import Transaction from '../Transaction/Transaction';
import PropTypes from 'prop-types';
import { Table, TableHead } from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          // const { id, type, amount, currency } = transaction;
          return (
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propType = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
