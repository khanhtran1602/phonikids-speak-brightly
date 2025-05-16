
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <div className="mb-8">
            <span className="text-7xl font-bold text-phonikids-blue">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Không tìm thấy trang</h1>
          <p className="text-gray-600 mb-8">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Quay về trang chủ
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
