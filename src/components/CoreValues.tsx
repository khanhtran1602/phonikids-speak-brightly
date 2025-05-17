
const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: "Confidence – Tự tin",
      content: "Chúng tôi tin rằng sự giao tiếp tự tin được xây dựng trên nền tảng phát âm chuẩn xác. Tại PhoniKids, chúng tôi tạo ra một môi trường học tập đầy yêu thương và khích lệ – nơi trẻ cảm thấy an toàn để nói lên suy nghĩ của mình, dám mắc lỗi và từng bước phát triển trở thành những người sử dụng tiếng Anh tự tin, giàu cảm xúc và đầy bản lĩnh.",
      color: "bg-phonikids-blue"
    },
    {
      id: 2,
      title: "Consistency – Nhất quán",
      content: "Phát triển ngôn ngữ đòi hỏi sự luyện tập đều đặn và có hệ thống. Tại PhoniKids, trẻ được học theo lộ trình âm vị học rõ ràng, từng bước vững chắc. Cách tiếp cận nhất quán này giúp trẻ ghi nhớ kiến thức lâu hơn và tiến bộ bền vững.",
      color: "bg-phonikids-purple"
    },
    {
      id: 3,
      title: "Commitment – Cam kết",
      content: "PhoniKids cam kết đồng hành cùng từng bé trên chặng đường chinh phục ngôn ngữ. Từ những âm tiết đầu tiên đến khả năng đọc lưu loát và nói tiếng Anh trôi chảy, lộ trình học tại PhoniKids được xây dựng tỉ mỉ theo từng bước – đảm bảo sự nhất quán, bài bản và hướng đến một tương lai thành công lâu dài cho trẻ.",
      color: "bg-phonikids-purple/70"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Giá trị cốt lõi</h2>
        <p className="section-subtitle">
          Tại PhoniKids, chúng tôi xây dựng mọi khóa học và hoạt động giảng dạy dựa trên ba giá trị cốt lõi - 3Cs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((value) => (
            <div 
              key={value.id} 
              className="rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`${value.color} p-4 text-white`}>
                <h3 className="text-2xl font-bold">{value.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{value.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
