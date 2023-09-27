export interface RespuestaBuscarUser{
    status: boolean;
    user?: User;
    message?: string;
    book?: Book;
    devolucion?: Devolucion;
}

export interface Book{
    noAdquision: string;
    titulo?: string;
    autor?: string;
    clasificacion?: string;
}

export interface Devolucion{
    fechaSalida: string;
    fechaEntrega: string;
}

export interface User{
    _id: string;
    controlNo: string;
    names: string;
    lastNameFather?: string;
    lastNameMother?: string;
    carrera: string;
    image:string;
    card?:string;
    major?: string;
}