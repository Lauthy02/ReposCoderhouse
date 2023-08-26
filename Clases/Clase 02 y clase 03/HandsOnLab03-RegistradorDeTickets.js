class TicketManager {
    #precioBaseDeGanancia = 2
    constructor() {
        this.eventos = []
    }

    agregarEvento(nombre,lugar,precio,capacidad=50,fecha=new Date()){
        const evento = {
            id: this.#generarIdEvento(),
            nombre,
            lugar,
            precio: precio + this.#precioBaseDeGanancia,
            capacidad,
            fehcha,
            participantes: []
        }
        this.eventos.push(evento)
    }

    agregarusuario(idEvento,idUsuario){
        const evento = this.#buscarEvento(idEvento)
        if (!evento) {
            return "este evento no existe" //el return hace salir del método direactamente
        } 
        if (evento.participantes.includes(idUsuario)) {
            return "Usuario ya registrado en el evento"
        }
        evento.participantes.push(idUsuario)
    }

    ponerEventoEnGira(idEvento,nuevoLugar,nuevaFecha){
        //Copiar el evento existente con una nueva fecha, id y participantes vacios
        const evento = this.#buscarEvento(idEvento)
        if (!evento) {
            return "este evento no existe" //el return hace salir del método direactamente
        } 
        const nuevoEvento = {
            ...evento,
            lugar: nuevoLugar,
            fehcha: nuevaFecha,
            participantes: [],
            id: this.#generarIdEvento()
        }
        this.eventos.push(nuevoEvento)
    }

    #buscarEvento(idEvento){
        return this.eventos.find(e=>e.id === idEvento)
    }

    #generarIdEvento(){
        return this.eventos.length
        ? this.eventos[this.eventos.length=1].id+1
        :1
    }
}