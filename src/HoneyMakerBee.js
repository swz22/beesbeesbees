var HoneyMakerBee = function() {
  Bee.call(this); // creates pro
  this.age = 10;
  this.color = 'yellow';
  this.job = 'make honey'
  this.honeyPot = 0;
};

  HoneyMakerBee.prototype = Object.create(Bee.prototype); // creates
  HoneyMakerBee.prototype.constructor = HoneyMakerBee;

  HoneyMakerBee.prototype.makeHoney = function () {
    this.honeyPot++;
  }

  HoneyMakerBee.prototype.giveHoney = function () {
    this.honeyPot--;
  }

