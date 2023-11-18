function sumar(a, b) {
    let suma = 0
      for (let i = 0; i < 5e9; i++) {
          suma += i
      }
      return suma
  }
  
  process.on('message', (msg) => {
    console.log('Message from parent:', msg);
    const resultado = sumar()
    process.send(resultado)
  })