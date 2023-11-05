export interface Grupo {
    resp: Datos[]
  }
  
  export interface Datos {
    id: number
    nombre: string
    destino: string
    photo: string
    salaVideollamada: string
    chat: any
    deletedAt: any
    usuarios: Usuario[]
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
  