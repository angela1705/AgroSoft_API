import pool from "../../usuarios/database/Conexion.js";

export const postResiduos = async (req, res) => {
    try {
        const { id_cultivo, tipo, cantidad, fecha_generacion, metodo_disposicion } = req.body;
        if (!id_cultivo || !tipo || !cantidad || !fecha_generacion) {
            return res.status(400).json({ "message": "id_cultivo, tipo, cantidad y fecha_generacion son campos requeridos" });
        }
        const sql = "INSERT INTO residuos (id_cultivo, tipo, cantidad, fecha_generacion, metodo_disposicion) VALUES ($1, $2, $3, $4, $5) RETURNING id";
        const result = await pool.query(sql, [id_cultivo, tipo, cantidad, fecha_generacion, metodo_disposicion]);
        if (result.rows.length > 0) {
            return res.status(201).json({ 
                "message": "Residuo registrado correctamente",
                "id": result.rows[0].id
            });
        }
        return res.status(400).json({ "message": "No se pudo registrar el residuo" });
    } catch (error) {
        console.error('Error en postResiduos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getResiduos = async (req, res) => {
    try {
        const sql = "SELECT * FROM residuos ORDER BY fecha_generacion DESC";
        const result = await pool.query(sql);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error en getResiduos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const getIdResiduos = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM residuos WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ "message": "Residuo no encontrado" });
        }
    } catch (error) {
        console.error('Error en getIdResiduos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const updateResiduos = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_cultivo, tipo, cantidad, fecha_generacion, metodo_disposicion } = req.body;
        if (!id_cultivo || !tipo || !cantidad || !fecha_generacion) {
            return res.status(400).json({ "message": "id_cultivo, tipo, cantidad y fecha_generacion son campos requeridos" });
        }
        const sql = "UPDATE residuos SET id_cultivo = $1, tipo = $2, cantidad = $3, fecha_generacion = $4, metodo_disposicion = $5 WHERE id = $6";
        const result = await pool.query(sql, [id_cultivo, tipo, cantidad, fecha_generacion, metodo_disposicion, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Residuo actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar el residuo" });
    } catch (error) {
        console.error('Error en updateResiduos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};

export const deleteResiduos = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM residuos WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Residuo eliminado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo eliminar el residuo" });
    } catch (error) {
        console.error('Error en deleteResiduos:', error);
        return res.status(500).json({ "message": "Error en el servidor", "error": error.message });
    }
};
