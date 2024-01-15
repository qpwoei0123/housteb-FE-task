import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./pages/RootPage";
import OrderPage from "./pages/OrderPage";
import CompletePage from "./pages/CompletePage";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={RootPage} />
        <Route path="/order" Component={OrderPage} />
        <Route path="/complete" Component={CompletePage} />
        <Route path="/error" Component={ErrorPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
