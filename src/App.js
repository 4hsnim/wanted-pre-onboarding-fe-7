import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter className="wrapper">
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
