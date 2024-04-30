import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/Home/HomePage";
import ActivitiyDashBoard from "../../features/activities/dashboard/ActivitiyDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "activities", element: <ActivitiyDashBoard /> },
      { path: "createActivity", element: <ActivityForm /> },
    ],
  },
];
export const router = createBrowserRouter(routes);
