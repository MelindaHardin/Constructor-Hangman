//This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore)depending on whether or not the user has guessed the letter. That means the constructor should define:
var Letter = function (character) {
  //A string value to store the underlying character for the letter
  this.character = character;

  //A boolean value that stores whether that letter has been guessed yet
  this.underscore = false;

  //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
  this.guess = function () {
    if (this.underscore === false) {
      return "_";
    } else {
      return this.character;
    }
  };

  //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.check = function (letter) {
    if (this.letter === character) {
      this.underscore = true;
      return true;
    } else {
      return false;
    }
  };
  l
};
//Letter.js should not require any other files.
//Word.js should only require Letter.js
module.export = Letter;