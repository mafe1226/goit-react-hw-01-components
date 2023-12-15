import css from './statItem.module.css';
export function StatItem({ label, percentage }) {
    return (
      <li className={css.item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    );
  }