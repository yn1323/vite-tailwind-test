import { Route, Routes } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
