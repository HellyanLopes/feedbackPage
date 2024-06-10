const notas = document.querySelectorAll('.notas')
const notasContainer = document.querySelector('.notas-container')
const sendBtn = document.querySelector('#enviarButton')
const panel = document.querySelector('#panel')
let selecionarNotas = 'Satisfeito'

notasContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('notas') && e.target.nextElementSibling) {
        removerAtivar()
        e.target.parentNode.classList.add('ativar')
        selecionarNotas = e.target.nextElementSibling.innerHTML
    } else if(
        e.target.parentNode.classList.contains('notas') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removerAtivar()
        e.target.parentNode.classList.add('ativar')
        selecionarNotas = e.target.innerHTML
    }

})

sendBtn.addEventListener('click', () => {
  

    panel.appendChild(sendBtn);

    const panelContent = `
        <i class="fas fa-heart"></i>
        <strong>Obrigado pelo seu Feedback</strong>
        <br>
        <button class="btn" id="voltarButton">Voltar</button>
    `
    panel.innerHTML = panelContent;

    const voltarButton = document.querySelector('#voltarButton');
    voltarButton.addEventListener('click', () => {
        window.location.reload();
    });
});


function removerAtivar() {
    for(let i = 0; i < notas.length; i++) {
        notas[i].classList.remove('ativar')
    }
}