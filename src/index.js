
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArray = [];
  if(!matrix) return newArray;
  for(let i = 0; i < matrix.length; i++) {
    let arr = matrix[i];
    if(i % 2 === 0) {
      newArray.push(...arr); 
    } else {
      newArray.push(...arr.reverse());
    }
  }
  return newArray;
}
