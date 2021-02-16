const inputs = document.querySelectorAll('input')
const celcius = document.querySelector('.celcius')
const kelvin = document.querySelector('.kelvin')
const farenheit = document.querySelector('.farenheit')
const naira = document.querySelector('.naira')
const dollar = document.querySelector('.dollar')
const euro = document.querySelector('.euro')
const kuwait = document.querySelector('.kuwait')


for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener('input', (e) => {
        let value = parseFloat(e.target.value)
      switch (e.target.name) {
          case 'celcius':
              kelvin.value = (value * 1.8) + 32
              farenheit.value = value + 273.15
          break;
      
          case 'kelvin':
            celcius.value = (value - 32) / 1.8
            farenheit.value = ((value -32)/ 1.8) + 273.15
          break;

          case 'farenheit':
            celcius.value = value - 273.15
            kelvin.value = ((value - 273.15) * 1.8) + 32
          break;

    
            case 'naira':
               dollar.value = value * 0.0026
               euro.value = value * 0.0022
               kuwait.value = value * 0.0008
            break;
        
            case 'dollar':
                naira.value = value * 380
                euro.value = value * 0.83
                kuwait.value = value * 0.3
            break;
  
            case 'euro':
                dollar.value = value * 1.2
                naira.value = value * 456.95
                kuwait.value = value * 0.36
            break;
            case 'kuwait':
                dollar.value = value * 3.3
                euro.value = value * 2.75
                naira.value = value * 1254.33
              break;

      }
    })
}

const changeConverter = document.querySelector('.switch')
const reloadConverter = document.querySelector('.reload')

const TemperatureCon = document.querySelector('.one')
const CurrencyCon = document.querySelector('.two')

let count = 2
changeConverter.addEventListener('click', () =>{
  count++
  if (count % 2 == 1) {
    TemperatureCon.style.right = '-100%'
    CurrencyCon.style.right = '4.7em'
  }
  else{
    TemperatureCon.style.right = '4.7em'
    CurrencyCon.style.right = '-100%'
  }
})

reloadConverter.addEventListener('click', () => {
  inputs.forEach(input => {
    input.value = ''
  })
})