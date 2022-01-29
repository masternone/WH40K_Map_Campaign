import { Typography } from './definitions';

export enum TYPOGRAPHY_ENUM {
  OCEAN,
  DESERT,
  PLAIN,
  FOREST,
  HILL,
  MOUNTAIN,
  VOLCANO,
}
export const OCEAN: Typography = {
  type: 'ocean',
  movement: 3,
  resources: 3,
  defence: 0,
  enhancements: 3,
};

export const DESERT: Typography = {
  type: 'desert',
  movement: 2,
  resources: 0,
  defence: 0,
  enhancements: 3,
};

export const PLAIN: Typography = {
  type: 'plain',
  movement: 1,
  resources: 1,
  defence: 0,
  enhancements: 3,
};
export const FOREST: Typography = {
  type: 'forest',
  movement: 1,
  resources: 1,
  defence: 1,
  enhancements: 3,
};

export const HILL: Typography = {
  type: 'hill',
  movement: 2,
  resources: 2,
  defence: 1,
  enhancements: 2,
};

export const MOUNTAIN: Typography = {
  type: 'mountain',
  movement: 3,
  resources: 3,
  defence: 2,
  enhancements: 1,
};

export const VOLCANO: Typography = {
  type: 'volcano',
  movement: 3,
  resources: 3,
  defence: 3,
  enhancements: 0,
};
