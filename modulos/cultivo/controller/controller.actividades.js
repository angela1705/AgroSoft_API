import pool from "../../usuarios/database/Conexion.js";

export const postActividades = async (req, res) => {
    try {
        
        const sql = "INSERT INTO actividades (id) VALUES (DEFAULT)";
        const result = await pool.query(sql, []);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Actividades registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar actividades" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getActividades = async (req, res) => {
    try {
        const sql = "SELECT * FROM actividades";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de actividades" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdActividades = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM actividades WHERE id = $1";
        const result = await pool.query(sql, []);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Actividades no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateActividades = async (req, res) => {
    try {
        const { id } = req.params;
        
        const sql = "UPDATE actividades SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Actividades actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar actividades" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
