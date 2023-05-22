function redirecionarParaLogin() {
    window.location.href = 'file:///home/marcos/Desktop/ESTUDOS/site%20login%20projeto%205/coreui-free-bootstrap-admin-template-main/dist/login.html'
}

var usernameId = "username"
var emailId = "email"
var passwordId = "password"
var repeatPasswordId = "repeat-password"
var btnCadastroId = "btn-cadastro"
var dadosCadastrosKey = "dadosParaLogin"

function getElementById(id) {
    return document.getElementById(id)
}

function getStorageDados() {
    const storageDados = localStorage.getItem(dadosCadastrosKey)
    return JSON.parse(storageDados) || []
}

function checkValue() {
    if (!getElementById(usernameId).value) {
        alert("preencher campo username")
        return false
    }
    if (!getElementById(emailId).value) {
        alert("preencher campo email")
        return false
    }
    if (!getElementById(passwordId).value) {
        alert("preencher campo password")
        return false
    }
    if (!getElementById(repeatPasswordId).value) {
        alert("preencher campo repeat password")
        return false
    }
    return true
}

function checkSpace() {
    if (!getElementById(usernameId).value.trim()) {
        alert("campo username vazio")
        return false
    }
    if (!getElementById(emailId).value.trim()) {
        alert("campo email vazio")
        return false
    }
    if (!getElementById(passwordId).value.trim()) {
        alert("campo password vazio")
        return false
    }
    if (!getElementById(repeatPasswordId).value.trim()) {
        alert("campo repeat password vazio")
        return false
    }
    return true
}
getElementById(btnCadastroId).addEventListener('click', function (event) {
    event.preventDefault();

    if (!checkValue()) {
        return
    }

    if (!checkSpace()) {
        return
    }

    if (getElementById(passwordId).value != getElementById(repeatPasswordId).value) {
        return alert("senhas não conferem")
    } else if(checkUsername() == true){
        return alert("Username já cadastrado")

    } else {
        let dadosCadastrais = {
            username: getElementById(usernameId).value,
            email: getElementById(emailId).value,
            password: getElementById(passwordId).value,
            status: "Desativado"
        }
        const storageDados = getStorageDados()
        storageDados.push(dadosCadastrais)
        localStorage.setItem(dadosCadastrosKey, JSON.stringify(storageDados))
        alert("Usuario criado com sucesso")
        getElementById(usernameId).value = ""
        getElementById(emailId).value = ""
        getElementById(passwordId).value = ""
        getElementById(repeatPasswordId).value = ""
    }
})

function checkUsername() {
    let storageDados = getStorageDados()
    storageDados.filter(function (element) {
        return element.username == getElementById(usernameId).value
    })
     if(storageDados.length == 1){
         if(storageDados[0].username == getElementById(usernameId).value){
            return true
         }
     }
}