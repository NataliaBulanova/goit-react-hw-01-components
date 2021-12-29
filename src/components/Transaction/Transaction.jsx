import PropTypes from 'prop-types';
import { TransactionType, TableData } from './Transaction.styled';

export default function Transaction(transaction) {
  const { id, type, amount, currency } = transaction;
  return (
    <tr key={id}>
      <TransactionType type={type}>{type}</TransactionType>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </tr>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
