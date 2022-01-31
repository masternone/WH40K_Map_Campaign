export type Hex = [number | string, number | string, string?];

export interface HexData {
  [playerName: string]: Hex[];
}

export type terrain =
  | 'ocean'
  | 'desert'
  | 'plain'
  | 'forest'
  | 'hill'
  | 'mountain'
  | 'volcano';

export type enhancementType =
  | 'fortification'
  | 'cultivation'
  | 'factory'
  | 'command-pavilion';

export interface Typography {
  type: terrain;
  movement: number;
  resources: number;
  defence: number;
  enhancements: number;
}

export interface Enhancement {
  type: enhancementType;
  cost: number;
}
