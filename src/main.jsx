import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//components
import Layout from "./Layout.jsx";
import App from "./App.jsx";
import Video from "./pages/Video.jsx";
import Story from "./pages/Story.jsx";
import Photo from "./pages/Photo.jsx";

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
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
