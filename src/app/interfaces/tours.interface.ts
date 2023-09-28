export interface Tours {
    respuesta: Respuesta[];
}

export interface Respuesta {
    id:          number;
    nombre:      string;
    horario:     string;
    direccion:   string;
    imagenes:    string[];
    descripcion: string;
    tipo:        string;
    links:       string[];
    latitud:     string;
    longitud:    string;
    deletedAt:   null;
}
