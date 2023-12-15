import css from "./TransactionHistory.module.css";
export function TransactionHistory({ items }) {
    return (
      <table className={css.transaction_history}>
        <thead>
          <tr>
            <th className={css.table_header}>Type</th>
            <th className={css.table_header}>Amount</th>
            <th className={css.table_header}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.table_row}>
              <td className={css.table_cell}>{type}</td>
              <td className={css.table_cell}>{amount}</td>
              <td className={css.table_cell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }