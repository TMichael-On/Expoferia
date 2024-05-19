export class EmpresaProductoDto {
    constructor(data) {
        this.id = data.producto_id;
        this.nombre = data.producto_nombre;
        this.categoria = data.producto_categoria;
        this.stock = data.producto_stock;
        this.precio = data.producto_precio;
        this.moneda = data.producto_moneda;
        this.estado = data.producto_estado;
        this.empresa_id = data.empresa_id
    }
}
