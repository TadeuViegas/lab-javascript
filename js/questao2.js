function atualizaContagem() {
    let maior = 0;
    let menor = 0;
  
    let idades = document.querySelector("#output").rows;
    for (i = 0; i < idades.length; i++) {
      if (idades[i].cells[0].textContent >= 18) maior++;
      else menor++;
    }
  
    document.querySelector("#maior18").textContent = maior;
    document.querySelector("#menor18").textContent = menor;
  }
  
  document.querySelector("#maior18").textContent = 0;
  document.querySelector("#menor18").textContent = 0;
  
  document.querySelector("#addButton").addEventListener("click", function(event) {
    event.preventDefault();
    let idade = document.querySelector("#input").value;
  
    let table = document.querySelector("#output");
    let row = document.createElement("tr");
    let idadeData = document.createElement("td");
    let btnRemoveData = document.createElement("td");
    let btnRemove = document.createElement("button");
  
    idadeData.textContent = idade;
    btnRemove.innerHTML = '<i class="fas fa-ban"></i>';
    btnRemove.addEventListener("click", function(event) {
      
    });
  
    row.append(idadeData);
    row.append(btnRemoveData);
    table.append(row);
  
    atualizaContagem();
  });
  