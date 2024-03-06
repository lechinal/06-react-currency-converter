import React from "react";

import styles from "./FromTo.module.css";

function FromTo({ label, value, onChange, options, isLoading }) {
  const optionsArray = Object.entries(options);

  return (
    <div className={styles.box}>
      <p>{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={isLoading}
      >
        {optionsArray.map(([currency, name]) => (
          <option key={currency} value={currency}>
            {currency}: {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FromTo;
