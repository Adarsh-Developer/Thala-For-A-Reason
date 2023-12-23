const button = document.querySelector('button')
const inputText = document.querySelector('.text')
const reward = document.querySelector('.reward')

button.addEventListener('click', (e) => {
  e.preventDefault()
  inputValue = inputText.value
  inputText.value = ''
  sum = 0;
  for(let i = 0; i < inputValue.length; i++) {
    sum += parseInt(inputValue[i])
  }

  if(inputValue === ''){
    Swal.fire("Please type anything");
  }else if(inputValue.length === 7){
    Swal.fire("Thala For A Reason");
  }else if(sum === 7){
    Swal.fire("Thala For A Reason");
  }else{
    Swal.fire("No Thala For You");
  }
})