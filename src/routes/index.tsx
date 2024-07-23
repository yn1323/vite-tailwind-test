import { Route, Routes } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";

export const paths = {
  home: "/",
  contact: "/contact",
  about: "/about",
  notFound: "*",
} as const;

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={paths.home} element={<Home role="admin" />} />
        <Route path={paths.contact} element={<Contact />} />
        <Route path={paths.notFound} element={<div>404</div>} />
      </Route>
    </Routes>
  );
};

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.contact} element={<Contact role="user" />} />
        <Route path={paths.about} element={<About role="user" />} />
        <Route path={paths.notFound} element={<div>404</div>} />
      </Route>
    </Routes>
  );
};

type Role = "admin" | "user";
const role: Role = "admin";
export const RoleRouter = () => {
  if (role === "admin") {
    return <AdminRouter />;
  } else if (role === "user") {
    return <UserRouter />;
  }
};
