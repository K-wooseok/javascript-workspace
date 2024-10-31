function getData() {
  setTimeout(() => console.log("서버 응답 완료!"), 2000);
}
getData();
console.log("후처리 진행!");
