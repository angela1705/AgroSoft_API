import pool from "../../usuarios/database/Conexion.js";

export const postEspecies = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        if (!nombre) {
            return res.status(400).json({ "message": "El nombre de la especie es requerido" });
        }
        const sql = "INSERT INTO especies (nombre, descripcion) VALUES ($1, $2) RETURNING id";
        const result = await pool.query(sql, [nombre, descripcion]);
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Especie registrada correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar la especie" });
    } catch (error) {
        console.error('Error en postEspecies:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getEspecies = async (req, res) => {
    try {
        const sql = "SELECT * FROM especies";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getEspecies:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdEspecies = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM especies WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Especie no encontrada" });
        }
    } catch (error) {
        console.error('Error en getIdEspecies:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const updateEspecies = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        if (!nombre) {
            return res.status(400).json({ "message": "El nombre de la especie es requerido" });
        }
        const sql = "UPDATE especies SET nombre = $1, descripcion = $2 WHERE id = $3";
        const result = await pool.query(sql, [nombre, descripcion, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Especie actualizada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar la especie" });
    } catch (error) {
        console.error('Error en updateEspecies:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const deleteEspecies = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM especies WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Especie eliminada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar la especie" });
    } catch (error) {
        console.error('Error en deleteEspecies:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
