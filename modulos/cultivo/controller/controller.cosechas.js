import pool from "../../usuarios/database/Conexion.js";

export const postCosechas = async (req, res) => {
    try {
        const { fecha, cantidad, unidad_medida, id_cultivo } = req.body;
        const sql = "INSERT INTO cosechas (fecha, cantidad, unidad_medida, id_cultivo) VALUES ($1, $2, $3, $4) RETURNING id";
        const result = await pool.query(sql, [fecha, cantidad, unidad_medida, id_cultivo]);
        
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Cosecha registrada correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar la cosecha" });
    } catch (error) {
        console.error('Error in postCosechas:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getCosechas = async (req, res) => {
    try {
        const sql = "SELECT * FROM cosechas";
        const result = await pool.query(sql);
        
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows);
        } else {
            return res.status(404).json({ "message": "No hay registros de cosechas" });
        }
    } catch (error) {
        console.error('Error in getCosechas:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getIdCosechas = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM cosechas WHERE id = $1";
        const result = await pool.query(sql, [id]);
        
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Cosecha no encontrada" });
        }
    } catch (error) {
        console.error('Error in getIdCosechas:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const updateCosechas = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha, cantidad, unidad_medida, id_cultivo } = req.body;
        const sql = "UPDATE cosechas SET fecha = $1, cantidad = $2, unidad_medida = $3, id_cultivo = $4 WHERE id = $5";
        const result = await pool.query(sql, [fecha, cantidad, unidad_medida, id_cultivo, id]);
        
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cosecha actualizada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar la cosecha" });
    } catch (error) {
        console.error('Error in updateCosechas:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const deleteCosechas = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM cosechas WHERE id = $1";
        const result = await pool.query(sql, [id]);
        
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cosecha eliminada correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar la cosecha" });
    } catch (error) {
        console.error('Error in deleteCosechas:', error.message);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
