//selecionar todas as linha da tabela que tem a classe item e passar para variavel items
var items = document.querySelectorAll(".item");

//calcular o IMC e preencher a coluna IMC da tabela
for (var i = 0; i < items.length; i++) {

  //passar para variavel item os dados armazenados na variavel items acima como array
  var item = items[i];

  //selecionar as informacoes de peso, altura e imc e passar para variaveis
  var tdPeso = item.querySelector(".info-peso");
  var tdAltura = item.querySelector(".info-altura");
  var tdImc = item.querySelector(".info-imc");

  //passar o conteudo das variaveis acima para as novas variaveis que permite o calculo imc
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var imc = calculaImc(peso, altura);


  //regras validacao

  pesoValido = validaPeso(peso);
  alturaValida = validaAltura(altura);

  if (!pesoValido) {
    tdImc.textContent = "peso invalido";
    item.classList.add("item-invalido");
  }

  if (!alturaValida) {
    tdImc.textContent = "altura invalida";
    item.classList.add("item-invalido");
  }

  if (pesoValido && alturaValida) {
    tdImc.textContent = imc;
  }
}



function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}


function validaPeso(peso){
  if (peso >=0 && peso <= 1000) {
    return true;
  } else {
    return false
  }
}


function validaAltura(altura){
  if (altura >=0 && altura <= 3.0) {
    return true;
  } else {
    return false
  }
}