import CD_Empresa from "../Capa_Datos/cd_empresa.js";

var objCapaDato = new CD_Empresa();

class CN_Empresa {

    //CREATE
    async createEmpresa(data) {
        const objCapaDatos = new CD_Empresa();
        return await objCapaDatos.createEmpresa(data);
    }

    //READ GENERAL
    async getEmpresas() {
        return await objCapaDato.getEmpresas();
    }

    //READ ID
    async getEmpresa(id) {
        const objCapaDatos = new CD_Empresa();
        return await objCapaDatos.getEmpresa(id);
    }

    //UPDATE 
    async updateEmpresa(id,data) {
        return await objCapaDato.updateEmpresa(id,data);
    }

    //DELETE 
    async deleteEmpresa(id) {
        return await objCapaDato.deleteEmpresa(id);
    }
}

export default CN_Empresa;