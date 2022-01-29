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

export interface Typography {
  type: terrain;
  movement: number;
  resources: number;
  defence: number;
  enhancements: number;
}
