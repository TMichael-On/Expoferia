export class EmpresaRedesDto {
    constructor(data) {
        this.id = data.redes_id;
        this.nombre = data.redes_nombre;
        this.url = data.redes_url;
        this.empresa_id = data.empresa_id
    }
}
