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
import { sleep, interpolateSpeed } from "../Constants/Utils";

export const startSorting = (payload: object) => async (
  dispatch: any,
  getState: any
) => {
  dispatch({
    type: START_SORTING,
    payload
  });
  const { actions } = getState();
  if (actions !== null) {
    let { shouldSort, speed } = getState();
    while (shouldSort) {
      let newAction = actions.next();
      const payload = newAction.value;
      if (payload === undefined) {
        const cleanAction = {
          type: "clean"
        };
        dispatch({
          type: SET_NEXT_ACTION,
          payload: cleanAction
        });
        break;
      }
      if (payload.type === "comparison") {
        const cleanAction = {
          type: "clean"
        };
        dispatch({
          type: SET_NEXT_ACTION,
          payload: cleanAction
        });
        await sleep(interpolateSpeed(speed));
      } else if (payload.type === "swap") {
        const swapColors = {
          type: "swapColors",
          first: payload.first,
          second: payload.second
        };
        dispatch({
          type: SET_NEXT_ACTION,
          payload: swapColors
        });
        await sleep(interpolateSpeed(speed));
      }
      dispatch({
        type: SET_NEXT_ACTION,
        payload
      });
      await sleep(interpolateSpeed(speed));
      let newState = getState();
      shouldSort = newState.shouldSort;
      newAction = newState.nextAction;
      speed = newState.speed;
    }
  }
};

export const setBars = (payload: object) => ({
  type: SET_BARS,
  payload
});

export const setSwitch = (payload: object) => ({
  type: SET_SWITCH,
  payload
});

export const setSpeed = (payload: object) => ({
  type: SET_SPEED,
  payload
});

export const setAlgorithm = (payload: object) => ({
  type: SET_ALGORITHM,
  payload
});

export const setInitialArray = (payload: object) => ({
  type: SET_INITIAL_ARRAY,
  payload
});

export const setArraySize = (payload: object) => ({
  type: SET_ARRAY_SIZE,
  payload
});

export const setErrorArraySize = (payload: object) => ({
  type: SET_ERROR_ARRAY_SIZE,
  payload
});

export const setActions = (payload: object) => ({
  type: SET_ACTIONS,
  payload
});
