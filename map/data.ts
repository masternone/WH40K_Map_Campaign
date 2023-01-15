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
  cultivation: [],
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
  'tom-galbreath': [[4, 7]],
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
    [7, 1, 'Common Cold -- Idle'],
    [7, 1, 'Bird Flu -- Idle'],
  ],
  'shad-feenstra': [[3, 1, '-- Idle']],
  'victor-romine': [
    [2, 4, 'Green -- Idle'],
    [2, 4, 'Yellow -- Idle'],
  ],
  'tom-galbreath': [
    [4, 7, "Sindris' Scouts from the Department of Acquisitions -- Move (1/3)"],
  ],
  'jared-macnaughton': [[6, 7, 'Cold -- Idle']],
  'steve-herrick': [[1, 1, 'Storm -- Idle']],
};
