import PropTypes from 'prop-types';

export default function Transaction(transaction) {
  const { id, type, amount, currency } = transaction;
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  key: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
