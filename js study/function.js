// 문제 1. "안녕 내 이름은 제시카야"라는 문장을 프린트 하는 함수 'greet'를 만드시오.
function greet() {
    console.log("안녕 내 이름은 제시카야")
}
greet()

// 문제 2. 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오.
// ex) "안녕 내 이름은 에밀리야", "안녕 내 이름은 할리야"

// function greet(name) {
//     console.log("안녕 내 이름은", name, "야")
// }
// greet("할리")

// 쉼표(',')를 사용하니 연결된 값 사이마다 공백이 추가됨.
// 그래서 더하기('+') 기호 사용!
function greet(name) {
    console.log("안녕 내 이름은 " + name + "야")
}
greet("할리")

// 문제 3. 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오.
function greet(name) {
    console.log("안녕 내 이름은 " + name + "야")
    return name
}
greet("할리")

// 문제 4. meetAt 함수를 만들어 주세요.
// arguments 객체 : 함수 내부에서 접근할 수 있는 유사 배열 객체이다!
// 왜 정답에서 year, month, day를 새로운 변수에 담아줬는지?
function meetAt(year, month, day) {
    if (arguments.length === 1) {
        return year + "년"
    } else if (arguments.length === 2) {
        return year + "년" + " " + month + "월"
    } else if (arguments.length === 3) {
        return year + "/" + month + "/" + day
    }
}
console.log(meetAt(1234))
console.log(meetAt(1234, 5))
console.log(meetAt(1234, 5, 6))

// 문제 5. findSmallestElement 함수를 구현해 주세요.
let arr = [100, 200, 3, 0, 2, 1]
function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0
    }

    let small = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (small > arr[i]) {
            small = arr[i]
        }
    }
    return small
}
console.log(findSmallestElement(arr))

// 문제 6. 돈을 매개변수로 받으면 몇 개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오.
// 정답 확인했음.. 내일 다시 풀어보기!
// Math.floor 함수 : 소수점 아래 숫자 버리기 (단, 음수일 땐 더 작은 정수 값으로 내려감.)
let unit = [50000,10000,5000,1000,500,100]
function changeCalculate(money) {
  for(let i=0;i<unit.length;i++){
      let num = Math.floor(money / unit[i])
      console.log(unit[i]+"X"+num)
      money = money - (unit[i]*num)
  }
}

changeCalculate(12300)