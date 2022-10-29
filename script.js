"use strict";
let cat = {
  name: "Саймон",
  age: 2,
  weight: 3,
  feeding: function () {
    if (this.weight < 4) {
      this.weight++;
      alert(this.weight);
    } else {
      alert(this.weight);
    }
  },
  diet: function () {
    if (this.weight > 4) {
      this.weight--;
      alert(this.weight);
    } else {
      alert(this.weight);
    }
  },
  toString: function () {
    return "Кот " + this.name + " весит " + this.weight + " кг";
  },
};

cat.feeding();
cat.diet();
alert(cat);
