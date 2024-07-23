import { Navigate } from "react-router-dom";
import { Home } from "../pages/Home";

export const rootPath = [
  { path: "/", element: <Home /> },
  {
    path: "/about",
    element: <Private />,
    children: [
      {
        path: "stocks/*",
        element: <Stock />,
        children: [
          { path: "/:id", element: <StockDetail /> },
          { path: "/", element: <StockList /> },
        ],
      },
      { path: "/", element: <Navigate to="/stocks" /> },
    ],
  },
] as const;
