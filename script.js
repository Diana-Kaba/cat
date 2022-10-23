"use strict";
let cat = {
  name: "Саймон",
  age: 2,
  weight: 3,
  feeding: function () {
    if (cat.weight < 4) {
      cat.weight++;
      alert(cat.weight);
    } else {
      alert(cat.weight);
    }
  },
  diet: function () {
    if (cat.weight > 4) {
      cat.weight--;
      alert(cat.weight);
    } else {
      alert(cat.weight);
    }
  },
  toString: function () {
    return "Кот " + this.name + " весит " + this.weight + " кг";
  },
};

cat.feeding();
cat.diet();
alert(cat);
