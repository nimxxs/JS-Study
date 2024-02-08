// 문제 1. 유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오.
let i = 4;
if (i < 0) {
    console.log("숫자가 음성입니다.")
} else if (i == 0) {
    console.log("숫자가 0입니다.")
} else if (i > 0) {
    console.log("숫자가 양성입니다.")
}

// 문제 2. 나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오.
let grade = 69;
if (90 <= grade && grade <= 100) {
    console.log("학점은 A입니다.")
} else if (80 <= grade && grade < 90) {
    console.log("학점은 B입니다.")
} else if (70 <= grade && grade < 80) {
    console.log("학점은 C입니다.")
} else if (60 <= grade && grade < 70) {
    console.log("학점은 D입니다.")
} else {
    console.log("학점은 F입니다.")
}

// 문제 3. 한 지원자가 우리 회사에 지원을 했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다.
// let skills = ["HTML", "CSS", "Javascript", "React"]
// Javascript와 React 둘 다 할 줄 안다면 "합격!"
// Javascript와 React 둘 중 하나만 할 줄 안다면 "예비"
// 두 스킬이 없다면 "탈락"을 보여주는 프로그램을 짜시오.
let skills = ["HTML", "CSS", "Javascript", "React"]
if (skills.includes("Javascript") && skills.includes("React")) {
    console.log("합격!")
} else if (skills.includes("Javascript") || skills.includes("React")) {
    console.log("예비")
} else {
    console.log("탈락")
}