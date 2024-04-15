export class Arrendador {
    constructor(
        public id_arrendatario?: number | null,
        public activado?: boolean| null,
        public nombres?: string | null,
        public apellidos?: string | null,
        public correo?: string | null,
        public telefono?: string | null,
        public contrasena?: string | null,
    ){}
}
