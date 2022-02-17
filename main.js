'use strict';

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  set appetizers(newAppetizers) {
    this._courses.appetizers = newAppetizers;
  },
  set mains(newMains) {
    this._courses.mains = newMains;
  },
  set desserts(newDesserts) {
    this._courses.desserts = newDesserts;
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = { name: dishName, price: dishPrice };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const random = Math.floor(Math.random() * dishes.length);
    return dishes[random];
  },
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const total = appetizer.price + main.price + dessert.price;
    return `${appetizer.name},${main.name},${dessert.name} and total is ${total}`;
  },
};

menu.addDishToCourse('appetizers', 'Bruschetta', 3.0);
menu.addDishToCourse('mains', 'Carbonara', 12.0);
menu.addDishToCourse('desserts', 'Tiramisu', 5.0);

const meal = menu.generateRandomMeal();
console.log(meal);
