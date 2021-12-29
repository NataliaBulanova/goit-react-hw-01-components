import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TransactionType,
  TableData,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
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
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TransactionType type={type}>{type}</TransactionType>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
