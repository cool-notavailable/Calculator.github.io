const btns = document.querySelectorAll("button");
const input = document.querySelector(".type");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    const btnValue = btns[i].textContent;

    //    calculation
    if (btnValue === "AC") {
      clearResult();
    } else if (btnValue === "=") {
      Result();
    } else if (btnValue === "CE") {
      reduce();
    } else {
      appendValue(btnValue);
    }
  });
}
const clearResult = () => {
  input.value = "";
};
const Result = () => {
  input.value = eval(input.value);
};
const reduce = () => {
  input.value = input.value.slice(0, -1);
};
const appendValue = (btnValue) => {
  input.value += btnValue;
};
