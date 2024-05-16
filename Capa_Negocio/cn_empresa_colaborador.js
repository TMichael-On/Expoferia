import CD_EmpresaColaborador from "../Capa_Datos/cd_empresa_colaborador.js";

var objCapaDato = new CD_EmpresaColaborador();

class CN_EmpresaColaborador {

    //CREATE
    async createEmpresaColaborador(data) {
        const objCapaDatos = new CD_EmpresaColaborador();
        return await objCapaDatos.createEmpresaColaborador(data);
    }

    //READ GENERAL
    async getEmpresaColaboradores() {
        const objCapaDatos = new CD_EmpresaColaborador();
        return await objCapaDatos.getEmpresaColaboradores();
    }

    //READ ID
    async getEmpresaColaborador(id) {
        const objCapaDatos = new CD_EmpresaColaborador();
        return await objCapaDatos.getEmpresaColaborador(id);
    }

    //UPDATE 
    async updateEmpresaColaborador(id,data) {
        return await objCapaDato.updateEmpresaColaborador(id,data);
    }

    //DELETE 
    async deleteEmpresaColaborador(id) {
        return await objCapaDato.deleteEmpresaColaborador(id);
    }
}

export default CN_EmpresaColaborador;