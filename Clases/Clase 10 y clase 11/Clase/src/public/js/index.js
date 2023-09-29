console.log('Probando cliente');
const socketClient = io()

const form = document.getElementById('form')
const inputName = document.getElementById('name')

form.onsubmit = (e) => {
    e.preventDefault()
    const userName = inputName.value
    socketClient.emit('firstEvent_message', userName)
}

socketClient.on('secondEvent', info => {
    console.log(`Info enviada: ${info}`)
})