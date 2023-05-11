function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)
    

    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`

    let c = 0
    if (n <= 10) 
    while (c <=9) {
        c++;{
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
      
        }
    }
    else{
        saida.innerHTML = " Digite um numero menor que 10"

    }

}