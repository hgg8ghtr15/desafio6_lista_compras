const form = document.querySelector("form")
const inputItem = document.querySelector("#inputItem")
const buttonAdicionar = document.querySelector("button")
const mensagemSucesso = document.querySelector("#sucesso")
const mensagemAlerta = document.querySelector("#alerta")
const mensagemErro = document.querySelector("#erro")

const lista = document.querySelector("#lista")

buttonAdicionar.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(lista)

    criarItem(inputItem.value)
    console.log(mensagemSucesso)

    mensagemSucesso.classList.add("aparecer")
    setTimeout(() => {
        mensagemSucesso.classList.remove("aparecer")
    }, 5000)

})

const criarItem = (item) => {
    // 1. Criação de todos os elementos necessários
    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const img = document.createElement('img');

    // 2. Configuração dos atributos e conteúdo de cada elemento

    // Configura o <li>
    li.className = 'flex'; // ou li.classList.add('flex');

    // Configura o <label>
    label.className = 'custom-checkbox';

    // Configura o <input>
    input.type = 'checkbox';
    input.name = 'itemNovo';
    input.className = 'checkbox';
    // O atributo 'id' foi deixado em branco no seu HTML, então não o definimos aqui.

    // Configura o <span>
    span.className = 'checkmark';

    // Configura o <p>
    p.textContent = item; // Adiciona o texto ao parágrafo

    // Configura a <img>
    img.src = 'assets/icon/deletar.png';
    img.alt = 'Deletar o item.';

    // 3. Montagem da estrutura (aninhando os elementos)
    // A ordem aqui é importante: de dentro para fora.

    // Adiciona o input, o span e o parágrafo dentro do label
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(p);

    // Adiciona o label e a imagem de deletar dentro do <li>
    li.appendChild(label);
    li.appendChild(img);
    lista.appendChild(li)
}

const deletarItem = () => {

}

document.querySelector("#lista").addEventListener("click", (e) => {
    // console.log(e.target)
    // const inputCheckbox = e.target.closest('input[type="checkbox"]');
    // const inputCheckbox = e.target.closest('input[type="checkbox"]');
    const img = e.target.closest('img');
    if (img) {
        const liPai = img.parentElement
        const inputCheckbox = liPai.querySelector("label input")
        if (inputCheckbox.checked) {
            liPai.remove()
            mensagemErro.classList.add("aparecer")
            setTimeout(() => {
                mensagemErro.classList.remove("aparecer")
            }, 5000)
        } else {
            console.log("Aparecer alerta")
            mensagemAlerta.classList.add("aparecer")
            setTimeout(() => {
                mensagemAlerta.classList.remove("aparecer")
            }, 5000)
        }
    }


})
