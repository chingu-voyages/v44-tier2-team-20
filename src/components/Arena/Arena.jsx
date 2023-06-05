import React, {useContext, useEffect, useState} from "react";
import { GameContext } from "../../context/GameContext/GameContext";
import styles from "./Arena.module.css";

function Arena(props) {
  const { bots, gameState, setBots } = useContext(GameContext);
  const [matrix, setMatrix] = useState([]);
  const [intervalIds, setIntervalIds] = useState([])

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
              newRow = Math.max(0, rowIndex - 1);
              break;
            case "South":
              newRow = Math.min(7, rowIndex + 1);
              break;
            case "East":
              newColumn = Math.min(7, columnIndex + 1);
              break;
            case "West":
              newColumn = Math.max(0, columnIndex - 1);
              break;
            default:
              break;
          }

          const updatedCoordinates = { rowIndex: newRow, columnIndex: newColumn };
  
          return { ...updatedBot, coordinates: updatedCoordinates};
        }
  
        return updatedBot;
      });
      // Updates matrix with new bot positions
      updateMatrix(updatedBots);
      return  updatedBots;
    });
  };

  // Creates matrix for arena
  const updateMatrix = (botArray) => {
    const directions = ['North', 'South', 'East', 'West'];

    const updatedMatrix = Array.from({ length: 8 }, () =>
      Array.from({ length: 8 }, () => 0)
    );

    botArray.forEach((bot) => {
      const { rowIndex, columnIndex } = bot.coordinates;
      // Checking if it hits the end of the matrix to dictate if it should move coordinates
      if (
        rowIndex >= 0 &&
        rowIndex < updatedMatrix.length &&
        columnIndex >= 0 &&
        columnIndex < updatedMatrix[rowIndex].length
      ) {
        // Inputting bot into cell with random color for name label
        updatedMatrix[rowIndex][columnIndex] = (
          <div className={styles["bot-container"]}>
            <p className={styles["bot-label"]} 
            style={{ backgroundColor: bot.labelColor }}>
              {bot.name}
            </p>
            <img
              src={bot.image}
              alt={bot.name}
              className={styles["bot-image"]}
              />
          </div>
        );
      } else {
        // Attempt at changing bot direction on wall it. Needs work right now, as I didn't take into account corners. 
        const newDirection = directions.filter(
          (direction) => direction !== bot.direction
        );
        bot.direction =
          newDirection[Math.floor(Math.random() * newDirection.length)];
      }
    });

    setMatrix(updatedMatrix);
  };

  useEffect(() => {
    // Sets intervals for bot based on speed. 
    function moveBotWithDelay(bot) {
      const intervalId = setInterval(() => {
        moveBot(bot);
      }, 100000 / bot.speed);

      // Takes in interval ids so they can be cleared later
      setIntervalIds((previntervalIds) => [...previntervalIds, intervalId]);
    }

    if (gameState) {
      bots.forEach((bot) => {
        moveBotWithDelay(bot);
      });
    } else {
       // Clears intervals
      intervalIds.forEach((intervalId) => {
        clearInterval(intervalId);
      });
      setIntervalIds([]);
    }
  }, [gameState]);

    return (
      <div className={styles.container}>
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