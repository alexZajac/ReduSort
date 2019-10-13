import { SET_ARRAY_SIZE } from "../Constants/ActionTypes";
import { setErrorArraySize } from "../Actions";
import { MIN_SIZE, MAX_SIZE } from "../Constants/Utils";
import { Dispatch } from "redux";
import { ISizeError } from "../Constants/ActionTypes";

interface IMiddleware {
  dispatch: Dispatch<any>;
  getState?: any;
}

const validateArraySize = (arraySize: string): ISizeError => {
  const result: ISizeError = { arraySize: null };
  const intSize = parseInt(arraySize);
  if (isNaN(intSize)) {
    result.arraySize = "This is not a number";
    return result;
  }
  if (intSize < MIN_SIZE || intSize > MAX_SIZE) {
    result.arraySize = `The number must be between ${MIN_SIZE} and ${MAX_SIZE}`;
    return result;
  }
  return result;
};

export const arraySizeMiddleware = ({ dispatch }: IMiddleware) => (
  next: any
) => (action: any) => {
  if (action.type !== SET_ARRAY_SIZE) {
    return next(action);
  }
  const { arraySize } = action.payload;
  const errors: ISizeError = validateArraySize(arraySize);
  if (errors.arraySize === null) {
    next(action);
  }
  dispatch(setErrorArraySize(errors));
};
