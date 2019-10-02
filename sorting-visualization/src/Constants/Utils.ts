interface bar {
  value: number;
  isSwapped: boolean;
  isCompared: boolean;
}

const shuffle = (array: Array<any>): void => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const interpolateSpeed = (speed: string) =>
  Math.floor((parseInt(speed) / 100) * (0 - 3000) + 3000);

export const MIN_SIZE = 1;
export const MAX_SIZE = 100;

export const sleep = async (ms: number): Promise<any> =>
  new Promise(r => setTimeout(r, ms));

export const generateArrayFromOptions = (
  length: string,
  initial: string
): Array<bar> => {
  const arrLength = parseInt(length);
  let result = Array.from({ length: arrLength }, () => ({
    value: 0,
    isCompared: false,
    isSwapped: false
  }));
  if (initial === "Random") {
    for (let i = 0; i < arrLength; i++) {
      result[i].value = i + 1;
    }
    shuffle(result);
  } else if (initial === "Reversed") {
    for (let i = 0; i < arrLength; i++) {
      result[arrLength - i - 1].value = i + 1;
    }
  } else {
    for (let i = 0; i < arrLength; i++) {
      result[i].value = i + 1;
    }
    // 15% of elements will be shuffled
    const swapFactor = 0.15;
    let maxSwaps = Math.floor(swapFactor * arrLength);
    for (let i = 0; i < arrLength; i++) {
      const slotSwap = Math.floor(Math.random() * (arrLength - i + 1)) + i;
      if (maxSwaps > 0) {
        [result[slotSwap].value, result[i].value] = [
          result[i].value,
          result[slotSwap].value
        ];
        maxSwaps--;
      } else {
        break;
      }
    }
  }
  return result;
};
