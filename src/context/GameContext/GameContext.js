import React, { createContext, useState } from 'react';
import Bot from './Bot.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
	// State for game state
	const [gameState, setGameState] = useState(false);

	// State for bots
	const [bots, setBots] = useState([]);

	// State for battle logs
	const [battleLogs, setBattleLogs] = useState([
		{
			// Added these values for testing purposes
			bots: ['Bot1', 'Bot2'],
			winner: 'Bot1',
			bot1BinaryValue: 1,
			bot1Operator: 'AND',
			bot2BinaryValue: 0,
			bot2Operator: 'OR',
		},
		{
			// Added these values for testing purposes
			bots: ['Bot1', 'Bot2'],
			winner: 'Bot1',
			bot1BinaryValue: 1,
			bot1Operator: 'AND',
			bot2BinaryValue: 0,
			bot2Operator: 'OR',
		},
	]);

	// Function to add a new bot (id generated in class via uuid)
	const addBot = (bot) => {
		const newBot = new Bot(bot.name, bot.image, bot.binaryValue, bot.operator, bot.direction);
		setBots((prevBots) => [...prevBots, newBot]);
	};

	// Function to remove a bot
	const removeBot = (botId) => {
		setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
	};

	// Function to update a bot's win/loss count
	const updateBotStats = (botId, win) => {
		setBots((prevBots) =>
			prevBots.map((bot) => {
				if (bot.id === botId) {
					bot.updateStats(win);
				}
				return bot;
			})
		);
	};

	const checkOutcome = (bot1, bot2) => {
		// Determine the earliest timestamp
		const earliestTimestamp = Math.min(bot1.timestamp, bot2.timestamp);

		const firstBot = bot1.timestamp === earliestTimestamp ? bot1 : bot2;
		//bot1 moved first, it's assigned as firstBot
		const secondBot = bot1.timestamp === earliestTimestamp ? bot2 : bot1;
		//bot1 is assigned to the firstBot, then second bot is bot2

		// Calculate the result based on the operator
		let result;
		if (firstBot.operator === 'AND') {
			result = firstBot.binaryValue && secondBot.binaryValue;
		} else if (firstBot.operator === 'OR') {
			result = firstBot.binaryValue || secondBot.binaryValue;
		} else if (firstBot.operator === 'NOR') {
			result = !(firstBot.binaryValue || secondBot.binaryValue);
		} else if (firstBot.operator === 'XOR') {
			console.log('xor');
			result = firstBot.binaryValue !== secondBot.binaryValue;
			// If the binary values are different, the result is true (1),
			// if they are the same, the result is false (0).
		} else {
			result = null; //default result
		}

		// if outcome is true winner is always the first bot, otherwise it's a tie
		const outcome = result ? firstBot.name : 'tie';

		// Update the battle logs
		setBattleLogs((prevLogs) => [
			...prevLogs,
			{
				bots: [bot1.name, bot2.name],
				winner: outcome === 'tie' ? 'tie' : outcome,
				bot1BinaryValue: bot1.binaryValue,
				bot1Operator: bot1.operator,
				bot2BinaryValue: bot2.binaryValue,
				bot2Operator: bot2.operator,
			},
		]);

		return outcome;
	};

	// Defining the context values
	const contextValue = {
		gameState,
		setGameState,
		bots,
		setBots,
		addBot,
		removeBot,
		updateBotStats,
		checkOutcome,
		battleLogs,
	};

	// Provide the context value to children components
	return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
