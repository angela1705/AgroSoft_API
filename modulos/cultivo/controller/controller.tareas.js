import pool from "../../usuarios/database/Conexion.js";

export const postTareas = async (req, res) => {
    try {
        const { id_cultivo, descripcion, fecha_inicio, fecha_fin, estado } = req.body;
        if (!id_cultivo || !descripcion || !fecha_inicio || !fecha_fin || !estado) {
            return res.status(400).json({ "message": "Todos los campos son requeridos" });
        }
        const sql = "INSERT INTO tareas (id_cultivo, descripcion, fecha_inicio, fecha_fin, estado) VALUES ($1, $2, $3, $4, $5) RETURNING id";
        const result = await pool.query(sql, [id_cultivo, descripcion, fecha_inicio, fecha_fin, estado]);
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Tarea registrada correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar la tarea" });
    } catch (error) {
        console.error('Error en postTareas:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getTareas = async (req, res) => {
    try {
        const sql = "SELECT * FROM tareas ORDER BY fecha_inicio";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getTareas:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdTareas = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM tareas WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Tarea no encontrada" });
        }
    } catch (error) {
        console.error('Error en getIdTareas:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const updateTareas = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_cultivo, descripcion, fecha_inicio, fecha_fin, estado } = req.body;
        if (!id_cultivo || !descripcion || !fecha_inicio || !fecha_fin || !estado) {
            return res.status(400).json({ "message": "Todos los campos son requeridos" });
        }
        const sql = "UPDATE tareas SET id_cultivo = $1, descripcion = $2, fecha_inicio = $3, fecha_fin = $4, estado = $5 WHERE id = $6";
        const result = await pool.query(sql, [id_cultivo, descripcion, fecha_inicio, fecha_fin, estado, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tarea actualizada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar la tarea" });
    } catch (error) {
        console.error('Error en updateTareas:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const deleteTareas = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM tareas WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tarea eliminada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar la tarea" });
    } catch (error) {
        console.error('Error en deleteTareas:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
