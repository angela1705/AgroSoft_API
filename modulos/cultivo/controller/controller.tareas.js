import { pool } from "../../../database/conexion.js";

export const postTareas = async (req, res) => {
    try {
        const id = req.body;
        const sql = "INSERT INTO tareas (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tareas registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar tareas" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getTareas = async (req, res) => {
    try {
        const sql = "SELECT * FROM tareas";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de tareas" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdTareas = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM tareas WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Tareas no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateTareas = async (req, res) => {
    try {
        const { id } = req.params;
        const id = req.body;
        const sql = "UPDATE tareas SET id = $1 WHERE id = $1";
        const result = await pool.query(sql, [id, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tareas actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar tareas" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
