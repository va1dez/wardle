const req = require('express/lib/request');
const WORDS = require('./wordlist');
const DICT = require('./wordlist-check');
const activeSessions = {};

const gameLogic = {};

gameLogic.activeSessions = {};

gameLogic.createSession = function (name, players) {
  if (gameLogic.activeSessions[name]) return;
  gameLogic.activeSessions[name] = new WardleSession(players);
}

gameLogic.deleteSession = function (name) {
  console.log('Deleting', name + '...');
  delete gameLogic.activeSessions[name];
  console.log(name, 'deleted!');
}

gameLogic.addPlayer = function (room, player) {
  gameLogic.activeSessions[room].players[player] = true;
}

gameLogic.test = function (name, entry) {
  return gameLogic.activeSessions[name].testWord(entry);
}

gameLogic.deletePlayer = function (room, player) {
  if (gameLogic.activeSessions[room]) {
    delete gameLogic.activeSessions[room].players[player];
    if (Object.keys(gameLogic.activeSessions[room].players).length === 0) {
      gameLogic.deleteSession(room);
    }
  }
}

gameLogic.getSession = function (room) {
  return gameLogic.activeSessions[room].players;
}
class WardleSession {
  constructor(players) {
    this.word = WORDS[Math.floor(Math.random() * WORDS.length)];
    this.players = {};
    console.log(this.word);
    this.playerCount = players;
  }

  testWord = function (entry) {
    if (!DICT.includes(entry.join('').toLowerCase())) return 'notaword';
    const testWord = this.word.split('');
    const result = new Array(5);

    entry.forEach((ele, index) => {
      if (ele.toLowerCase() === testWord[index]) {
        testWord[index] = null;
        result[index] = 'G';
      }
    })

    entry.forEach((ele, index) => {
      if (!ele) return;
      if (result[index] === 'G') return;

      let found = testWord.findIndex((el) => el === ele.toLowerCase());
      if (found >= 0) {
        testWord[found] = null;
        result[index] = 'C';
      } else {
        result[index] = 'X';
      }
    })


    return result;
  }

  addPlayer = function (player) {
    if (this.players.length < 4) {
      this.players.push(player);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = gameLogic;