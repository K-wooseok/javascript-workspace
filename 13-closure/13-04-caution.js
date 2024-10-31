let arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}

// arr[0] = 0;
// arr[1] = 1;
// arr[2] = 2;
// arr[3] = 3;
// arr[4] = 4;

// console.log(arr);

// let으로 변수 i
arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}

for (var j = 0; j < 5; j++) {
  console.log(arr[j]());
}
