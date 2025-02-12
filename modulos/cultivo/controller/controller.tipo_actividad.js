import pool from "../../usuarios/database/Conexion.js";

export const postTipo_actividad = async (req, res) => {
    try {
        const { id: newId } = req.body;
        const sql = "INSERT INTO tipo_actividad (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipo_actividad registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar tipo_actividad" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getTipo_actividad = async (req, res) => {
    try {
        const sql = "SELECT * FROM tipo_actividad";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de tipo_actividad" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdTipo_actividad = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM tipo_actividad WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Tipo_actividad no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateTipo_actividad = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: newId } = req.body;
        const sql = "UPDATE tipo_actividad SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipo_actividad actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar tipo_actividad" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
