import { pool } from "../../../database/conexion.js";

export const postAfecciones = async (req, res) => {
    try {
        const id = req.body;
        const sql = "INSERT INTO afecciones (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Afecciones registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar afecciones" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getAfecciones = async (req, res) => {
    try {
        const sql = "SELECT * FROM afecciones";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de afecciones" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdAfecciones = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM afecciones WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Afecciones no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateAfecciones = async (req, res) => {
    try {
        const { id } = req.params;
        const id = req.body;
        const sql = "UPDATE afecciones SET id = $1 WHERE id = $1";
        const result = await pool.query(sql, [id, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Afecciones actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar afecciones" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
