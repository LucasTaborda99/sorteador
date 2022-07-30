// SELETORES
const inputMin = document.getElementById("minimo")
const inputMax = document.getElementById("maximo")
const inputTotal = document.getElementById("total")
const btn = document.getElementById("btn")

// FUNÇÕES
const generate = () => {

    let menorNumero = inputMin.value
    let maiorNumero = inputMax.value
    let totalNumeros = inputTotal.value
	let numbers = [];

	for(let i = 0; i < totalNumeros; i++) {
		let add = true

        min = Math.ceil(menorNumero)
        max = Math.floor(maiorNumero)
        
		let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

		for(let y = 0; y < max; y++) {
			if(numbers[y] == randomNumber) {
				add = false
			}
		}

		if(add) {
			numbers.push(randomNumber)
		} else {
			i--
		}
	}
  
	document.getElementById("numbers").innerHTML = numbers.join(" - ")
    
}

// EVENT LISTENERS
btn.addEventListener("click", generate)