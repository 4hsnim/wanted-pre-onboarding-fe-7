import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ToDoPage from "./pages/ToDoPage";
import "./styles/App.css";

function App() {
  const isLoggedin = localStorage.getItem("access_token");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={isLoggedin ? <Navigate to="/todo" /> : <Outlet />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/todo"
          element={!isLoggedin ? <Navigate to="/" /> : <ToDoPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
