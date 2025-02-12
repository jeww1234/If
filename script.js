let  userNum = prompt("숫자를 입력하세요 : ");

console.log(userNum);

if(userNum === 0){
    console.log("제로");
}

else if(userNum % 2 === 0){
    //짝수
    console.log("짝수");
}
else if(userNum % 2 === 1){
    //홀수
    console.log("홀수");
}


if(userNum >= 90){
    console.log("A")
}
else if(userNum >= 80){
    console.log("B");
}
else if(userNum >= 70){
    console.log("C");
}
else if(userNum >= 60){
    console.log("D");
}else{
    console.log("F");
}


let skills = ["HTML","CSS","Javascript","React"]; //Javascript, React
let userSkills = ["HTML","CSS","Javascript", "React"];


if(userSkills.includes("Javascript") && userSkills.includes("React")){
    console.log("합격");
}else if(userSkills.includes("Javascript") || userSkills.includes("React")){
    console.log("보류");
}else{
    console.log("불합격");
}