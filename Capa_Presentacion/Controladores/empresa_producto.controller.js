import CN_EmpresaProducto from "../../Capa_Negocio/cn_empresa_producto.js";
import { EmpresaProductoDto } from "./empresa_producto.dto.js";

// CREATE - Capa de Presentación
export const createEmpresaProducto = async (req, res) => {
  const objCapaEmpresaProducto = new CN_EmpresaProducto();
  try {
      const result = await objCapaEmpresaProducto.createEmpresaProducto(req.body);
      res.json(result);
  } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
  }
};

//READ GENERAL
export const getEmpresaProductos = async (req, res) => {    
    const objCapaEmpresaProducto = new CN_EmpresaProducto();
    try {
      const result = await objCapaEmpresaProducto.getEmpresaProductos();
      if (result.rows.length > 0) {
        const formattedRows = result.rows.map(row => new EmpresaProductoDto(row));
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
export const getEmpresaProducto = async (req, res) => {
  const objCapaEmpresaProducto = new CN_EmpresaProducto();
  try {
      const result = await objCapaEmpresaProducto.getEmpresaProducto(req.params.id);
      if (result.rows.length > 0) {
        const formattedRows = result.rows.map(row => new EmpresaProductoDto(row));
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
export const updateEmpresaProducto = async (req, res) => {    
    const objCapaEmpresaProducto = new CN_EmpresaProducto();
    try {
      const result = await objCapaEmpresaProducto.updateEmpresaProducto(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

//DELETE 
export const deleteEmpresaProducto = async (req, res) => {    
    const objCapaEmpresaProducto = new CN_EmpresaProducto();
    try {
      const result = await objCapaEmpresaProducto.deleteEmpresaProducto(req.params.id);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Algo error ocurrio en CP: "+error.message });
    }
  };

  export const prueba = async (req, res) => {
    const result = "PRUEBA";
    res.json({result});
  }