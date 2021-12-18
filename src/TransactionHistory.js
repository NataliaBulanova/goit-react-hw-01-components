import Transaction from './Transaction';
import PropTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          const { id, type, amount, currency } = transaction;
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
    </table>
  );
}

TransactionHistory.propType = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
