
import { Book, GraduationCap, School } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      title: "Phonics Foundation",
      lessons: 20,
      icon: Book,
      color: "bg-blue-500",
      description: "Giúp học viên nhận diện được phiên âm quốc tế (IPA) của từng từ tiếng Anh và đọc chính xác bằng phương pháp đánh vần.",
      outcomes: [
        "Làm quen và nhận diện đầy đủ 44 âm trong bảng phiên âm quốc tế (IPA).",
        "Hiểu quy tắc đánh vần trong tiếng Anh và đọc chuẩn từng từ dựa vào phiên âm.",
        "Phá vỡ rào cản phát âm sai do đọc theo mặt chữ.",
        "Nền tảng vững chắc để phát triển kỹ năng nghe, nói và đọc tiếng Anh sau này."
      ]
    },
    {
      id: 2,
      title: "Phonics Mastery",
      lessons: 30,
      icon: GraduationCap,
      color: "bg-purple-500",
      description: "Giúp học viên tự viết được phiên âm chuẩn của từ tiếng Anh, từ đó tự đọc chính xác bất kỳ từ nào mà không cần tra từ điển.",
      outcomes: [
        "Thành thạo quy tắc chuyển từ cách nghe sang cách viết phiên âm.",
        "Tự tin phiên âm và đọc chính xác các từ mới gặp.",
        "Nâng cao khả năng tự học, giảm phụ thuộc vào công cụ hỗ trợ.",
        "Sẵn sàng bước vào giai đoạn đọc các câu dài và đoạn văn trôi chảy."
      ]
    },
    {
      id: 3,
      title: "Fluent Reader",
      lessons: 30,
      icon: School,
      color: "bg-indigo-500",
      description: "Giúp học viên đọc trôi chảy các câu dài và đoạn văn, biết ngắt nghỉ đúng chỗ và sử dụng ngữ điệu tự nhiên như người bản xứ.",
      outcomes: [
        "Kỹ năng đọc câu dài với ngữ điệu lên xuống chính xác.",
        "Biết cách nhấn trọng âm từ, trọng âm câu để truyền đạt ý nghĩa rõ ràng.",
        "Nâng cao khả năng nói trôi chảy, tự nhiên hơn trong giao tiếp.",
        "Sẵn sàng cho các kỹ năng nghe nói nâng cao hoặc luyện thi."
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Các khóa học</h2>
        <p className="section-subtitle">
          PhoniKids cung cấp lộ trình học toàn diện, từng bước giúp trẻ em phát âm chuẩn và đọc tiếng Anh trôi chảy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`${course.color} p-6 text-white relative`}>
                <course.icon className="w-12 h-12 mb-2" />
                <h3 className="text-2xl font-bold">{course.title}</h3>
                <div className="absolute right-4 top-4 bg-white text-gray-800 rounded-full px-3 py-1 text-sm font-bold">
                  {course.lessons} buổi
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">{course.description}</p>
                
                <h4 className="font-semibold text-gray-800 mb-3">Bạn sẽ đạt được sau khóa học:</h4>
                <ul className="space-y-2">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-phonikids-blue mr-2">•</span>
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full btn-primary">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-outline">
            Xem thêm thông tin chi tiết
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
