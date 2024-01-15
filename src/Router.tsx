import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./pages/RootPage";
import OrderPage from "./pages/OrderPage";
import CompletePage from "./pages/CompletePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={RootPage} />
        <Route path="/order" Component={OrderPage} />
        <Route path="/complete" Component={CompletePage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
