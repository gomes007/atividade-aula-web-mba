var botaoAdicionar = document.querySelector("#adicionar-item");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  //passar o formulario para uma variavel e capturar os valores dos input atraves do name
  var form = document.querySelector("#form-adiciona");

  var item = obtemitemDoForm(form);

  var erros = validaitem(item);
  if (erros.length > 0) {
    exibeMensagemDeErro(erros);    
    return
  }

  adicionaItemNaTabela(item)

  form.reset();

  var mensagensErro = document.querySelector('#mensagens-erro')
  mensagensErro.innerHTML = ''

});


function adicionaItemNaTabela(item) {
  var itemTr = montaTr(item);
  var tabela = document.querySelector("#tabela-items");
  tabela.appendChild(itemTr);
}



function obtemitemDoForm(form) {
  var item = {
    peso: form.peso.value,
    altura: form.altura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return item;
}

function montaTr(item) {
  //criar tr para incluir novos dados
  var itemTr = document.createElement("tr");
  itemTr.classList.add("item");

  //incluindo td na tr
  itemTr.appendChild(montaTd(item.peso, "info-peso"));
  itemTr.appendChild(montaTd(item.altura, "info-altura"));
  itemTr.appendChild(montaTd(item.imc, "info-imc"));

  return itemTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaitem(item) {

  var erros = []

  if (!validaPeso(item.peso)) {
      erros.push("peso invalido");
  }

  if (!validaAltura(item.altura)) {
      erros.push("altura invalida");
  }

  return erros

}


function exibeMensagemDeErro(erros){
    var ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''
    erros.forEach(function(erro) {
        var li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    });
}
