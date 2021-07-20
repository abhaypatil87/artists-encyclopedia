import { Navigate, useRoutes } from "react-router-dom";
import AppLayout from "./views/layouts/AppLayout";
import ArtistsView from "./views/ArtistsView";
import FavouritesView from "./views/FavouritesView";
import ArtistDetailsView from "./views/ArtistDetailsView";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Navigate to="/artists" replace /> },
        { path: "artists", element: <ArtistsView /> },
        { path: "artists/:mbid", element: <ArtistDetailsView /> },
        { path: "favourites", element: <FavouritesView /> },
      ],
    },
  ]);
};

export default Router;
