var botaoAdicionar = document.querySelector("#buscar-items");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando item...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;


        var items = JSON.parse(resposta);

        items.forEach(function(item){
            adicionaItemNaTabela(item)
        })
        
    });

    xhr.send();
});