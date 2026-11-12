import { verifyToken } from "../service/token/token.service.js";

export function validateUser(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;

  if (!token) {
    return res.status(401).send("token no proporcionado");
  }

  try {
    req.user = verifyToken(token);
    next();
  } catch (e) {
    res.status(401).send("token inválido");
  }
}
