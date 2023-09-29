const socketClient = io()

const h3WelcomePlusName = document.getElementById('welcome+name')

let user

swal({
    title: 'Welcome',
    text: 'What is your name?',
    content: "input",
    button: true
}).then(input => {
    if (input) {
        user = input
        h3WelcomePlusName.innerText += ` ${user}`
        socketClient.emit('event_NewUser', user)
    } else {
        user = 'UNDEFINED'
        h3WelcomePlusName.innerText += ` ${user}`
        socketClient.emit('event_NewUser', user)
    }
})