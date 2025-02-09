import pool from '../database/Conexion.js';

export const listarRolesUsuario = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM usuario_rol');
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar relaciones' });
  }
};

export const AsignarRolUsuario = async (req, res) => {
  try {
    const { fk_usuario, fk_rol } = req.body;
    
    if (!fk_usuario || !fk_rol) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }

    const sql = `
      INSERT INTO usuario_rol (fk_usuario, fk_rol)
      VALUES (?, ?)
    `;
    const [result] = await pool.query(sql, [fk_usuario, fk_rol]);

    result.affectedRows > 0 
      ? res.status(201).json({ message: 'Rol asignado' })
      : res.status(400).json({ message: 'Error en asignación' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const EliminarRolUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM usuario_rol WHERE id = ?', [id]);

    result.affectedRows > 0 
      ? res.status(200).json({ message: 'Relación eliminada' })
      : res.status(404).json({ message: 'Relación no encontrada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar' });
  }
};