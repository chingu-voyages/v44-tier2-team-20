import React from 'react';
import styles from './BotStatistics.module.css';

const BotStatistics = ({ bots }) => {
    const sortedBots = [...bots].sort((a, b) => b.wins - a.wins);
    return (
        <div className={styles.wrapper}>
            {sortedBots.map((bot, ind) => {
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