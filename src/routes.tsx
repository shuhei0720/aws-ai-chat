import { createBrowserRouter, Navigate } from "react-router";
import NewChat from "./pages/NewChat";
import ChatConversation from "./pages/ChatConversation";

export const router = createBrowserRouter([
  {
    path: "/chat",
    children: [
      {
        path: "new",
        Component: NewChat,
      },
      {
        path: ":conversationId",
        Component: ChatConversation,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/chat/new" replace />,
  },
]);
