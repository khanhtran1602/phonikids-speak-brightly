
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="PhoniKids Logo" 
                className="h-12 w-auto mr-2"
              />
              <h3 className="font-nunito font-bold text-xl text-phonikids-blue">PhoniKids</h3>
            </div>
            <p className="text-gray-600 mb-4">
              PhoniKids – Tiếng anh sáng tạo. Trung tâm tiếng Anh trực tuyến tiên phong, chuyên sâu về phát âm chuẩn quốc tế cho trẻ em từ 6 đến 12 tuổi.
            </p>
            
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/PhoniKids/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12A3 3 0 1 0 9 6 3 3 0 0 0 9 12zM9 18A3 3 0 1 0 9 12 3 3 0 0 0 9 18zM15 6A3 3 0 1 0 15 12 3 3 0 0 0 15 6zM15 18A3 3 0 1 0 15 12 3 3 0 0 0 15 18z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-phonikids-blue mr-2 h-5 w-5 mt-1" />
                <span className="text-gray-600">
                  68/38/5 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, TP.Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-phonikids-blue mr-2 h-5 w-5" />
                <a href="tel:0388757688" className="text-gray-600 hover:text-phonikids-blue">
                  0388757688
                </a>
                <span className="mx-2 text-gray-400">|</span>
                <a href="tel:0386533455" className="text-gray-600 hover:text-phonikids-blue">
                  0386533455
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-phonikids-blue mr-2 h-5 w-5" />
                <a href="mailto:hotro.phonikids@gmail.com" className="text-gray-600 hover:text-phonikids-blue">
                  hotro.phonikids@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Khóa học</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-phonikids-blue">
                  Phonics Foundation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-phonikids-blue">
                  Phonics Mastery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-phonikids-blue">
                  Fluent Reader
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-phonikids-blue">
                  Khóa học theo yêu cầu
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-phonikids-blue">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-phonikids-blue">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-phonikids-blue">
                  Khóa học
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-phonikids-blue">
                  Liên hệ
                </Link>
              </li>
              <li>
                <a href="https://phonikids.edu.vn/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-phonikids-blue">
                  Website chính thức
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} PhoniKids. Công ty TNHH Thương mại Dịch vụ Phonikids. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 text-sm hover:text-phonikids-blue">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-phonikids-blue">
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
