export interface Grupos {
    resp: Resp;
}

export interface Resp {
    id:               number;
    nombre:           string;
    destino:          string;
    salaVideollamada: string;
    chat:             null;
    deletedAt:        null;
    usuarios:         Usuario[];
}

export interface Usuario {
    id:             number;
    nombres:        string;
    apellidos:      string;
    nombreUsuario:  string;
    descripcion:    string;
    destino:        string;
    permitirBuscar: boolean;
    contrasena:     string;
    imagen:         null;
    deletedAt:      null;
}
