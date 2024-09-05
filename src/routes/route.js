import { createBrowserRouter } from "react-router-dom";
import IntroPage from "../pages/IntroPage";
import HomePage from "../pages/HomePage";
import App from "../App";
import ListPage from "../pages/ListPage";
import CropPage from "../pages/CropPage";
import DetailsPage from "../pages/DetailsPage";
import SigninPage from "../pages/SigninPage";
import HistoryPage from "../pages/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <IntroPage />
      },
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "sign",
        element: <SigninPage/>
      },
      {
        path: "history",
        element: <HistoryPage/>
      },
      {
        path: "crops",
        element: <ListPage />
      },
      {
        path: "crops/:id",
        element: <CropPage />
      },
      {
        path: "/details",
        element: <DetailsPage />
      },
    ],
  },
]);

export default router;
