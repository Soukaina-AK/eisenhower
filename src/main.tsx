import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import "./demos/ipc";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppBar } from "./components/appbar";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main
      role="main"
      className="bg-white w-full  h-full rounded-[15px] overflow-hidden"
    >
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Link to={"/login"}>to login</Link>
              </div>
            }
          />
          <Route path="/login" element={<div>login</div>} />
        </Routes>
      </BrowserRouter>
    </main>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
