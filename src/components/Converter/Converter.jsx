import React, { useState, useEffect } from "react";

import FromTo from "../FromTo/FromTo";
import styles from "./Converter.module.css";

function Converter() {
  const [amount, setAmount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currencies, setCurrencies] = useState([]);

  const endpoint = "latest";

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.frankfurter.app/currencies");
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setCurrencies(data);
        // console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching currencies:", error);
        setIsLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(
    function () {
      let timeoutId;
      async function convert() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://api.frankfurter.app/${endpoint}?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
          );

          if (!res.ok) {
            throw new Error("Something went wrong with fetching the data.");
          }
          const data = await res.json();
          if (data.Response === "False") throw new Error("No data found.");

          setConverted(data.rates[toCurrency]);
          //   console.log(data);
          setError("");
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (fromCurrency === toCurrency) {
        setConverted(amount);
      } else {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(convert, 1200);
      }
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    },
    [amount, fromCurrency, toCurrency, endpoint]
  );

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setAmount(Number(e.target.value));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Converter <span>🔄️</span>
      </h2>
      <div className={styles.converterBox}>
        <div className={styles.amountBox}>
          <p>Amount</p>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <FromTo
          label="from"
          value={fromCurrency}
          onChange={setFromCurrency}
          options={currencies}
          isLoading={isLoading}
        />

        <FromTo
          label="to"
          value={toCurrency}
          onChange={setToCurrency}
          options={currencies}
          isLoading={isLoading}
        />
      </div>

      {converted !== 0 && converted && !error && (
        <div className={styles.resultBox}>
          <p>
            {converted} {toCurrency}
          </p>
        </div>
      )}

      {error && <div>Error: {error}</div>}
    </section>
  );
}

export default Converter;
