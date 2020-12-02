## 호이스팅

변수에 선언된 변수 및 함수를 코드 상단으로 끌어올리는 것

```javascript
/* 1  호이스팅 */
console.log(myValue);
var myValue = 1;

/* 2 */
console.log(value);
value = 3;
console.log(value);
var value = 1;

/* 3 함수 범위 */
function hello() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log("함수 범위", i);
}
hello();

/* 4  es6 const let 블록 범위 */
function hello2() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log("함수 범위", i);
}
hello2();
```

## short circuit evaluation

AND, OR같은 논리 연산에서 결과가 예측된다면 뒤에 나머지 연산을 실행하지 않고 결론을 낸다.
AND의 경우
true && true => true
true && false => false
false && true => false
false && false => false

OR의 경우
true || true => true
true || false => true
false || true => true
false || false => false

```javascript
/* short circuit evaluation */
const type = obj && obj.type;
const port = env.PORT || 4000;

/* test */
function isBall(ball) {
  console.log("공 어딨어");
  return ball === "ball" ? true : false;
}

const ball = "ball";
if (ball && isBall(ball)) {
  console.log("참!");
}
```

## 객체의 단축 속성명과 계산된 속성명

```javascript
/* shorthand property names 단축 속성명 */
function makeObj1(name, home) {
  return { name: name, home: home };
}
console.log(makeObj1("lee", "인천"));

function makeObj2(name, home) {
  return { name, home };
}
console.log(makeObj2("choi", "부천"));

/* computed property names 계산된 속성명 */
function makeDynamicKey(key, value) {
  return { [key]: value };
}
console.log(makeDynamicKey("eventType", "click"));
```

## 전개 연산자, 나머지 연산자 그리고 비구조화 할당

전개 연산자

- 함수 호출시 인수를 하나 하나 넘길 때 전개 연산자를 통해 이 과정을 단축할 수 있다.

나머지 연산자

- 변수 할당시에 나머지 값들을 배열 형태로 저장

비구조화 할당

- 배열이나 객체를 간편하게 변수에 할당

```javascript
/* 전개 연산자 spread operator */
console.log(Math.max(1, 2, 3, 4));
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers));

const nameObj = { name: "choi" };
const homeObj = { home: "부천" };
console.log({ ...nameObj, ...homeObj });

/* 나머지 연산자 rest operator */
function test(...rest) {
  console.log(rest);
  console.log(Object.prototype.toString.call(rest));
}
test(1, 2, 3, 4);

/* 비구조화 destructuring */
const [a, ...rest] = [1, 2, 3];
console.log(a, rest);

const { name, home, computer } = { name: "choi", home: "부천" };
console.log(name, home, computer);
```

실행 컨텍스트(execution context)

실행할 코드에 제공하기 위해 환경 정보들을 미리 모아놓은 객체

이 execution context를 콜 스택에 쌓아서 가장 위에 쌓여있는 컨텍스트와 관련 있는 코드를 실행하여 환경과 순서를 보장

**_execution context의 종류_**

- Global Execution Context
- Functional Execution Context
- Eval Function Execution Context

execution context가 콜 스택에 담기는 시점

- Global Execution Context - 코드의 시작(js파일이 열리는 순간 브라우저에서 자동으로 실행)
- Functional Execution Context - 함수의 호출

```javascript
var a = "javascript study";

function first() {
  console.log("Inside first Function");
  second();
}

function second() {
  console.log("Inside second Function");
}

first();
console.log("Inside Global Execution Context");
```

![ec stack](./ec_stack_pic.png)

execution context는 어떻게 만들어지는가?
JS 엔진에 의해 만들어지는 EC는 2 가지 Phase가 있습니다.

1. Creation Phase
2. Execution Phase

**_Create Phase_**

- 선언된 함수, 변수들을 기억합니다.
- this binding
- 범위 바깥족 참조 (scope chain 개념으로 연결)

**_Execution Phase_**
실제 코드들을 실행(변수 할당, 함수 호출)

ref: https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0
