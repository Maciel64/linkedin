import { UserSchema } from "../types/User";

export const userService = {
  getAllUsers: async () => {
    const req = await fetch("https://dummyjson.com/users?limit=10");
    const data: { users: UserSchema[] } = await req.json();

    return data;
  },
};
