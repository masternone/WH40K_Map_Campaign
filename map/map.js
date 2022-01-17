const build = () => {
  const size = 16;
  const container = document.getElementsByClassName('container');
  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < size; j++) {
      let element = document.createElement('div');
      element.setAttribute('class', 'row');
      for (let k = 0; k < size; k++) {
        let jText = j.toString(size);
        let kText = k.toString(size);
        let hex = document.createElement('div');
        let text = document.createTextNode(`${jText},${kText}`);
        hex.append(text);
        hex.setAttribute('class', `hexagon hexagon--${jText}-${kText}`);
        element.append(hex);
      }
      container[i].append(element);
    }
  }
};
const applyClass = (list, className) => {
  list.forEach((coordinates) => {
    const elements = document.getElementsByClassName(
      `hexagon--${coordinates[0]}-${coordinates[1]}`
    );
    elements[0].classList.add(className);
    if (coordinates.length === 3) {
      elements[0].setAttribute('data-order-of-battle', coordinates[2]);
    }
  });
};
const topography = () => {
  const volcanos = [
    [0, 0],
    [0, 'f'],
    ['f', 0],
    ['f', 'f'],
  ];
  const mountains = [];
  const hills = [[1, 2]];
  const forests = [];
  const plains = [[1, 1]];
  const desserts = [];
  const oceans = [];
  applyClass(volcanos, 'volcano');
  applyClass(mountains, 'mountain');
  applyClass(hills, 'hill');
  applyClass(forests, 'forest');
  applyClass(plains, 'plain');
  applyClass(desserts, 'dessert');
  applyClass(oceans, 'ocean');
};
const ownership = () => {
  const edwardGrant = [
    [1, 1],
    [1, 2],
  ];
  const edwardGrantOrderOfBattle = [[1, 2, 'Tzican Infiltrators -- Garrison']];
  applyClass(edwardGrant, 'edward-grant');
  applyClass(edwardGrantOrderOfBattle, 'order-of-battle');
};
setTimeout(() => {
  build();
  topography();
  ownership();
}, 1000);
