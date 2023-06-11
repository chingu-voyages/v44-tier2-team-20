import React from 'react';
import styles from './GitIcon.module.css';

const GitIcon = () => {
	return (
		<div className={styles.container}>
            <a href="https://github.com/chingu-voyages/v44-tier2-team-20" target="_blank" rel="noreferrer">
                <div className={styles.icon} />
            </a>
        </div>
	);
};

export default GitIcon;