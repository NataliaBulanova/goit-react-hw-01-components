import Statistics from '../Statistic/Statistic';
import PropTypes from 'prop-types';
import { Section, Title, List } from './StatisticList.styled';

export default function StatisticList({ title, data }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {' '}
        {data.map(item => {
          return (
            <Statistics
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </List>
    </Section>
  );
}

StatisticList.propType = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
