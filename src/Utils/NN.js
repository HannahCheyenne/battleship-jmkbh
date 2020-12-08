const math = require("mathjs");
const ai = require("./AI-helpers");

function zeroes(x, y) {
  let zeroed = [];
  for (let i = 0; i < y; i++) {
    let tempArray = [];
    for (let j = 0; j < x; j++) {
      tempArray.push(0);
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
      newArr._data[i][j] = 1 / (1 + Math.exp(-arr._data[i][j] / 10));
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

function stringify(board) {
  let string = "";
  for (let i = 0; i < board.length; i++) {
    let line = "\n";
    for (let j = 0; j < board[0].length; j++) {
      line = line + " " + board[i][j].toFixed(2) + ",";
    }
    string = string + line;
  }

  return string;
}

function display(nn) {
  console.log("");

  console.log("SUMMARY: ----------------------------------------------");

  console.log("Input layer:", stringify(nn.input._data));
  //console.log("weights 1:", stringify(nn.weights1._data));
  //console.log("layer1: ", stringify(nn.layer1._data));
  //console.log("weights 2:", stringify(nn.weights2._data));
  console.log("Target output:", stringify(nn.y._data));
  console.log("actual output:", stringify(nn.output._data));

  console.log("Brain Age:", nn.age);
  console.log(
    "END SUMMARY: -----------------------------------------------------------"
  );
  console.log("");
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

  let newGrid = zeroes(length + 2, width + 2);

  for (let i = 1; i < length + 1; i++) {
    for (let j = 1; j < width + 1; j++) {
      newGrid[i][j] = grid[i - 1][j - 1];
    }
  }

  return newGrid;
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
    this.layer1 = sigmoid(math.multiply(this.input, this.weights1));
    this.output = sigmoid(math.multiply(this.layer1, this.weights2));
  }

  train() {
    this.feedforward();
    this.backprop();
    this.age += 1;
  }

  convolute() {
    
  }

  filter(grid) {
    const length = grid.length;
    const width = grid[0].length;
    let zero = zeroPad(grid);
    let filteredCache = zeroes(length, width);

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < width; j++) {
        let threeByThree = zeroes(3, 3);
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            threeByThree[x][y] = zero[1 + x][j + y];
            console.log("🚀 ~ file: NN.js ~ line 162 ~ NeuralNetwork ~ filter ~ threeByThree[x][y]", threeByThree[x][y])
          }
        }
      }
    }

    return filteredCache;
  }

  backprop() {
    // # application of the chain rule to find derivative of the loss function with respect to weights2 and weights1
    let loss = double(math.subtract(this.y, this.output));
    let d_weights2 = math.multiply(
      math.transpose(this.layer1),
      times(loss, sigmoid_derivative(this.output))
    );

    let d_weights1 = math.multiply(
      math.transpose(this.input),
      times(
        math.multiply(
          times(loss, sigmoid_derivative(this.output)),
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
