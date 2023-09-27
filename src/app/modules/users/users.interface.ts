export interface Root {
    status: boolean
    mensaje: string
    analistas: Analista[]
  }
  
  export interface Analista {
    Analista_ID: number
    Nombre: string
    EsAdmin: number
    NombreUsuario: string
    Contrasena: string
    Activo: number
  }

  export interface Rol {
     label: string
     value: number
    }