export interface respIA {
    role:    string;
    content: string;
}

export interface Grupo {
    resp: Resp;
}

export interface Resp {
    id:               number;
    nombre:           string;
    destino:          string;
    salaVideollamada: string;
    chat:             Chat[];
    deletedAt:        null;
    usuarios:         any[];
}

export interface Chat {
    contenido: string;
    emisor:    string;
    fecha:     string;
}

