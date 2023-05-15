import React from 'react';
import styles from './BotStatistics.module.css';

const BotStatistics = ({ bots }) => {
  return (
    <div className={styles.wrapper}>
        {bots.map((bot, ind) => {
            return <div 
                key={ind}
                className={styles.container}>
                <p className={styles.container__segment}>{bot.name}</p>
                <p className={styles.container__segment}>{bot.wins}</p>
                <p className={styles.container__segment}>{bot.losses}</p>
            </div>
        })}
    </div>
  )
}

export default BotStatistics;