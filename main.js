const form = document.querySelector('form')
const data = document.querySelector('[data-type-date]')
const mensagem = document.querySelector('[data-type-msg]')
const nome = document.querySelector('[data-type-nome]')

form.addEventListener('submit', e => {
    e.preventDefault()
    // form.style.display = 'none'
    let novaData = ''
    let novaMensagem = ''
    let novoNome = ''
    for(let i=0;i<data.value.length;i++){
        if(data.value[i] == ' '){
            novaData += '%'
        } else {
            novaData += data.value[i]
        }
    }
    for(let i=0;i<mensagem.value.length;i++){
        if(mensagem.value[i] == ' '){
            novaMensagem += '%'
        } else {
            novaMensagem += mensagem.value[i]
        }
    }
    for(let i=0;i<nome.value.length;i++){
        if(nome.value[i] == ' '){
            novoNome += '%'
        } else {
            novoNome += nome.value[i]
        }
    }
    
    let info = {
        data: novaData,
        mensagem: novaMensagem,
        nome: novoNome
    }
    
    localStorage.setItem('dados',JSON.stringify(info))
    
    window.location.href = 'mes.html?' + novaData + '?' + novaMensagem + '?' + novoNome
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

const contagem = document.querySelector('span')
mensagem.addEventListener('keyup', e => {
    contagem.textContent = `${mensagem.value.length}/200`
})