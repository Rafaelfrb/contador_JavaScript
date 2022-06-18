function printNumbers(){
    let startNumber = document.getElementById("start");
    let endNumber = document.getElementById("end");
    let incrementNumber = document.getElementById("increment");
    let result = document.getElementById("result");

    if (startNumber.value.length == 0 || endNumber.value.length == 0 || incrementNumber.value.length == 0) {
        result.innerHTML = "Impossível contar!";
        window.alert('[ERRO!] Faltam parâmetros.');
    }else{
        result.innerHTML = 'Contando... </br>'
        let s = Number(startNumber.value);
        let e = Number(endNumber.value);
        let i = Number(incrementNumber.value);
        if (i <= 0){
            window.alert('Passo inválido! Considerando Passo 1.');
            i = 1;
        }
        if(s < e) { //contagem crescente
            for(let c = s; c <= e; c = c + i){
                result.innerHTML += `\u{1F449} ${c} `
            }
        } else {
            for(let c = s; c >= e; c -= i ){ //contagem decrescente
                result.innerHTML += ` ${c} \u{1F449}`
            }
        }
        result.innerHTML += `\u{1F6A9}`
    }
}

