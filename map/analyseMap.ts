import { ownership } from './data';
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

export const analyseMap = (): void => {
  const container = document.getElementsByClassName('container');
  const names: string[] = Object.keys(ownership);
  const table = document.createElement('table');
  const tableHeader = document.createElement('thead');
  const tableRowHeader = document.createElement('tr');
  const colorHeader = document.createElement('th');
  colorHeader.append(document.createTextNode(''));
  const nameHeader = document.createElement('th');
  nameHeader.append(document.createTextNode('Name'));
  const totalHeader = document.createElement('th');
  totalHeader.append(document.createTextNode('Total'));
  const resourcesHeader = document.createElement('th');
  resourcesHeader.append(document.createTextNode('Resources'));
  const resourcesSpentHeader = document.createElement('th');
  resourcesSpentHeader.append(document.createTextNode('Resources Spent'));
  tableRowHeader.append(colorHeader);
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
    const colorBody = document.createElement('td');
    colorBody.append(document.createTextNode(''));
    colorBody.setAttribute('class', rowName);
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
    tableRowBody.append(colorBody);
    tableRowBody.append(nameBody);
    tableRowBody.append(resourcesBody);
    tableRowBody.append(resourcesSpentBody);
    tableRowBody.append(totalBody);
    tableBody.append(tableRowBody);
    table.append(tableBody);
  });
};
