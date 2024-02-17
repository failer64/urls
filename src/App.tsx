import { Suspense, lazy, useState } from "react";
import Preloader from "./components/Preloader";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { RequireAuth } from "./components/RequireAuth";
import LoginPage from "./components/LoginPage";

const Register = lazy(() => import("./components/RegisterPage"));
//const Login = lazy(() => import("./components/LoginPage"));
const Error = lazy(() => import("./components/ErrorPage"));
const Content = lazy(() => import("./components/ContentPage"));

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Layout className="container">
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            path="/"
            element={
              <RequireAuth isAuth={isAuth}>
                <Content />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
