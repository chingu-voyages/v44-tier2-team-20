import React, { useContext, useEffect, useState, useRef } from "react";
import { GameContext } from "../GameContext/GameContext";
import styles from "./arena.module.css";

function Arena(props) {
  const { bots, setBots, gameState, setGameState, checkOutcome, updateBotStats, removeBot } = useContext(GameContext);
  const [matrix, setMatrix] = useState([]);
  const intervalIdsRef = useRef([]);

  const toggleGame = () => {
    setGameState(!gameState);
    updateMatrix(bots);
  };

  const moveBot = (bot) => {
    setBots((prevBots) => {
      const updatedBots = prevBots.map((updatedBot) => {
        if (updatedBot.id === bot.id) {
          const { rowIndex, columnIndex } = updatedBot.coordinates;
          let newRow = rowIndex;
          let newColumn = columnIndex;

          // Update coordinates based on direction
          switch (bot.direction) {
            case "North":
              newRow = rowIndex - 1;
              break;
            case "South":
              newRow = rowIndex + 1;
              break;
            case "East":
              newColumn = columnIndex + 1;
              break;
            case "West":
              newColumn = columnIndex - 1;
              break;
            default:
              break;
          }

          if (newRow >= 0 && newRow < 8 && newColumn >= 0 && newColumn < 8) {
            const updatedCoordinates = { rowIndex: newRow, columnIndex: newColumn };
            const updatedTimestamp = Date.now();

            return { ...updatedBot, coordinates: updatedCoordinates, timestamp: updatedTimestamp };
          } else {
            // Change bot's direction if it hits the wall
            console.log('wall');
            let directions = ['North', 'South', 'East', 'West'];

            switch (`${newRow},${newColumn}`) {
              case '0,7':
                directions = ['South', 'West'];
                break;
              case '0,0':
                directions = ['South', 'East'];
                break;
              case '7,7':
                directions = ['North', 'West'];
                break;
              case '7,0':
                directions = ['North', 'East'];
                break;
              default:
                break;
            }

            const newDirection = directions.filter((direction) => direction !== bot.direction);
            const randomIndex = Math.floor(Math.random() * newDirection.length);
            const newBotDirection = newDirection[randomIndex];
            // experimental feature: bots change binary on wall hit, as some game states will only tie (never end)
            const newBinary = Math.round(Math.random()) 

            return { ...updatedBot, direction: newBotDirection, binaryValue: newBinary };
          }
          
        }
        return updatedBot;
      });

       // Updates matrix with new bot positions and checks for winner
    const winner = checkOutcome(updatedBots[0], updatedBots[1])
    console.log(winner)
          if (winner === "tie") {
            updateMatrix(updatedBots);
            return updatedBots;
          } else if (winner) {
            const newBots = updatedBots.filter((bot) => bot.id === winner);
            // Can get these function to work to update bots... Help? lol
            // updateBotStats(winner, true);
            // removeBot(winner)
            setGameState(!gameState);
            setTimeout(() => {
              setBots(newBots);
              updateMatrix(newBots);
              console.log(bots);
            },500)
            return updatedBots;
          } else {
            updateMatrix(updatedBots);
            return updatedBots;
          }
  });
};

  const updateMatrix = (botArray = bots) => {
    const updatedMatrix = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null));

    botArray.forEach((bot) => {
      const { rowIndex, columnIndex } = bot.coordinates;
      updatedMatrix[rowIndex][columnIndex] = (
        <div className={styles["bot-container"]}>
          <p className={styles["bot-label"]} style={{ backgroundColor: bot.labelColor }}>
            {bot.name}
          </p>
          <img src={bot.image} alt={bot.name} className={styles["bot-image"]} />
        </div>
      );
          });

    setMatrix(updatedMatrix);
  };

useEffect(() => {
const moveBotWithDelay = (bot) => {
  const intervalId = setInterval(() => {
  setTimeout(() => moveBot(bot),500)
  }, 700 - bot.speed * 2);

  intervalIdsRef.current.push(intervalId);
};

const clearIntervals = () => {
  intervalIdsRef.current.forEach((intervalId) => {
    clearInterval(intervalId);
  });
  intervalIdsRef.current = [];
};

if (gameState) {
  bots.forEach((bot) => {
    moveBotWithDelay(bot);
  });
} else {
  clearIntervals();
}

return clearIntervals;
}, [gameState, bots]);

return (
      <div className={styles.container}>
          <button onClick={toggleGame}>{gameState ? "Stop" : "Start"} Game</button>
        <div className={styles["grid-container"]}>
            {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((cell, columnIndex) => (
          <div key={columnIndex} className={styles.cell}>
            {cell}
          </div>
            ))}
          </div>
          ))}
        </div>
      </div>
);
}

export default Arena;