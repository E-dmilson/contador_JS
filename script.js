let btn = document.getElementById("btn").addEventListener('click', contar)

function contar(){
    let init = document.getElementById('init')
    let end = document.getElementById('end')
    let step = document.getElementById('step')
    let res = document.getElementById('contando')

    if(init.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        res.innerHTML = "Impossivel contar"
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(init.value)
        let e = Number(end.value)
        let s = Number(step.value)

        if(s <= 0){
            alert('Passo invalid! Considerando passo 1')
            s = 1
        }
        if(i < e){
            for(let count = i; count <= e; count += s){
                res.innerHTML += `${count} \👉`
            }
        }else{
            for(let count = i; count >= e; count -= s){
                res.innerHTML += `${count} \👉`
            }
            res.innerHTML += `\🏁`
        }
    }
}