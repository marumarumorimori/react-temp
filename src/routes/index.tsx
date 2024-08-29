import { NotFound } from "@/features/misc/page/not-found";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(<Route path="*" element={<NotFound />} />));
export const Routes = () => {
  return <RouterProvider router={router} />;
};
