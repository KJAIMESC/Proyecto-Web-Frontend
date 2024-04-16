export class Arrendador {
    constructor(
        public id_arrendador?: number | null,
        public activado?: boolean | null,
        public nombres?: string | null,
        public apellidos?: string | null,
        public correo?: string | null,
        public telefono?: number | null,
        public contrasena?: string| null,
    ){}
}
