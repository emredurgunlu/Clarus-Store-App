import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthProvider";

const PrivateRouter = () => {
  const {user} = useContext(AuthContext)
  return user ? (
    // Nested routelarda <Navbar />da seçili olanın renginin değişmesi veya altının çizilmesi düzgün çalışmaz
    // çünkü home pathi "/dashboard", Products pathi "/dashboard/products", About pathi "/dashboard/about"
    // Products ve About pathi içinde aslında home pathi de olduğu için 
    // Navbarda Products veya About seçili olduğunda home sekmesi de aynı zamanda seçilmiş gibi davranır
    // Bunun çözümü useLocation hookudur. Bize aktif olan pathi verir (bak Navbarjsx içine)
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;

//! context kullanmadan user bilgilerini okuma
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const PrivateRouter = () => {
//   const user = sessionStorage.getItem("user")
//   return user ? (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   ) : (
//     <Navigate to="/" />
//   );
// };

// export default PrivateRouter;