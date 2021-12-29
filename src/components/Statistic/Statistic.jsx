import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Statistic.styled';

export default function Statistics(stat) {
  const { id, label, percentage } = stat;
  return (
    <Item key={id} statType={label}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
}

Statistics.propType = {
  stat: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
