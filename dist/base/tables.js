var preencherTabelaId = "preencher-tabela"
var dadosCadastrosKey = "dadosParaLogin"

function getElementById(id) {
    return document.getElementById(id)
}

function getStorageDados() {
    const storageDados = localStorage.getItem(dadosCadastrosKey)
    return JSON.parse(storageDados) || []
}

preencherTab()
function preencherTab() {
    getElementById(preencherTabelaId).innerHTML = ""
    getStorageDados().forEach(function (element, index) {
        getElementById(preencherTabelaId).innerHTML += '<tr>' +
            ' <th scope="row">' + (index + 1) + '</th>' +
            '<td>' + element.username + '</td>' +
            '<td>' + element.email + '</td>' +
            '<td>' + element.status + '</td>' +
            '<td><button class="btn btn-warning rounded-0" onclick="onclickAleterarStatus(' + index + ')">Alterar</button></td>' +
            '<td><button class="btn btn-danger rounded-0" onclick="onclickExcluir('+index+')">Excluir</button></td>' +
            '</tr>'

    });
}

function onclickAleterarStatus(index) {
    const storageDados = getStorageDados()
    if (storageDados[index].status == "Desativado") {
        storageDados[index].status = "Ativado"
    } else {
        storageDados[index].status = "Desativado"
    }
    localStorage.setItem(dadosCadastrosKey, JSON.stringify(storageDados))
    preencherTab()
}

function onclickExcluir(param) {
    let storageDados = getStorageDados()
    storageDados = storageDados.filter(function(element, index){
        return param != index
    })
    localStorage.setItem(dadosCadastrosKey, JSON.stringify(storageDados))
    preencherTab()
}