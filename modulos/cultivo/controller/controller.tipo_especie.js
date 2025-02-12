import pool from "../../usuarios/database/Conexion.js";

export const postTipo_especie = async (req, res) => {
    try {
        
        const sql = "INSERT INTO tipo_especie (id) VALUES (DEFAULT)";
        const result = await pool.query(sql, []);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipo_especie registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar tipo_especie" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getTipo_especie = async (req, res) => {
    try {
        const sql = "SELECT * FROM tipo_especie";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de tipo_especie" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdTipo_especie = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM tipo_especie WHERE id = $1";
        const result = await pool.query(sql, []);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Tipo_especie no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateTipo_especie = async (req, res) => {
    try {
        const { id } = req.params;
        
        const sql = "UPDATE tipo_especie SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Tipo_especie actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar tipo_especie" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
