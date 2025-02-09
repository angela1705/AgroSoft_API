import jwt from 'jsonwebtoken';
import pool from '../database/Conexion.js';

const secretKey = process.env.SECRET_KEY || 'estoesmuysecreto';
const tokenExpiry = process.env.TIME || '12h';

const CrearToken = async (req, res) => {
  try {
    const { identificacion, password } = req.body;
    if (!identificacion || !password) {
      return res.status(400).json({ message: 'Identificación y contraseña son obligatorias' });
    }

    const sql = `SELECT identificacion, password, nombres FROM usuarios WHERE identificacion = $1 AND password = $2`;
    const { rows } = await pool.query(sql, [identificacion, password]);

    if (rows.length > 0) {
      const user = rows[0];

      // Crear el token
      const token = jwt.sign(
        {
          id: user.identificacion,
          nombre: user.nombres,
        },
        secretKey,
        { expiresIn: tokenExpiry }
      );

      return res.status(200).json({ message: 'Cliente autorizado', user, token });
    } else {
      return res.status(404).json({ message: 'Cliente no autorizado' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error en el sistema' });
  }
};

export default CrearToken;