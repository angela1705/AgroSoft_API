import pool from "../../usuarios/database/Conexion.js";

export const postProgramacion = async (req, res) => {
    try {
        const { ubicacion, hora_prog, estado, fecha_prog } = req.body;
        if (!ubicacion || !hora_prog || !estado || !fecha_prog) {
            return res.status(400).json({ "message": "ubicacion, hora_prog, estado y fecha_prog son campos requeridos" });
        }
        const sql = "INSERT INTO programacion (ubicacion, hora_prog, estado, fecha_prog) VALUES ($1, $2, $3, $4) RETURNING id_programacion";
        const result = await pool.query(sql, [ubicacion, hora_prog, estado, fecha_prog]);
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Programación registrada correctamente",
                "id_programacion": result.rows[0].id_programacion
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
        const sql = "SELECT * FROM programacion ORDER BY fecha_prog";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getProgramacion:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdProgramacion = async (req, res) => {
    try {
        const { id_programacion } = req.params;
        const sql = "SELECT * FROM programacion WHERE id_programacion = $1";
        const result = await pool.query(sql, [id_programacion]);
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
        const { id_programacion } = req.params;
        const { ubicacion, hora_prog, estado, fecha_prog } = req.body;
        if (!ubicacion || !hora_prog || !estado || !fecha_prog) {
            return res.status(400).json({ "message": "ubicacion, hora_prog, estado y fecha_prog son campos requeridos" });
        }
        const sql = "UPDATE programacion SET ubicacion = $1, hora_prog = $2, estado = $3, fecha_prog = $4 WHERE id_programacion = $5";
        const result = await pool.query(sql, [ubicacion, hora_prog, estado, fecha_prog, id_programacion]);
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
        const { id_programacion } = req.params;
        const sql = "DELETE FROM programacion WHERE id_programacion = $1";
        const result = await pool.query(sql, [id_programacion]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Programación eliminada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar la programación" });
    } catch (error) {
        console.error('Error en deleteProgramacion:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
