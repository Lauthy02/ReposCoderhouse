const fs = require('fs');

class ManagerDeUsuarios{
    constructor(ruta) {
        this.ruta = ruta
    }

    async ObtenerUsuarios(){
        try {
            if (fs.existsSync(this.path)) { //Si el archivo existe
                const info = await fs.promises.readFile(this.path,"utf-8")
                return JSON.parse(info) //Me retorna el array con la info
            } else {
                return [] //Me retorna array sin info
            }
        } catch (error) {
            return error
        }
    }

    async CrearUsuario(usuario){
        try {
            const usuariosGuardados = await this.ObtenerUsuarios() //Trae todos los usuarios
            let id
            if (!usuariosGuardados.length) {
                id = 1
            } else {
                id = usuariosGuardados[usuariosGuardados.length-1].id+1
            }
            usuariosGuardados.push({id,...usuario}) //Inserta el usuario en el array
            await fs.promises.writeFile(this.ruta,JSON.stringify(usuariosGuardados)) //Sobreescribe el archivo
        } catch (error) {
            return error
        }
    }

    async ObtenerUsuarioID(idusuario){
        try {
            const usuariosGuardados = await this.ObtenerUsuarios()
            const usuario = usuariosGuardados.find(u=>u.id === idusuario)
            if (usuario) {
                return usuario
            } else {
                return "No existe el usuario"
            }
        } catch (error) {
            return error
        }
    }
    async BorrarUsuario(idusuario){
        try {
            const usuariosGuardados = await this.ObtenerUsuarios()
            const nuevoArrayDeUsuarios = usuariosGuardados.filter(u=>u.id==idusuario)
            await fs.promises.writeFile(this.ruta,JSON.stringify(nuevoArrayDeUsuarios))
        } catch (error) {
            return error
        }
    }
}

const usuario1 = {
    nombre: "lautaro",
    apelldio: "rojas",
    edad: 21,
    curso: "JS"
}
const usuario2 = {
    nombre: "selene",
    apelldio: "rojas",
    edad: 21,
    curso: "JS"
}
const usuario3 = {
    nombre: "leo",
    apelldio: "rojas",
    edad: 21,
    curso: "JS"
}
const usuario4 = {
    nombre: "Laura",
    apelldio: "Stroia",
    edad: 21,
    curso: "JS"
}

async function prueba(){
    const Manager = new ManagerDeUsuarios("archivo.json")
    await Manager.CrearUsuario(usuario1)
    await Manager.CrearUsuario(usuario2)
    await Manager.CrearUsuario(usuario3)
    await Manager.CrearUsuario(usuario4)
    await Manager.BorrarUsuario(2)
    const aux = await Manager.ObtenerUsuarios()
    console.log(aux);
}
prueba()