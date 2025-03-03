import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slice/general";
import signInState from "./slice/signInStates";
import { authApi } from "./Api/auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import { homeApi } from "./Api/home";
import { introAndBookmarkApi } from "./Api/introAndBookmark";
import { courseApi } from "./Api/course";
import { commentsApi } from "./Api/comments";
import { primaryDashboardApi } from "./Api/primaryDashboard";
import videoProgressApi from "./Api/video-progress";

export const store = configureStore({
  reducer: {
    general: generalReducer,
    signInState: signInState,

    [authApi.reducerPath]: authApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [introAndBookmarkApi.reducerPath]: introAndBookmarkApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [primaryDashboardApi.reducerPath]: primaryDashboardApi.reducer,
    [videoProgressApi.reducerPath]: videoProgressApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(homeApi.middleware)
      .concat(introAndBookmarkApi.middleware)
      .concat(courseApi.middleware)
      .concat(commentsApi.middleware)
      .concat(primaryDashboardApi.middleware)
      .concat(videoProgressApi.middleware),
});

setupListeners(store.dispatch);
