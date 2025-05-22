import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./Layouts/MainLayout";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/createAccount";
import ProductPage from "./pages/ProductPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/:productID" element={<ProductPage />} />
          <Route path="/search/:product" element={<SearchResultsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/SignIn/:username" element={<SignIn />} />
        <Route path="/CreateAccount/:username" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
