import pool from '../database/Conexion.js';

export const listarRoles = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM roles');
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar roles' });
  }
};

export const RegistrarRoles = async (req, res) => {
  try {
    const { nombre_rol } = req.body;
    
    if (!nombre_rol) {
      return res.status(400).json({ message: 'Nombre de rol requerido' });
    }

    const sql = `
      INSERT INTO roles (nombre_rol, fecha_creacion, ultima_actualizacion)
      VALUES (?, NOW(), NOW())
    `;
    const [result] = await pool.query(sql, [nombre_rol]);

    result.affectedRows > 0 
      ? res.status(201).json({ message: 'Rol creado' })
      : res.status(400).json({ message: 'Error al crear rol' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const ActualizarRoles = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_rol } = req.body;

    const sql = `
      UPDATE roles SET 
      nombre_rol = ?, 
      ultima_actualizacion = NOW()
      WHERE id = ?
    `;
    const [result] = await pool.query(sql, [nombre_rol, id]);

    result.affectedRows > 0 
      ? res.status(200).json({ message: 'Rol actualizado' })
      : res.status(404).json({ message: 'Rol no encontrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar' });
  }
};

export const EliminarRoles = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM roles WHERE id = ?', [id]);

    result.affectedRows > 0 
      ? res.status(200).json({ message: 'Rol eliminado' })
      : res.status(404).json({ message: 'Rol no encontrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar' });
  }
};