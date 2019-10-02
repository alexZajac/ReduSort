import { SET_ARRAY_SIZE } from "../Constants/ActionTypes";
import { setErrorArraySize } from "../Actions";
import { MIN_SIZE, MAX_SIZE } from "../Constants/Utils";
import { Dispatch } from "redux";

interface ArrayError {
  arraySize: string | null;
}

interface Middleware {
  dispatch: Dispatch<any>;
  getState?: any;
}

const validateArraySize = (arraySize: string): ArrayError => {
  const result: ArrayError = { arraySize: null };
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

export const arraySizeMiddleware = ({ dispatch }: Middleware) => (
  next: any
) => (action: any) => {
  if (action.type !== SET_ARRAY_SIZE) {
    return next(action);
  }
  const { arraySize } = action.payload;
  const errors: ArrayError = validateArraySize(arraySize);
  if (errors.arraySize === null) {
    next(action);
  }
  dispatch(setErrorArraySize(errors));
};
