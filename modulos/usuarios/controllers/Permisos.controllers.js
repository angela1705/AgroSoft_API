import pool from '../database/Conexion.js';

export const listarPermisos = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM permisos');
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar permisos' });
  }
};

export const RegistrarPermisos = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    
    if (!nombre) {
      return res.status(400).json({ message: 'Nombre de permiso requerido' });
    }

    const sql = `
      INSERT INTO permisos (nombre, descripcion)
      VALUES (?, ?)
    `;
    const [result] = await pool.query(sql, [nombre, descripcion]);

    result.affectedRows > 0 
      ? res.status(201).json({ message: 'Permiso creado' })
      : res.status(400).json({ message: 'Error al crear permiso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const ActualizarPermisos = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    const sql = `
      UPDATE permisos SET 
      nombre = ?, 
      descripcion = ?
      WHERE id = ?
    `;
    const [result] = await pool.query(sql, [nombre, descripcion, id]);

    result.affectedRows > 0 
      ? res.status(200).json({ message: 'Permiso actualizado' })
      : res.status(404).json({ message: 'Permiso no encontrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar' });
  }
};

export const EliminarPermisos = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM permisos WHERE id = ?', [id]);

    result.affectedRows > 0 
      ? res.status(200).json({ message: 'Permiso eliminado' })
      : res.status(404).json({ message: 'Permiso no encontrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar' });
  }
};