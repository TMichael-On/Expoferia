import CN_UsuarioEmpresa from "../../Capa_Negocio/cn_usuario_empresa.js";
import { UsuarioEmpresaDto } from "./usuario_empresa.dto.js";

// CREATE - Capa de Presentación
export const createUsuarioEmpresa = async (req, res) => {
  const objCapaEmpresa = new CN_UsuarioEmpresa();
  try {
      const result = await objCapaEmpresa.createUsuarioEmpresa(req.body);
      res.json(result);
  } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
  }
};

//READ GENERAL
export const getUsuarioEmpresas = async (req, res) => {    
    const objCapaEmpresa = new CN_UsuarioEmpresa();
    try {
      const result = await objCapaEmpresa.getUsuarioEmpresas();
      if (result.rows.length > 0) {
        const formattedRows = result.rows.map(row => new UsuarioEmpresaDto(row));
        res.json({ message: result.message, row: formattedRows });
    } else {
        res.json({ message: result.message, row: [] });
    }
      // res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

//READ 
export const getUsuarioEmpresa = async (req, res) => {
  const objCapaEmpresa = new CN_UsuarioEmpresa();
  try {
      const result = await objCapaEmpresa.getUsuarioEmpresa(req.params.id);
      if (result.rows.length > 0) {
        const formattedRows = result.rows.map(row => new UsuarioEmpresaDto(row));
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
export const updateUsuarioEmpresa = async (req, res) => {    
    const objCapaEmpresa = new CN_UsuarioEmpresa();
    try {
      const result = await objCapaEmpresa.updateUsuarioEmpresa(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

//DELETE 
export const deleteUsuarioEmpresa = async (req, res) => {    
    const objCapaEmpresa = new CN_UsuarioEmpresa();
    try {
      const result = await objCapaEmpresa.deleteUsuarioEmpresa(req.params.id);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

  export const prueba = async (req, res) => {
    const result = "PRUEBA";
    res.json({result});
  }