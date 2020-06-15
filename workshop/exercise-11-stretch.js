// Q11
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.

// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
let chessboard = '';
for(num = 0; num < 72; num++){
    if(num % 9 === 0){
        chessboard = chessboard + '\n';
    } else if (num % 2 === 0){
        chessboard = chessboard + '_';
    } else{
        chessboard = chessboard + '#';
    }
}
console.log(chessboard);
