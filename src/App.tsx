import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./pages/Public/Home";
import PublicLayout from "./components/Layouts/PublicLayout";
import PrivateLayout from "./components/Layouts/PrivateLayout";
import Feed from "./pages/Private/feed/Feed";
import Auth from "./pages/Public/Auth/Auth";

function App() {
  return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <PrivateLayout>
                    <Outlet />
                  </PrivateLayout>
                }
              >
                <Route path="/feed" element={<Feed />} />
              </Route>

              <Route
                element={
                  <PublicLayout>
                    <Outlet />
                  </PublicLayout>
                }
              >
                <Route path={'/'} element={<Home />}/>
                <Route path={'/auth/:type'} element={<Auth />}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
