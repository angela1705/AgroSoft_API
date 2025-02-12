import { pool } from "../../../database/conexion.js";

export const postFase_lunar = async (req, res) => {
    try {
        const id = req.body;
        const sql = "INSERT INTO fase_lunar (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Fase_lunar registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar fase_lunar" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getFase_lunar = async (req, res) => {
    try {
        const sql = "SELECT * FROM fase_lunar";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de fase_lunar" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdFase_lunar = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM fase_lunar WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Fase_lunar no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateFase_lunar = async (req, res) => {
    try {
        const { id } = req.params;
        const id = req.body;
        const sql = "UPDATE fase_lunar SET id = $1 WHERE id = $1";
        const result = await pool.query(sql, [id, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Fase_lunar actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar fase_lunar" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
