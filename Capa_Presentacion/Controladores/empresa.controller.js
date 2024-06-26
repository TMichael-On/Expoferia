import CN_Empresa from "../../Capa_Negocio/cn_empresa.js";
import { EmpresaDto } from "./empresa.dto.js";
// CREATE - Capa de Presentación
export const createEmpresa = async (req, res) => {
  const objCapaEmpresa = new CN_Empresa();
  try {
      const result = await objCapaEmpresa.createEmpresa(req.body);
      res.json(result);
  } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
  }
};

//READ GENERAL
export const getEmpresas = async (req, res) => {    
    const objCapaEmpresa = new CN_Empresa();
    try {
      const result = await objCapaEmpresa.getEmpresas();
      if (result.rows.length > 0) {
        const formattedRows = result.rows.map(row => new EmpresaDto(row));
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
export const getEmpresa = async (req, res) => {
  const objCapaEmpresa = new CN_Empresa();
  try {
      const result = await objCapaEmpresa.getEmpresa(req.params.id);
      if (result.rows.length > 0) {
        const formattedRows = result.rows.map(row => new EmpresaDto(row));
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
export const updateEmpresa = async (req, res) => {    
    const objCapaEmpresa = new CN_Empresa();
    try {
      const result = await objCapaEmpresa.updateEmpresa(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

//DELETE 
export const deleteEmpresa = async (req, res) => {    
    const objCapaEmpresa = new CN_Empresa();
    try {
      const result = await objCapaEmpresa.deleteEmpresa(req.params.id);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

  export const prueba = async (req, res) => {
    const result = "PRUEBA";
    res.json({result});
  }