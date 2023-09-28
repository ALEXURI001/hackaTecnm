export interface ModalGroup {
    resp: Resp
  }
  
  export interface Resp {
    id: number
    nombre: string
    destino: string
    salaVideollamada: string
    chat: Chat[]
    deletedAt: any
    usuarios: Usuario[]
  }
  
  export interface Chat {
    contenido: string
    emisor: string
    fecha: string
  }
  
  export interface Usuario {
    id: number
    nombres: string
    apellidos: string
    nombreUsuario: string
    descripcion: string
    destino: string
    permitirBuscar: boolean
    contrasena: string
    imagen?: string
    deletedAt: any
  }
  