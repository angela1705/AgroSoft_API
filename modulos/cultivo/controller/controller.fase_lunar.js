import pool from "../../usuarios/database/Conexion.js";

export const postFase_lunar = async (req, res) => {
    try {
        const { nombre, descripcion, fecha_inicio, fecha_fin } = req.body;
        if (!nombre || !fecha_inicio || !fecha_fin) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "INSERT INTO fase_lunar (nombre, descripcion, fecha_inicio, fecha_fin) VALUES ($1, $2, $3, $4) RETURNING id";
        const result = await pool.query(sql, [nombre, descripcion, fecha_inicio, fecha_fin]);
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Fase lunar registrada correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar la fase lunar" });
    } catch (error) {
        console.error('Error en postFase_lunar:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getFase_lunar = async (req, res) => {
    try {
        const sql = "SELECT * FROM fase_lunar";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getFase_lunar:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdFase_lunar = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM fase_lunar WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Fase lunar no encontrada" });
        }
    } catch (error) {
        console.error('Error en getIdFase_lunar:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const updateFase_lunar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, fecha_inicio, fecha_fin } = req.body;
        if (!nombre || !fecha_inicio || !fecha_fin) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "UPDATE fase_lunar SET nombre = $1, descripcion = $2, fecha_inicio = $3, fecha_fin = $4 WHERE id = $5";
        const result = await pool.query(sql, [nombre, descripcion, fecha_inicio, fecha_fin, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Fase lunar actualizada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar la fase lunar" });
    } catch (error) {
        console.error('Error en updateFase_lunar:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const deleteFase_lunar = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM fase_lunar WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Fase lunar eliminada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar la fase lunar" });
    } catch (error) {
        console.error('Error en deleteFase_lunar:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
