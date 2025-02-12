import pool from "../../usuarios/database/Conexion.js";

export const postCosechas = async (req, res) => {
    try {
        
        const sql = "INSERT INTO cosechas (id) VALUES (DEFAULT)";
        const result = await pool.query(sql, []);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cosechas registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar cosechas" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getCosechas = async (req, res) => {
    try {
        const sql = "SELECT * FROM cosechas";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de cosechas" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdCosechas = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM cosechas WHERE id = $1";
        const result = await pool.query(sql, []);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Cosechas no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateCosechas = async (req, res) => {
    try {
        const { id } = req.params;
        
        const sql = "UPDATE cosechas SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Cosechas actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar cosechas" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
