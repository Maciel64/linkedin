"use client";

import UsersTable from "./components/Table/UsersTable";
import { useUsersTable } from "./components/Table/useUsersTable";

export default function Home() {
  const useUsersTableProps = useUsersTable();

  return (
    <div className="p-32 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Users</h1>
      <UsersTable {...useUsersTableProps} />
    </div>
  );
}
