window.onload = () => {
  console.log('put functions in here');
    

}
    
function squareNumber(){
    console.log("square called");
    let sqNumber = document.getElementById("userSqNumber").value;
    let sqAnswer = Math.pow(sqNumber, 2);
    document.getElementById("squaredNum").innerHTML = sqAnswer;
    console.log("the result of squaring", sqNumber, "is", sqAnswer);
}

function halfNumber(){
    console.log("half called")
    let halfNumber = document.getElementById("userHalfNumber").value;
    let halfAnswer = halfNumber / 2;
    document.getElementById("halfNum").innerHTML = halfAnswer;
    console.log("half of", halfNumber, "is", halfAnswer);
}

function percentOf(){
    console.log("percent called");
    let number1 = document.getElementById("userPercentNumber1").value;
    let number2 = document.getElementById("userPercentNumber2").value;
    let percent = (number1 / number2) * 100;
    document.getElementById("percentAns").innerHTML = percent;
    console.log(number1, "is", percent, "% of", number2);

}

function areaOfCircle(){
    console.log("circle called");
    let radius = document.getElementById("radius").value;
    let area = (Math.PI * (Math.pow(radius, 2)));
    area = (Math.floor(area * 100) / 100);
    document.getElementById("areaAns").innerHTML = area;
    console.log("the area of a circle with a radius of", radius, "is", area);
}

function together(){
    console.log("final called");
    let userinput = document.getElementById("userTogetherNum").value;
    let squaredFinal = Math.pow(userinput, 2);
    let halfFinal = userinput / 2;
    let areaFinal = (Math.PI * (Math.pow(halfFinal, 2)));
    areaFinal =(Math.floor(areaFinal * 100) / 100);
    let percentFinal = (areaFinal / squaredFinal) * 100;
    console.log(percentFinal);
}