import pool from "../../usuarios/database/Conexion.js";

export const postPlantaciones = async (req, res) => {
    try {
        const { id: newId } = req.body;
        const sql = "INSERT INTO plantaciones (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Plantaciones registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar plantaciones" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getPlantaciones = async (req, res) => {
    try {
        const sql = "SELECT * FROM plantaciones";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de plantaciones" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdPlantaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM plantaciones WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Plantaciones no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updatePlantaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: newId } = req.body;
        const sql = "UPDATE plantaciones SET id = $1 WHERE id = $2";
        const result = await pool.query(sql, [newId, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Plantaciones actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar plantaciones" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
