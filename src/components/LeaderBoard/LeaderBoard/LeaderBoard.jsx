import React, { useEffect, useContext }  from 'react';
import styles from './LeaderBoard.module.css'
import BotStatistics from '../BotStatistics/BotStatistics';
import { GameContext } from '../../../context/GameContext/GameContext';

const defaultBots = [{
    name: 'Bot1', 
    wins: 11, 
    losses: 0
    }, {
    name: 'Bot2', 
    wins: 17, 
    losses: 5
    }, {
    name: 'Bot3', 
    wins: 1, 
    losses: 10
    }]

const LeaderBoard = () => {
  const { bots, addBot } = useContext(GameContext);

console.log(bots)

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
