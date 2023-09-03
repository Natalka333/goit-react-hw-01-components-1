import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              // className={css.stats}
              key={id}
              style={{ backgroundColor: createColor() }}
            >
              <span>{label}</span>
              <span>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';
  // console.log(color);
  return color;
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
