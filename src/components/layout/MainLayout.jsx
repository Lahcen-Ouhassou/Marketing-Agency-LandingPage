import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useRouteTitle from "../../hooks/useRouteTitle";

function MainLayout() {
  useRouteTitle(); // <-- هنا كيتبدل title تلقائي حسب route

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#121A3A] to-[#0B1020] min-h-screen">
        {/* Blur shapes */}
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-3xl"></div>
        <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-3xl"></div>
        <div className="absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
