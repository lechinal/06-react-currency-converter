import React, { useState, useEffect } from "react";

import styles from "./Info.module.css";
import Historical from "../Historical/Historical";
import PublicHolidays from "../PublicHolidays/PublicHolidays";

function Info() {
  const [latest, setLatest] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [currenciesVisible, setCurrenciesVisible] = useState(false);
  const [moreVisible, setMoreVisible] = useState(false);
  const [historicalVisible, setHistoricalVisible] = useState(false);
  const [publicHolidaysVisible, setPublicHolidaysVisible] = useState(false);

  useEffect(() => {
    const fetchLatest = async () => {
      const host = "api.frankfurter.app";
      const endpoint = "/latest";

      try {
        const response = await fetch(`https://${host}${endpoint}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        setLatest(data);
      } catch (error) {
        console.error("Eroare:", error);
      }
    };

    fetchLatest(); // Apelat doar la montarea componentei
  }, []); // Empty dependency array ensures it runs once on mount

  const toggleDetailsVisibility = () => {
    setDetailsVisible(!detailsVisible);
  };

  const toggleCurrenciesVisibility = () => {
    setCurrenciesVisible(!currenciesVisible);
  };

  const togglePublicHolidaysVisibility = () => {
    setPublicHolidaysVisible(!publicHolidaysVisible);
  };

  return (
    <div className={styles.infoBox}>
      {latest && (
        <>
          <div>
            {!detailsVisible && (
              <button
                className={styles.btnOpenDetails}
                onClick={toggleDetailsVisibility}
              >
                Details
              </button>
            )}
          </div>

          {detailsVisible && (
            <div className={styles.detailsLeft}>
              <button
                className={styles.btnCloseDetails}
                onClick={toggleDetailsVisibility}
              >
                ❌
              </button>
              <div className={styles.detailsBox}>
                <h2>Details</h2>
                <p>Amount: {latest.amount}</p>
                <p>Base Currency: {latest.base}</p>
                <p>Data: {latest.date}</p>
              </div>
              <div className={styles.textBox}>
                <p>
                  The reference rates are usually updated at around 16:00 CET
                  every working day, except on{" "}
                  <button
                    className={styles.btnCloseModal}
                    href="#"
                    onClick={togglePublicHolidaysVisibility}
                  >
                    TARGET closing days
                  </button>
                </p>
                <p>
                  They are based on the daily concertation procedure between
                  central banks across Europe, which normally takes place around
                  14:10 CET. The reference rates are published for information
                  purposes only.
                </p>
                <p>
                  Owing to current trading activity in the EUR/RUB market, the
                  European Central Bank (ECB) is not in a position to set a
                  reference rate that is representative of prevailing market
                  conditions. The ECB has therefore decided to suspend its
                  publication of a euro reference rate for the Russian rouble
                  until further notice. The ECB last published a{" "}
                  <button
                    type="text"
                    className={styles.btnForMore}
                    onClick={() => setMoreVisible(!moreVisible)}
                  >
                    EUR/RUB reference rate
                  </button>{" "}
                  on 1 March 2022.{" "}
                </p>

                {moreVisible && (
                  <>
                    <p
                      className={styles.more}
                      onClick={() => setMoreVisible(false)}
                    >
                      {" "}
                      1 March 2022: EUR 1 = RUB 117.201;{" "}
                      <span>⬆️ +1.7168(+1.5%)</span>
                    </p>
                    <div className={styles.moreInfo}>
                      <h4>Change from 1 March 2021 to 1 March 2022</h4>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th>Min (26 October 2021)</th>
                            <th>Max (1 March 2022)</th>
                            <th>Average (1 March 2022)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <mark>80.6417</mark>
                            </td>
                            <td>
                              <mark>117.2010</mark>
                            </td>
                            <td>
                              <mark>86.8753</mark>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          <div>
            {!currenciesVisible && (
              <button
                className={styles.btnOpenCurrencies}
                onClick={toggleCurrenciesVisibility}
              >
                Currencies
              </button>
            )}
          </div>

          {currenciesVisible && (
            <div className={styles.currenciesRight}>
              <button
                className={styles.btnCloseCurrencies}
                onClick={toggleCurrenciesVisibility}
              >
                ❌
              </button>
              <h2>Currencies</h2>
              <div className={styles.currenciesText}>
                <p>All currencies quoted against the euro (base currency)</p>
              </div>
              <ul className={styles.currenciesList}>
                {Object.entries(latest.rates).map(([currency, rate]) => (
                  <li key={currency}>
                    {currency}: {rate}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            {!historicalVisible && (
              <button
                className={styles.btnOpenData}
                onClick={() => setHistoricalVisible(!historicalVisible)}
              >
                Historical Data
              </button>
            )}
          </div>
          {historicalVisible && (
            <Historical historicalVisible={setHistoricalVisible} />
          )}
          {publicHolidaysVisible && (
            <PublicHolidays onClose={() => setPublicHolidaysVisible(false)} />
          )}
        </>
      )}
    </div>
  );
}

export default Info;
