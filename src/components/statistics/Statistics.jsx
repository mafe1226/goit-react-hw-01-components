import { StatItem } from '../StatItem/statItem';
import css from './statistics.module.css'
export const Statistics = ({title, stats,}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.stat_list}>
                {stats.map(({ label, percentage, id }) => (
                    <StatItem key={id} label={label} percentage={percentage} />
                ))
                }
            </ul>
        </section>
    );
  };