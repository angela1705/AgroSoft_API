import pool from "../../usuarios/database/Conexion.js";

export const registrarEgreso = async (req, res) => {
  try {
    const { fk_actividad, fk_pago, egreso_insumos, total_egresos } = req.body;
    const sql = `INSERT INTO Egresos (fk_actividad, fk_pago, egreso_insumos, total_egresos) VALUES ($1, $2, $3, $4)`;
    const { rowCount } = await pool.query(sql, [fk_actividad, fk_pago, egreso_insumos, total_egresos]);

    if (rowCount > 0) {
      res.status(201).json({ message: 'Egreso registrado' });
    } else {
      res.status(400).json({ message: 'Egreso no registrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};

export const listarEgresos = async (req, res) => {
  try {
    const sql = 'SELECT * FROM Egresos';
    const { rows } = await pool.query(sql);

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).json({ message: 'No hay registros de egresos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};

export const eliminarEgreso = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = 'DELETE FROM Egresos WHERE id = $1';
    const { rowCount } = await pool.query(sql, [id]);

    if (rowCount > 0) {
      res.status(200).json({ message: 'Egreso eliminado' });
    } else {
      res.status(404).json({ message: 'Egreso no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};

export const actualizarEgreso = async (req, res) => {
  try {
    const { fk_actividad, fk_pago, egreso_insumos, total_egresos } = req.body;
    const id = req.params.id;
    const sql = `
      UPDATE Egresos 
      SET fk_actividad = $1, fk_pago = $2, egreso_insumos = $3, total_egresos = $4 
      WHERE id = $5
    `;
    const { rowCount } = await pool.query(sql, [fk_actividad, fk_pago, egreso_insumos, total_egresos, id]);

    if (rowCount > 0) {
      res.status(200).json({ message: 'Egreso actualizado' });
    } else {
      res.status(404).json({ message: 'Egreso no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema' });
  }
};
