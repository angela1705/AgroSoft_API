import { pool } from "../../../database/conexion.js";

export const postPlagas = async (req, res) => {
    try {
        const id = req.body;
        const sql = "INSERT INTO plagas (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Plagas registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar plagas" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getPlagas = async (req, res) => {
    try {
        const sql = "SELECT * FROM plagas";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de plagas" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdPlagas = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM plagas WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Plagas no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updatePlagas = async (req, res) => {
    try {
        const { id } = req.params;
        const id = req.body;
        const sql = "UPDATE plagas SET id = $1 WHERE id = $1";
        const result = await pool.query(sql, [id, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Plagas actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar plagas" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
