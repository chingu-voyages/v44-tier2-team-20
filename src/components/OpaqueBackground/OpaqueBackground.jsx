import React from 'react';
import styles from './OpaqueBackground.module.css';

const OpaqueBackground = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default OpaqueBackground;
