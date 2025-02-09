import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'dbagro',
  password: 'adso2024',
  port: 5432,
});
export const listarPermisos = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM permisos');
    res.status(200).json(rows);
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
      VALUES ($1, $2)
      RETURNING *;  -- Retorna el registro insertado
    `;
    const { rows } = await pool.query(sql, [nombre, descripcion]);

    rows.length > 0
      ? res.status(201).json({ message: 'Permiso creado', permiso: rows[0] })
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
      nombre = $1, 
      descripcion = $2
      WHERE id = $3
      RETURNING *;  -- Retorna el registro actualizado
    `;
    const { rows } = await pool.query(sql, [nombre, descripcion, id]);

    rows.length > 0
      ? res.status(200).json({ message: 'Permiso actualizado', permiso: rows[0] })
      : res.status(404).json({ message: 'Permiso no encontrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar' });
  }
};

export const EliminarPermisos = async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM permisos WHERE id = $1', [id]);

    rowCount > 0
      ? res.status(200).json({ message: 'Permiso eliminado' })
      : res.status(404).json({ message: 'Permiso no encontrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar' });
  }
};