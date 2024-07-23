import { AdminRouter } from "./adminRouter";
import { UserRouter } from "./userRouter";

type Role = "admin" | "user";
const role: Role = "admin";
export const RoleRouter = () => {
  if (role === "admin") {
    return <AdminRouter />;
  } else if (role === "user") {
    return <UserRouter />;
  }
};
