import * as _ from "lodash";

type Index = {
  row: number;
  col: number;
};

type Dimension = number[];

export const app = (input: number[]) => {
  const isAValidArray = isValid(input.length);
};

export const rotate = (input: (number | string)[]): (number | string)[] => {
  const isAValidArray = isValid(input.length);

  if (!isAValidArray) {
    return [];
  }
  const convertedTo2D = convert1DTo2DArray(input);

  const rotated = _.cloneDeep(convertedTo2D);

  let iterateNumber = 0;
  let targetMatrix = _.cloneDeep(convertedTo2D);
  const maxRepeat = Math.floor(getDimension(targetMatrix)[0] / 2);

  while (iterateNumber < maxRepeat) {
    const dimension = getDimension(targetMatrix);
    for (let i = 0; i < dimension[0]; i++) {
      for (let j = 0; j < dimension[1]; j++) {
        if (shouldMoveDown({ row: i, col: j }, targetMatrix)) {
          rotated[i + iterateNumber + 1][j + iterateNumber] =
            targetMatrix[i][j];
        } else if (shouldMoveLeft({ row: i, col: j }, targetMatrix)) {
          rotated[i + iterateNumber][j + iterateNumber - 1] =
            targetMatrix[i][j];
        } else if (shouldMoveUp({ row: i, col: j }, targetMatrix)) {
          rotated[i + iterateNumber - 1][j + iterateNumber] =
            targetMatrix[i][j];
        } else if (shouldMoveRight({ row: i, col: j }, targetMatrix)) {
          rotated[i + iterateNumber][j + iterateNumber + 1] =
            targetMatrix[i][j];
        } else {
          rotated[i + iterateNumber][j + iterateNumber] = targetMatrix[i][j];
        }
      }
    }
    iterateNumber++;
    targetMatrix = deductDimensionBy2(convertedTo2D);
  }
  const convertedto1D = convert2DTo1DArray(rotated);
  return convertedto1D;
};

export const shouldMoveRight = (
  index: Index,
  input: (number | string)[][]
): boolean => {
  const dimension = getDimension(input);

  if (index.row === 0 && index.col >= 0 && index.col <= dimension[0] - 2) {
    return true;
  }
  return false;
};

export const shouldMoveDown = (
  index: Index,
  input: (number | string)[][]
): boolean => {
  const dimension = getDimension(input);

  if (
    index.col === dimension[0] - 1 &&
    index.row >= 0 &&
    index.row <= dimension[0] - 2
  ) {
    return true;
  }

  return false;
};

export const shouldMoveLeft = (
  index: Index,
  input: (number | string)[][]
): boolean => {
  const dimension = getDimension(input);
  if (
    index.row === dimension[0] - 1 &&
    index.col >= 1 &&
    index.col <= dimension[0] - 1
  ) {
    return true;
  }

  return false;
};

export const shouldMoveUp = (
  index: Index,
  input: (number | string)[][]
): boolean => {
  const dimension = getDimension(input);
  if (index.col === 0 && index.row >= 1 && index.row <= dimension[0] - 1) {
    return true;
  }

  return false;
};

export const getDimension = (input: (number | string)[][]): Dimension => {
  const firstDimension = input.length;
  const secondDimension = input[0].length;

  return [firstDimension, secondDimension];
};

export const isValid = (length: number): boolean => {
  if (length === 0) {
    return false;
  }

  const rootOfLength = Math.sqrt(length);
  const isAValidArray = rootOfLength - Math.floor(rootOfLength) === 0;

  return isAValidArray;
};

export const convert1DTo2DArray = (
  input: (number | string)[]
): (string | number)[][] => {
  const chunkNumber = Math.sqrt(input.length);
  const convertedArray = _.chunk<string | number>(input, chunkNumber);

  return convertedArray;
};

export const convert2DTo1DArray = (
  input: (number | string)[][]
): (number | string)[] => {
  const convertedArray = _.flatten(input);

  return convertedArray;
};

export const deductDimensionBy2 = (
  input: (number | string)[][]
): (number | string)[][] => {
  const dimension = getDimension(input);
  const deducted: (number | string)[] = [];
  for (let i = 0; i < dimension[0]; i++) {
    for (let j = 0; j < dimension[1]; j++) {
      if (
        i !== 0 &&
        i !== dimension[0] - 1 &&
        j !== 0 &&
        j !== dimension[0] - 1
      ) {
        deducted.push(input[i][j]);
      }
    }
  }

  const convertedTo2D = convert1DTo2DArray(deducted);
  return convertedTo2D;
};
