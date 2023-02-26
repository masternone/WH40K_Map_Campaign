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
    [6, 1],
    [7, 1],
    [7, 6],
  ],
  hill: [
    [1, 0],
    [2, 1],
    [3, 1],
    [4, 5],
    [6, 7],
  ],
  forest: [
    [2, 5],
    [6, 6],
    [7, 2],
  ],
  plain: [
    [0, 3],
    [1, 2],
    [2, 2],
  ],
  desert: [
    [0, 1],
    [1, 1],
    [6, 2],
  ],
  ocean: [[0, 2]],
};

export const enhancements: HexData = {
  cultivation: [
    [0, 3],
    [1, 2],
    [2, 5],
  ],
  'command-pavilion': [[3, 4]],
  factory: [
    [1, 1],
    [1, 2],
    [2, 4],
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
    [1, 2],
  ],
  'jayson-rittersdorf': [
    [6, 1],
    [6, 2],
    [7, 0],
    [7, 1],
    [7, 2],
  ],
  'shad-feenstra': [
    [2, 2],
    [3, 1],
  ],
  'victor-romine': [
    [2, 4],
    [2, 5],
    [3, 4],
  ],
  'tom-galbreath': [
    [4, 5],
    [4, 6],
    [4, 7],
  ],
  'jared-macnaughton': [
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
  ],
};
export const orderOfBattles: HexData = {
  'edward-grant': [
    [1, 2, 'Tzican Infiltrators -- Build - Command Pavilion (2/3)'],
    [0, 3, 'Changers -- Idle'],
  ],
  'jayson-rittersdorf': [
    [6, 2, 'Common Cold -- Idle'],
    [6, 1, 'Bird Flu -- Idle'],
  ],
  'shad-feenstra': [[3, 1, '-- Idle']],
  'victor-romine': [
    [3, 4, 'Green -- Idle'],
    [2, 5, 'Yellow -- Idle'],
  ],
  'tom-galbreath': [
    [4, 5, "Sindris' Scouts from the Department of Acquisitions -- Idle"],
  ],
  'jared-macnaughton': [
    [6, 6, 'Cold -- Idle'],
    [6, 7, 'Warm -- Idle'],
    [7, 6, 'Hot -- Idle'],
  ],
  'steve-herrick': [
    [2, 1, 'Storm -- Idle'],
    [1, 1, 'Suite --Idle'],
  ],
};
