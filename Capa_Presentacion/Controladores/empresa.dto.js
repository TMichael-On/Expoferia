export class EmpresaDto {
    constructor(data) {
        this.id = data.empresa_id;
        this.nombre = data.empresa_nombre;
        this.numero_ruc = data.empresa_numero_ruc;
        this.rubro = data.empresa_rubro;
        this.direccion = data.empresa_direccion;
        this.telefono = data.empresa_telefono;
        this.correo = data.empresa_correo;
        this.descripcion = data.empresa_descripcion;
        this.historia = data.empresa_historia;
        this.usuario_id = data.empresa_usuario_id;
    }
}