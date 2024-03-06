import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        Quick Currency <span>💸</span> Conversion with Real-time Exchange Rates
      </h1>
      <div className={styles.textBox}>
        <p>
          Effortless currency conversion with up-to-date exchange rates from the{" "}
          <a href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">
            European Central Bank
          </a>
          . Stay informed with real-time data refreshed daily around 16:00 CET.
          Simplify your financial decisions with our user-friendly Currency
          Converter app.
        </p>
      </div>
    </header>
  );
}

export default Header;
