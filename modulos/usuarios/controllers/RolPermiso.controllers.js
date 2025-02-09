import pool from '../database/Conexion.js';

export const listarPermisosRol = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM rol_permiso');
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar relaciones' });
  }
};

export const AsignarPermisoRol = async (req, res) => {
  try {
    const { fk_rol, fk_permiso } = req.body;
    
    if (!fk_rol || !fk_permiso) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }

    const sql = `
      INSERT INTO rol_permiso (fk_rol, fk_permiso)
      VALUES (?, ?)
    `;
    const [result] = await pool.query(sql, [fk_rol, fk_permiso]);

    result.affectedRows > 0 
      ? res.status(201).json({ message: 'Permiso asignado' })
      : res.status(400).json({ message: 'Error en asignación' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const EliminarPermisoRol = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM rol_permiso WHERE id = ?', [id]);

    result.affectedRows > 0 
      ? res.status(200).json({ message: 'Relación eliminada' })
      : res.status(404).json({ message: 'Relación no encontrada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar' });
  }
};