import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  const id = useId();

  return (
    <div className={css.container}>
      <label className={css.textLabel} htmlFor={id}>
        Find contacts by name
      </label>
      {/* <p>Find contacts by name</p> */}
      <input
        className={css.input}
        placeholder="Please enter a name to search"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        id={id}
      />
    </div>
  );
}
