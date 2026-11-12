import prisma from "../db.js"

export async function registerUserModel(email, name, password) {
  const created = await prisma.user.create({
    data: { email, name, password },
    select: { id: true, email: true, name: true },
  });
  return created;
}

export async function getUserModel(email) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
}

export async function getAllUsersModel(){

  const users = await prisma.user.findMany({
    select: { id: true, email: true, name: true },
  });
  return users;
}