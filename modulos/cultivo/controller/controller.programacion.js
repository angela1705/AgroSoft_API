import pool from "../../usuarios/database/Conexion.js";

export const postProgramacion = async (req, res) => {
    try {
        const { id_cultivo, fecha_inicio, fecha_fin, descripcion } = req.body;
        if (!id_cultivo || !fecha_inicio || !fecha_fin) {
            return res.status(400).json({ "message": "id_cultivo, fecha_inicio y fecha_fin son campos requeridos" });
        }
        const sql = "INSERT INTO programacion (id_cultivo, fecha_inicio, fecha_fin, descripcion) VALUES ($1, $2, $3, $4) RETURNING id";
        const result = await pool.query(sql, [id_cultivo, fecha_inicio, fecha_fin, descripcion]);
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Programación registrada correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar la programación" });
    } catch (error) {
        console.error('Error en postProgramacion:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getProgramacion = async (req, res) => {
    try {
        const sql = "SELECT * FROM programacion ORDER BY fecha_inicio";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getProgramacion:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdProgramacion = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM programacion WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Programación no encontrada" });
        }
    } catch (error) {
        console.error('Error en getIdProgramacion:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const updateProgramacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_cultivo, fecha_inicio, fecha_fin, descripcion } = req.body;
        if (!id_cultivo || !fecha_inicio || !fecha_fin) {
            return res.status(400).json({ "message": "id_cultivo, fecha_inicio y fecha_fin son campos requeridos" });
        }
        const sql = "UPDATE programacion SET id_cultivo = $1, fecha_inicio = $2, fecha_fin = $3, descripcion = $4 WHERE id = $5";
        const result = await pool.query(sql, [id_cultivo, fecha_inicio, fecha_fin, descripcion, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Programación actualizada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar la programación" });
    } catch (error) {
        console.error('Error en updateProgramacion:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const deleteProgramacion = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM programacion WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Programación eliminada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar la programación" });
    } catch (error) {
        console.error('Error en deleteProgramacion:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
