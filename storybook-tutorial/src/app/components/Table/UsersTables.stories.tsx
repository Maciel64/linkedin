import UsersTable from "./UsersTable";

export const users = [
  {
    firstName: "João Silva",
    email: "joao.silva@example.com",
    id: 123456789,
  },
  {
    firstName: "Maria Santos",
    email: "maria.santos@example.com",
    id: 987654321,
  },
  {
    firstName: "Pedro Oliveira",
    email: "pedro.oliveira@example.com",
    id: 456789123,
  },
  {
    firstName: "Ana Pereira",
    email: "ana.pereira@example.com",
    id: 789123456,
  },
  {
    firstName: "Carlos Rodrigues",
    email: "carlos.rodrigues@example.com",
    id: 321654987,
  },
  {
    firstName: "Luísa Costa",
    email: "luisa.costa@example.com",
    id: 654987321,
  },
  {
    firstName: "Miguel Ferreira",
    email: "miguel.ferreira@example.com",
    id: 234567891,
  },
  {
    firstName: "Sofia Almeida",
    email: "sofia.almeida@example.com",
    id: 876543219,
  },
  {
    firstName: "Guilherme Martins",
    email: "guilherme.martins@example.com",
    id: 987123456,
  },
  {
    firstName: "Rita Sousa",
    email: "rita.sousa@example.com",
    id: 654321987,
  },
  {
    firstName: "João Silva",
    email: "joao.silva@example.com",
    id: 123456789,
  },
  {
    firstName: "Maria Santos",
    email: "maria.santos@example.com",
    id: 987654321,
  },
  {
    firstName: "Pedro Oliveira",
    email: "pedro.oliveira@example.com",
    id: 456789123,
  },
  {
    firstName: "Ana Pereira",
    email: "ana.pereira@example.com",
    id: 789123456,
  },
  {
    firstName: "Carlos Rodrigues",
    email: "carlos.rodrigues@example.com",
    id: 321654987,
  },
  {
    firstName: "Luísa Costa",
    email: "luisa.costa@example.com",
    id: 654987321,
  },
  {
    firstName: "Miguel Ferreira",
    email: "miguel.ferreira@example.com",
    id: 234567891,
  },
  {
    firstName: "Sofia Almeida",
    email: "sofia.almeida@example.com",
    id: 876543219,
  },
  {
    firstName: "Guilherme Martins",
    email: "guilherme.martins@example.com",
    id: 987123456,
  },
  {
    firstName: "Rita Sousa",
    email: "rita.sousa@example.com",
    id: 654321987,
  },
];

import { Meta } from "@storybook/react";

const setOrderBy = () => "";

export default {
  title: "Components/Tables/Users Table",
  args: {
    users: users.slice(0, 10),
    isUsersLoading: false,
    setOrderBy,
  },
  component: UsersTable,
} as Meta<typeof UsersTable>;

export const Loading = () => (
  <UsersTable users={users} isUsersLoading={true} setOrderBy={setOrderBy} />
);

export const Scrollable = () => (
  <UsersTable
    users={users}
    isUsersLoading={false}
    setOrderBy={setOrderBy}
    className="h-[90vh]"
  />
);
