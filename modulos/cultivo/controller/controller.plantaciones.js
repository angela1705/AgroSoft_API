import pool from "../../usuarios/database/Conexion.js";

export const postPlantaciones = async (req, res) => {
    try {
        const { id_cultivo, id_especie, fecha_plantacion, cantidad, area } = req.body;
        if (!id_cultivo || !id_especie || !fecha_plantacion || !cantidad || !area) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "INSERT INTO plantaciones (id_cultivo, id_especie, fecha_plantacion, cantidad, area) VALUES ($1, $2, $3, $4, $5) RETURNING id";
        const result = await pool.query(sql, [id_cultivo, id_especie, fecha_plantacion, cantidad, area]);
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Plantación registrada correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar la plantación" });
    } catch (error) {
        console.error('Error en postPlantaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getPlantaciones = async (req, res) => {
    try {
        const sql = "SELECT * FROM plantaciones";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getPlantaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdPlantaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM plantaciones WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Plantación no encontrada" });
        }
    } catch (error) {
        console.error('Error en getIdPlantaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const updatePlantaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_cultivo, id_especie, fecha_plantacion, cantidad, area } = req.body;
        if (!id_cultivo || !id_especie || !fecha_plantacion || !cantidad || !area) {
            return res.status(400).json({ "message": "Faltan campos requeridos" });
        }
        const sql = "UPDATE plantaciones SET id_cultivo = $1, id_especie = $2, fecha_plantacion = $3, cantidad = $4, area = $5 WHERE id = $6";
        const result = await pool.query(sql, [id_cultivo, id_especie, fecha_plantacion, cantidad, area, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Plantación actualizada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar la plantación" });
    } catch (error) {
        console.error('Error en updatePlantaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const deletePlantaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM plantaciones WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Plantación eliminada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar la plantación" });
    } catch (error) {
        console.error('Error en deletePlantaciones:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
