export interface Login {
    status:  boolean;
    token:   string;
    user:    User;
    message: string;
}

export interface User {
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
