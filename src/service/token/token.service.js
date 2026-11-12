import jwt from "jsonwebtoken";

export function createToken() {
    const token = jwt.sign({email: "fulanito@fulano", name: "Pedro"}, "123");
return token;
}

export function verfyToken(token) {
  try {
    var decoded = jwt.verify(token, "token");
    return "ok";
  } catch (e) {
    throw new Error("error de token");
  }
}