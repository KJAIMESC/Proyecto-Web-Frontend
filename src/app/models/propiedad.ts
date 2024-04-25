export class Propiedad {
    constructor(
      public id_propiedad?: number | null,
      public activado?: boolean | null,
      public cantidadBanos?: number | null,
      public cantidadHabitaciones?: number | null,
      public departamento?: string | null,
      public descripcion?: string | null,
      public municipio?: string | null,
      public nombre?: string | null,
      public permitido_mascotas?: boolean | null,
      public piscina?: boolean | null,
      public valorNoche?: number | null,
      public tipoIngreso?: { id_tipoIngreso: number}, 
      public arrendador?: { id_arrendador: number},
      public imagen?: any
    ){ }
  }
  