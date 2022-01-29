import { Hex } from './definitions';
import { orderOfBattles, ownership, topographyData } from './data';

const build = (): void => {
  const size = 16;
  const container = document.getElementsByClassName('container');
  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < size; j++) {
      const element = document.createElement('div');
      element.setAttribute('class', 'row');
      for (let k = 0; k < size; k++) {
        const jText = j.toString(size);
        const kText = k.toString(size);
        const hex = document.createElement('div');
        const text = document.createTextNode(`${jText},${kText}`);
        hex.append(text);
        hex.setAttribute('class', `hexagon hexagon--${jText}-${kText}`);
        element.append(hex);
      }
      container[i].append(element);
    }
  }
};
const applyClass = (list: Hex[], className: string): void => {
  list.forEach((coordinates: Hex) => {
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName(
      `hexagon--${coordinates[0]}-${coordinates[1]}`
    );
    elements[0].classList.add(className);
    if (coordinates.length === 3 && typeof coordinates[2] === 'string') {
      elements[0].setAttribute('data-order-of-battle', coordinates[2]);
    }
  });
};
const applyTopography = (): void => {
  const locations: string[] = Object.keys(topographyData);
  locations.forEach((location) => {
    applyClass(topographyData[location], location);
  });
};
const applyOwnership = (): void => {
  const names: string[] = Object.keys(ownership);
  names.forEach((name) => {
    applyClass(ownership[name], name);
    applyClass(orderOfBattles[name], 'order-of-battle');
  });
};
setTimeout(() => {
  build();
  applyTopography();
  applyOwnership();
}, 1000);
