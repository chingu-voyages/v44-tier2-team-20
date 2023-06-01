import { v4 as uuidv4 } from 'uuid';

class Bot {

  constructor(name, image, binaryValue, operator, direction) {
    this.id = uuidv4();
    this.name = name;
    this.image= image;
    this.labelColor= this.setLabelColor();
    this.binaryValue = binaryValue;
    this.operator = operator;
    this.direction = direction;
    this.coordinates = this.setCoordinates();
    this.timestamp = Date.now();
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

  // Creates random color for bot label
  setLabelColor() {
      var r = Math.floor(Math.random() * 256); 
      var g = Math.floor(Math.random() * 256); 
      var b = Math.floor(Math.random() * 256); 
    
      return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }

  // Method to set binary value
  setBinaryValue(binaryValue) {
    this.binaryValue = binaryValue;
  }

   // Method to set operator
  setOperator(operator) {
     this.operator = operator;
  }
  

  // Method to set direction
  setDirection(direction) {
    this.direction = direction;
  } 

   // Method to set initial coordinates based on direction
  setCoordinates() {
    const directionTable = {
      'North': (7,3), 
      'South': (0,3),
      'East': (3,7),
      'West': (3,0)
    }
    return directionTable[this.direction];
  }

  // Method to upadte time of bot creation and movement
  updateTimestamp() {
    this.timestap = Date.now();
  }
  
  // Method to set speed 
  setSpeed(speed) {
    this.speed = speed;
  }

  // Method to retrieve the binary value of the bot (to use in Arena)
  getBinaryValue() {
    return this.binaryValue;
  }


  getOperator() {
    return this.operator;
  }

  // Method to get coordinates
  getCoordinates(){
    return this.coordinates;
  }

  // Method to get timestamp
  getTimestap() {
    return this.timestap;
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
