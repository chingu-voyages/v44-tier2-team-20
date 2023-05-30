import React, { createContext, useState } from 'react';
import Bot from './Bot.js'

const GameContext = createContext();

// State for game settings
const GameProvider = ({ children }) => {
  const [gameSettings, setGameSettings] = useState({
      speed: 0, 
      operator: null,
  });

  // State for game state
  const [gameState, setGameState] = useState({
      on: false
  });

  // State for bots
  const [bots, setBots] = useState([]);

  // Function to add a new bot (id generated in class via uuid)
  const addBot = (bot) => {
    const newBot = new Bot(bot.name, bot.binaryValue, bot.direction, bot.wins, bot.losses)
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

  // Defining the context values
  const contextValue = {
    gameSettings,
    setGameSettings,
    gameState,
    setGameState,
    bots,
    addBot,
    removeBot,
    updateBotStats,
  };

  // Provide the context value to children components
  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider};