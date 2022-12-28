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

var Animal = function (typeValue, sex, age) {
  this._type = typeValue;
  this._sex = sex;
  this._age = age;
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
  console.log(
    `Hi, I'm an Animal, but also a ${this.type}, I have ${this._age} years and I'm ${this._sex}`
  );
};

Animal.prototype.hunt = function () {
  console.log(`I'm hunting`);
};

Animal.prototype.run = function () {
  console.log(`I'm running`);
};

var Mammal = function (typeValue, sex, age) {
  this._type = typeValue;
  this._sex = sex;
  this._age = age;
};

Mammal.prototype.hunt = function () {
  console.log(`I'm hunting a fish`);
}

Object.setPrototypeOf(Mammal.prototype, Animal.prototype);

let rabbit = new Animal("Rabbit", "male", "2");
rabbit.talk();
rabbit.hunt();
rabbit.run();

let dolphin = new Mammal("dolphin", "female", "4");

dolphin.talk();
dolphin.hunt();
dolphin.run();
