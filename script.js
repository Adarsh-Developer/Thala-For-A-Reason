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
      title: "Please type something",
      padding: "10px, 0 20px, 0",
    });
  } else if (inputValue.length === 7) {
    Swal.fire({
      title: "Thala For A Reason",
      padding: "10px, 0 20px, 0",
      imageUrl: 'https://imgs.search.brave.com/yUFRDhCJud3iilfFOTOdp4UOkta4ymIdFiTHMnr5Rw0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vZmZp/Y2lhbHNwb3J0c2h1/Yi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDYvVGhh/bGEtbWluLTEwMjR4/NjQwLmpwZw',
      imageAlt: 'Thala Image'
    });
  } else if (sum === 7) {
    Swal.fire({
      title: "Thala For A Reason",
      padding: '10px, 0 20px, 0',
      imageUrl: 'https://imgs.search.brave.com/yUFRDhCJud3iilfFOTOdp4UOkta4ymIdFiTHMnr5Rw0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vZmZp/Y2lhbHNwb3J0c2h1/Yi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDYvVGhh/bGEtbWluLTEwMjR4/NjQwLmpwZw',
      imageAlt: 'Thala Image'
    });
  } else {
    Swal.fire({
      title: "No Thala For You",
      padding: '10px, 0 20px, 0'
    });
  }
});
