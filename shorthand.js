/* shorthand property names 단축 속성명 */
function makeObj1(name, home) {
  return { name: name, home: home };
}
console.log(makeObj1("lee", "인천"));

// function makeObj2(name, home) {
//   return { name, home };
// }
// console.log(makeObj2("choi", "부천"));

/* computed property names 계산된 속성명 */
// function makeDynamicKey(key, value) {
//   return { [key]: value };
// }
// console.log(makeDynamicKey("eventType", "click"));

/* 전개 연산자 spread operator */
// console.log(Math.max(1, 2, 3, 4));
// const numbers = [1, 2, 3, 4, 5];
// console.log(Math.max(...numbers));

// const nameObj = { name: "choi" };
// const homeObj = { home: "부천" };
// console.log({ ...nameObj, ...homeObj });

/* 나머지 연산자 rest operator */
// function test(...rest) {
//   console.log(rest);
//   console.log(Object.prototype.toString.call(rest));
// }
// test(1, 2, 3, 4);

/* 비구조화 destructuring */
// const [a, ...rest] = [1, 2, 3];
// console.log(a, rest);

// const { name, home, computer } = { name: "choi", home: "부천" };
// console.log(name, home, computer);
