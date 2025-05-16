
import { GraduationCap, Book, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
              <span className="text-phonikids-blue">PhoniKids</span> <br />
              Tiếng anh sáng tạo
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Chúng tôi tự hào là một trong những trung tâm tiếng Anh trực tuyến tiên phong, 
              chuyên sâu về phát âm chuẩn quốc tế cho trẻ em từ 6 đến 12 tuổi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Đăng ký học thử</button>
              <button className="btn-outline">Tìm hiểu thêm</button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-phonikids-blue/10 rounded-full flex items-center justify-center mr-3">
                  <GraduationCap className="text-phonikids-blue" size={20} />
                </div>
                <span className="text-gray-700">Phát âm chuẩn</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-phonikids-blue/10 rounded-full flex items-center justify-center mr-3">
                  <Book className="text-phonikids-blue" size={20} />
                </div>
                <span className="text-gray-700">Lộ trình rõ ràng</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-phonikids-blue/10 rounded-full flex items-center justify-center mr-3">
                  <Globe className="text-phonikids-blue" size={20} />
                </div>
                <span className="text-gray-700">100% trực tuyến</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl animate-float">
              <img 
                src="/images/hero.jpg" 
                alt="Children learning English online" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-lg font-semibold">
                  Tiếng anh Online <br />
                  <span className="font-bold">HIỆU QUẢ - AN TOÀN - TIỆN LỢI</span>
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-phonikids-purple/20 rounded-full flex items-center justify-center">
                  <span className="text-phonikids-purple font-bold">44</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">Âm phiên âm</p>
                  <p className="font-bold text-gray-800">IPA chuẩn quốc tế</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
