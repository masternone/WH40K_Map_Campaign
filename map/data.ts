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
    [3, 3],
    [9, 1],
    ['e', 1],
  ],
  forest: [
    [8, 1],
    ['a', 'f'],
    ['c', 'd'],
    ['c', 'e'],
    ['d', 'd'],
    ['d', 'e'],
    ['e', 'f'],
    ['f', 'e'],
  ],
  plain: [
    [1, 1],
    [2, 2],
    [2, 3],
    [7, 8],
    [7, 9],
    [7, 'a'],
  ],
  desert: [
    [7, 7],
    [8, 0],
  ],
  ocean: [],
};

export const enhancements: HexData = {
  factory: [
    [1, 2],
    [1, 'f'],
    [9, 'f'],
  ],
  fortification: [
    [2, 'f'],
    ['a', 'f'],
    ['e', 'f'],
  ],
};

export const ownership: HexData = {
  'dewayne-bailiff': [
    ['e', 1],
    ['f', 0],
  ],
  'edward-grant': [
    [1, 1],
    [1, 2],
    [2, 2],
    [2, 3],
    [3, 3],
  ],
  'jayson-rittersdorf': [
    [8, 0],
    [8, 1],
    [9, 1],
  ],
  'joel-david': [
    [9, 'f'],
    ['a', 'f'],
  ],
  'jaleh-noah': [
    [1, 'f'],
    [2, 'f'],
  ],
  'rob-mountney': [
    ['e', 'f'],
    ['f', 'e'],
  ],
  'jon-arford': [
    [7, 7],
    [7, 8],
    [7, 9],
    [7, 'a'],
  ],
  'shad-feenstra': [
    ['c', 'd'],
    ['c', 'e'],
  ],
  'victor-romine': [
    ['d', 'd'],
    ['d', 'e'],
  ],
};
export const orderOfBattles: HexData = {
  'dewayne-bailiff': [['e', 1, 'Sixth Plague Company -- build factory (0/2']],
  'edward-grant': [
    [3, 3, 'Tzican Infiltrators -- Garrison'],
    [2, 2, 'The Changing March -- build command pavilion (2/3)'],
  ],
  'joel-david': [
    ['a', 'f', 'Company One -- Garrison'],
    [9, 'f', 'Company Two -- Garrison'],
  ],
  'jaleh-noah': [
    [2, 'f', 'War band One -- Garrison, War band Two -- move (1/2)'],
  ],
  'jayson-rittersdorf': [[9, 1, ' Plague Company One -- build factory (1/2)']],
  'rob-mountney': [['f', 'e', ' -- Garrison']],
  'jon-arford': [[7, 'a', 'Troupe One -- Garrison']],
  'shad-feenstra': [['c', 'd', '-- Garrison']],
  'victor-romine': [['d', 'd', '-- Garrison']],
};
