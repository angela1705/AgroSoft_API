import pool from "../../usuarios/database/Conexion.js";

export const postTipos_control = async (req, res) => {
    try {
        
        const sql = "INSERT INTO tipos_control (id) VALUES (DEFAULT)";
        const result = await pool.query(sql, []);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipos_control registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar tipos_control" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getTipos_control = async (req, res) => {
    try {
        const sql = "SELECT * FROM tipos_control";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de tipos_control" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdTipos_control = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM tipos_control WHERE id = $1";
        const result = await pool.query(sql, []);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Tipos_control no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateTipos_control = async (req, res) => {
    try {
        const { id } = req.params;
        
        const sql = "UPDATE tipos_control SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipos_control actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar tipos_control" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
