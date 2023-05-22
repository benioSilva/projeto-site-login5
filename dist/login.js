function redirecionarParaRegistrar(){
    window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20login%20projeto%205/coreui-free-bootstrap-admin-template-main/dist/register.html"
}

var usernameLoginId = "username-login"
var passwordLoginId = "password-login"
var dadosCadastrosKey = "dadosParaLogin"

function getElementById(id) {
    return document.getElementById(id)
}

function getStorageDados() {
    const storageDados = localStorage.getItem(dadosCadastrosKey)
    return JSON.parse(storageDados) || []
}

function checkValue(){
    if(!getElementById(usernameLoginId).value){
        alert("preencher campo username")
        return false
    }
    if(!getElementById(passwordLoginId).value){
        alert("preencher campo password")
        return false
    }
    return true
}

function validarLogin(){
    if(!checkValue()){
        return 
    }
    confirmarDadosCadastrado()
}

function confirmarDadosCadastrado(){
    let storageDados  = getStorageDados()
    storageDados = storageDados.filter(function(element){
        return element.username == getElementById(usernameLoginId).value
    })
    if(storageDados.length == 1){
        if(storageDados[0].password == getElementById(passwordLoginId).value){
            window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20login%20projeto%205/coreui-free-bootstrap-admin-template-main/dist/base/tables.html"
            return
        }
    }
    alert("Usuario ou senha não conferem")
    
    
}