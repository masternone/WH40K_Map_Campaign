import { a, b, c, d, e, f } from './constants';
import { HexData } from './definitions';

export const topographyData: HexData = {
  volcano: [
    [0, 0],
    [0, f],
    [f, 0],
    [f, f],
  ],
  mountain: [
    [9, f],
    [3, 2],
    [3, f],
  ],
  hill: [
    [1, 2],
    [1, f],
    [2, f],
    [3, 3],
    [3, e],
    [8, c],
    [9, 1],
    [e, 1],
    [f, 8],
  ],
  forest: [
    [4, 4],
    [8, 1],
    [a, 1],
    [a, f],
    [c, d],
    [c, e],
    [d, c],
    [d, d],
    [d, e],
    [e, f],
    [f, d],
    [f, e],
  ],
  plain: [
    [1, 1],
    [2, 2],
    [2, 3],
    [7, 8],
    [7, 9],
    [7, a],
    [7, b],
    [8, b],
    [c, c],
    [e, e],
  ],
  desert: [
    [7, 7],
    [8, 0],
  ],
  ocean: [],
};

export const enhancements: HexData = {
  cultivation: [[9, 1]],
  'command-pavilion': [
    [2, 2],
    [7, b],
  ],
  factory: [
    [1, 2],
    [1, f],
    [2, f],
    [3, 3],
    [7, a],
    [9, 1],
    [9, f],
    [d, d],
    [e, 1],
    [f, e],
  ],
  fortification: [
    [2, f],
    [a, f],
    [e, f],
  ],
};

export const ownership: HexData = {
  'dewayne-bailiff': [
    [e, 1],
    [f, 0],
  ],
  'edward-grant': [
    [1, 1],
    [1, 2],
    [2, 2],
    [2, 3],
    [3, 2],
    [3, 3],
    [4, 4],
  ],
  'jayson-rittersdorf': [
    [8, 0],
    [8, 1],
    [9, 1],
    [a, 1],
  ],
  'joel-david': [
    [9, f],
    [a, f],
  ],
  'jaleh-noah': [
    [1, f],
    [2, f],
    [3, e],
    [3, f],
  ],
  'rob-mountney': [
    [e, e],
    [e, f],
    [f, d],
    [f, e],
  ],
  'jon-arford': [
    [7, 7],
    [7, 8],
    [7, 9],
    [7, a],
    [7, b],
    [8, b],
    [8, c],
  ],
  'nathaniel-palmer': [[f, 8]],
  'shad-feenstra': [
    [c, d],
    [c, e],
  ],
  'victor-romine': [
    [c, c],
    [d, c],
    [d, d],
    [d, e],
  ],
};
export const orderOfBattles: HexData = {
  'dewayne-bailiff': [[e, 1, 'Sixth Plague Company -- Garrison']],
  'edward-grant': [
    [3, 3, 'Tzican Infiltrators -- Garrison'],
    [3, 2, 'The Changing March -- Move (1/3)'],
    [4, 4, 'Never ending change -- Build Factory (0/2)'],
  ],
  'joel-david': [
    [a, f, 'Company One -- Garrison'],
    [9, f, 'Company Two -- Move (2/3)'],
  ],
  'jaleh-noah': [
    [2, f, 'War band One -- Garrison'],
    [3, e, 'War Band Three -- Garrison'],
    [3, f, 'War band Two -- move (1/3)'],
  ],
  'jayson-rittersdorf': [
    [9, 1, ' Plague Company One -- Garrison'],
    [a, 1, 'Alkaptonuria -- Garrison'],
  ],
  'rob-mountney': [
    [f, d, 'Two -- Garrison'],
    [f, e, 'One -- Move (0/1)'],
  ],
  'jon-arford': [
    [8, c, 'Troupe One -- Garrison'],
    [7, b, 'Troupe Two -- Garrison'],
  ],
  'nathaniel-palmer': [[f, 8, 'Carde One - Garrison']],
  'shad-feenstra': [[c, d, '-- Garrison']],
  'victor-romine': [
    [d, d, 'One -- Garrison'],
    [c, c, 'Two -- Garrison'],
  ],
};
