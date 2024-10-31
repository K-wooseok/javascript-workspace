/**
 * ! 반복 횟수가 정해져 있을때
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 중첩 반복문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i + j === 5) {
      console.log("[" + i + ", " + j + "]");
    }
  }
}

// 구구단
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    // console.log(i + "x" + j + "=" + i * j);
    console.log(`${i}x${j}=${i * j}`);
  }
}
