function calculateArea(width, heigth) {
  let area = width * heigth;
  return area;
}
console.log(calculateArea(3, 5));

function getSize(width, heigth, depth) {
  let area = width * heigth;
  let volume = width * heigth * depth;
  return [area, volume]; // ! 단 하나의 값만 반환
  console.log(area, volume); // ! 실행 안됨
}
// console.log(getSize(2, 2, 2));
const [area, volume] = getSize(2, 2, 2);
console.log(area, volume);
