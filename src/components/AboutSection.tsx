
import { CheckCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Về PhoniKids</h2>
        <p className="section-subtitle">
          PhoniKids mang đến chương trình học sinh động, có lộ trình rõ ràng giúp trẻ tự tin đọc Tiếng anh từ con số 0.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-white rounded-xl shadow-md p-8 card-hover">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sứ mệnh</h3>
            <p className="text-gray-600 mb-6">
              PhoniKids cam kết mang đến cho trẻ em phương pháp học phát âm chuẩn xác và hiệu quả ngay từ khi bắt đầu học tiếng Anh. 
              Chúng tôi tập trung vào việc giúp trẻ làm quen và luyện tập các âm cơ bản, từ đó xây dựng nền tảng vững chắc để trẻ 
              có thể giao tiếp tiếng Anh một cách tự tin và chuẩn bị vững vàng cho tương lai.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCheck className="text-phonikids-blue mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-700">Phương pháp học phát âm chuẩn xác</span>
              </li>
              <li className="flex items-start">
                <CheckCheck className="text-phonikids-blue mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-700">Tập trung vào các âm cơ bản</span>
              </li>
              <li className="flex items-start">
                <CheckCheck className="text-phonikids-blue mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-700">Xây dựng nền tảng vững chắc</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 card-hover">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Tầm nhìn</h3>
            <p className="text-gray-600 mb-6">
              Giúp mọi trẻ em có thể nói tiếng Anh một cách rõ ràng, tự tin và có chất giọng tự nhiên - 
              mở ra nhiều cơ hội toàn cầu thông qua sức mạnh giao tiếp hiệu quả.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCheck className="text-phonikids-blue mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-700">Phát âm rõ ràng, chuẩn xác</span>
              </li>
              <li className="flex items-start">
                <CheckCheck className="text-phonikids-blue mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-700">Giao tiếp tự tin, tự nhiên</span>
              </li>
              <li className="flex items-start">
                <CheckCheck className="text-phonikids-blue mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-700">Mở ra cơ hội toàn cầu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
