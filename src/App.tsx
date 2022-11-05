import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./pages/Public/Home";
import Registration from "./pages/Public/registration/Registration";
import Login from "./pages/Public/login/Login";
import PublicLayout from "./components/Layouts/PublicLayout";
import PrivateLayout from "./components/Layouts/PrivateLayout";
import Feed from "./pages/Private/feed/Feed";

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
                <Route path={'/registration'} element={<Registration />}/>
                <Route path={'/login'} element={<Login />}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
