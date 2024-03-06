import React from "react";

import styles from "../PublicHolidays/PublicHolidays.module.css";

function PublicHolidays({ onClose }) {
  return (
    <div className={styles.publicHolidays}>
      <div className={styles.btnCloseModalBox}>
        <button className={styles.btnCloseModal} onClick={onClose}>
          ❌
        </button>
      </div>
      <div className={styles.hoursBox}>
        <h2>Working hours</h2>
        <p>Monday to Friday: 8:30 to 17:30 CET</p>
        <p>Saturday, Sunday and public holidays: closed</p>
      </div>
      <div className={styles.holidaysBox}>
        <h3>Public holidays</h3>
        <div className={styles.year2024}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan="2">2024</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Year's Day</td>
                <td> 1 January 2024</td>
              </tr>
              <tr>
                <td>Good Friday</td>
                <td>29 March 2024</td>
              </tr>
              <tr>
                <td>Easter Monday</td>
                <td>1 April 2024</td>
              </tr>
              <tr>
                <td>Labour Day</td>
                <td>1 May 2024</td>
              </tr>
              <tr>
                <td>Anniversary of Robert Schuman's Declaration</td>
                <td>9 May 2024</td>
              </tr>
              <tr>
                <td>Ascension Day</td>
                <td>9 May 2024</td>
              </tr>
              <tr>
                <td>Whit Monday</td>
                <td>20 May 2024</td>
              </tr>
              <tr>
                <td>Corpus Christi</td>
                <td>30 May 2024</td>
              </tr>
              <tr>
                <td>Day of German Unity</td>
                <td>3 October 2024</td>
              </tr>
              <tr>
                <td>All Saints' Day</td>
                <td>1 November 2024</td>
              </tr>
              <tr>
                <td>Christmas Eve</td>
                <td>24 December 2024</td>
              </tr>
              <tr>
                <td>Christmas Day</td>
                <td>25 December 2024</td>
              </tr>
              <tr>
                <td>Christmas Holiday</td>
                <td>26 December 2024</td>
              </tr>
              <tr>
                <td>New Year's Eve</td>
                <td>31 December 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.year2025}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan="2">2025</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Year's Day</td>
                <td> 1 January 2025</td>
              </tr>
              <tr>
                <td>Good Friday</td>
                <td>18 April 2025</td>
              </tr>
              <tr>
                <td>Easter Monday</td>
                <td>21 April 2025</td>
              </tr>
              <tr>
                <td>Labour Day</td>
                <td>1 May 2025</td>
              </tr>
              <tr>
                <td>Anniversary of Robert Schuman's Declaration</td>
                <td>9 May 2025</td>
              </tr>
              <tr>
                <td>Ascension Day</td>
                <td>29 May 2025</td>
              </tr>
              <tr>
                <td>Whit Monday</td>
                <td>9 June 2025</td>
              </tr>
              <tr>
                <td>Corpus Christi</td>
                <td>19 June 2025</td>
              </tr>
              <tr>
                <td>Day of German Unity</td>
                <td>3 October 2025</td>
              </tr>
              <tr>
                <td>All Saints' Day</td>
                <td>1 November 2025</td>
              </tr>
              <tr>
                <td>Christmas Eve</td>
                <td>24 December 2025</td>
              </tr>
              <tr>
                <td>Christmas Day</td>
                <td>25 December 2025</td>
              </tr>
              <tr>
                <td>Christmas Holiday</td>
                <td>26 December 2025</td>
              </tr>
              <tr>
                <td>New Year's Eve</td>
                <td>31 December 2025</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.year2026}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan="2">2026</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>New Year's Day</td>
                <td> 1 January 2026</td>
              </tr>
              <tr>
                <td>Good Friday</td>
                <td>3 April 2026</td>
              </tr>
              <tr>
                <td>Easter Monday</td>
                <td>6 April 2026</td>
              </tr>
              <tr>
                <td>Labour Day</td>
                <td>1 May 2026</td>
              </tr>
              <tr>
                <td>Anniversary of Robert Schuman's Declaration</td>
                <td>9 May 2026</td>
              </tr>
              <tr>
                <td>Ascension Day</td>
                <td>14 May 2026</td>
              </tr>
              <tr>
                <td>Whit Monday</td>
                <td>25 May 2026</td>
              </tr>
              <tr>
                <td>Corpus Christi</td>
                <td>4 June 2026</td>
              </tr>
              <tr>
                <td>Day of German Unity</td>
                <td>3 October 2026</td>
              </tr>
              <tr>
                <td>All Saints' Day</td>
                <td>1 November 2026</td>
              </tr>
              <tr>
                <td>Christmas Eve</td>
                <td>24 December 2026</td>
              </tr>
              <tr>
                <td>Christmas Day</td>
                <td>25 December 2026</td>
              </tr>
              <tr>
                <td>Christmas Holiday</td>
                <td>26 December 2026</td>
              </tr>
              <tr>
                <td>New Year's Eve</td>
                <td>31 December 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PublicHolidays;
