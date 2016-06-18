window.Game = require("./lib/notes");
window.StarMeter = require("./lib/starMeter");
window.Sounds = require("./lib/sounds");
window.Modals = require("./lib/modals");
// require("./lib/midi.js");

function onWin () {
  Game.stop();
  Sounds.applause.play();
  Modals.win.open();
}

function onLose () {
  Game.stop();
  Sounds.music.pause();
  Sounds.boo.play();
  Modals.lose.open();
}

function onRestart () {
  Modals.close();
  StarMeter.reset();
  Game.start();
  setTimeout(function() {
    Sounds.music.currentTime = 0;
    Sounds.music.play();
  }, 200);
}

Sounds.setMusicEndCallback(onWin);
StarMeter.setLoseCallback(onLose);
Modals.setRestartCallback(onRestart);

document.addEventListener("DOMContentLoaded", function () {
  Modals.load.open();
});
