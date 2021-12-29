import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './StatisticList.styled';

export default function StatisticList({ title, data }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {data.map(({ id, label, percentage }) => {
          return (
            <Item key={id} statType={label}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Section>
  );
}

StatisticList.propType = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
