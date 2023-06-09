import React, { useRef, useEffect, useContext } from 'react';
import { GameContext } from '../../context/GameContext/GameContext';
import styles from './BattleLog.module.css';
import OpaqueBackground from '../OpaqueBackground/OpaqueBackground';

function BatteLog(props) {
	const { battleLogs } = useContext(GameContext);

	// creating reference for wrapper to adjust scroll
	const scrollableElement = useRef(null);

	// makes the scroll bar head to bottom on first render and with every new log in array so user doesn't have to scroll down for new result
	useEffect(() => {
		if (scrollableElement.current) {
			scrollableElement.current.scrollTop = scrollableElement.current.scrollHeight - scrollableElement.current.clientHeight;
		}
	}, [battleLogs]);

	// maps logs to wrapper
	const renderLogs = () => {
		if (!Array.isArray(battleLogs)) {
			return null;
		}

		return battleLogs.map((log, index) => (
			<div key={index} className={styles.container}>
				<p className={styles.results_txt}>
					{log.bots[0]} vs. {log.bots[1]} | {log.winner === 'tie' ? 'it was a tie' : `${log.winner} wins`}
				</p>
				<p className={styles.computations_txt}>
					{log.bots[0]}: Binary Value = {log.bot1BinaryValue}, Operator = {log.bot1Operator}
				</p>
				<p className={styles.computations_txt}>
					{log.bots[1]}: Binary Value = {log.bot2BinaryValue}, Operator = {log.bot2Operator}
				</p>
			</div>
		));
	};

	return window.matchMedia('(max-width: 768px)').matches ? null : (
		<OpaqueBackground>
			<div className={styles.wrapper} ref={scrollableElement}>
				<p>Battle Log</p>
				{renderLogs()}
			</div>
		</OpaqueBackground>
	);
}
export default BatteLog;
