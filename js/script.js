
let p = document.getElementById('result');
document.querySelector('button').addEventListener('click', ()=>{
    let numero = document.getElementById('input-number').value;
    return imparOuPar(numero);
})
function imparOuPar (parametro){
    let resto = parametro % 2 ;
    if (resto == 0){
        p.innerHTML = 'Par'
    }
    else{
        p.innerHTML = 'impar'
    }
}