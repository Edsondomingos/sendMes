const form = document.querySelector('form')
const data = document.querySelector('[type-date]')
const mensagem = document.querySelector('[type-msg]')
const nome = document.querySelector('[type-nome]')

form.addEventListener('submit', e => {
    e.preventDefault()
    window.location.href = data.value
    // let msg = document.createElement()
    let msg = `
        <h1>${data.value}</h1>
        <p>${mensagem.value}</p>
        <p>${nome.value}</p>
    `
})