import { pool } from "../../../database/conexion.js";

export const postProductos_control = async (req, res) => {
    try {
        const id = req.body;
        const sql = "INSERT INTO productos_control (id) VALUES ($1)";
        const result = await pool.query(sql, [id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Productos_control registrado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo registrar productos_control" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};

export const getProductos_control = async (req, res) => {
    try {
        const sql = "SELECT * FROM productos_control";
        const result = await pool.query(sql);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ msg: "No hay registros de productos_control" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const getIdProductos_control = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM productos_control WHERE id = $1";
        const result = await pool.query(sql, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Productos_control no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

export const updateProductos_control = async (req, res) => {
    try {
        const { id } = req.params;
        const id = req.body;
        const sql = "UPDATE productos_control SET id = $1 WHERE id = $1";
        const result = await pool.query(sql, [id, id]);
        if (result.rowCount > 0) {
            return res.status(200).json({ "message": "Productos_control actualizado correctamente" });
        }
        return res.status(404).json({ "message": "No se pudo actualizar productos_control" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error en el servidor" });
    }
};
