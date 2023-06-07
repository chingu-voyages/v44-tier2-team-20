import React, { createContext, useState } from 'react';
import Bot from './Bot.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
	// State for game state
	const [gameState, setGameState] = useState(false);

	// State for bots
	const [bots, setBots] = useState([]);

	// Function to add a new bot (id generated outside)
	const addBot = (bot) => {
		const existingBotIndex = bots.findIndex((b) => b.formId === bot.formId);

		if (existingBotIndex !== -1) {
			// Replace the existing bot with the new bot
			setBots((prevBots) => {
				const newBots = [...prevBots];
				newBots[existingBotIndex] = bot;
				return newBots;
			});
		} else {
			// Add the new bot
			setBots((prevBots) => [...prevBots, bot]);
		}
	};

	// Function to remove a bot
	const removeBot = (botId) => {
		setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
	};

	// Function to update a bot's win/loss count
	// Works if you create a new bot object, but can't update old...
	const updateBotStats = (botId, win) => {
		console.log(botId);
		console.log(win);
		setBots((prevBots) =>
			prevBots.map((bot) => {
				if (bot.id === botId) {
					bot.updateStats(win);
					return bot;
				}
				return bot;
			})
		);
	};

	// Updated checkOutcome to determine if bots are in the same spot and returns id instead of Name.
	const checkOutcome = (bot1, bot2) => {
		// Determine the earliest timestamp
		const { rowIndex: rowIndex1, columnIndex: columnIndex1 } = bot1.coordinates;
		const { rowIndex: rowIndex2, columnIndex: columnIndex2 } = bot2.coordinates;
		if (rowIndex1 === rowIndex2 && columnIndex1 === columnIndex2) {
			const earliestTimestamp = Math.min(bot1.timestamp, bot2.timestamp);

			//bot1 moved first, it's assigned as firstBot
			const firstBot = bot1.timestamp === earliestTimestamp ? bot1 : bot2;
			//bot1 is assigned to the firstBot, then second bot is bot2
			const secondBot = bot1.timestamp === earliestTimestamp ? bot2 : bot1;

			// Calculate the result based on the operator
			let result;
			if (firstBot.operator === 'AND') {
				result = firstBot.binaryValue && secondBot.binaryValue;
			} else if (firstBot.operator === 'OR') {
				result = firstBot.binaryValue || secondBot.binaryValue;
			} else if (firstBot.operator === 'NOR') {
				result = !(firstBot.binaryValue || secondBot.binaryValue);
			} else if (firstBot.operator === 'XOR') {
				result = firstBot.binaryValue !== secondBot.binaryValue;
				// If the binary values are different, the result is true (1),
				// if they are the same, the result is false (0).
			} else {
				result = null; //default result
			}

			// if outcome is true winner is always the first bot, otherwise it's a tie
			const outcome = result ? firstBot.id : 'tie';
			return outcome;
		} else return null;
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
	};

	// Provide the context value to children components
	return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
