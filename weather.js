const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const NameOfCity = document.querySelector(".name");
const description = document.querySelector(".description");
const temperature = document.querySelector(".temperature");


function convertion(val){
  return(val-273).toFixed(2);
}

button.addEventListener('click',function(){
  console.log(inputValue.value)
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=32c00f94785b9955d05d2f292fb16843')
.then(response => response.json())
.then(data =>{
  console.log(data)
  const nameValue =  data['name'];
  const tempValue = data['main']['temp'];
  const descValue = data ['weather'][0]['description'];
  let aaa = nameValue;

  NameOfCity.innerHTML = `<p> In ${nameValue}</p>`;
  temperature.innerHTML = `<p> It is ${convertion(tempValue)} temp</p>`;
  description.innerHTML = `<p> It is ${descValue} desc</p>`;
})


.catch(err => alert(`Couldn't find name ${inputValue.value}`))
})