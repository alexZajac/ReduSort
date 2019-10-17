import {
  SET_BARS,
  START_SORTING,
  SET_SPEED,
  SET_ALGORITHM,
  SET_INITIAL_ARRAY,
  SET_ARRAY_SIZE,
  SET_ERROR_ARRAY_SIZE,
  SET_ACTIONS,
  SET_NEXT_ACTION,
  SET_SWITCH
} from "../Constants/ActionTypes";
import { generateArrayFromOptions } from "../Constants/Utils";
import Sorter from "../Sorter";
import { IBar, IAction } from "../Constants/ActionTypes";

interface IState {
  bars: Array<IBar>;
  shouldSort: boolean;
  speed: string;
  algorithm: string;
  initialArray: string;
  arraySize: string;
  isDark: boolean;
  actions: IterableIterator<IAction> | null;
  nextAction: IAction | null;
  errors: object;
}

const getSortingGenerator = (
  algorithm: string,
  s: Sorter
): IterableIterator<IAction> | null => {
  switch (algorithm) {
    case "Bubble Sort":
      return s.bubbleSort();
    case "Insertion Sort":
      return s.insertionSort();
    case "Selection Sort":
      return s.selectionSort();
    case "Merge Sort":
      return s.mergeSort();
    case "Heap Sort":
      return s.heapSort();
    case "Quick Sort":
      return s.quickSort();
    case "Tim Sort":
      return s.timSort();
    default:
      return null;
  }
};

const initialState: IState = {
  bars: generateArrayFromOptions("10", "Random"),
  shouldSort: false,
  speed: "50",
  algorithm: "Bubble Sort",
  initialArray: "Random",
  arraySize: "10",
  actions: null,
  isDark: false,
  nextAction: null,
  errors: {
    arraySize: null
  }
};

const rootReducer = (state = initialState, action: any): IState => {
  if (action.type === START_SORTING) {
    const { shouldSort } = action.payload;
    let actions = null;
    let nextAction = null;
    let { bars } = state;
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
  } else if (action.type === SET_SWITCH) {
    const { isDark } = action.payload;
    return { ...state, isDark };
  } else if (action.type === SET_ALGORITHM) {
    const { algorithm } = action.payload;
    const bars = generateArrayFromOptions(state.arraySize, state.initialArray);
    const s = new Sorter(bars);
    const actions = getSortingGenerator(algorithm, s);
    const shouldSort = false;
    const nextAction = null;
    return { ...state, algorithm, bars, actions, shouldSort, nextAction };
  } else if (action.type === SET_INITIAL_ARRAY) {
    const { initialArray } = action.payload;
    const bars = generateArrayFromOptions(state.arraySize, initialArray);
    const s = new Sorter(bars);
    const { algorithm } = state;
    const actions = getSortingGenerator(algorithm, s);
    const shouldSort = false;
    const nextAction = null;
    return { ...state, initialArray, bars, actions, shouldSort, nextAction };
  } else if (action.type === SET_ARRAY_SIZE) {
    const { arraySize } = action.payload;
    const bars = generateArrayFromOptions(arraySize, state.initialArray);
    const { algorithm } = state;
    const s = new Sorter(bars);
    const actions = getSortingGenerator(algorithm, s);
    const shouldSort = false;
    const nextAction = null;
    return { ...state, arraySize, bars, actions, shouldSort, nextAction};
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
    let nextAction = action.payload;
    const { shouldSort } = state;
    if (!shouldSort) nextAction = null;
    return { ...state, nextAction };
  }
  return state;
};

export default rootReducer;
