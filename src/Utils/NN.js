const math = require("mathjs");
const ai = require("./AI-helpers");

function zeroes(x, y, filler = 0) {
  let zeroed = [];
  for (let i = 0; i < y; i++) {
    let tempArray = [];
    for (let j = 0; j < x; j++) {
      tempArray.push(filler);
    }
    zeroed.push(tempArray);
  }
  return zeroed;
}

function randomizeArray(x, y) {
  let output = zeroes(x, y);
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      output[i][j] = Math.random();
    }
  }
  return output;
}

function sigmoid(arr) {
  let newArr = math.clone(arr);
  for (let i = 0; i < newArr._data.length; i++) {
    for (let j = 0; j < newArr._data[0].length; j++) {
      newArr._data[i][j] = 1 / (1 + Math.exp(-arr._data[i][j] / 1));
    }
  }
  return newArr;
}

function sigmoid_derivative(arr) {
  let newArr = math.clone(arr);
  for (let i = 0; i < newArr._data.length; i++) {
    for (let j = 0; j < newArr._data[0].length; j++) {
      newArr._data[i][j] = arr._data[i][j] * (1 - arr._data[i][j]);
    }
  }
  return newArr;
}

function double(arr) {
  for (let i = 0; i < arr._data.length; i++) {
    for (let j = 0; j < arr._data[0].length; j++) {
      arr._data[i][j] *= 2;
    }
  }
  return arr;
}

function times(arr1, arr2) {
  let newArr = math.clone(arr1);
  for (let i = 0; i < newArr._data.length; i++) {
    for (let j = 0; j < newArr._data[0].length; j++) {
      newArr._data[i][j] = arr1._data[i][j] * arr2._data[i][j];
    }
  }
  return newArr;
}

function cloneValues(nn, input, expectedOutput) {
  let newNN = new NeuralNetwork(input, expectedOutput);
  newNN.weights1 = nn.weights1;
  newNN.weights2 = nn.weights2;
  newNN.layer1 = nn.layer1;
  newNN.age = nn.age;
  return newNN;
}

function zeroPad(grid) {
  const length = grid.length;
  const width = grid[0].length;

  let newGrid = zeroes(length + 4, width + 4, 0.5);

  for (let i = 2; i < length + 2; i++) {
    for (let j = 2; j < width + 2; j++) {
      newGrid[i][j] = grid[i - 2][j - 2];
    }
  }
  return newGrid;
}

function dotAdd(grid) {
  let value = 0;
  let mask = [
    [0, 0, 1, 0, 0],
    [0, 0, 1.618, 0, 0],
    [1, 1.618, .5, 1.618, 1],
    [0, 0, 1.618, 0, 0],
    [0, 0, .618, 0, 0],
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      value += grid[i][j] * mask[i][j];
    }
  }

  return value / (grid.length * grid[0].length);
}

class NeuralNetwork {
  constructor(x, y) {
    this.input = x;
    this.xwidth = x._data.length;
    this.xlength = x._data[0].length;
    this.ylength = y._data.length;
    this.ywidth = y._data[0].length;
    this.weights1 = math.matrix(randomizeArray(this.xwidth, this.xlength));
    this.weights2 = math.matrix(randomizeArray(this.ywidth, this.ylength));
    this.y = y;
    this.output = math.matrix(zeroes(this.ywidth, this.ylength));
    this.age = 0;
  }

  feedforward() {
    this.layer1 = sigmoid(
      math.multiply(this.convolute(this.input), this.weights1)
    );
    this.output = sigmoid(math.multiply(this.layer1, this.weights2));
  }

  train() {
    this.feedforward();
    this.backprop();
    this.age += 1;
  }

  convolute(matrix) {
    let newMatrix = math.clone(matrix);
    newMatrix._data = this.filter(matrix._data);
    return newMatrix;
  }

  filter(grid) {
    const length = grid.length;
    const width = grid[0].length;
    let zero = zeroPad(grid);
    let filteredCache = zeroes(length, width);

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < width; j++) {
        let filter = zeroes(5, 5);

        for (let x = 0; x < 5; x++) {
          for (let y = 0; y < 5; y++) {
            filter[x][y] = zero[i + x][j + y];
          }
        }

        filteredCache[i][j] = dotAdd(filter);
      }
    }
    return filteredCache;
  }

  backprop() {
    let y = this.convolute(this.y);
    let output = this.output;
    let input = this.convolute(this.input);
    // # application of the chain rule to find derivative of the loss function with respect to weights2 and weights1
    let loss = double(math.subtract(y, output));
    let d_weights2 = math.multiply(
      math.transpose(this.layer1),
      times(loss, sigmoid_derivative(output))
    );

    let d_weights1 = math.multiply(
      math.transpose(input),
      times(
        math.multiply(
          times(loss, sigmoid_derivative(output)),
          math.transpose(this.weights2)
        ),
        sigmoid_derivative(this.layer1)
      )
    );
    // # update the weights with the derivative (slope) of the loss function
    this.weights1 = math.add(this.weights1, d_weights1);
    this.weights2 = math.add(this.weights2, d_weights2);
  }
}

function trainBot() {
  let mask = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ];
  let board = math.matrix(ai.generateBoard());
  let input = ai.scrubVisibleBoard(board, mask);
  let output = ai.scrubAnswerBoard(board);
  let nn = new NeuralNetwork(input, output);
  nn.feedforward();

  board = math.matrix(ai.generateBoard());
  output = ai.scrubAnswerBoard(board);
  mask = ai.randomizeMask(output);
  input = ai.scrubVisibleBoard(board, mask);
  nn.input = input;
  nn.y = output;
  nn.train();

  return nn;
}

module.exports = {
  NeuralNetwork,
  trainBot,
  cloneValues,
};
