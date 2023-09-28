export interface FiltroEstados {
    resultado: Resultado[]
  }
  
  export interface Resultado {
    id: number
    nombres: string
    apellidos: string
    nombreUsuario: string
    descripcion: string
    destino: string
    permitirBuscar: boolean
    contrasena: string
    imagen: any
    deletedAt: any
  }