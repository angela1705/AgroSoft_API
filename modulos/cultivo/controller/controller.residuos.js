import { pool } from "../../../database/conexion.js";

export const postResiduos = async (req, res) => {
    try {
        const { id: newId } = req.body;
        const sql = "INSERT INTO residuos (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Residuos registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar residuos" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getResiduos = async (req, res) => {
    try {
        const sql = "SELECT * FROM residuos";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de residuos" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdResiduos = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM residuos WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Residuos no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateResiduos = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: newId } = req.body;
        const sql = "UPDATE residuos SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Residuos actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar residuos" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
