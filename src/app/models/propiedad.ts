export class Propiedad {
    constructor(
        public id_propiedad?: number | null,
        public activado?: boolean | null,
        public cantidad_banos?: number | null,
        public cantidad_habitaciones?: number | null,
        public departamento?: string | null,
        public descripcion?: string | null,
        public municipio?: string | null,
        public nombre?: string | null,
        public permitido_mascotas?: boolean | null,
        public piscina?: boolean | null,
        public valor_noche?: number | null,
        public id_arrendador_fk?: number | null,
        public id_tipo_ingreso_fk?: number | null,
    ){ }
}
