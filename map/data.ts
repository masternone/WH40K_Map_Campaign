import { HexData } from './definitions';

export const topographyData: HexData = {
  volcano: [
    [0, 0],
    [0, 7],
    [4, 7],
    [7, 0],
    [7, 7],
  ],
  mountain: [
    [2, 4],
    [3, 4],
    [4, 6],
    [6, 0],
    [5, 4],
    [5, 7],
    [6, 1],
    [7, 1],
    [7, 6],
  ],
  hill: [
    [1, 0],
    [1, 5],
    [2, 1],
    [3, 1],
    [3, 5],
    [4, 5],
    [5, 1],
    [6, 7],
  ],
  forest: [
    [1, 3],
    [2, 5],
    [6, 6],
    [7, 2],
  ],
  plain: [
    [0, 3],
    [1, 1],
    [1, 2],
    [2, 2],
  ],
  desert: [
    [0, 1],
    [6, 2],
  ],
  ocean: [[0, 2]],
};

export const enhancements: HexData = {
  cultivation: [
    [0, 3],
    [1, 3],
    [1, 2],
    [2, 5],
  ],
  'command-pavilion': [
    [1, 2],
    [3, 4],
  ],
  factory: [
    [1, 1],
    [1, 2],
    [2, 4],
    [6, 1],
    [6, 2],
    [6, 6],
    [6, 7],
    [6, 7],
    [7, 1],
  ],
  fortification: [
    [1, 1],
    [3, 1],
  ],
};

export const ownership: HexData = {
  'edward-grant': [
    [0, 3],
    [1, 3],
    [1, 2],
  ],
  'jayson-rittersdorf': [
    [5, 1],
    [6, 0],
    [6, 1],
    [6, 2],
    [7, 0],
    [7, 1],
    [7, 2],
  ],
  'shad-feenstra': [[3, 1]],
  'victor-romine': [
    [1, 5],
    [2, 4],
    [2, 5],
    [3, 4],
    [3, 5],
  ],
  'tom-galbreath': [
    [4, 5],
    [4, 6],
    [4, 7],
    [5, 4],
  ],
  'jared-macnaughton': [
    [5, 7],
    [6, 6],
    [6, 7],
    [7, 6],
    [7, 7],
  ],
  'steve-herrick': [
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ],
};
export const orderOfBattles: HexData = {
  'edward-grant': [
    [1, 3, 'Changers -- Idle'],
    [1, 2, 'Tzican Infiltrators -- Idle'],
  ],
  'jayson-rittersdorf': [
    [5, 1, 'Bird Flu -- Move (2/3)'],
    [6, 0, 'Measles -- Move (2/3)'],
    [6, 2, 'Common Cold -- Build - Command Pavilion (2/3)'],
    [6, 2, 'Warts -- Build - Command Pavilion (2/3)'],
  ],
  'shad-feenstra': [[3, 1, '-- Idle']],
  'victor-romine': [
    [1, 5, 'Yellow -- Build - Factory (1/2)'],
    [3, 5, 'Green -- Idle'],
  ],
  'tom-galbreath': [
    [
      5,
      4,
      "Sindris' Scouts from the Department of Acquisitions -- Build - Factory (1/2)",
    ],
  ],
  'jared-macnaughton': [
    [5, 7, 'Warm -- Idle'],
    [6, 6, 'Cold -- Idle'],
    [6, 6, 'Tauntaun -- Idle'],
    [7, 6, 'Hot -- Build - Command Pavilion (2/3)'],
  ],
  'steve-herrick': [
    [1, 1, 'Suite --Idle'],
    [2, 2, 'Storm -- Battle'],
  ],
};
