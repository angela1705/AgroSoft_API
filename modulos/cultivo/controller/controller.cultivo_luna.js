import pool from "../../usuarios/database/Conexion.js";

export const postCultivo_luna = async (req, res) => {
    try {
        const { fk_cultivo, fk_fase_lunar } = req.body;
        if (!fk_cultivo || !fk_fase_lunar) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "INSERT INTO cultivo_luna (fk_cultivo, fk_fase_lunar) VALUES ($1, $2) RETURNING id";
        const result = await pool.query(sql, [fk_cultivo, fk_fase_lunar]);
        if (result.rows.length > 0) {
            return res.status(201).json({ "message": "Cultivo_luna registrado correctamente", "id": result.rows[0].id });
        }
        return res.status(400).json({ "message": "No se pudo registrar cultivo_luna" });
    } catch (error) {
        console.error('Error en postCultivo_luna:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getCultivo_luna = async (req, res) => {
    try {
        const sql = "SELECT * FROM cultivo_luna";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getCultivo_luna:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdCultivo_luna = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM cultivo_luna WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Cultivo_luna no encontrado" });
        }
    } catch (error) {
        console.error('Error en getIdCultivo_luna:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const updateCultivo_luna = async (req, res) => {
    try {
        const { id } = req.params;
        const { fk_cultivo, fk_fase_lunar } = req.body;
        if (!fk_cultivo || !fk_fase_lunar) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "UPDATE cultivo_luna SET fk_cultivo = $1, fk_fase_lunar = $2 WHERE id = $3";
        const result = await pool.query(sql, [fk_cultivo, fk_fase_lunar, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cultivo_luna actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar cultivo_luna" });
    } catch (error) {
        console.error('Error en updateCultivo_luna:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const deleteCultivo_luna = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM cultivo_luna WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cultivo_luna eliminado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar cultivo_luna" });
    } catch (error) {
        console.error('Error en deleteCultivo_luna:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
