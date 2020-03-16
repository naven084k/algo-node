let arr = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
];

let visited = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
let traveller = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];
let max = 0;

for (let i = 0; i < arr.length; i++)
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] == 1 && visited[i][j] == 0) {
      let t = findLengthOf1s(i, j);
      if (max < t)
         max = t;
    }
  }

console.log("max length of connected cycle is " + max);

function findLengthOf1s(i, j) {
  
    visited[i][j] = 1;
    let x = 0;
  
        for (let k = 0; k < traveller.length; k++) {

            if (isInValidRange(i, j, traveller[k]) && visited[i + traveller[k][0]][j + traveller[k][1]] == 0) {

                if (arr[i + traveller[k][0]][j + traveller[k][1]] == 1) {

                    let t = 1 + findLengthOf1s(i + traveller[k][0], j + traveller[k][1]);
                    if (x < t) x = t;
                }
            }
        }

    return x;
}

function isInValidRange(i, j, tempArr) {
  if (
    i + tempArr[0] < 0 ||
    i + tempArr[0] > 4 ||
    j + tempArr[1] < 0 ||
    j + tempArr[1] > 4
  )
    return false;
  else return true;
}
