import { v4 as uuidv4 } from 'uuid';

class Bot {
  constructor(name, binaryValue, image, direction) {
    this.id = uuidv4();
    this.name = name;
    this.image= image;
    this.binaryValue = binaryValue;
    this.direction = direction;
    this.coordinates = [row[index]];
    this.speed = 0;
    this.wins = 0;
    this.losses = 0;
  }

  // Method to update win/loss counts
  updateStats(win) {
    if (win) {
      this.wins++;
    } else {
      this.losses++;
    }
  }
  
  // Method to update name
  setName(name) {
    this.name = name;
  }

  // Method to update image
  setImage(image) {
    this.image = image;
  }

  // Method to set binary value
  setBinaryValue(binaryValue) {
    this.binaryValue = binaryValue;
  }

  // Method to set direction
  setDirection(direction) {
    this.direction = direction;
  } 

   // Method to set coordinates
  setCoordinates(row,index) {
    this.coordinates = [row[index]];
  }

  // Method to set speed 
  setSpeed(speed) {
    this.speed = speed;
  }

  // Method to retrieve the binary value of the bot (to use in Arena)
  getBinaryValue() {
    return this.binaryValue;
  }

  // Method to get coordinates
  getCoordinates(){
    return this.coordinates;
  }

  // Method to get speed 
  getSpeed(){
    return this.speed;
  }

  // Method to retrieve losses of the bot (to use in Leaderboard)
  getWinCount() {
    return this.wins;
  }

  // Method to retrieve Wins of the bot (to use in Leaderboard)
  getLossCount() {
    return this.losses;
  }
}

export default Bot
