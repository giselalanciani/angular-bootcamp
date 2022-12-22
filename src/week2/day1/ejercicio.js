// Now it's your turn to make some changes
// - Refactor the previous code to use getters and settters
// - Add at least 2 more properties
// - Add at least 2 more methods
// - Create a new class that inherits from Animal
// - Override one of the methods you previously defined

// ****************************************************
// ****               BONUS POINTS                 ****
// ****      MAKE A 2nd VERSION USING ES6 CLASSES  ****
// ****                                            ****
// ****************************************************

var Animal = function (typeValue) {
  this._type = typeValue;
};

Object.defineProperty(Animal.prototype, "type", {
  get: function () {
    return this._type;
  },
  set: function (value) {
    this._type = value;
  },
});

Animal.prototype.talk = function () {
  console.log(`Hi, I'm an Animal, but also a ${this.type}`);
};

let rabbit = new Animal("Rabbit");
rabbit.talk();
