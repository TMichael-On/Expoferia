import CD_EmpresaProducto from "../Capa_Datos/cd_empresa_producto.js";

var objCapaDato = new CD_EmpresaProducto();
class CN_EmpresaProducto {

    //CREATE
    async createEmpresaProducto(data) {
        const objCapaDatos = new CD_EmpresaProducto();
        return await objCapaDatos.createEmpresaProducto(data);
    }

    //READ GENERAL
    async getEmpresaProductos() {
        return await objCapaDato.getEmpresasproducto();
    }

    //READ ID
    async getEmpresaProducto(id) {
        const objCapaDatos = new CD_EmpresaProducto();
        return await objCapaDatos.getEmpresaProducto(id);
    }

    //UPDATE 
    async updateEmpresaProducto(id,data) {
        return await objCapaDato.updateEmpresaProducto(id,data);
    }

    //DELETE 
    async deleteEmpresaProducto(id) {
        return await objCapaDato.deleteEmpresaProducto(id);
    }
}

export default CN_EmpresaProducto;