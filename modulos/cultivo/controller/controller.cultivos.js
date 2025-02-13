import pool from "../../usuarios/database/Conexion.js";

export const postCultivos = async (req, res) => {
    try {
        const { nombre, fecha_siembra, fecha_cosecha, id_usuario } = req.body;
        if (!nombre || !fecha_siembra || !fecha_cosecha || !id_usuario) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "INSERT INTO cultivos (nombre, fecha_siembra, fecha_cosecha, id_usuario) VALUES ($1, $2, $3, $4) RETURNING id";
        const result = await pool.query(sql, [nombre, fecha_siembra, fecha_cosecha, id_usuario]);
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Cultivo registrado correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar el cultivo" });
    } catch (error) {
        console.error('Error en postCultivos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getCultivos = async (req, res) => {
    try {
        const sql = "SELECT * FROM cultivos";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getCultivos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdCultivos = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM cultivos WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Cultivo no encontrado" });
        }
    } catch (error) {
        console.error('Error en getIdCultivos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const updateCultivos = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, fecha_siembra, fecha_cosecha, id_usuario } = req.body;
        if (!nombre || !fecha_siembra || !fecha_cosecha || !id_usuario) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "UPDATE cultivos SET nombre = $1, fecha_siembra = $2, fecha_cosecha = $3, id_usuario = $4 WHERE id = $5";
        const result = await pool.query(sql, [nombre, fecha_siembra, fecha_cosecha, id_usuario, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cultivo actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar el cultivo" });
    } catch (error) {
        console.error('Error en updateCultivos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const deleteCultivos = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM cultivos WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cultivo eliminado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar el cultivo" });
    } catch (error) {
        console.error('Error en deleteCultivos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
