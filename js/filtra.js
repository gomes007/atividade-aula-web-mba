var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    
    var items = document.querySelectorAll(".item");

    if (this.value.length > 0) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var tdNome = item.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                item.classList.add("invisivel");
            } else {
                item.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.classList.remove("invisivel");
        }
    }
});