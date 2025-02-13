import pool from "../../usuarios/database/Conexion.js";

export const registrarRentabilidad = async (req, res) => {
  try {
    const { fk_egresos, fk_venta, ingresos_obtenidos, egresos_totales, rentabilidad } = req.body;
    const sql = `INSERT INTO Rentabilidad (fk_egresos, fk_venta, ingresos_obtenidos, egresos_totales, rentabilidad) VALUES ($1, $2, $3, $4, $5)`;
    const { rowCount } = await pool.query(sql, [fk_egresos, fk_venta, ingresos_obtenidos, egresos_totales, rentabilidad]);

    if (rowCount > 0) {
      res.status(201).json({ message: 'Rentabilidad registrada' });
    } else {
      res.status(400).json({ message: 'Rentabilidad no registrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};

export const listarRentabilidad = async (req, res) => {
  try {
    const sql = 'SELECT * FROM Rentabilidad';
    const { rows } = await pool.query(sql);

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).json({ message: 'No hay registros de rentabilidad' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};

export const eliminarRentabilidad = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = 'DELETE FROM Rentabilidad WHERE id = $1';
    const { rowCount } = await pool.query(sql, [id]);

    if (rowCount > 0) {
      res.status(200).json({ message: 'Rentabilidad eliminada' });
    } else {
      res.status(404).json({ message: 'Rentabilidad no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};

export const actualizarRentabilidad = async (req, res) => {
  try {
    const { fk_egresos, fk_venta, ingresos_obtenidos, egresos_totales, rentabilidad } = req.body;
    const id = req.params.id;
    const sql = `
      UPDATE Rentabilidad 
      SET fk_egresos = $1, fk_venta = $2, ingresos_obtenidos = $3, egresos_totales = $4, rentabilidad = $5
      WHERE id = $6
    `;
    const { rowCount } = await pool.query(sql, [fk_egresos, fk_venta, ingresos_obtenidos, egresos_totales, rentabilidad, id]);

    if (rowCount > 0) {
      res.status(200).json({ message: 'Rentabilidad actualizada' });
    } else {
      res.status(404).json({ message: 'Rentabilidad no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};
