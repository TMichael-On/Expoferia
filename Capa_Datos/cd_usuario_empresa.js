import { pool } from "./Conexion DB/conection-db.js";

class CD_UsuarioEmpresa {
  //CREATE
  async createUsuarioEmpresa(data) {
    let message = "";
    let rows;
    try {
      const [results] = await pool.query(
        "SELECT * FROM expo_usuario_empresa WHERE usuario_correo = ?",
        [data.correo]
      );
      rows = results[0];
      if (rows) {
        message = "Correo ya existente";
      } else {
        const [result] = await pool.query(
          "INSERT INTO expo_usuario_empresa (usuario_nombre, usuario_apellido, usuario_correo, usuario_telefono, usuario_contrasena, usuario_fecha_registro) VALUES (?,?,?,?,?,current_timestamp())",
          [
            data.nombre,
            data.apellidos,
            data.correo,
            data.telefono,
            data.contrasena,
          ]
        );
        rows = result;
        message = "success";
      }
    } catch (error) {
      message = "Algo salió mal en CD";
      rows = [];
    }
    return { message, rows };
  }
  //READ GENERAL
  async getUsuarioEmpresas() {
    let message = "";
    let rows;
    try {
      [rows] = await pool.query("SELECT * FROM expo_usuario_empresa");
      message = "success";
    } catch (error) {
      message = "Algo salió mal en CD";
      rows = [];
    }
    return { message: message, rows: rows };
  }
  //READ ID
  async getUsuarioEmpresa(id) {
    let message = "";
    let row;
    try {
      const [results] = await pool.query(
        "SELECT * FROM expo_usuario_empresa WHERE usuario_id = ?",
        [id]
      );
      row = results[0];
      if (row) {
        message = "success";
      } else {
        message = "Usuario no encontrado";
        row = {};
      }
    } catch (error) {
      message = "Algo salió mal en CD";
      row = {};
    }
    return { message, row };
  }
  //UPDATE// Capa de Datos
  async updateUsuarioEmpresa(id, data) {
    let message = "";
    let sql = "UPDATE expo_usuario_empresa SET ";
    const params = [];
    const updates = [];

    // Condicionales para cada campo que puede ser actualizado
    if (data.nombre !== undefined) {
      updates.push("usuario_nombre = ?");
      params.push(data.nombre);
    }
    if (data.apellidos !== undefined) {
      updates.push("usuario_apellido = ?");
      params.push(data.apellidos);
    }
    if (data.correo !== undefined) {
      updates.push("usuario_correo = ?");
      params.push(data.correo);
    }
    if (data.telefono !== undefined) {
      updates.push("usuario_telefono = ?");
      params.push(data.telefono);
    }
    if (data.contrasena !== undefined) {
      updates.push("usuario_contrasena = ?");
      params.push(data.contrasena);
    }
    if (data.fecha !== undefined) {
      updates.push("usuario_fecha_registro = ?");
      params.push(data.fecha);
    }

    // Finalizar la construcción de la consulta SQL
    if (updates.length === 0) {
      return {
        message: "No se proporcionaron datos para actualizar.",
        rows: {},
      };
    }

    sql += updates.join(", ");
    sql += " WHERE usuario_id = ?";
    params.push(id);

    try {
      const [rows] = await pool.query(sql, params);
      if (rows.affectedRows === 1) {
        message = "success";
      } else {
        message = "Usuario no encontrado";
        return { message, rows: {} };
      }
    } catch (error) {
      message = "Algo salió mal en CD: " + error.message;
      return { message, rows: [] };
    }

    return { message, rows };
  }

  //DELETE
  async deleteUsuarioEmpresa(id) {
    let message = "";
    let rows;
    try {
      [rows] = await pool.query(
        "DELETE FROM expo_usuario_empresa WHERE usuario_id = (?)",
        [id]
      );
      if (rows.affectedRows == 1) {
        message = "success";
      } else {
        message = "Usuario no encontrado";
        rows = {};
      }
    } catch (error) {
      message = "Algo salió mal en CD";
      rows = [];
    }
    return { message: message, rows: rows };
  }
}

export default CD_UsuarioEmpresa;
