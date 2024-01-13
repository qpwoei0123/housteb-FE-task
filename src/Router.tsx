import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./pages/RootPage";
import OrderPage from "./pages/OrderPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={RootPage} />
        <Route path="/order" Component={OrderPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
