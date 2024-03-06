import React, { useState, useEffect } from "react";
import styles from "./Historical.module.css";
import FromTo from "../FromTo/FromTo";

function isWeekend(selectedDate) {
  const dayOfWeek = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  return dayOfWeek === "Saturday" || dayOfWeek === "Sunday";
}

function Historical({ setHistoricalVisible, historicalVisible }) {
  const [historicalDate, setHistoricalDate] = useState("");
  const [historicalData, setHistoricalData] = useState(null);
  const [error, setError] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [currencies, setCurrencies] = useState({});
  // const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.frankfurter.app/currencies");
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setCurrencies(data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const fetchData = async () => {
    try {
      if (!historicalDate || !fromCurrency || !toCurrency) {
        setHistoricalData(null);
        setError("Please enter a historical date and select currencies.");
        return;
      }

      const host = "api.frankfurter.app";
      const fetchUrl = `https://${host}/${historicalDate}?from=${fromCurrency}&to=${toCurrency}`;
      const response = await fetch(fetchUrl);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setHistoricalData(data);
      // console.log(data);
      setError(null);
    } catch (error) {
      setHistoricalData(null);
      setError(`Error fetching historical data: ${error.message}`);
    }
  };

  const handleDateChange = (e) => {
    setHistoricalDate(e.target.value);
  };

  return (
    <>
      <div className={styles.historicalBox}>
        {historicalVisible && (
          <div className={styles.btnBox}>
            <button
              className={styles.btnCloseData}
              onClick={() => historicalVisible(false)}
            >
              ❌
            </button>
          </div>
        )}
        <div>
          <h2>Historical Data</h2>
        </div>
        <div className={styles.firstDiv}>
          <FromTo
            label="from"
            value={fromCurrency}
            onChange={setFromCurrency}
            options={currencies}
            isLoading={false}
          />

          <FromTo
            label="to"
            value={toCurrency}
            onChange={setToCurrency}
            options={currencies}
            isLoading={false}
          />
        </div>
        <div className={styles.secondDiv}>
          <label>
            Enter Historical Date:{" "}
            <input
              className={styles.dateInput}
              type="date"
              value={historicalDate}
              onChange={handleDateChange}
            />
          </label>
          <div className={styles.btnSearchBox}>
            <button className={styles.btnSearch} onClick={fetchData}>
              Search
            </button>
          </div>
        </div>
        {error && <p>Error: {error}</p>}
        {historicalData && (
          <div className={styles.thirdDiv}>
            <p>Base Currency: {historicalData.base}</p>
            <p>Date: {historicalData.date}</p>

            {isWeekend(new Date(historicalDate)) && (
              <p className={styles.weekendText}>
                The selected date falls on a weekend. As a result, the reference
                rate reflects data available for {historicalData.date}.
              </p>
            )}
            <h3>Rates:</h3>
            <ul>
              {Object.entries(historicalData.rates).map(([currency, rate]) => (
                <li key={currency}>
                  {currency}: {rate}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Historical;
