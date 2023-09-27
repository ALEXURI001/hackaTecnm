export interface Login {
    accessToken: string;
    status:      boolean;
    message: string;
}

export interface Body {
    name:     string;
    username: string;
    password: string;
}
