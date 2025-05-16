
import { Headphones } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-phonikids-blue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Đăng ký tư vấn miễn phí ngay hôm nay
            </h2>
            <p className="text-white/90 text-lg">
              Để giúp con bạn phát âm tiếng Anh chuẩn quốc tế và bắt đầu hành trình học tiếng Anh hiệu quả
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="tel:0388757688" className="bg-white text-phonikids-blue hover:bg-blue-50 transition-colors px-6 py-3 rounded-md font-semibold flex items-center">
              <Headphones className="mr-2" size={20} />
              Hotline: 0388757688
            </a>
            <button className="bg-phonikids-purple hover:bg-phonikids-purple/90 text-white transition-colors px-6 py-3 rounded-md font-semibold">
              Đăng ký học thử
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
