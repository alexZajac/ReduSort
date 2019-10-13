export const START_SORTING = "START_SORTING";
export const SET_SPEED = "SET_SPEED";
export const SET_ALGORITHM = "SET_ALGORITHM";
export const SET_INITIAL_ARRAY = "SET_INITIAL_ARRAY";
export const SET_ARRAY_SIZE = "SET_ARRAY_SIZE";
export const SET_ERROR_ARRAY_SIZE = "SET_ERROR_ARRAY_SIZE";
export const SET_BARS = "SET_BARS";
export const SET_ACTIONS = "SET_ACTIONS";
export const SET_NEXT_ACTION = "SET_NEXT_ACTION";
export const SET_SWITCH = "SET_SWITCH";

// Interfaces
export interface IBar {
  value: number;
  isSwapped: boolean;
  isCompared: boolean;
}

export interface IAction {
  type: string;
  first?: number;
  second?: number;
  index?: number;
  value?: number;
}

export interface ISizeError {
  arraySize: string | null;
}
