function enviar(event) {
    event.preventDefault();

    var email = event.target[0].value
    var nome = event.target[1].value
    var nota = event.target[2].value

    console.log({ email, nome, nota });

    if (!email || !nome || !nota) {
        alert("Preencha o campo!");
        return;
    }

    var tr = document.createElement("tr");
    var td_email = document.createElement("td");
    td_email.innerHTML = email;
    var td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    var td_nota = document.createElement("td");
    td_nota.innerHTML = nota;
    var td_condição = document.createElement("td");
    td_condição.innerHTML;


    if (nota < 5) {
        td_condição.style.backgroundColor = "red";
    }

    else {
        td_condição.style.backgroundColor = "green";
    }

    tr.appendChild(td_email);
    tr.appendChild(td_nome);
    tr.appendChild(td_nota);
    tr.appendChild(td_condição);

    document.querySelector("body > section:nth-child(4) > table > tbody").appendChild(tr);

    var aluno = { email, nome, nota }

    localStorage.setItem("aluno", JSON.stringify(aluno))


}


