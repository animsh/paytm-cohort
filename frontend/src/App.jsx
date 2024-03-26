import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { ErrorRoute } from "./pages/ErrorRoute";
import { useState } from "react";

function App() {
  const [isAuthenticate, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );
  return (
    <>
      <BrowserRouter>
        {isAuthenticate ? (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<SendMoney />} />
            <Route path="/*" element={<ErrorRoute />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/signup"
              element={<Signup setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/signin"
              element={<Signin setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/*" element={<ErrorRoute />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
