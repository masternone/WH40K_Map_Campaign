import { Hex } from './definitions';
import {
  enhancements,
  orderOfBattles,
  ownership,
  topographyData,
} from './data';
import { analyseMap } from './analyseMap';
import { TYPOGRAPHY_ARRAY } from './constants';

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
  });
};
const applyElement = (list: Hex[], className: string): void => {
  list.forEach((coordinates: Hex) => {
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName(
      `hexagon--${coordinates[0]}-${coordinates[1]}`
    );
    const enhancement = document.createElement('div');
    enhancement.setAttribute('class', className);
    if (coordinates.length === 3 && typeof coordinates[2] === 'string') {
      enhancement.textContent = coordinates[2];
    }
    elements[0].append(enhancement);
  });
};
const applyTopography = (): void => {
  const locations: string[] = Object.keys(topographyData);
  locations.forEach((location) => {
    applyClass(topographyData[location], location);
    applyClass(topographyData[location], 'topography');
    for (let i = 0; i < 4 - TYPOGRAPHY_ARRAY[location].enhancements; i++) {
      applyElement(topographyData[location], `topography ${location}`);
    }
  });
};
const applyOwnership = (): void => {
  const names: string[] = Object.keys(ownership);
  names.forEach((name) => {
    applyClass(ownership[name], name);
    applyClass(orderOfBattles[name], 'order-of-battle');
    applyElement(orderOfBattles[name], 'order-of-battle');
  });
};
const applyEnhancements = (): void => {
  const buildings: string[] = Object.keys(enhancements);
  buildings.forEach((building) => {
    applyClass(enhancements[building], 'enhancements');
    applyClass(enhancements[building], building);
    applyElement(enhancements[building], `enhancements ${building}`);
  });
};
setTimeout(() => {
  build();
  applyTopography();
  applyEnhancements();
  applyOwnership();
  analyseMap();
}, 1000);
