import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      this is layout
      <Outlet />
    </div>
  );
};
