import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./pages/RootPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={RootPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
