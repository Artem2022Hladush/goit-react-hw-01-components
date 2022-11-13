import PropTypes from 'prop-types';
import css from '../Statistics/statistics.module.css';

const Statistics = (title, stats) => {
	return <section className={css.statistics}>
	{title && <h2 className={css.title}>{title}</h2>}

	<ul className={css.stat__list}>
		{stats.map(({id, label, percentage}) => 
		<li className={css.item} key={id}>
		<span className={label}>{label}</span>
		<span className={css.percentage}>{percentage}</span>
	</li>)
	}
		
	</ul>
</section>
};

Statistics.propTypes = {
	title: PropTypes.string.isRequired,
	stats: PropTypes.arrayOf (
		PropTypes.shape(
			{
				id: PropTypes.string.isRequired,
				label: PropTypes.string.isRequired,
				percentage: PropTypes.isRequired,
			}
		)
	),
};

export default Statistics;