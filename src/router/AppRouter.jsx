import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/ScroolToTop";
import ProductDetailId from "../pages/ProductDetailId";

const AppRouter = () => {
  return (
    <>
    {/* ScrollToTop problemi react routerın yeni versiyonlarında yok */}
      <ScrollToTop />
      {/* <Routes> dışına <NavBar/> gibi componentler koyarsan bu tüm sayfalarda geçerli olur */}
      {/* ama <NotFound />da <NavBar/> çıkmaması için <NavBar/>'ı PrivateRouter.jsx içine koyduk böylece <NavBar/> <PrivateRouter />'un kapsadığı tüm componentlarda çıkar */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter />}>
          {/* path="" aslında path="/dashboard"u işaret etmiş oluyor */}
          <Route path="" element={<Home />} />
          <Route path="/dashboard/products" element={<Products />} />{" "}
          {/* yukardaki Absolute routing, aşağıdaki relative routing */}
          {/* :title yazdı isen <ProductDetail /> sayfasında da title yakalaman lazım, aynı olması lazım */}
          <Route path="products/:title" element={<ProductDetail />} />
          <Route path="products/:title/:id" element={<ProductDetailId />} />
          {/*bu sayfa için productcard compnentindeki yorumda olan yapıyı açınız*/}
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
