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
    [4, 6],
    [7, 1],
  ],
  hill: [
    [3, 1],
    [6, 7],
  ],
  forest: [[6, 6]],
  plain: [
    [1, 2],
    [2, 2],
  ],
  desert: [[1, 1]],
  ocean: [[0, 2]],
};

export const enhancements: HexData = {
  cultivation: [[1, 2]],
  'command-pavilion': [],
  factory: [
    [2, 4],
    [7, 1],
  ],
  fortification: [
    [1, 1],
    [3, 1],
  ],
};

export const ownership: HexData = {
  'edward-grant': [[1, 2]],
  'jayson-rittersdorf': [[7, 1]],
  'shad-feenstra': [
    [2, 2],
    [3, 1],
  ],
  'victor-romine': [[2, 4]],
  'tom-galbreath': [
    [4, 6],
    [4, 7],
  ],
  'jared-macnaughton': [
    [6, 6],
    [6, 7],
  ],
  'steve-herrick': [
    [0, 2],
    [1, 1],
  ],
};
export const orderOfBattles: HexData = {
  'edward-grant': [
    [1, 2, 'Tzican Infiltrators -- Build - Fortification (1/2)'],
  ],
  'jayson-rittersdorf': [
    [7, 1, 'Common Cold -- Move (2/3)'],
    [7, 1, 'Bird Flu -- Move (2/3)'],
  ],
  'shad-feenstra': [[3, 1, '-- Idle']],
  'victor-romine': [
    [2, 4, 'Green -- Move (2/3)'],
    [2, 4, 'Yellow -- Move (2/3)'],
  ],
  'tom-galbreath': [
    [4, 6, "Sindris' Scouts from the Department of Acquisitions -- Move (1/3)"],
  ],
  'jared-macnaughton': [[6, 7, 'Cold -- Idle']],
  'steve-herrick': [[1, 1, 'Storm -- Idle']],
};
