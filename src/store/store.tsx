import { configureStore } from "@reduxjs/toolkit";

import SearchHistory from "./SearchHistory";
import { notifications, favourites } from "./slices";

const store = configureStore({
  reducer: {
    notifications: notifications.reducer,
    favourites: favourites.reducer,
  },
});

export const searchHistory = SearchHistory.getInstance();
export const notificationActions = notifications.actions;
export const favouritesActions = favourites.actions;

export default store;
