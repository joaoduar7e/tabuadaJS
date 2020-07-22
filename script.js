function calcular(){
    var txtvalor = document.getElementById('valor')
    var resposta = document.getElementById('resposta')
    resposta.innerHTML = 'Valores: <br>'
    if(txtvalor.value.length == 0){
        resposta.innerHTML = 'Por favor, digite um número valido!'
        alert('Por favor, digite um número valido!')
       
    }else{
        valor = Number(txtvalor.value)
        for (var multi = 1; multi <=10; multi++){
            tabuada = valor * multi
            resposta.innerHTML += (`${valor} x ${multi} = <strong>${tabuada}</strong></br>`)
            }
        }
    }



