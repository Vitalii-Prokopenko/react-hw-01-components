import PropTypes from 'prop-types';
import css from 'components/statistics/statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css["statistics"]}>
      {title && <h2 className={css["title"]}>Upload stats</h2>}
      <ul className={css["stat-list"]}>
        {stats.map(stat => (
          <li key={stat.id} className={css["item"]}>
            <span className={css["label"]}>{stat.label}</span>
            <span className={css["percentage"]}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
