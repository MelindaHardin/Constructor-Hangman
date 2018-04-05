//This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

var Letter = function (character) {
  this.character = character;
  this.underscore = false;
  this.guess = function () {
    if (this.underscore === false) {
      return "_";
    } else {
      return this.character;
    }
  };
  this.check = function (letter) {
    if (this.letter === character) {
      this.underscore = true;
      return true;
    } else {
      return false;
    }
  };
};

module.export = Letter;