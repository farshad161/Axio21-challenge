import {
  rotate,
  isValid,
  convert1DTo2DArray,
  shouldMoveRight,
  getDimension,
  shouldMoveDown,
  shouldMoveLeft,
  shouldMoveUp,
  deductDimensionBy2,
} from "../app";

describe("rotate()", () => {
  it("should rotate the [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    const mockInput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = rotate(mockInput);
    const expected = [4, 1, 2, 7, 5, 3, 8, 9, 6];
    expect(result).toEqual(expected);
  });

  it("should rotate the [1, 2, 3, 4]", () => {
    const mockInput = [1, 2, 3, 4];
    const result = rotate(mockInput);
    const expected = [3, 1, 4, 2];
    expect(result).toEqual(expected);
  });

  it("should rotate the [40, 20, 90, 10]", () => {
    const mockInput = [40, 20, 90, 10];
    const result = rotate(mockInput);
    const expected = [90, 40, 10, 20];
    expect(result).toEqual(expected);
  });

  it("should rotate the [-5]", () => {
    const mockInput = [-5];
    const result = rotate(mockInput);
    const expected = [-5];
    expect(result).toEqual(expected);
  });

  it("should rotate the [2,-0]", () => {
    const mockInput = [2, -0];
    const result = rotate(mockInput);
    const expected: number[] = [];
    expect(result).toEqual(expected);
  });

  it("should rotate the [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]", () => {
    const mockInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const result = rotate(mockInput);
    const expected = [5, 1, 2, 3, 9, 10, 6, 4, 13, 11, 7, 8, 14, 15, 16, 12];
    expect(result).toEqual(expected);
  });

  it("should rotate the [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]", () => {
    const mockInput = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];
    const result = rotate(mockInput);
    const expected = [
      6, 1, 2, 3, 4, 11, 12, 7, 8, 5, 16, 17, 13, 9, 10, 21, 18, 19, 14, 15, 22,
      23, 24, 25, 20,
    ];
    expect(result).toEqual(expected);
  });
});

describe("isValid()", () => {
  it("should return false if the lenght is equal to zero", () => {
    const result = isValid(0);
    expect(result).toBe(false);
  });

  it("should return true if the lenght is equal to 9", () => {
    const result = isValid(9);
    expect(result).toBe(true);
  });

  it("should return false if the lenght is equal to 11", () => {
    const result = isValid(11);
    expect(result).toBe(false);
  });

  it("should return true if the lenght is equal to 25", () => {
    const result = isValid(25);
    expect(result).toBe(true);
  });
});

describe("convertTo2DArray()", () => {
  it("should convert a 1D array to 2D array", () => {
    const mockArrayOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const resultOdd = convert1DTo2DArray(mockArrayOdd);

    const expectedOdd = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(resultOdd).toEqual(expectedOdd);

    const mockArrayEven = [1, 2, 3, 4];
    const resultEven = convert1DTo2DArray(mockArrayEven);
    const expectedEven = [
      [1, 2],
      [3, 4],
    ];

    expect(resultEven).toEqual(expectedEven);
  });
});

describe("shouldMoveRight()", () => {
  it("should return true when the element is `2` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveRight({ row: 0, col: 1 }, mockInput);
    const expected = true;

    expect(result).toBe(expected);
  });

  it("should return false when the element is `3` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveRight({ row: 0, col: 2 }, mockInput);
    const expected = false;

    expect(result).toBe(expected);
  });

  it("should return true when the element is `1` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveRight({ row: 0, col: 0 }, mockInput);
    const expected = true;

    expect(result).toBe(expected);
  });
});

describe("shouldMoveDown()", () => {
  it("should return true when the element is `3` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveDown({ row: 0, col: 2 }, mockInput);
    const expected = true;

    expect(result).toBe(expected);
  });

  it("should return true when the element is `6` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveDown({ row: 1, col: 2 }, mockInput);
    const expected = true;

    expect(result).toBe(expected);
  });

  it("should return true when the element is `8` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveDown({ row: 2, col: 1 }, mockInput);
    const expected = false;

    expect(result).toBe(expected);
  });
});

describe("shouldMoveLeft()", () => {
  it("should return true when the element is `9` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveLeft({ row: 2, col: 2 }, mockInput);
    const expected = true;

    expect(result).toBe(expected);
  });
  it("should return true when the element is `7` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveLeft({ row: 2, col: 0 }, mockInput);
    const expected = false;

    expect(result).toBe(expected);
  });
});

describe("shouldMoveUp()", () => {
  it("should return true when the element is `7` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveUp({ row: 2, col: 0 }, mockInput);
    const expected = true;

    expect(result).toBe(expected);
  });

  it("should return false when the element is `1` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveUp({ row: 0, col: 0 }, mockInput);
    const expected = false;

    expect(result).toBe(expected);
  });

  it("should return true when the element is `5` and the array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = shouldMoveUp({ row: 1, col: 1 }, mockInput);
    const expected = false;

    expect(result).toBe(expected);
  });
});

describe("getDimension()", () => {
  it("should return [3,3] when the input array is [[1, 2, 3],[4, 5, 6],[7, 8, 9] ]", () => {
    const mockInput = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = getDimension(mockInput);

    expect(result).toEqual([3, 3]);
  });
});

describe("deductDimensionBy2()", () => {
  it("should convert 4*4 array to 2*2 array", () => {
    const mockInput = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const result = deductDimensionBy2(mockInput);

    const expected = [
      [6, 7],
      [10, 11],
    ];
    expect(result).toEqual(expected);
  });

  it("should convert 5*5 array to 3*3 array", () => {
    const mockInput = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    const result = deductDimensionBy2(mockInput);

    const expected = [
      [7, 8, 9],
      [12, 13, 14],
      [17, 18, 19],
    ];
    expect(result).toEqual(expected);
  });
});
