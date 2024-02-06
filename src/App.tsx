import { ReactNode, Suspense, lazy, useState } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { Layout } from "antd";

const Register = lazy(() => import("./components/RegisterPage"));
const Error = lazy(() => import("./components/ErrorPage"));
const Content = lazy(() => import("./components/ContentPage"));

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Layout style={{ background: "transparent" }}>
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

const RequireAuth = ({
  children,
  isAuth,
}: {
  children: ReactNode;
  isAuth: boolean;
}) => {
  if (!isAuth) {
    // Redirect to the /login page
    return <Navigate to="/login" />;
  }

  return children;
};
