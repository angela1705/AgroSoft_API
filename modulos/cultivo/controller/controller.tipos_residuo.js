import { pool } from "../../../database/conexion.js";

export const postTipos_residuo = async (req, res) => {
    try {
        const { id: newId } = req.body;
        const sql = "INSERT INTO tipos_residuo (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipos_residuo registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar tipos_residuo" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getTipos_residuo = async (req, res) => {
    try {
        const sql = "SELECT * FROM tipos_residuo";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de tipos_residuo" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdTipos_residuo = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM tipos_residuo WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Tipos_residuo no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateTipos_residuo = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: newId } = req.body;
        const sql = "UPDATE tipos_residuo SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipos_residuo actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar tipos_residuo" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
