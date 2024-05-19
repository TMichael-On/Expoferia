export class EmpresaColaboradorDto {
    constructor(data) {
        this.id = data.colaborador_id;
        this.nombre_completo = data.colaborador_nombre_completo;
        this.telefono = data.colaborador_telefono;
        this.area = data.colaborador_area;
        this.empresa_id = data.empresa_id
    }
}
