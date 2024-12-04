import { userService } from "@/app/service/userService";
import { UserSchema } from "@/app/types/User";
import { useEffect, useState } from "react";

export const useUsersTable = () => {
  const [users, setUsers] = useState<UserSchema[]>([]);
  const [isUsersLoading, setIsUsersLoading] = useState(true);
  const [order, setOrder] = useState<keyof UserSchema>("id");
  const [filter, setFilter] = useState("");

  const sortedAndFilteredUsers = users
    .slice()
    .filter(
      ({ id, email, firstName }) =>
        (id + email + firstName).toLowerCase().includes(filter) // Joininig evething to correctly comparession
    )
    .sort((a, b) => (a[order] < b[order] ? -1 : 1));

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await userService.getAllUsers();

      setUsers(data.users);
      setIsUsersLoading(false);
    };

    getAllUsers();
  }, []);

  return {
    users: sortedAndFilteredUsers,
    isUsersLoading,
    setOrder,
    setFilter,
  };
};
