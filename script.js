function adicionarTarefa() {

    let input = document.getElementById("tarefa");
    let texto = input.value.trim();

    if(texto === ""){
        alert("Digite uma tarefa!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${texto}
        <button class="excluir">Excluir</button>
    `;

    li.querySelector(".excluir").addEventListener("click", function(){
        li.remove();
    });

    document.getElementById("lista").appendChild(li);

    input.value = "";
    input.focus();
}
