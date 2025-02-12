import { pool } from "../../../database/conexion.js";

export const postCultivo_luna = async (req, res) => {
    try {
        const id = req.body;
        const sql = "INSERT INTO cultivo_luna (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cultivo_luna registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar cultivo_luna" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getCultivo_luna = async (req, res) => {
    try {
        const sql = "SELECT * FROM cultivo_luna";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de cultivo_luna" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdCultivo_luna = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM cultivo_luna WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Cultivo_luna no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateCultivo_luna = async (req, res) => {
    try {
        const { id } = req.params;
        const id = req.body;
        const sql = "UPDATE cultivo_luna SET id = $1 WHERE id = $1";
        const result = await pool.query(sql, [id, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cultivo_luna actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar cultivo_luna" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
