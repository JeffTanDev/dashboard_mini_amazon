import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./Layouts/MainLayout";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/createAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/SignIn/:username" element={<SignIn />} />
        <Route path="/CreateAccount/:username" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
