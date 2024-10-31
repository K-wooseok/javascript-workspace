//* case1
function parent(param) {
  let parentVar = param;

  function child() {
    let childVar = "Kim";
    console.log(parentVar + " " + childVar);
  }
  child();
}
parent("Hello");

//* case2
function sayHello(name) {
  let text = "Hello " + name;

  const logHello = function () {
    console.log(text);
  };
  logHello();
}
sayHello("Lee");
// logHello(); // ! 불가
// sayHello.logHello(); // ! 불가
