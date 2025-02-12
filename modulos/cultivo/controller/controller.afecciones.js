import pool from "../../usuarios/database/Conexion.js";

export const postAfecciones = async (req, res) => {
    try {
        const { nombre, descripcion, id_cultivo } = req.body;
        const sql = "INSERT INTO afecciones (nombre, descripcion, id_cultivo) VALUES ($1, $2, $3) RETURNING id";
        const result = await pool.query(sql, [nombre, descripcion, id_cultivo]);
        
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Afección registrada correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar la afección" });
    } catch (error) {
        console.error('Error in postAfecciones:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getAfecciones = async (req, res) => {
    try {
        const sql = "SELECT * FROM afecciones";
        const result = await pool.query(sql);
        
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows);
        } else {
            return res.status(404).json({ "message": "No hay registros de afecciones" });
        }
    } catch (error) {
        console.error('Error in getAfecciones:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getIdAfecciones = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM afecciones WHERE id = $1";
        const result = await pool.query(sql, [id]);
        
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Afección no encontrada" });
        }
    } catch (error) {
        console.error('Error in getIdAfecciones:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const updateAfecciones = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, id_cultivo } = req.body;
        const sql = "UPDATE afecciones SET nombre = $1, descripcion = $2, id_cultivo = $3 WHERE id = $4";
        const result = await pool.query(sql, [nombre, descripcion, id_cultivo, id]);
        
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Afección actualizada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar la afección" });
    } catch (error) {
        console.error('Error in updateAfecciones:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const deleteAfecciones = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM afecciones WHERE id = $1";
        const result = await pool.query(sql, [id]);
        
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Afección eliminada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar la afección" });
    } catch (error) {
        console.error('Error in deleteAfecciones:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
