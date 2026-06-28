import { createBrowserRouter, Navigate } from "react-router";
import NewChat from "./pages/NewChat";

export const router = createBrowserRouter([
  {
    path: "/chat",
    children: [
      {
        path: "new",
        Component: NewChat,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/chat/new" replace />,
  },
]);
