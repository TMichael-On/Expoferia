import CN_UsuarioEmpresa from "../../Capa_Negocio/cn_usuario_empresa.js";

// CREATE - Capa de Presentación
export const createUsuarioEmpresa = async (req, res) => {
  const objCapaEmpresa = new CN_UsuarioEmpresa();
  try {
      const result = await objCapaEmpresa.createUsuarioEmpresa(req.body);
      res.json(result);
  } catch (error) {
      return res.status(500).json({ message: "Something went wrong in CP", error: error.message });
  }
};

//READ GENERAL
export const getUsuarioEmpresas = async (req, res) => {    
    const objCapaEmpresa = new CN_UsuarioEmpresa();
    try {
      const result = await objCapaEmpresa.getUsuarioEmpresas();
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong in CP" });
    }
  };

//READ 
export const getUsuarioEmpresa = async (req, res) => {
  const objCapaEmpresa = new CN_UsuarioEmpresa();
  try {
      const result = await objCapaEmpresa.getUsuarioEmpresa(req.params.id);
      res.json(result);
  } catch (error) {
      return res.status(500).json({ message: "Something went wrong in CP", error: error.message });
  }
};

//UPDATE 
export const updateUsuarioEmpresa = async (req, res) => {    
    const objCapaEmpresa = new CN_UsuarioEmpresa();
    try {
      const result = await objCapaEmpresa.updateUsuarioEmpresa(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong in CP" });
    }
  };

//DELETE 
export const deleteUsuarioEmpresa = async (req, res) => {    
    const objCapaEmpresa = new CN_UsuarioEmpresa();
    try {
      const result = await objCapaEmpresa.deleteUsuarioEmpresa(req.params.id);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong in CP" });
    }
  };

  export const prueba = async (req, res) => {
    const result = "PRUEBA";
    res.json({result});
  }