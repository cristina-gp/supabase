import {registerUserModel, getUserModel, getAllUsersModel} from "../model/user.model.js";
import { createToken } from "./token/token.service.js";
import bcrypt from "bcrypt";


const saltRounds = 10;
export async function registerUserService(body) {
  let {email, name, password } = body;
  password = await bcrypt.hash(password, saltRounds);

  return registerUserModel(email, name, password);
}

export async function loginService(req) {
  const { email, password } = req.body;
  const user = await getUserModel(email);
  if (user) {
    const userdata = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const pass = await bcrypt.compare(password, user.password);
    if (pass) {
      const token = createToken(userdata);

      return {
        status: 200,
        message: token,
      };
    } else {
      return { status: 401, message: "usuario o clave incorrecto" };
    }
  } else {
    return {
      status: 401,
      message: "usuario o clave incorrecto",
    };
  }
}

export async function getAllUsersService() {
  return await getAllUsersModel();
}