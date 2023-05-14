import React from 'react';

import Button from '../Button/Button';
import OpaqueBackground from '../OpaqueBackground/OpaqueBackground';
import UserSelection from '../UserSelection/UserSelection';
const UserConfigBox = () => {
	return (
		<div>
			<OpaqueBackground>
				<Button text="Add Player +" height="45px" width="250px" fontSize="20px" onClick={() => console.log('Clicked')} />
				<UserSelection />

				<Button text="Battle!" changedText="STOP" width="370px" onClick={() => console.log('Clicked')} />
			</OpaqueBackground>
		</div>
	);
};

export default UserConfigBox;
