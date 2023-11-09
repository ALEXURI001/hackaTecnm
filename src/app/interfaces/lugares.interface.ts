export interface GetLugares {
    resultado: Resultado[];
}

export interface Resultado {
    id:          number;
    ar:          boolean;
    nombre:      string;
    horario:     string;
    direccion:   string;
    imagenes:    string[];
    descripcion: string;
    tipo:        string;
    links:       string[];
    latitud:     any;
    longitud:    any;
    deletedAt:   null;
}
