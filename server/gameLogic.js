const req = require('express/lib/request');
const WORDS = require('./wordlist');
const activeSessions = {};

const gameLogic = {};

gameLogic.createSession = function (name, id) {
  if (activeSessions[name]) return;
  activeSessions[name] = new WardleSession();
}

gameLogic.deleteSession = function (name) {
  console.log('Deleting', name + '...');
  delete activeSessions[name];
  console.log(name, 'deleted!');
}

gameLogic.addPlayer = function (room, player) {
  activeSessions[room].players[player] = true;
}

gameLogic.test = function (name, entry) {
  return activeSessions[name].testWord(entry);
}

gameLogic.deletePlayer = function (room, player) {
  if (activeSessions[room]) {
    delete activeSessions[room].players[player];
    if (Object.keys(activeSessions[room].players).length === 0) {
      gameLogic.deleteSession(room);
    }
  }
}

gameLogic.getSession = function (room) {
  return activeSessions[room].players;
}
class WardleSession {
  constructor() {
    this.word = WORDS[Math.floor(Math.random() * WORDS.length)];
    this.players = {};
    console.log(this.word);
  }

  testWord = function (entry) {
    if (!WORDS.includes(entry.join('').toLowerCase())) return 'notaword';
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