import PropTypes from 'prop-types';

export default function Statistics(stat) {
  const { id, label, percentage } = stat;
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

Statistics.propType = {
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
