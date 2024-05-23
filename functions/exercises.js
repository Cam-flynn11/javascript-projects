const { reverse } = require("dns");

// write a function thata returns a line with hashes
function makeLine(size) {
    let line = '';
    for(let index = 0; index < size; index++) {
        line += '#';
    }
    return line;
}
// console.log(makeLine(5));

function makeSquare(size) {
    let square = ''; 
    for(let index = 0; index < size; index++) {
             (square += makeRectangle(size));
        }
            // for(let index = 0; index < size; index++) {
            // square += ('\n' + makeLine(size));
            //  }
            
    return square;
}
// console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for(let index = 0; index < height; index++) {
        rectangle += ('\n' + makeLine(width));
    }
    return rectangle;
}
// console.log(makeRectangle(5,3));

function makeDownwardStairs(height) {
    let downwardStairs = '';
    for(let index = 0; index < height; index ++) {
        downwardStairs += ('\n' + makeLine(index + 1));
    }
    return downwardStairs
}
// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for(let index = 0; index < numSpaces; index++) {
        spaceLine += ' ';
    }
        for(let index = 0; index < numChars; index++) {
            spaceLine += '#';
        }
            for (let index = 0; index < numSpaces; index++){
                spaceLine += ' ';
            }
       return spaceLine;
}
// console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for(let index = 0; index < height; index++) {
        triangle += (makeSpaceLine(height - index - 1, 2 * index + 1) + '\n');
    }
    return triangle
}
// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = '';
    for(let index = 0; index < height; index ++); {
        diamond += (makeIsoscelesTriangle(height));
    }
    return diamond
}
console.log(makeDiamond(5));

function reverse(diamond) {
    let reversed = '';
        for(let index = 0; index < diamond.length; index++) {
            reversed = diamond[index] + reversed;
        }
        return reversed
}
console.log(makeDiamond(5));