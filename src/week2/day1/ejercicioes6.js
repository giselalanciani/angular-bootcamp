class Animal {
  constructor(typeValue, sex, age) {
    this._type = typeValue;
    this._sex = sex;
    this._age = age;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  talk() {
    console.log(
      `Hi, I'm an Animal, but also a ${this.type}, I have ${this._age} years and I'm ${this._sex}`
    );
  }
  hunt() {
    console.log(`I'm hunting`);
  }
  run() {
    console.log(`I'm running`);
  }
}

class Mammal extends Animal {

  constructor(typeValue, sex, age) {
    super (typeValue, sex, age);
    console.log('estoy haciendo otra cosa con este crontrucctor de mammal')
  }
 

  hunt() {
    console.log(`I'm hunting a fish`);
  }
  run() {
    console.log(`I'm swimming so fast`);
  }

}

const rabbit = new Animal("Rabbit", "male", "2");
rabbit.talk();
rabbit.hunt();
rabbit.run();

const dolphin = new Mammal("dolphin", "female", "4");
dolphin.talk();
dolphin.hunt();
dolphin.run();
