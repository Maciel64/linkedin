"use client";

import { userService } from "@/app/service/userService";
import { UserSchema } from "@/app/types/User";
import { ChangeEvent, useEffect, useState } from "react";
import { useUsersTable } from "./useUsersTable";

interface UsersTableProps {
  className?: string;
  isUsersLoading: boolean;
  setFilter: (filter: string) => void;
  setOrder: (field: keyof UserSchema) => void;
  users: UserSchema[];
}

const UsersTable = ({
  className,
  isUsersLoading,
  setFilter,
  setOrder,
  users,
}: UsersTableProps) => {
  const header = [
    {
      name: "Id",
      onClick: "id",
    },
    {
      name: "Name",
      onClick: "firstName",
    },
    {
      name: "Email",
      onClick: "email",
    },
  ] as const;

  return (
    <div className="flex flex-col gap-10">
      <input
        className="input"
        type="text"
        placeholder="Search by id, name or email"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setFilter(event.target.value.toLowerCase().trim())
        }
      />
      <div className={`overflow-x-auto flex justify-center ${className}`}>
        {isUsersLoading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th></th>
                {header.map(({ name, onClick }) => (
                  <th
                    key={name}
                    className="cursor-pointer"
                    onClick={() => setOrder(onClick)}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(({ email, id, firstName }, index) => (
                <tr key={id}>
                  <td>{index}</td>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UsersTable;
