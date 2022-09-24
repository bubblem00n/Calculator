const input = document.querySelector("input");
const result = document.querySelector(".result");

input.addEventListener("input", () => {
  let expression = input.value;
  let arr = expression.split("");
  let arrJoin = arr.join("")

  arr.forEach((el, index) => {
    if(el == " "){
      console.log(el);
      arr.splice(index, 1)
    }
  });

  // console.log(arr);

  // let numbers = arr.filter(Number)
  // console.log(numbers);




  if(arr.length >= 3){
    switch (arr[1]) {
      case "+":
        result.innerText = `${arrJoin} = ${+arr[0] + +arr[2]}`;
        break;
      case "-":
        result.innerText = `${arrJoin} = ${arr[0] - arr[2]}`;
        break;
      case "*":
        result.innerText = `${arrJoin} = ${arr[0] * arr[2]}`;
        break;
      case "/":
        result.innerText = `${arrJoin} = ${arr[0] / arr[2]}`;
        break;
      default:
        result.innerText = "Ошибка!";
    }
  }

});

