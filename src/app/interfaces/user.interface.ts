export interface User {
    status:    boolean;
    Resultado: Resultado;
}

export interface Resultado {
    id:             number;
    nombres:        string;
    apellidos:      string;
    nombreUsuario:  string;
    descripcion:    string;
    destino:        string;
    edad:           number;
    permitirBuscar: boolean;
    status:         boolean;
    contrasena:     string;
    imagen:         string;
    deletedAt:      null;
}
