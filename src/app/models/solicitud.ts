export class Solicitud {
    constructor(
        public fechaSolicitud?: Date | null,
        public horaSolicitud?: Date | null,
        public fechaLlegada?: Date | null,
        public fechaSalida?: Date | null,
        public valor?: number | null,
        public calificacion?: number | null,
        public estadoSolicitud?: { id_EstadoSolicitud: number } | null,
        public arrendatario?: { id_arrendatario: number } | null,
        public propiedad?: { id_propiedad: number } | null
    ){ }
}
