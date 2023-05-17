let inputTarefa = document.querySelector("#inputTarefa");
let btnAdd = document.querySelector("#btn-add");
let conteudoPrincipal = document.querySelector('#itensLista');
let contador = 0


function addTarefa(){
    //PEGANDO O VALOR DO INPUT
    let valorInput = inputTarefa.value;

    //VERIFICANDO O VALOR DO INPUT
    if ((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)){
        ++contador;
        let novoItem = `
        <div onclick="marcarTarefa(${contador})" class="item" id="${contador}">
            <div class="item-icone">
                <i id="icone_${contador}" class='bx bx-circle'></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                <p>${valorInput}</p>
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class='bx bxs-trash' ></i> Deletar</button>
            </div>
        </div>`;

        //ADCIONANDO O NOVO ITEN NO MAIN
        conteudoPrincipal.innerHTML += novoItem;

        //RESETANDO O CAMPO INPUT
        inputTarefa.value = '';
        inputTarefa.focus();
    } else {
        alert("Campo vazio")
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);

    //PEGANDO O ATRIBUTO CLASS DO ITEM
    var classe = item.getAttribute('class');
    if (classe == "item"){
        item.classList.add("tarefa-feita");

        var icone = document.getElementById("icone_"+id);
        icone.classList.remove("bx-circle");
        icone.classList.add("bxs-check-circle");

        //COLOCANDO O ITEM NO FINAL DA LISTA
        item.parentNode.appendChild(item);
    
    } else {
        item.classList.remove("tarefa-feita");

        var icone = document.getElementById("icone_"+id);
        icone.classList.remove("bxs-check-circle");
        icone.classList.add("bx-circle");
    }
}


inputTarefa.addEventListener("keyup", function(event){
    //SE TECLAR ENTER (13)
    if(event.keyCode===13){
        event.preventDefault();
        btnAdd.click();
    }
})