import React from 'react';
import styles from './OpaqueBackground.module.css';

const OpaqueBackground = ({ children, style }) => {
	return (
		<div className={styles.wrapper} style={style}>
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default OpaqueBackground;
