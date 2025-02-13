import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: './env/.env' });

const verificarToken = async (req, res, next) => {
    const token = req.headers['token'];
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.usuario = verified;
        next();
    } catch (error) {
        return res.status(403).json({ msg: 'Token no verificado' });
    }
};

export default verificarToken;
