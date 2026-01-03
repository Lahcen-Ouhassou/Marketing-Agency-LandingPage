import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#121A3A] to-[#0B1020]">
      {/* Blur shapes */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-3xl"></div>
      <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-3xl"></div>

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// MainLayout
// │
// ├── Navbar   (Fix)
// ├── Outlet   (كيبدّل المحتوى)
// │     ├── Home
// │     ├── About
// │     ├── Services
// │     └── Contact
// └── Footer   (Fix)
