import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "token";

export function createToken(userdata) {
  return jwt.sign(userdata, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (e) {
    throw new Error("error de token");
  }
}
