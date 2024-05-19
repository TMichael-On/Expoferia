import CN_EmpresaColaborador from "../../Capa_Negocio/cn_empresa_colaborador.js";
import { EmpresaColaboradorDto } from "./empresa_colaborador.dto.js";

// CREATE - Capa de Presentación
export const createEmpresaColaborador = async (req, res) => {
  const objCapaEmpresaColaborador = new CN_EmpresaColaborador();
  try {
      const result = await objCapaEmpresaColaborador.createEmpresaColaborador(req.body);
      res.json(result);
  } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
  }
};

//READ GENERAL
export const getEmpresasRedes = async (req, res) => {    
    const objCapaEmpresaColaborador = new CN_EmpresaColaborador();
    try {
      const result = await objCapaEmpresaColaborador.getEmpresaColaboradores();
      if (result.rows.length > 0) {
        const formattedRows = result.rows.map(row => new EmpresaColaboradorDto(row));
        res.json({ message: result.message, row: formattedRows });
    } else {
        res.json({ message: result.message, row: [] });
    }
      // res.json(result.rows);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

//READ 
export const getEmpresaColaborador = async (req, res) => {
  const objCapaEmpresaColaborador = new CN_EmpresaColaborador();
  try {
      const result = await objCapaEmpresaColaborador.getEmpresaColaborador(req.params.id);
      if (result.rows.length > 0) {
        const formattedRows = result.rows.map(row => new EmpresaColaboradorDto(row));
        res.json({ message: result.message, row: formattedRows });
    } else {
        res.json({ message: result.message, row: [] });
    }
      // res.json(result.rows);
  } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
  }
};

//UPDATE 
export const updateEmpresaColaborador = async (req, res) => {    
    const objCapaEmpresaColaborador = new CN_EmpresaColaborador();
    try {
      const result = await objCapaEmpresaColaborador.updateEmpresaColaborador(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

//DELETE 
export const deleteEmpresaColaborador = async (req, res) => {    
    const objCapaEmpresaColaborador = new CN_EmpresaColaborador();
    try {
      const result = await objCapaEmpresaColaborador.deleteEmpresaColaborador(req.params.id);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

  export const prueba = async (req, res) => {
    const result = "PRUEBA";
    res.json({result});
  }