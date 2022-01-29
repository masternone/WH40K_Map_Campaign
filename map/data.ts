import { HexData } from './definitions';

export const topographyData: HexData = {
  volcano: [
    [0, 0],
    [0, 'f'],
    ['f', 0],
    ['f', 'f'],
  ],
  mountain: [[9, 'f']],
  hill: [[1, 2]],
  forest: [],
  plain: [[1, 1]],
  desserts: [],
  oceans: [],
};

export const ownership: HexData = {
  'edward-grant': [
    [1, 1],
    [1, 2],
  ],
  'jayson-rittersdorf': [],
  'joel-david': [[9, 'f']],
};
export const orderOfBattles: HexData = {
  'edward-grant': [[1, 2, 'Tzican Infiltrators -- Garrison']],
  'joel-david': [[9, 'f', '-- build fortification (1/2)']],
  'jayson-rittersdorf': [],
};
