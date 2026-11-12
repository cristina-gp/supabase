import prisma from "../db.js"

export async function registerUserModel(email, name, password) {
  const created = await prisma.user.create({
    data: { email, name, password },
  });
  const users = await prisma.user.findMany();
  return users;
}

export async function getUserModel(email) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
}

export async function getAllUsersModel(){

  const users = await db.orm.public.User.all();

  return users;

}