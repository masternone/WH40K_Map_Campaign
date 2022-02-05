import { HexData } from './definitions';

export const topographyData: HexData = {
  volcano: [
    [0, 0],
    [0, 'f'],
    ['f', 0],
    ['f', 'f'],
  ],
  mountain: [[9, 'f']],
  hill: [
    [1, 2],
    [1, 'f'],
  ],
  forest: [
    ['c', 'd'],
    ['c', 'e'],
    ['e', 'f'],
  ],
  plain: [[1, 1]],
  desert: [
    [7, 7],
    [8, 0],
  ],
  oceans: [],
};

export const enhancements: HexData = {
  factory: [],
  fortification: [['e', 'f']],
};

export const ownership: HexData = {
  'edward-grant': [
    [1, 1],
    [1, 2],
  ],
  'jayson-rittersdorf': [[8, 0]],
  'joel-david': [[9, 'f']],
  'jaleh-noah': [[1, 'f']],
  'rob-mountney': [['e', 'f']],
  'jon-arford': [[7, 7]],
  'shad-feenstra': [
    ['c', 'd'],
    ['c', 'e'],
  ],
};
export const orderOfBattles: HexData = {
  'edward-grant': [[1, 2, 'Tzican Infiltrators -- Garrison']],
  'joel-david': [[9, 'f', '-- build factory (1/2)']],
  'jaleh-noah': [[1, 'f', '--build factory (1/2)']],
  'jayson-rittersdorf': [[8, 0, ' -- move (1/2)']],
  'rob-mountney': [['e', 'f', ' -- Garrison']],
  'jon-arford': [[7, 7, ' -- move (1/2)']],
  'shad-feenstra': [['c', 'd', '-- Garrison']],
};
