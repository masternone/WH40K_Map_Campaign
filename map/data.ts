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
    [2, 'f'],
  ],
  forest: [
    [8, 1],
    ['c', 'd'],
    ['c', 'e'],
    ['e', 'f'],
  ],
  plain: [
    [1, 1],
    [2, 2],
    [7, 8],
  ],
  desert: [
    [7, 7],
    [8, 0],
  ],
  oceans: [],
};

export const enhancements: HexData = {
  factory: [
    [1, 2],
    [1, 'f'],
    [9, 'f'],
  ],
  fortification: [['e', 'f']],
};

export const ownership: HexData = {
  'dewayne-bailiff': [['f', 0]],
  'edward-grant': [
    [1, 1],
    [1, 2],
    [2, 2],
  ],
  'jayson-rittersdorf': [
    [8, 0],
    [8, 1],
  ],
  'joel-david': [[9, 'f']],
  'jaleh-noah': [
    [1, 'f'],
    [2, 'f'],
  ],
  'rob-mountney': [['e', 'f']],
  'jon-arford': [
    [7, 7],
    [7, 8],
  ],
  'shad-feenstra': [
    ['c', 'd'],
    ['c', 'e'],
  ],
};
export const orderOfBattles: HexData = {
  'dewayne-bailiff': [['f', 0, '-- move (1/3']],
  'edward-grant': [
    [1, 2, 'Tzican Infiltrators -- Garrison'],
    [2, 2, 'The Changing March -- Garrison'],
  ],
  'joel-david': [[9, 'f', '-- move (2/3) -- Garrison']],
  'jaleh-noah': [
    [1, 'f', '-- Garrison'],
    [2, 'f', '-- Garrison'],
  ],
  'jayson-rittersdorf': [[8, 1, ' -- Garrison']],
  'rob-mountney': [['e', 'f', ' -- Garrison']],
  'jon-arford': [[7, 8, ' -- Garrison']],
  'shad-feenstra': [['c', 'd', '-- Garrison']],
};
