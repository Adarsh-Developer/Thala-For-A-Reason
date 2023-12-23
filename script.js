const button = document.querySelector('button')
const inputText = document.querySelector('.text')
const reward = document.querySelector('.reward')

button.addEventListener('click', (e) => {
  e.preventDefault()
  inputValue = inputText.value
  sum = 0;
  for(let i = 0; i < inputValue.length; i++) {
    sum += parseInt(inputValue[i])
  }

  if(inputValue.length === 7){
    reward.innerText = 'Thala For A Reason'
  }else if(sum === 7){
    reward.innerText = 'Thala For A Reason'
  }else{
    reward.innerText = 'No Thals For You'
  }
})