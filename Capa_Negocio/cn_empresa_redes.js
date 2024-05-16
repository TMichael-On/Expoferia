import CD_EmpresaRedes from "../Capa_Datos/cd_Empresa_Redes.js";

var objCapaDato = new CD_EmpresaRedes();

class CN_EmpresaRedes {

    //CREATE
    async createEmpresaRedes(data) {
        const objCapaDatos = new CD_EmpresaRedes();
        return await objCapaDatos.createEmpresaRedes(data);
    }

    //READ GENERAL
    async getEmpresasRedes() {
        return await objCapaDato.getEmpresasRedes();
    }

    //READ ID
    async getEmpresaRedes(id) {
        const objCapaDatos = new CD_EmpresaRedes();
        return await objCapaDatos.getEmpresaRedes(id);
    }

    //UPDATE 
    async updateEmpresaRedes(id,data) {
        return await objCapaDato.updateEmpresaRedes(id,data);
    }

    //DELETE 
    async deleteEmpresaRedes(id) {
        return await objCapaDato.deleteEmpresaRedes(id);
    }
}

export default CN_EmpresaRedes;