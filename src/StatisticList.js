import Statistics from './Statistics';

export default function StatisticList({ title, data }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
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
      </ul>
    </section>
  );
}
