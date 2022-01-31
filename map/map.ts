import { Hex } from './definitions';
import { orderOfBattles, ownership, topographyData } from './data';
import {
  COMMAND_PAVILION,
  CULTIVATION,
  DESERT,
  FACTORY,
  FOREST,
  FORTIFICATION,
  HILL,
  MOUNTAIN,
  OCEAN,
  PLAIN,
  VOLCANO,
} from './constants';

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
const analyseMap = (): void => {
  const container = document.getElementsByClassName('container');
  const names: string[] = Object.keys(ownership);
  const table = document.createElement('table');
  const tableHeader = document.createElement('thead');
  const tableRowHeader = document.createElement('tr');
  const nameHeader = document.createElement('th');
  nameHeader.append(document.createTextNode('Name'));
  const totalHeader = document.createElement('th');
  totalHeader.append(document.createTextNode('Total'));
  const resourcesHeader = document.createElement('th');
  resourcesHeader.append(document.createTextNode('Resources'));
  const resourcesSpentHeader = document.createElement('th');
  resourcesSpentHeader.append(document.createTextNode('Resources Spent'));
  tableRowHeader.append(nameHeader);
  tableRowHeader.append(resourcesHeader);
  tableRowHeader.append(resourcesSpentHeader);
  tableRowHeader.append(totalHeader);
  tableHeader.append(tableRowHeader);
  table.append(tableHeader);
  container[0].append(table);

  names.forEach((name) => {
    const rowName = name;
    let rowResources = 0;
    let rowResourcesSpent = 0;
    let rowTotal = 0;
    const elements: HTMLCollectionOf<Element> =
      document.getElementsByClassName(name);
    console.log({ elements });
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.forEach((elementClass) => {
        switch (elementClass) {
          case 'ocean':
            rowResources += OCEAN.resources;
            rowTotal += OCEAN.resources;
            break;
          case 'desert':
            rowResources += DESERT.resources;
            rowTotal += DESERT.resources;
            break;
          case 'plain':
            rowResources += PLAIN.resources;
            rowTotal += PLAIN.resources;
            break;
          case 'forest':
            rowResources += FOREST.resources;
            rowTotal += FOREST.resources;
            break;
          case 'hill':
            rowResources += HILL.resources;
            rowTotal += HILL.resources;
            break;
          case 'mountain':
            rowResources += MOUNTAIN.resources;
            rowTotal += MOUNTAIN.resources;
            break;
          case 'volcano':
            rowResources += VOLCANO.resources;
            rowTotal += VOLCANO.resources;
            break;
          case 'factory':
            rowResourcesSpent += FACTORY.cost;
            rowTotal -= FACTORY.cost;
            break;
          case 'cultivation':
            rowResourcesSpent += CULTIVATION.cost;
            rowTotal -= CULTIVATION.cost;
            break;
          case 'fortification':
            rowResourcesSpent += FORTIFICATION.cost;
            rowTotal -= FORTIFICATION.cost;
            break;
          case 'command-pavilion':
            rowResourcesSpent += COMMAND_PAVILION.cost;
            rowTotal -= COMMAND_PAVILION.cost;
            break;
          default:
          // do nothing
        }
      });
    }
    const tableBody = document.createElement('tbody');
    const tableRowBody = document.createElement('tr');
    const nameBody = document.createElement('td');
    nameBody.append(document.createTextNode(rowName));
    const totalBody = document.createElement('td');
    totalBody.append(document.createTextNode(rowTotal.toString()));
    const resourcesBody = document.createElement('td');
    resourcesBody.append(document.createTextNode(rowResources.toString()));
    const resourcesSpentBody = document.createElement('td');
    resourcesSpentBody.append(
      document.createTextNode(rowResourcesSpent.toString())
    );
    tableRowBody.append(nameBody);
    tableRowBody.append(resourcesBody);
    tableRowBody.append(resourcesSpentBody);
    tableRowBody.append(totalBody);
    tableBody.append(tableRowBody);
    table.append(tableBody);
  });
};
setTimeout(() => {
  build();
  applyTopography();
  applyOwnership();
  analyseMap();
}, 1000);
