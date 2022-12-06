import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "../../ui";
import { HomePage } from "../pages";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
