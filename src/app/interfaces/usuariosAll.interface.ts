export interface Viajero {
    status: boolean;
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
    status?: boolean
    contrasena: string
    imagen?: string
    deletedAt: any
  }
  