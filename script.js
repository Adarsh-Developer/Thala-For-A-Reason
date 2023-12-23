const button = document.querySelector("button");
const inputText = document.querySelector(".text");
const reward = document.querySelector(".reward");

button.addEventListener("click", (e) => {
  e.preventDefault();
  inputValue = inputText.value;
  inputText.value = "";
  sum = 0;
  for (let i = 0; i < inputValue.length; i++) {
    sum += parseInt(inputValue[i]);
  }

  if (inputValue === "") {
    Swal.fire({
      title: "Please type anything",
      padding: "10px, 0 20px, 0",
    });
  } else if (inputValue.length === 7) {
    Swal.fire({
      title: "Thala For A Reason",
      padding: "10px, 0 20px, 0",
    });
  } else if (sum === 7) {
    Swal.fire({
      title: "Thala For A Reason",
      padding: '10px, 0 20px, 0'
    });
  } else {
    Swal.fire({
      title: "No Thala For You",
      padding: '10px, 0 20px, 0'
    });
  }
});
