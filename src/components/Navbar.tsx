
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="PhoniKids Logo" 
            className="h-12 w-auto"
          />
          <span className="font-nunito font-bold text-xl ml-2 text-phonikids-blue">PhoniKids</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Trang chủ</Link>
          <Link to="/courses" className="nav-link">Khóa học</Link>
          <Link to="/about" className="nav-link">Về chúng tôi</Link>
          <Link to="/contact" className="nav-link">Liên hệ</Link>
          <a href="tel:0388757688" className="btn-outline">
            Hotline: 0388757688
          </a>
          <button className="btn-primary">
            Đăng ký học thử
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-phonikids-blue px-2 py-1" onClick={() => setIsOpen(false)}>
              Trang chủ
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-phonikids-blue px-2 py-1" onClick={() => setIsOpen(false)}>
              Khóa học
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-phonikids-blue px-2 py-1" onClick={() => setIsOpen(false)}>
              Về chúng tôi
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-phonikids-blue px-2 py-1" onClick={() => setIsOpen(false)}>
              Liên hệ
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <a href="tel:0388757688" className="btn-outline text-center">
                Hotline: 0388757688
              </a>
              <button className="btn-primary">
                Đăng ký học thử
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
