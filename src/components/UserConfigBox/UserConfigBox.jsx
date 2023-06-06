import React from 'react';
import UserSelection from '../UserSelection/UserSelection';
import OpaqueBackground from '../OpaqueBackground/OpaqueBackground';
import Button from '../Button/Button';
import styles from './UserConfigBox.module.css';

const UserConfigPanel = () => {
	return (
		<OpaqueBackground>
			<UserSelection formId={1} />
			<UserSelection formId={2} />
			<Button />
		</OpaqueBackground>
	);
};

export default UserConfigPanel;
