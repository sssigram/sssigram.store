import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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
