import React from 'react';
import UserSelection from '../UserSelection/UserSelection';
import OpaqueBackground from '../OpaqueBackground/OpaqueBackground';
import Button from '../Button/Button';
import styles from './UserConfigBox.module.css';

const UserConfigPanel = () => {
	return (
		<div className={styles.wrapper}>
			<OpaqueBackground>
				<UserSelection formId={1} />
				<UserSelection formId={2} />
				<Button />
			</OpaqueBackground>
		</div>
		
	);
};

export default UserConfigPanel;
