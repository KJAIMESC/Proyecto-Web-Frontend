export class Usuario {
    constructor(
        public id?: number | null,
        public nombres?: string | null,
        public apellidos?: string | null,
        public correo?: string | null,
        public contrasena?: string | null,
        public tipo?: string | null
    ){}
}

