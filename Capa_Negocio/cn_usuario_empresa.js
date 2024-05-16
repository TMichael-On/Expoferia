import CD_UsuarioEmpresa from "../Capa_Datos/cd_usuario_empresa.js";

var objCapaDato = new CD_UsuarioEmpresa();

class CN_UsuarioEmpresa {

    //CREATE
    async createUsuarioEmpresa(data) {
        const objCapaDatos = new CD_UsuarioEmpresa();
        return await objCapaDatos.createUsuarioEmpresa(data);
    }

    //READ GENERAL
    async getUsuarioEmpresas() {
        return await objCapaDato.getUsuarioEmpresas();
    }

    //READ ID
    async getUsuarioEmpresa(id) {
        const objCapaDatos = new CD_UsuarioEmpresa();
        return await objCapaDatos.getUsuarioEmpresa(id);
    }

    //UPDATE 
    async updateUsuarioEmpresa(id,data) {
        return await objCapaDato.updateUsuarioEmpresa(id,data);
    }

    //DELETE 
    async deleteUsuarioEmpresa(id) {
        return await objCapaDato.deleteUsuarioEmpresa(id);
    }
}

export default CN_UsuarioEmpresa;