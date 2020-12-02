/* number, string, boolean, symbol, undefined, null, object, */

/* primitive */
const num = 123;
const str = "abc";
const isBoolean = true;
const unique = Symbol("Choi");
const value1 = undefined;
const value2 = null;

/* null이 object로 나오는 이유는 초기 typeof에 버그가 있었고 이를 수정하려 했지만 하위 호환성을 위해 유지 */
console.log(typeof num, typeof str, typeof isBoolean, typeof unique, typeof value1, typeof value2);

// const obj = { name: "Choi" };
// console.log(typeof obj);

/* Object.toString 타입 검사 */
// console.log(Object.prototype.toString.call(null));

// console.log(typeof []);
// console.log(Object.prototype.toString.call([]));

/* Symbol */
// const id = Symbol("id");
// const obj2 = { id: "abc" };
// obj2[id] = "fgh";
// console.log(obj2);

/* 비교 연산자 */
// console.log(123 === 123);
// console.log("123" === "123");
// console.log(123 === "123");

// console.log(123 == 123);
// console.log("123" == "123");
// console.log("123" == 123);
