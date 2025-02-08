import pool from '../database/Conexion.js';

// Registrar un nuevo usuario
export const RegistrarUsuarios = async (req, res) => {
  try {
    const { identificacion, nombre, apellido, fecha_nacimiento, telefono, email, password, area_desarrollo, cargo } = req.body;
    
    // Validación de campos obligatorios
    if (!identificacion || !password || !nombre || !apellido || !email) {
      return res.status(400).json({ message: 'Identificación, nombre, apellido, email y contraseña son obligatorios' });
    }

    const sql = `
      INSERT INTO usuarios (identificacion, nombre, apellido, fecha_nacimiento, telefono, email, password, area_desarrollo, cargo) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(sql, [
      identificacion, nombre, apellido, fecha_nacimiento, telefono, email, password, area_desarrollo, cargo
    ]);

    if (result.affectedRows > 0) {
      return res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } else {
      return res.status(404).json({ message: 'Usuario no registrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

// Listar todos los usuarios
export const listarUsuarios = async (req, res) => {
  try {
    const sql = 'SELECT * FROM usuarios';
    const [result] = await pool.query(sql);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar los usuarios' });
  }
};

// Actualizar un usuario
export const ActualizarUsuarios = async (req, res) => {
  try {
    const { identificacion, nombre, apellido, fecha_nacimiento, telefono, email, password, area_desarrollo, cargo } = req.body;
    const id = req.params.id;

    const sql = `
      UPDATE usuarios 
      SET identificacion=?, nombre=?, apellido=?, fecha_nacimiento=?, telefono=?, email=?, password=?, area_desarrollo=?, cargo=? 
      WHERE id=?
    `;
    const [rows] = await pool.query(sql, [
      identificacion, nombre, apellido, fecha_nacimiento, telefono, email, password, area_desarrollo, cargo, id
    ]);

    if (rows.affectedRows > 0) {
      return res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    } else {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario
export const EliminarUsuarios = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = 'DELETE FROM usuarios WHERE id=?';
    const [rows] = await pool.query(sql, [id]);

    if (rows.affectedRows > 0) {
      return res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } else {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};

// Buscar un usuario por identificación
export const BuscarUsuarios = async (req, res) => {
  try {
    const identificacion = req.params.identificacion;
    const sql = 'SELECT * FROM usuarios WHERE identificacion=?';
    const [rows] = await pool.query(sql, [identificacion]);

    if (rows.length > 0) {
      return res.status(200).json({ message: 'Usuario encontrado', usuario: rows[0] });
    } else {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar el usuario' });
  }
};