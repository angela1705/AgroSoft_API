import pool from "../../usuarios/database/Conexion.js";

export const postNotificaciones = async (req, res) => {
    try {
        const { mensaje, fecha, id_usuario, leida } = req.body;
        if (!mensaje || !fecha || !id_usuario) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "INSERT INTO notificaciones (mensaje, fecha, id_usuario, leida) VALUES ($1, $2, $3, $4) RETURNING id";
        const result = await pool.query(sql, [mensaje, fecha, id_usuario, leida || false]);
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Notificación registrada correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar la notificación" });
    } catch (error) {
        console.error('Error en postNotificaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getNotificaciones = async (req, res) => {
    try {
        const sql = "SELECT * FROM notificaciones ORDER BY fecha DESC";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getNotificaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdNotificaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM notificaciones WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Notificación no encontrada" });
        }
    } catch (error) {
        console.error('Error en getIdNotificaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const updateNotificaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const { mensaje, fecha, id_usuario, leida } = req.body;
        if (!mensaje || !fecha || !id_usuario) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "UPDATE notificaciones SET mensaje = $1, fecha = $2, id_usuario = $3, leida = $4 WHERE id = $5";
        const result = await pool.query(sql, [mensaje, fecha, id_usuario, leida, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Notificación actualizada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar la notificación" });
    } catch (error) {
        console.error('Error en updateNotificaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const deleteNotificaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM notificaciones WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Notificación eliminada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar la notificación" });
    } catch (error) {
        console.error('Error en deleteNotificaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const markNotificationAsRead = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "UPDATE notificaciones SET leida = true WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Notificación marcada como leída" });
        }
        return res.status(404).json({ "message": "No se pudo marcar la notificación como leída" });
    } catch (error) {
        console.error('Error en markNotificationAsRead:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
