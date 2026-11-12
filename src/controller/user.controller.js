import {registerUserService, loginService, getAllUsersService} from "../service/user.service.js";

export async function setUserController(req, res) {
    res.status(201).send(await registerUserService(req.body))
}

export async function LoginController(req, res) {
  const user = await loginService(req);
  res.status(user.status).send(user.message);
}

export async function getAllUsersController(req, res){
  const users = await getAllUsersService();
  res.status(200).send(users);
}