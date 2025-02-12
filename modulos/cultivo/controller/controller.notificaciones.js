import pool from "../../usuarios/database/Conexion.js";

export const postNotificaciones = async (req, res) => {
    try {
        
        const sql = "INSERT INTO notificaciones (id) VALUES (DEFAULT)";
        const result = await pool.query(sql, []);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Notificaciones registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar notificaciones" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getNotificaciones = async (req, res) => {
    try {
        const sql = "SELECT * FROM notificaciones";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de notificaciones" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdNotificaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM notificaciones WHERE id = $1";
        const result = await pool.query(sql, []);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Notificaciones no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateNotificaciones = async (req, res) => {
    try {
        const { id } = req.params;
        
        const sql = "UPDATE notificaciones SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Notificaciones actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar notificaciones" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
