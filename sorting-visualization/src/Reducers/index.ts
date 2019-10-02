import {
  SET_BARS,
  START_SORTING,
  SET_SPEED,
  SET_ALGORITHM,
  SET_INITIAL_ARRAY,
  SET_ARRAY_SIZE,
  SET_ERROR_ARRAY_SIZE,
  SET_ACTIONS,
  SET_NEXT_ACTION
} from "../Constants/ActionTypes";
import { generateArrayFromOptions } from "../Constants/Utils";
import Sorter from "../Sorter";

interface bar {
  value: number;
  isSwapped: boolean;
  isCompared: boolean;
}

interface Action {
  type: string;
  first?: number;
  second?: number;
  index?: number;
  value?: number;
}

interface State {
  bars: Array<bar>;
  shouldSort: boolean;
  speed: string;
  algorithm: string;
  initialArray: string;
  arraySize: string;
  actions: IterableIterator<Action> | null;
  nextAction: Action | null;
  errors: object;
}

const getSortingGenerator = (algorithm: string, s: Sorter) => {
  return s.heapSort();
};

const initialState: State = {
  bars: generateArrayFromOptions("10", "Random"),
  shouldSort: false,
  speed: "50",
  algorithm: "Bubble Sort",
  initialArray: "Random",
  arraySize: "10",
  actions: null,
  nextAction: null,
  errors: {
    arraySize: null
  }
};

const rootReducer = (state = initialState, action: any): State => {
  if (action.type === START_SORTING) {
    const { shouldSort } = action.payload;
    let actions = null;
    let nextAction = null;
    let bars = state.bars;
    if (shouldSort) {
      const { algorithm } = state;
      const s = new Sorter(bars);
      actions = getSortingGenerator(algorithm, s);
    } else {
      bars = generateArrayFromOptions(state.arraySize, state.initialArray);
      actions = null;
      nextAction = null;
    }
    return { ...state, actions, shouldSort, nextAction, bars };
  } else if (action.type === SET_SPEED) {
    const { speed } = action.payload;
    return { ...state, speed };
  } else if (action.type === SET_ALGORITHM) {
    const { algorithm } = action.payload;
    return { ...state, algorithm };
  } else if (action.type === SET_INITIAL_ARRAY) {
    const { initialArray } = action.payload;
    const bars = generateArrayFromOptions(state.arraySize, initialArray);
    return { ...state, initialArray, bars };
  } else if (action.type === SET_ARRAY_SIZE) {
    const { arraySize } = action.payload;
    const bars = generateArrayFromOptions(arraySize, state.initialArray);
    return { ...state, arraySize, bars };
  } else if (action.type === SET_ERROR_ARRAY_SIZE) {
    const errors = action.payload;
    const bars =
      errors.arraySize === null
        ? generateArrayFromOptions(state.arraySize, state.initialArray)
        : [];
    return { ...state, errors: { ...state.errors, ...errors }, bars };
  } else if (action.type === SET_BARS) {
    const { bars } = action.payload;
    return { ...state, bars };
  } else if (action.type === SET_ACTIONS) {
    const { actions } = action.payload;
    return { ...state, actions };
  } else if (action.type === SET_NEXT_ACTION) {
    const nextAction = action.payload;
    return { ...state, nextAction };
  }
  return state;
};

export default rootReducer;
