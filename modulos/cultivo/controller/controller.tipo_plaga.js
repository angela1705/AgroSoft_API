import { pool } from "../../../database/conexion.js";

export const postTipo_plaga = async (req, res) => {
    try {
        const id = req.body;
        const sql = "INSERT INTO tipo_plaga (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipo_plaga registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar tipo_plaga" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getTipo_plaga = async (req, res) => {
    try {
        const sql = "SELECT * FROM tipo_plaga";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de tipo_plaga" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdTipo_plaga = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM tipo_plaga WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Tipo_plaga no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateTipo_plaga = async (req, res) => {
    try {
        const { id } = req.params;
        const id = req.body;
        const sql = "UPDATE tipo_plaga SET id = $1 WHERE id = $1";
        const result = await pool.query(sql, [id, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipo_plaga actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar tipo_plaga" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
