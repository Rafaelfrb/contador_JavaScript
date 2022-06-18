function printNumbers(){
    let startNumber = document.getElementById("start");
    let endNumber = document.getElementById("end");
    let incrementNumber = document.getElementById("increment");
    let result = document.getElementById("result");

    if (startNumber.value.length == 0 || endNumber.value.length == 0 || incrementNumber.value.length == 0) {
        window.alert('[ERRO!] Faltam parâmetros.');
    }else{
        result.innerHTML = 'Contando... '
        let s = Number(startNumber.value);
        let e = Number(endNumber.value);
        let i = Number(incrementNumber.value);
        for(let c = s; c <= e; c = c + i){
            result.innerHTML += `\u{1F449} ${c} `
        }
        result.innerHTML += `\u{1F6A9}`
    }
}

