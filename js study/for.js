// 문제 1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum)

// 문제 2. 1부터 100까지 홀수만 출력하자.
for (let i = 1; i <= 100; i+=2) {
    console.log(i)
}

// 문제 3. 1부터 50까지 369 결과를 프린트하자.
for (let i = 1; i <= 50; i++) {
    if (i%3 != 0) {
        console.log(i)
    } else if (i%3 == 0) {
        console.log("짝")
    }
}

// 문제 4. 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
// 아하. 기본값을 true로 주고, 주어진 숫자가 있다면 1과 주어진 숫자 제외한 숫자들을 나눠서
// 나머지가 0이면 소수가 아니니까 false를 출력
// if문이 다 틀렸다면 result는 기본값인 true가 나옴
let num = 7;
let result = true;
for (let i = 2; i < num; i++) {
    if (num%i == 0) {
        result = false
    } 
}
console.log(result)
