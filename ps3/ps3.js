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
