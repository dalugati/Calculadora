function insert(parametro){
    document.querySelector("[id='input']").value += parametro
    
}


function clean(){
    document.querySelector("[id='input']").value = ""
}
function equal(){
    var conta = document.querySelector("[id='input']").value
    document.querySelector("[id='input']").value = eval(conta)
    // eval é uma propriedade do java script que converte uma string para uma conta numerico
}