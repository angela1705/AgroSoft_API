import pool from "../../usuarios/database/Conexion.js";

export const postEspecies = async (req, res) => {
    try {
        
        const sql = "INSERT INTO especies (id) VALUES (DEFAULT)";
        const result = await pool.query(sql, []);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Especies registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar especies" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getEspecies = async (req, res) => {
    try {
        const sql = "SELECT * FROM especies";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de especies" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdEspecies = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM especies WHERE id = $1";
        const result = await pool.query(sql, []);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Especies no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateEspecies = async (req, res) => {
    try {
        const { id } = req.params;
        
        const sql = "UPDATE especies SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Especies actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar especies" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
