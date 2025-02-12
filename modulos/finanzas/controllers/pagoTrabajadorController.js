import pool from "../../usuarios/database/Conexion.js";


export const registrarPagoTrabajador = async (req, res) => {
  try {
    const { fk_usuario, fk_actividad, fk_salario, tiempo_trabajado } = req.body;
    const sql = `INSERT INTO Pago_trabajador (fk_usuario, fk_actividad, fk_salario, tiempo_trabajado) VALUES ($1, $2, $3, $4)`;
    const { rowCount } = await pool.query(sql, [fk_usuario, fk_actividad, fk_salario, tiempo_trabajado]);

    if (rowCount > 0) {
      res.status(201).json({ message: 'Pago de trabajador registrado' });
    } else {
      res.status(400).json({ message: 'No se pudo registrar el pago' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};


export const listarPagoTrabajador = async (req, res) => {
  try {
    const sql = 'SELECT * FROM Pago_trabajador';
    const { rows } = await pool.query(sql);

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).json({ message: 'No hay registros de pagos de trabajadores' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};


export const eliminarPagoTrabajador = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = 'DELETE FROM Pago_trabajador WHERE id = $1';
    const { rowCount } = await pool.query(sql, [id]);

    if (rowCount > 0) {
      res.status(200).json({ message: 'Pago de trabajador eliminado' });
    } else {
      res.status(404).json({ message: 'Pago de trabajador no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};


export const actualizarPagoTrabajador = async (req, res) => {
  try {
    const { fk_usuario, fk_actividad, fk_salario, tiempo_trabajado } = req.body;
    const id = req.params.id;
    const sql = `
      UPDATE Pago_trabajador 
      SET fk_usuario = $1, fk_actividad = $2, fk_salario = $3, tiempo_trabajado = $4 
      WHERE id = $5
    `;
    const { rowCount } = await pool.query(sql, [fk_usuario, fk_actividad, fk_salario, tiempo_trabajado, id]);

    if (rowCount > 0) {
      res.status(200).json({ message: 'Pago de trabajador actualizado' });
    } else {
      res.status(404).json({ message: 'Pago de trabajador no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};
