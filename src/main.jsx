import React, { useEffect, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.js";

//
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
//components
import Layout from "./Layout.jsx";
import App from "./App.jsx";
import Video from "./pages/Video.jsx";
import Story from "./pages/Story.jsx";
import Photo from "./pages/Photo.jsx";
import Reel from "./pages/Reel.jsx";
import IGTV from "./pages/IGTV.jsx";
import InstagramContextProvider, {
  useInstagram,
} from "./context/InstagramContext.jsx";
import FAQsPage from "./pages/FAQsPage.jsx";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path=''
        element={<Layout />}>
        <Route
          path='/'
          element={<App />}
        />
        <Route
          path='/video'
          element={<Video />}
        />
        <Route
          path='/story'
          element={<Story />}
        />
        <Route
          path='/photo'
          element={<Photo />}
        />
        <Route
          path='/reel'
          element={<Reel />}
        />
        <Route
          path='/igtv'
          element={<IGTV />}
        />
        <Route
          path='/faqs'
          element={<FAQsPage />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InstagramContextProvider>
      <Suspense fallback='loading'>
        <Index />
      </Suspense>
    </InstagramContextProvider>
  </React.StrictMode>
);
