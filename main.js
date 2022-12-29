const form = document.querySelector('form')
const data = document.querySelector('[data-type-date]')
const mensagem = document.querySelector('[data-type-msg]')
const nome = document.querySelector('[data-type-nome]')

form.addEventListener('submit', e => {
    e.preventDefault()
    form.style.display = 'none'
    let info = {
        data: data.value,
        mensagem: mensagem.value,
        nome: nome.value
    }
    
    localStorage.setItem('dados',JSON.stringify(info))
    window.location.href = 'mes.html?' + data.value + '?' + mensagem.value + '?' + nome.value
    // window.location.href = 'mes.html'
    // console.log(mensagem.value)
    // let msg = document.createElement('main')
    // let conteudo = `
    //     <h1>${data.value}</h1>
    //     <p>${mensagem.value}</p>
    //     <p>${nome.value}</p>
    // `
    // msg.innerHTML = conteudo
    // document.body.appendChild(msg)
})