export class UsuarioEmpresaDto {
    constructor(data) {
        this.id = data.usuario_id;
        this.nombre = data.usuario_nombre;
        this.apellido = data.usuario_apellido;
        this.correo = data.usuario_correo;
        this.telefono = data.usuario_telefono;
        this.contrasena = data.usuario_contrasena;
        this.fecha_registro = data.usuario_fecha_registro;
    }
}
