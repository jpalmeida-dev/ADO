function exibirDataHora() {        // exibir a data e hora de acesso
    const dataHoraElemento = document.getElementById('dataHora');
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric',
    });
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR');
    dataHoraElemento.textContent = `Data e hora do acesso: ${dataFormatada} ${horaFormatada}`;
}

let quantDias = prompt("Quantos dias pretende reservar?");
fetch('http://localhost:8080/hoteis')
    .then(response => response.json())
    .then(data => {
        const hoteisList = document.getElementById('hoteis-list');
        data.forEach(hotel => {
            const hotelDiv = document.createElement('div');
            hotelDiv.classList.add('col-md-4', 'mb-4'); // Define 3 colunas para cada card
            hotelDiv.innerHTML = `
<div style="box-shadow: 3px black" class="card" style="width: 18rem;">
  <img style="height: 200px" src="${hotel.foto}" class="card-img-top" alt="${hotel.nome}">
  <div style="height:300px" class="card-body">
    <h5 style="font-size: 18px" class="card-title">${hotel.nome}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${hotel.localizacao}</h6>
    <p style="font-size:12px" class="card-text">${hotel.descricao}</p>
    <p style="font-size:12px" class="card-text"><strong>Comodidades:</strong> ${hotel.comodidade}</p>
    <p style="font-size:12px" class="card-text"><strong>Valor Diaria:</strong> ${hotel.diaria}</p>
                        <p style="font-size:12px" class="card-text"><strong>Quantidade de Dias pretentidos: </strong> ${quantDias} dias 
                        <p style="font-size:12px" class="card-text"><strong>Valor total a ser pago pela reserva: </strong>R$${quantDias * hotel.diaria},00</p>
  </div>
</div>
            `;
            hoteisList.appendChild(hotelDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar os hotéis:', error));




document.addEventListener('DOMContentLoaded', () => {
    exibirDataHora();
});