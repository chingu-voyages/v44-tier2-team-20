import React from 'react';
import styles from './LeaderBoard.module.css'
import BotStatistics from '../BotStatistics/BotStatistics';

const defaultBots = [{
    name: 'Bot1', 
    wins: 15, 
    losses: 0
    }, {
    name: 'Bot2', 
    wins: 15, 
    losses: 0
    }, {
    name: 'Bot3', 
    wins: 15, 
    losses: 0
    }]

const LeaderBoard = ({ bots = defaultBots }) => {

  return (
    <div className={styles.wrapper}>
        <h2>Leaders</h2>
        <div className={styles.container}>
            <div className={styles.container__headings}>
                <h3>User</h3>
                <h3>Wins</h3>
                <h3>Losses</h3>
            </div>
            <BotStatistics bots={ bots }/>
        </div>
    </div>
  )
}

export default LeaderBoard;
