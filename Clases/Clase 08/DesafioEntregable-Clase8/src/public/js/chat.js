const socketClient = io()

const form = document.getElementById('chatForm')
const inputMessage = document.getElementById('chatMessage')
const h3Name = document.getElementById('name')
const divChat = document.getElementById('chat')

let user

swal({
    title: 'Welcome',
    text: 'What is email?',
    content: "input",
    button: true
}).then(input => {
    if (input) {
        user = input
        h3Name.innerText = `Chat user: ${user}`
        socketClient.emit('event_NewUser', user)
    } else {
        user = 'INDEFINIDO'
        h3Name.innerText = `Chat user: ${user}`
        socketClient.emit('event_NewUser', user)
    }
})

socketClient.on('event_NewUserBroadcast', (user) => {
    Toastify({
        text: `${user} CONNECTED`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
})

form.onsubmit = (e)=>{
    e.preventDefault()
    const infoMessage = {
        email: user,
        message: inputMessage.value
    }
    socketClient.emit('event_Message',infoMessage)
}

socketClient.on('chat',(messages)=>{
    const chat = messages.map((objMessage)=>`<p>${objMessage.email}: ${objMessage.message}</p>`).join(' ')
    divChat.innerHTML = chat
})