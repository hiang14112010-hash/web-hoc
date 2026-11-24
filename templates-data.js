/**
 * Fernora Slide Templates Catalog
 * 20 subject-curated presentation sets across 8 disciplines.
 * Each template generates 40–46 interconnected slides with Morph transition states.
 */
(function (global) {
  'use strict';

  const SUBJECTS = [
    { id: 'all', label: 'Tất cả môn học', short: 'Tất cả' },
    { id: 'toan', label: 'Toán học', short: 'Toán học' },
    { id: 'hoa', label: 'Hóa học', short: 'Hóa học' },
    { id: 'sinh', label: 'Sinh học', short: 'Sinh học' },
    { id: 'ly', label: 'Vật lý', short: 'Vật lý' },
    { id: 'su', label: 'Lịch sử', short: 'Lịch sử' },
    { id: 'dia', label: 'Địa lý', short: 'Địa lý' },
    { id: 'congnghe', label: 'Công nghệ', short: 'Công nghệ' },
    { id: 'van', label: 'Ngữ văn', short: 'Ngữ văn' }
  ];

  const PURPOSES = [
    { id: 'all', label: 'Mọi mục đích' },
    { id: 'bai-giang', label: 'Thuyết trình bài học' },
    { id: 'thi-nghiem', label: 'Báo cáo thí nghiệm' },
    { id: 'du-an', label: 'Dự án nhóm' },
    { id: 'bao-ve', label: 'Bảo vệ đề tài' },
    { id: 'on-tap', label: 'Ôn tập & Kiểm tra' },
    { id: 'phan-tich', label: 'Phân tích & Kể chuyện' }
  ];

  const TEMPLATES_META = [
    // ================= TOÁN HỌC (3) =================
    {
      id: 'toan-giai-tich',
      title: 'Giải tích & Không gian Euclid',
      subject: 'toan',
      subjectLabel: 'Toán học',
      slideCount: 42,
      purposes: ['bai-giang', 'on-tap'],
      purposeLabels: ['Thuyết trình bài học', 'Ôn tập & Kiểm tra'],
      popularity: 98,
      isNew: true,
      styleTag: 'Hàn lâm tối giản',
      teacherScore: '9.8/10',
      description: 'Bố cục dạng lưới tọa độ tinh tế với hệ thống nhấn công thức rõ ràng, giúp thầy cô và cả lớp theo dõi từng bước chứng minh mà không rối mắt.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f7f4ec',
        surface: '#ffffff',
        surfaceAlt: '#ece7da',
        ink: '#172336',
        muted: '#526074',
        accent: '#1f4e79',
        accent2: '#c58b2a',
        soft: 'rgba(31, 78, 121, 0.09)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'geometry',
      sampleFormula: '∫ₐᵇ f(x) dx = F(b) − F(a)',
      sampleQuote: 'Toán học là ngôn ngữ mà vũ trụ dùng để viết nên các quy luật của mình.',
      quoteAuthor: 'Galileo Galilei',
      chapters: [
        'Khởi nguồn & Giới hạn Hàm số',
        'Đạo hàm & Khảo sát Biến thiên',
        'Tích phân & Ứng dụng Hình học',
        'Hình học Không gian Oxyz',
        'Bài tập Vận dụng & Tổng kết'
      ],
      topics: [
        'Định nghĩa giới hạn hữu hạn và vô cực',
        'Quy tắc đạo hàm của hàm hợp',
        'Cực trị địa phương và điểm uốn đồ thị',
        'Nguyên hàm cơ bản và phương pháp đổi biến',
        'Tích phân từng phần trong bài toán diện tích',
        'Thể tích khối tròn xoay quanh trục Ox',
        'Phương trình mặt phẳng trong không gian Oxyz',
        'Góc và khoảng cách giữa hai đường thẳng chéo nhau',
        'Ứng dụng tối ưu hóa trong thực tiễn kỹ thuật',
        'Tổng hợp công thức giải nhanh trước kỳ thi'
      ],
      metrics: [
        { label: 'Giới hạn', val: 78 },
        { label: 'Đạo hàm', val: 92 },
        { label: 'Tích phân', val: 86 },
        { label: 'Hình Oxyz', val: 81 }
      ],
      timeline: [
        { step: '01', title: 'Đọc đề & phân tích', desc: 'Xác định tập xác định và điều kiện biên.' },
        { step: '02', title: 'Chọn định lý lõi', desc: 'Liên kết giả thiết với công thức tương ứng.' },
        { step: '03', title: 'Biến đổi đại số', desc: 'Trình bày từng bước rành mạch, kiểm tra dấu.' },
        { step: '04', title: 'Kết luận & kiểm chứng', desc: 'Đối chiếu nghiệm với điều kiện ban đầu.' }
      ],
      comparison: {
        leftTitle: 'Đạo hàm (Vi phân)',
        leftPoints: ['Đo tốc độ biến thiên tức thời', 'Tìm tiếp tuyến & cực trị đồ thị', 'Ứng dụng vào vận tốc, gia tốc'],
        rightTitle: 'Tích phân (Nguyên hàm)',
        rightPoints: ['Tính tổng tích lũy liên tục', 'Tính diện tích hình phẳng, thể tích', 'Ứng dụng vào quãng đường, công cơ học']
      },
      quiz: {
        question: 'Ý nghĩa hình học của tích phân xác định trên đoạn [a, b] với f(x) ≥ 0 là gì?',
        options: ['Độ dốc tiếp tuyến tại điểm a', 'Diện tích hình thang cong giới hạn bởi đồ thị', 'Chu vi đường cong f(x)', 'Tọa độ tâm đối xứng đồ thị'],
        answer: 1
      }
    },
    {
      id: 'toan-xac-suat',
      title: 'Xác suất Thống kê & Dữ liệu',
      subject: 'toan',
      subjectLabel: 'Toán học',
      slideCount: 44,
      purposes: ['du-an', 'bao-ve'],
      purposeLabels: ['Dự án nhóm', 'Bảo vệ đề tài'],
      popularity: 91,
      isNew: false,
      styleTag: 'Biểu đồ biên tập',
      teacherScore: '9.6/10',
      description: 'Thiết kế theo phong cách tạp chí dữ liệu hiện đại với biểu đồ cột, phân phối chuẩn và bảng so sánh trực quan cho bài thuyết trình thống kê.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f4f6f8',
        surface: '#ffffff',
        surfaceAlt: '#e4eaf0',
        ink: '#131d29',
        muted: '#4e5d6c',
        accent: '#1a5f7a',
        accent2: '#d96b43',
        soft: 'rgba(26, 95, 122, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'data',
      sampleFormula: 'P(A|B) = P(B|A) · P(A) / P(B)',
      sampleQuote: 'Dữ liệu không tự lên tiếng — cách ta trực quan hóa mới kể nên câu chuyện thật.',
      quoteAuthor: 'Edward Tufte',
      chapters: [
        'Không gian Mẫu & Biến cố',
        'Xác suất Có điều kiện & Bayes',
        'Biến Ngẫu nhiên & Phân phối Chuẩn',
        'Thu thập & Phân tích Mẫu Thống kê',
        'Kết luận Dự án & Khuyến nghị'
      ],
      topics: [
        'Tổ hợp, chỉnh hợp và quy tắc nhân xác suất',
        'Định lý Bayes trong bài toán chẩn đoán thực tế',
        'Kỳ vọng toán học và phương sai đo độ phân tán',
        'Đường cong hình chuông của phân phối chuẩn',
        'Trung bình, trung vị và tứ phân vị mẫu số liệu',
        'Phát hiện giá trị ngoại lai trong khảo sát học sinh',
        'Tương quan tuyến tính và đường hồi quy mẫu',
        'Sai số chọn mẫu và độ tin cậy 95%',
        'Trực quan hóa bảng hỏi lớp học bằng biểu đồ',
        'Ứng dụng thống kê trong dự báo kết quả học tập'
      ],
      metrics: [
        { label: 'Tổ hợp', val: 84 },
        { label: 'Bayes', val: 90 },
        { label: 'Phân phối', val: 76 },
        { label: 'Hồi quy', val: 88 }
      ],
      timeline: [
        { step: '01', title: 'Đặt câu hỏi khảo sát', desc: 'Xác định biến độc lập và nhóm đối tượng.' },
        { step: '02', title: 'Thu thập dữ liệu', desc: 'Ghi nhận mẫu ngẫu nhiên không thiên lệch.' },
        { step: '03', title: 'Làm sạch & tính toán', desc: 'Tính trung bình, độ lệch chuẩn và phân vị.' },
        { step: '04', title: 'Trình bày phát hiện', desc: 'Dùng biểu đồ rõ nét kèm nhận xét ngắn gọn.' }
      ],
      comparison: {
        leftTitle: 'Số trung bình (Mean)',
        leftPoints: ['Nhạy cảm với giá trị ngoại lai', 'Phù hợp dữ liệu phân phối đối xứng', 'Dùng nhiều trong kiểm định giả thuyết'],
        rightTitle: 'Số trung vị (Median)',
        rightPoints: ['Ổn định khi xuất hiện ngoại lai', 'Phản ánh tốt phân phối lệch', 'Dễ hiểu trong báo cáo thu nhập, điểm số']
      },
      quiz: {
        question: 'Khi bộ dữ liệu có một vài giá trị cực lớn bất thường, đại lượng nào phản ánh xu thế trung tâm tốt hơn?',
        options: ['Trung bình cộng', 'Trung vị (Median)', 'Khoảng biến thiên', 'Phương sai'],
        answer: 1
      }
    },
    {
      id: 'toan-dai-so',
      title: 'Đại số & Tư duy Logic',
      subject: 'toan',
      subjectLabel: 'Toán học',
      slideCount: 40,
      purposes: ['bai-giang', 'on-tap'],
      purposeLabels: ['Thuyết trình bài học', 'Ôn tập & Kiểm tra'],
      popularity: 85,
      isNew: false,
      styleTag: 'Cổ điển ấm áp',
      teacherScore: '9.5/10',
      description: 'Tông giấy kem ấm kết hợp điểm nhấn đất nung thanh lịch, lý tưởng cho các chuyên đề phương trình, bất đẳng thức và ma trận.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f8f3eb',
        surface: '#fffdf9',
        surfaceAlt: '#ede3d5',
        ink: '#241c17',
        muted: '#68594d',
        accent: '#a44a2a',
        accent2: '#2f5d50',
        soft: 'rgba(164, 74, 42, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'matrix',
      sampleFormula: 'a² + b² ≥ 2ab  (∀ a, b ∈ ℝ)',
      sampleQuote: 'Bản chất của toán học nằm ở sự tự do trong tư duy chặt chẽ.',
      quoteAuthor: 'Georg Cantor',
      chapters: [
        'Mệnh đề & Tư duy Tập hợp',
        'Hệ Phương trình & Ma trận',
        'Bất đẳng thức & Cực trị Đại số',
        'Dãy số, Cấp số & Quy nạp',
        'Luyện tập & Kiểm tra Nhanh'
      ],
      topics: [
        'Phép toán mệnh đề và chứng minh phản chứng',
        'Phương pháp khử Gauss giải hệ tuyến tính',
        'Bất đẳng thức Cauchy (AM-GM) và dấu bằng',
        'Bất đẳng thức Bunyakovsky trong bài toán cực trị',
        'Cấp số cộng, cấp số nhân và lãi suất kép',
        'Phương pháp chứng minh bằng quy nạp toán học',
        'Đa thức và định lý Vi-ét mở rộng',
        'Số phức dưới dạng lượng giác trực quan',
        'Kỹ thuật đặt ẩn phụ hóa giải phương trình bậc cao',
        'Hệ thống hóa các lỗi sai thường gặp khi biến đổi'
      ],
      metrics: [
        { label: 'Mệnh đề', val: 88 },
        { label: 'Hệ PT', val: 82 },
        { label: 'BĐT', val: 75 },
        { label: 'Dãy số', val: 91 }
      ],
      timeline: [
        { step: '01', title: 'Đặt điều kiện', desc: 'Tìm miền xác định cho mọi biểu thức.' },
        { step: '02', title: 'Nhận diện cấu trúc', desc: 'Quan sát tính đối xứng hoặc nhân tử chung.' },
        { step: '03', title: 'Chọn phép biến đổi', desc: 'Áp dụng tương đương hoặc hệ quả chính xác.' },
        { step: '04', title: 'Thử lại nghiệm', desc: 'Xác nhận nghiệm thỏa mãn toàn bộ đề bài.' }
      ],
      comparison: {
        leftTitle: 'Cấp số cộng',
        leftPoints: ['Hiệu hai số hạng liên tiếp không đổi (d)', 'Tăng trưởng tuyến tính theo bước', 'uₙ = u₁ + (n−1)d'],
        rightTitle: 'Cấp số nhân',
        rightPoints: ['Tỷ số hai số hạng liên tiếp không đổi (q)', 'Tăng trưởng theo hàm mũ nhanh', 'uₙ = u₁ · qⁿ⁻¹']
      },
      quiz: {
        question: 'Dấu bằng trong bất đẳng thức AM-GM cho hai số không âm a, b xảy ra khi nào?',
        options: ['a + b = 1', 'a = b', 'a · b = 1', 'a = 0'],
        answer: 1
      }
    },

    // ================= HÓA HỌC (2) =================
    {
      id: 'hoa-huu-co',
      title: 'Hóa Hữu cơ & Cấu trúc Phân tử',
      subject: 'hoa',
      subjectLabel: 'Hóa học',
      slideCount: 44,
      purposes: ['bai-giang', 'thi-nghiem'],
      purposeLabels: ['Thuyết trình bài học', 'Báo cáo thí nghiệm'],
      popularity: 96,
      isNew: true,
      styleTag: 'Phòng thí nghiệm xanh',
      teacherScore: '9.8/10',
      description: 'Họa tiết vòng benzen và liên kết cộng hóa trị chuyển động Morph mượt mà, cực kỳ sáng sủa khi trình chiếu phương trình phản ứng hữu cơ.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f2f7f4',
        surface: '#ffffff',
        surfaceAlt: '#dfece4',
        ink: '#13261f',
        muted: '#496359',
        accent: '#1b6b52',
        accent2: '#c87d28',
        soft: 'rgba(27, 107, 82, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'molecule',
      sampleFormula: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O',
      sampleQuote: 'Hóa học là nghệ thuật kiến tạo nên vật chất mới từ những liên kết vô hình.',
      quoteAuthor: 'Linus Pauling',
      chapters: [
        'Đại cương Liên kết Carbon',
        'Hydrocarbon & Đồng phân Không gian',
        'Dẫn xuất Chứa Oxygen: Alcohol & Ester',
        'Polymer & Vật liệu Sinh học',
        'Thực hành Thí nghiệm & Tổng kết'
      ],
      topics: [
        'Lai hóa sp³, sp², sp của nguyên tử Carbon',
        'Quy tắc gọi tên danh pháp IUPAC chuẩn mới',
        'Phản ứng thế, cộng và tách đặc trưng',
        'Cấu trúc vòng thơm Benzene và độ bền liên hợp',
        'Phản ứng Ester hóa và cân bằng hóa học',
        'Cấu tạo Carbohydrate: Glucose đến Cellulose',
        'Amino Acid, Peptide và cấu trúc Protein',
        'Tổng hợp Polymer và bài toán nhựa phân hủy sinh học',
        'Phân tích phổ hồng ngoại IR nhận diện nhóm chức',
        'An toàn hóa chất trong phòng thí nghiệm hữu cơ'
      ],
      metrics: [
        { label: 'Hydrocarbon', val: 89 },
        { label: 'Alcohol', val: 84 },
        { label: 'Ester-Lipid', val: 93 },
        { label: 'Polymer', val: 79 }
      ],
      timeline: [
        { step: '01', title: 'Chuẩn bị hóa chất', desc: 'Cân đo chính xác thể tích và nồng độ dung dịch.' },
        { step: '02', title: 'Lắp hệ đun hồi lưu', desc: 'Kiểm soát nhiệt độ và xúc tác H₂SO₄ đặc.' },
        { step: '03', title: 'Quan sát hiện tượng', desc: 'Ghi nhận tách lớp, mùi hương và kết tủa.' },
        { step: '04', title: 'Viết phương trình', desc: 'Cân bằng hệ số và tính hiệu suất phản ứng.' }
      ],
      comparison: {
        leftTitle: 'Phản ứng Cộng (Alkene)',
        leftPoints: ['Phá vỡ liên kết π kém bền', 'Tạo sản phẩm no hơn', 'Làm mất màu dung dịch Br₂ ngay lập tức'],
        rightTitle: 'Phản ứng Thế (Alkane)',
        rightPoints: ['Cần ánh sáng hoặc nhiệt độ cao', 'Thay thế nguyên tử H bằng Halogen', 'Tạo hỗn hợp nhiều dẫn xuất thế']
      },
      quiz: {
        question: 'Vai trò chính của H₂SO₄ đặc trong phản ứng điều chế Ethyl Acetate là gì?',
        options: ['Chất oxy hóa mạnh', 'Vừa làm xúc tác vừa hút nước tăng hiệu suất', 'Trung hòa axit dư', 'Tạo màu chỉ thị'],
        answer: 1
      }
    },
    {
      id: 'hoa-tuan-hoan',
      title: 'Bảng Tuần hoàn & Phản ứng Vô cơ',
      subject: 'hoa',
      subjectLabel: 'Hóa học',
      slideCount: 42,
      purposes: ['thi-nghiem', 'on-tap'],
      purposeLabels: ['Báo cáo thí nghiệm', 'Ôn tập & Kiểm tra'],
      popularity: 88,
      isNew: false,
      styleTag: 'Khoáng chất & Đồng ấm',
      teacherScore: '9.5/10',
      description: 'Tông đá vôi sáng kết hợp màu đồng kim loại, làm nổi bật cấu hình electron, tốc độ phản ứng và quy luật tuần hoàn.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f7f5f0',
        surface: '#ffffff',
        surfaceAlt: '#eae4d8',
        ink: '#221f1a',
        muted: '#615a4f',
        accent: '#b45a28',
        accent2: '#2d6678',
        soft: 'rgba(180, 90, 40, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'atom',
      sampleFormula: 'ΔrH°₂₉₈ = Σ ΔfH°(sản phẩm) − Σ ΔfH°(chất đầu)',
      sampleQuote: 'Không có gì tự sinh ra hay tự mất đi — tất cả chỉ chuyển hóa từ dạng này sang dạng khác.',
      quoteAuthor: 'Antoine Lavoisier',
      chapters: [
        'Cấu tạo Nguyên tử & Lớp Electron',
        'Quy luật Bảng Tuần hoàn Nguyên tố',
        'Năng lượng Hóa học & Enthalpy',
        'Tốc độ Phản ứng & Cân bằng Động',
        'Báo cáo Thí nghiệm & Ôn tập'
      ],
      topics: [
        'Mô hình orbital nguyên tử s, p, d, f hiện đại',
        'Xu hướng biến đổi bán kính và độ âm điện',
        'Liên kết ion, cộng hóa trị và liên kết hydrogen',
        'Phản ứng tỏa nhiệt và thu nhiệt trong đời sống',
        'Các yếu tố ảnh hưởng đến tốc độ phản ứng',
        'Nguyên lý chuyển dịch cân bằng Le Chatelier',
        'Thang pH và chuẩn độ Acid – Base chính xác',
        'Phản ứng Oxy hóa – Khử và pin điện hóa',
        'Nhận biết ion kim loại bằng màu ngọn lửa',
        'Ứng dụng xúc tác xanh trong công nghiệp hóa chất'
      ],
      metrics: [
        { label: 'Nguyên tử', val: 90 },
        { label: 'Liên kết', val: 85 },
        { label: 'Enthalpy', val: 78 },
        { label: 'Cân bằng', val: 87 }
      ],
      timeline: [
        { step: '01', title: 'Đo pH ban đầu', desc: 'Hiệu chuẩn giấy chỉ thị hoặc máy đo pH.' },
        { step: '02', title: 'Chuẩn độ từng giọt', desc: 'Lắc đều bình tam giác đến điểm tương đương.' },
        { step: '03', title: 'Ghi thể tích tiêu thụ', desc: 'Lặp lại 3 lần để lấy giá trị trung bình.' },
        { step: '04', title: 'Tính nồng độ mol', desc: 'Áp dụng bảo toàn đương lượng để kết luận.' }
      ],
      comparison: {
        leftTitle: 'Phản ứng Tỏa nhiệt (ΔH < 0)',
        leftPoints: ['Giải phóng năng lượng ra môi trường', 'Nhiệt độ hỗn hợp tăng lên rõ rệt', 'Ví dụ: Đốt cháy nhiên liệu, trung hòa'],
        rightTitle: 'Phản ứng Thu nhiệt (ΔH > 0)',
        rightPoints: ['Hấp thụ nhiệt từ môi trường xung quanh', 'Cần cung cấp nhiệt liên tục để duy trì', 'Ví dụ: Nhiệt phân đá vôi CaCO₃']
      },
      quiz: {
        question: 'Trong một chu kỳ từ trái sang phải, tính kim loại của các nguyên tố biến đổi như thế nào?',
        options: ['Tăng dần đều', 'Giảm dần đều', 'Không thay đổi', 'Tăng rồi giảm'],
        answer: 1
      }
    },

    // ================= SINH HỌC (3) =================
    {
      id: 'sinh-di-truyen',
      title: 'Di truyền học & Mã nguồn DNA',
      subject: 'sinh',
      subjectLabel: 'Sinh học',
      slideCount: 44,
      purposes: ['bai-giang', 'bao-ve'],
      purposeLabels: ['Thuyết trình bài học', 'Bảo vệ đề tài'],
      popularity: 95,
      isNew: true,
      styleTag: 'Sinh học phân tử',
      teacherScore: '9.7/10',
      description: 'Cảm hứng từ chuỗi xoắn kép DNA với tông kem sinh học và xanh ngọc lam sâu, trình bày sơ đồ phiên mã – dịch mã sắc nét từng bước.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f4f7f6',
        surface: '#ffffff',
        surfaceAlt: '#e1ecea',
        ink: '#112629',
        muted: '#496368',
        accent: '#0f6a72',
        accent2: '#c95f49',
        soft: 'rgba(15, 106, 114, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'helix',
      sampleFormula: 'DNA  →(Phiên mã)→  mRNA  →(Dịch mã)→  Protein',
      sampleQuote: 'Trong mỗi tế bào nhỏ bé đều lưu giữ một thư viện hàng tỷ năm tiến hóa.',
      quoteAuthor: 'Rosalind Franklin',
      chapters: [
        'Cấu trúc Xoắn kép DNA & Nhân đôi',
        'Phiên mã, Dịch mã & Điều hòa Gene',
        'Đột biến Gene & Nhiễm sắc thể',
        'Quy luật Di truyền Mendel & Quần thể',
        'Công nghệ Gene CRISPR & Thảo luận'
      ],
      topics: [
        'Nguyên tắc bổ sung A–T, G–C trong mạch kép DNA',
        'Cơ chế nhân đôi bán bảo tồn tại chạc chữ Y',
        'Vai trò của mRNA, tRNA và Ribosome khi dịch mã',
        'Mô hình Operon Lac ở vi khuẩn E. coli',
        'Đột biến điểm thay thế, thêm, mất một cặp nucleotide',
        'Phả hệ di truyền và dự đoán xác suất tính trạng',
        'Cân bằng di truyền Hardy – Weinberg trong quần thể',
        'Kỹ thuật tách dòng DNA tái tổ hợp',
        'Chỉnh sửa hệ gene CRISPR-Cas9 trong y học',
        'Đạo đức sinh học trong kỷ nguyên công nghệ gene'
      ],
      metrics: [
        { label: 'Nhân đôi', val: 92 },
        { label: 'Phiên mã', val: 87 },
        { label: 'Đột biến', val: 81 },
        { label: 'CRISPR', val: 95 }
      ],
      timeline: [
        { step: '01', title: 'Tháo xoắn DNA', desc: 'Enzyme Helicase cắt liên kết hydrogen.' },
        { step: '02', title: 'Tổng hợp mạch mới', desc: 'DNA Polymerase kéo dài theo chiều 5’ → 3’.' },
        { step: '03', title: 'Hiệu đính sai sót', desc: 'Hệ thống sửa sai đảm bảo độ chính xác cao.' },
        { step: '04', title: 'Hoàn tất 2 DNA con', desc: 'Mỗi phân tử giữ lại một mạch khuôn ban đầu.' }
      ],
      comparison: {
        leftTitle: 'Phân tử DNA',
        leftPoints: ['Cấu trúc 2 mạch song song ngược chiều', 'Đường Deoxyribose và base Thymine (T)', 'Lưu trữ thông tin di truyền dài hạn'],
        rightTitle: 'Phân tử RNA',
        rightPoints: ['Thường có cấu trúc 1 mạch đơn linh hoạt', 'Đường Ribose và base Uracil (U)', 'Truyền đạt và trực tiếp tổng hợp Protein']
      },
      quiz: {
        question: 'Quá trình nhân đôi DNA diễn ra theo hai nguyên tắc cơ bản nào?',
        options: ['Bổ sung và bán bảo tồn', 'Ngẫu nhiên và gián đoạn', 'Tự phát và toàn phần', 'Song song và khép kín'],
        answer: 0
      }
    },
    {
      id: 'sinh-he-sinh-thai',
      title: 'Hệ Sinh thái & Thực vật học',
      subject: 'sinh',
      subjectLabel: 'Sinh học',
      slideCount: 46,
      purposes: ['du-an', 'bai-giang'],
      purposeLabels: ['Dự án nhóm', 'Thuyết trình bài học'],
      popularity: 94,
      isNew: true,
      styleTag: 'Thảo mộc học Fernora',
      teacherScore: '9.9/10',
      description: 'Đồng điệu hoàn hảo với bản sắc thực vật của Fernora: giấy lanh thảo mộc, xanh rêu rừng và bố cục sổ tay nghiên cứu thiên nhiên.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f5f4ec',
        surface: '#fdfcf8',
        surfaceAlt: '#e4e7db',
        ink: '#1a261c',
        muted: '#526254',
        accent: '#2e5e3e',
        accent2: '#b38236',
        soft: 'rgba(46, 94, 62, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'botanical',
      sampleFormula: '6CO₂ + 6H₂O  →(Ánh sáng, Diệp lục)→  C₆H₁₂O₆ + 6O₂',
      sampleQuote: 'Trong mọi bước đi cùng thiên nhiên, ta luôn nhận về nhiều hơn điều ta tìm kiếm.',
      quoteAuthor: 'John Muir',
      chapters: [
        'Quang hợp & Trao đổi Chất ở Thực vật',
        'Quần thể & Mối quan hệ Sinh thái',
        'Chuỗi Thức ăn & Tháp Năng lượng',
        'Đa dạng Sinh học Rừng Nhiệt đới',
        'Hành động Xanh & Bảo tồn Hệ Sinh thái'
      ],
      topics: [
        'Cấu tạo lục lạp và pha sáng – pha tối quang hợp',
        'Quá trình thoát hơi nước qua khí khổng lá cây',
        'Quan hệ cộng sinh, hội sinh và cạnh tranh sinh học',
        'Quy luật hiệu suất sinh thái 10% qua bậc dinh dưỡng',
        'Chu trình tuần hoàn Carbon và Nitrogen tự nhiên',
        'Diễn thế sinh thái nguyên sinh và thứ sinh',
        'Vai trò rừng ngập mặn ven biển Việt Nam',
        'Các loài đặc hữu quý hiếm trong Sách Đỏ',
        'Tác động của biến đổi khí hậu lên rạn san hô',
        'Dự án vườn thực vật xanh ngay trong sân trường'
      ],
      metrics: [
        { label: 'Sinh vật SX', val: 100 },
        { label: 'Bậc 1', val: 64 },
        { label: 'Bậc 2', val: 38 },
        { label: 'Bậc 3', val: 18 }
      ],
      timeline: [
        { step: '01', title: 'Sinh vật sản xuất', desc: 'Thực vật chuyển hóa quang năng thành hóa năng.' },
        { step: '02', title: 'Tiêu thụ bậc 1', desc: 'Động vật ăn cỏ khai thác nguồn năng lượng sơ cấp.' },
        { step: '03', title: 'Tiêu thụ bậc cao', desc: 'Duy trì cân bằng số lượng quần thể tự nhiên.' },
        { step: '04', title: 'Sinh vật phân giải', desc: 'Trả lại khoáng chất hữu cơ về cho đất.' }
      ],
      comparison: {
        leftTitle: 'Thực vật C3 (Lúa, Đậu)',
        leftPoints: ['Phổ biến ở vùng ôn đới & cận nhiệt', 'Cố định CO₂ trực tiếp theo chu trình Calvin', 'Có hô hấp sáng khi trời quá nóng'],
        rightTitle: 'Thực vật C4 (Ngô, Mía)',
        rightPoints: ['Thích nghi khí hậu nhiệt đới nắng gắt', 'Năng suất quang hợp cao, tiết kiệm nước', 'Hầu như không xảy ra hô hấp sáng']
      },
      quiz: {
        question: 'Khoảng bao nhiêu phần trăm năng lượng được truyền từ bậc dinh dưỡng này sang bậc liền kề trên?',
        options: ['Khoảng 50%', 'Khoảng 10%', 'Khoảng 75%', 'Khoảng 90%'],
        answer: 1
      }
    },
    {
      id: 'sinh-giai-phau',
      title: 'Giải phẫu & Sinh lý Cơ thể',
      subject: 'sinh',
      subjectLabel: 'Sinh học',
      slideCount: 40,
      purposes: ['bai-giang', 'thi-nghiem'],
      purposeLabels: ['Thuyết trình bài học', 'Báo cáo thí nghiệm'],
      popularity: 84,
      isNew: false,
      styleTag: 'Y sinh tinh gọn',
      teacherScore: '9.5/10',
      description: 'Bố cục y sinh sạch sẽ với gam lụa trắng và đỏ san hô trầm, giúp trình bày hệ tuần hoàn, thần kinh và miễn dịch rõ ràng, chuyên nghiệp.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#faf6f4',
        surface: '#ffffff',
        surfaceAlt: '#f0e4e0',
        ink: '#241819',
        muted: '#6c5658',
        accent: '#a9383f',
        accent2: '#2d5f73',
        soft: 'rgba(169, 56, 63, 0.09)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'pulse',
      sampleFormula: 'Lưu lượng tim (CO) = Nhịp tim (HR) × Thể tích tâm thu (SV)',
      sampleQuote: 'Cơ thể con người là kiệt tác phối hợp nhịp nhàng giữa hàng nghìn tỷ tế bào.',
      quoteAuthor: 'William Harvey',
      chapters: [
        'Hệ Tuần hoàn & Chu kỳ Hoạt động Tim',
        'Hệ Hô hấp & Trao đổi Khí Phế nang',
        'Hệ Thần kinh & Phản xạ Có điều kiện',
        'Hệ Miễn dịch & Cân bằng Nội môi',
        'Chăm sóc Sức khỏe Học đường & Ôn tập'
      ],
      topics: [
        'Vòng tuần hoàn lớn và vòng tuần hoàn nhỏ',
        'Cơ chế đóng mở van tim và huyết áp động mạch',
        'Khuếch tán O₂ và CO₂ qua màng phế nang – mao mạch',
        'Cấu tạo Neuron và sự lan truyền xung thần kinh',
        'Cơ chế truyền tin qua Synapse hóa học',
        'Hàng rào miễn dịch không đặc hiệu và đặc hiệu',
        'Cơ chế hoạt động của Vaccine bảo vệ cơ thể',
        'Vai trò của thận và gan trong cân bằng nội môi',
        'Ảnh hưởng của giấc ngủ đến trí nhớ học sinh',
        'Thí nghiệm đo nhịp tim trước và sau vận động'
      ],
      metrics: [
        { label: 'Nghỉ ngơi', val: 68 },
        { label: 'Đi bộ', val: 82 },
        { label: 'Chạy bền', val: 96 },
        { label: 'Hồi phục', val: 74 }
      ],
      timeline: [
        { step: '01', title: 'Pha co tâm nhĩ', desc: 'Kéo dài 0,1s đẩy máu xuống tâm thất.' },
        { step: '02', title: 'Pha co tâm thất', desc: 'Kéo dài 0,3s bơm máu vào động mạch chủ & phổi.' },
        { step: '03', title: 'Pha giãn chung', desc: 'Kéo dài 0,4s giúp tim nghỉ ngơi và nạp máu.' },
        { step: '04', title: 'Chu kỳ mới', desc: 'Lặp lại nhịp nhàng khoảng 75 lần mỗi phút.' }
      ],
      comparison: {
        leftTitle: 'Miễn dịch Không đặc hiệu',
        leftPoints: ['Có sẵn từ khi sinh ra (da, niêm mạc)', 'Phản ứng nhanh với mọi tác nhân lạ', 'Không tạo trí nhớ miễn dịch dài lâu'],
        rightTitle: 'Miễn dịch Đặc hiệu',
        rightPoints: ['Hình thành sau tiếp xúc kháng nguyên/vaccine', 'Tế bào Lympho B & T tấn công đúng mục tiêu', 'Tạo trí nhớ miễn dịch bền vững']
      },
      quiz: {
        question: 'Trong một chu kỳ tim bình thường kéo dài 0,8 giây, pha giãn chung chiếm bao lâu?',
        options: ['0,1 giây', '0,2 giây', '0,4 giây', '0,6 giây'],
        answer: 2
      }
    },

    // ================= VẬT LÝ (3) =================
    {
      id: 'ly-luong-tu',
      title: 'Quang học & Vật lý Lượng tử',
      subject: 'ly',
      subjectLabel: 'Vật lý',
      slideCount: 44,
      purposes: ['bai-giang', 'bao-ve'],
      purposeLabels: ['Thuyết trình bài học', 'Bảo vệ đề tài'],
      popularity: 97,
      isNew: true,
      styleTag: 'Đài thiên văn sang trọng',
      teacherScore: '9.8/10',
      description: 'Nền xanh đêm đài thiên văn tương phản cao cùng ánh vàng quang phổ tinh tế — vừa gây ấn tượng thị giác mạnh, vừa cực dễ đọc trên máy chiếu.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#0e1726',
        surface: '#162236',
        surfaceAlt: '#1e2e47',
        ink: '#f4efe6',
        muted: '#a4b2c6',
        accent: '#e4b358',
        accent2: '#5cb8c9',
        soft: 'rgba(228, 179, 88, 0.14)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'wave',
      sampleFormula: 'E = h · f = h · c / λ',
      sampleQuote: 'Nếu vật lý lượng tử chưa khiến bạn kinh ngạc, nghĩa là bạn chưa thực sự chạm tới nó.',
      quoteAuthor: 'Niels Bohr',
      chapters: [
        'Giao thoa & Nhiễu xạ Sóng Ánh sáng',
        'Thuyết Lượng tử Planck & Photon',
        'Hiện tượng Quang điện & Pin Mặt trời',
        'Mẫu Nguyên tử Bohr & Quang phổ Vạch',
        'Ứng dụng Laser & Câu hỏi Thảo luận'
      ],
      topics: [
        'Thí nghiệm hai khe Young chứng minh tính sóng',
        'Tán sắc ánh sáng trắng qua lăng kính thủy tinh',
        'Bức xạ vật đen và giả thuyết lượng tử năng lượng',
        'Định luật Einstein về hiện tượng quang điện ngoài',
        'Lưỡng tính sóng – hạt của ánh sáng và electron',
        'Trạng thái dừng và bức xạ photon ở nguyên tử Hydro',
        'Nguyên lý bất định Heisenberg ở quy mô vi mô',
        'Cơ chế phát xạ cưỡng bức của chùm tia Laser',
        'Cáp quang và truyền dẫn tín hiệu tốc độ ánh sáng',
        'Triển vọng máy tính lượng tử trong thế kỷ 21'
      ],
      metrics: [
        { label: 'Sóng ánh sáng', val: 88 },
        { label: 'Quang điện', val: 94 },
        { label: 'Quang phổ', val: 80 },
        { label: 'Laser', val: 91 }
      ],
      timeline: [
        { step: '01', title: '1801 · T. Young', desc: 'Chứng minh giao thoa sóng ánh sáng.' },
        { step: '02', title: '1900 · M. Planck', desc: 'Đề xuất năng lượng phát xạ theo từng lượng tử.' },
        { step: '03', title: '1905 · A. Einstein', desc: 'Giải thích hiện tượng quang điện bằng hạt Photon.' },
        { step: '04', title: '1913 · N. Bohr', desc: 'Xây dựng mẫu nguyên tử lượng tử hóa quỹ đạo.' }
      ],
      comparison: {
        leftTitle: 'Tính chất Sóng',
        leftPoints: ['Thể hiện qua giao thoa, nhiễu xạ', 'Rõ nét ở bức xạ bước sóng dài', 'Mô tả bằng tần số f và bước sóng λ'],
        rightTitle: 'Tính chất Hạt (Photon)',
        rightPoints: ['Thể hiện qua quang điện, đâm xuyên', 'Rõ nét ở tia tử ngoại, tia X, tia Gamma', 'Mỗi hạt mang năng lượng ε = hf']
      },
      quiz: {
        question: 'Điều kiện để xảy ra hiện tượng quang điện ngoài đối với một kim loại là gì?',
        options: ['Bước sóng λ > λ₀', 'Bước sóng λ ≤ λ₀', 'Cường độ ánh sáng thật lớn', 'Nhiệt độ kim loại cao'],
        answer: 1
      }
    },
    {
      id: 'ly-thien-van',
      title: 'Cơ học Thiên thể & Vũ trụ',
      subject: 'ly',
      subjectLabel: 'Vật lý',
      slideCount: 46,
      purposes: ['du-an', 'phan-tich'],
      purposeLabels: ['Dự án nhóm', 'Phân tích & Kể chuyện'],
      popularity: 93,
      isNew: false,
      styleTag: 'Quỹ đạo tinh vân',
      teacherScore: '9.7/10',
      description: 'Bầu trời đá phiến sâu lắng với đường quỹ đạo champagne thanh mảnh, chuyển cảnh Morph như đang du hành qua các hành tinh.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#13161f',
        surface: '#1b202d',
        surfaceAlt: '#242b3c',
        ink: '#f3ede2',
        muted: '#a7afc0',
        accent: '#d8b47c',
        accent2: '#7a9ec9',
        soft: 'rgba(216, 180, 124, 0.14)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'orbit',
      sampleFormula: 'F = G · (m₁ · m₂) / r²',
      sampleQuote: 'Ở một nơi nào đó ngoài kia, điều kỳ diệu vẫn đang chờ ta khám phá.',
      quoteAuthor: 'Carl Sagan',
      chapters: [
        'Định luật Vạn vật Hấp dẫn Newton',
        'Ba Định luật Kepler về Quỹ đạo',
        'Vận tốc Vũ trụ & Vệ tinh Nhân tạo',
        'Tiến hóa Sao, Hố đen & Vụ Nổ Lớn',
        'Khám phá Không gian & Kết luận'
      ],
      topics: [
        'Lực hấp dẫn giữ các hành tinh chuyển động quanh Mặt Trời',
        'Quỹ đạo hình elip và vận tốc diện tích không đổi',
        'Chu kỳ quay bình phương tỷ lệ với lập phương bán trục lớn',
        'Vận tốc vũ trụ cấp I (7,9 km/s) và cấp II (11,2 km/s)',
        'Vệ tinh địa tĩnh và hệ thống định vị GPS toàn cầu',
        'Vòng đời của một ngôi sao từ tinh vân đến sao lùn trắng',
        'Chân trời sự kiện và thấu kính hấp dẫn của Hố đen',
        'Bức xạ nền vi sóng vũ trụ và sự giãn nở Hubble',
        'Kính thiên văn James Webb quan sát thiên hà sơ khai',
        'Hành trình chinh phục Mặt Trăng và Sao Hỏa'
      ],
      metrics: [
        { label: 'Thủy tinh', val: 38 },
        { label: 'Trái Đất', val: 62 },
        { label: 'Sao Hỏa', val: 74 },
        { label: 'Sao Mộc', val: 96 }
      ],
      timeline: [
        { step: '01', title: '1609 · Kepler', desc: 'Công bố quy luật quỹ đạo elip của hành tinh.' },
        { step: '02', title: '1687 · Newton', desc: 'Thống nhất cơ học Trái Đất và bầu trời.' },
        { step: '03', title: '1969 · Apollo 11', desc: 'Con người lần đầu đặt chân lên Mặt Trăng.' },
        { step: '04', title: '2022 · JWST', desc: 'Gửi về ảnh hồng ngoại sâu nhất của vũ trụ.' }
      ],
      comparison: {
        leftTitle: 'Hành tinh Đất đá (Bên trong)',
        leftPoints: ['Sao Thủy, Sao Kim, Trái Đất, Sao Hỏa', 'Bề mặt rắn, khối lượng riêng cao', 'Ít vệ tinh tự nhiên, không có vành đai'],
        rightTitle: 'Hành tinh Khí khổng lồ (Bên ngoài)',
        rightPoints: ['Sao Mộc, Sao Thổ, Thiên Vương, Hải Vương', 'Kích thước lớn, cấu tạo chủ yếu H₂ và He', 'Nhiều vệ tinh và hệ thống vành đai']
      },
      quiz: {
        question: 'Theo định luật I Kepler, quỹ đạo chuyển động của các hành tinh quanh Mặt Trời có hình dạng gì?',
        options: ['Đường tròn tâm Mặt Trời', 'Đường elip với Mặt Trời tại một tiêu điểm', 'Đường parabol mở', 'Đường xoắn ốc'],
        answer: 1
      }
    },
    {
      id: 'ly-dien-tu',
      title: 'Điện từ học & Năng lượng Xanh',
      subject: 'ly',
      subjectLabel: 'Vật lý',
      slideCount: 42,
      purposes: ['thi-nghiem', 'du-an'],
      purposeLabels: ['Báo cáo thí nghiệm', 'Dự án nhóm'],
      popularity: 86,
      isNew: false,
      styleTag: 'Kỹ thuật sạch sáng',
      teacherScore: '9.6/10',
      description: 'Nền sứ trắng tinh khiết kết hợp xanh điện năng và cam hổ phách, hoàn hảo cho sơ đồ mạch điện, cảm ứng điện từ và dự án năng lượng tái tạo.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f5f8f8',
        surface: '#ffffff',
        surfaceAlt: '#e1ecec',
        ink: '#122226',
        muted: '#4d656b',
        accent: '#0d7377',
        accent2: '#e07a2f',
        soft: 'rgba(13, 115, 119, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'circuit',
      sampleFormula: 'e_c = − ΔΦ / Δt   (Định luật Faraday)',
      sampleQuote: 'Nếu muốn hiểu bí mật của vũ trụ, hãy nghĩ theo ngôn ngữ năng lượng, tần số và dao động.',
      quoteAuthor: 'Nikola Tesla',
      chapters: [
        'Điện trường & Mạch Điện Một chiều',
        'Từ trường & Lực Lorentz',
        'Cảm ứng Điện từ & Dòng Xoay chiều',
        'Truyền tải Điện & Năng lượng Tái tạo',
        'Thực hành Mạch Điện & Tổng kết'
      ],
      topics: [
        'Định luật Ohm cho toàn mạch và công suất tiêu thụ',
        'Cấu tạo tụ điện và khả năng tích trữ năng lượng',
        'Đường sức từ của nam châm và ống dây có dòng điện',
        'Quy tắc bàn tay trái xác định lực từ tác dụng',
        'Hiện tượng cảm ứng điện từ và định luật Lenz',
        'Nguyên lý máy phát điện xoay chiều 3 pha',
        'Máy biến áp giảm hao phí trên đường dây 500kV',
        'Cơ chế hoạt động của tua-bin gió và điện mặt trời',
        'An toàn điện trong gia đình và aptomat chống giật',
        'Mô hình nhà thông minh tiết kiệm điện năng'
      ],
      metrics: [
        { label: 'Thủy điện', val: 72 },
        { label: 'Điện mặt trời', val: 89 },
        { label: 'Điện gió', val: 84 },
        { label: 'Sinh khối', val: 61 }
      ],
      timeline: [
        { step: '01', title: 'Vẽ sơ đồ mạch', desc: 'Kiểm tra cực nguồn, điện trở và ampe kế.' },
        { step: '02', title: 'Lắp ráp thí nghiệm', desc: 'Đảm bảo công tắc ngắt trước khi nối dây.' },
        { step: '03', title: 'Đo U và I nhiều mức', desc: 'Ghi bảng số liệu và vẽ đồ thị đặc trưng.' },
        { step: '04', title: 'Tính sai số phép đo', desc: 'Đánh giá nguyên nhân hao phí nhiệt.' }
      ],
      comparison: {
        leftTitle: 'Dòng điện Một chiều (DC)',
        leftPoints: ['Chiều và cường độ không đổi theo thời gian', 'Nguồn từ pin, ắc quy, tấm quang điện', 'Dùng trực tiếp cho thiết bị điện tử'],
        rightTitle: 'Dòng điện Xoay chiều (AC)',
        rightPoints: ['Đảo chiều tuần hoàn theo hàm sin (50Hz)', 'Dễ tăng/hạ áp bằng máy biến áp', 'Tối ưu cho truyền tải điện đi xa']
      },
      quiz: {
        question: 'Để giảm công suất hao phí trên đường dây tải điện đi 100 lần, cần tăng điện áp truyền tải lên bao nhiêu lần?',
        options: ['10 lần', '50 lần', '100 lần', '1000 lần'],
        answer: 0
      }
    },

    // ================= LỊCH SỬ (3) =================
    {
      id: 'su-viet-nam',
      title: 'Biên niên sử Việt Nam',
      subject: 'su',
      subjectLabel: 'Lịch sử',
      slideCount: 44,
      purposes: ['bai-giang', 'phan-tich'],
      purposeLabels: ['Thuyết trình bài học', 'Phân tích & Kể chuyện'],
      popularity: 96,
      isNew: true,
      styleTag: 'Di sản giấy dó',
      teacherScore: '9.9/10',
      description: 'Cảm hứng từ giấy dó truyền thống kết hợp son đỏ sơn mài trang trọng, có dòng thời gian Morph xuyên suốt các triều đại và mốc lịch sử hào hùng.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f7f1e3',
        surface: '#fdfaf2',
        surfaceAlt: '#ebe0c9',
        ink: '#261a14',
        muted: '#6c584c',
        accent: '#9c2d24',
        accent2: '#a67b35',
        soft: 'rgba(156, 45, 36, 0.09)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'heritage',
      sampleFormula: '938 (Bạch Đằng)  →  1010 (Thăng Long)  →  1945 (Độc lập)',
      sampleQuote: 'Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam.',
      quoteAuthor: 'Hồ Chí Minh',
      chapters: [
        'Buổi đầu Dựng nước & Văn minh Đông Sơn',
        'Kỷ nguyên Độc lập: Lý – Trần – Lê',
        'Tây Sơn & Quá trình Mở cõi Phương Nam',
        'Cách mạng Tháng Tám & Kháng chiến Bảo vệ Tổ quốc',
        'Đổi mới, Hội nhập & Bài học Lịch sử'
      ],
      topics: [
        'Nền văn hóa Đông Sơn và biểu tượng Trống đồng Ngọc Lũ',
        'Chiến thắng Bạch Đằng năm 938 mở ra kỷ nguyên tự chủ',
        'Chiếu dời đô năm 1010 định đô tại Thăng Long',
        'Hào khí Đông A qua ba lần kháng chiến chống Nguyên – Mông',
        'Khởi nghĩa Lam Sơn và Bình Ngô đại cáo của Nguyễn Trãi',
        'Hành quân thần tốc Ngọc Hồi – Đống Đa xuân Kỷ Dậu 1789',
        'Phong trào yêu nước đầu thế kỷ XX và hành trình cứu nước',
        'Tuyên ngôn Độc lập ngày 2/9/1945 tại Quảng trường Ba Đình',
        'Chiến dịch Điện Biên Phủ 1954 và Đại thắng Mùa xuân 1975',
        'Công cuộc Đổi mới từ 1986 và vị thế Việt Nam hôm nay'
      ],
      metrics: [
        { label: 'Cổ đại', val: 76 },
        { label: 'Phong kiến', val: 92 },
        { label: 'Cận đại', val: 85 },
        { label: 'Hiện đại', val: 95 }
      ],
      timeline: [
        { step: '938', title: 'Bạch Đằng', desc: 'Ngô Quyền đánh tan quân Nam Hán, chấm dứt Bắc thuộc.' },
        { step: '1010', title: 'Định đô Thăng Long', desc: 'Lý Thái Tổ mở ra thời kỳ văn hiến rực rỡ.' },
        { step: '1428', title: 'Bình Ngô đại cáo', desc: 'Khẳng định nền độc lập và chủ quyền Đại Việt.' },
        { step: '1945', title: 'Nước VNDCCH', desc: 'Khai sinh nhà nước độc lập tự do thời đại mới.' }
      ],
      comparison: {
        leftTitle: 'Kháng chiến thời Lý – Trần',
        leftPoints: ['Nghệ thuật tiên phát chế nhân & vườn không nhà trống', 'Khối đoàn kết toàn dân tại Hội nghị Diên Hồng', 'Bảo vệ vững chắc kinh thành và biên cương'],
        rightTitle: 'Kháng chiến Hiện đại Thế kỷ XX',
        rightPoints: ['Chiến tranh nhân dân toàn dân, toàn diện', 'Kết hợp đấu tranh quân sự, chính trị, ngoại giao', 'Giành độc lập, thống nhất non sông năm 1975']
      },
      quiz: {
        question: 'Sự kiện lịch sử nào năm 1010 đánh dấu việc chọn kinh đô lâu dài cho quốc gia Đại Việt?',
        options: ['Chiến thắng Bạch Đằng', 'Chiếu dời đô về Thăng Long', 'Hội nghị Diên Hồng', 'Thành lập Quốc Tử Giám'],
        answer: 1
      }
    },
    {
      id: 'su-van-minh',
      title: 'Văn minh Nhân loại Cổ đại',
      subject: 'su',
      subjectLabel: 'Lịch sử',
      slideCount: 42,
      purposes: ['du-an', 'phan-tich'],
      purposeLabels: ['Dự án nhóm', 'Phân tích & Kể chuyện'],
      popularity: 89,
      isNew: false,
      styleTag: 'Bảo tàng đá travertine',
      teacherScore: '9.6/10',
      description: 'Tông cát đá bảo tàng và đồng cổ sang trọng, tái hiện hành trình từ Ai Cập, Lưỡng Hà, Ấn Độ đến Hy Lạp – La Mã cổ đại.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f5efe4',
        surface: '#fffcf7',
        surfaceAlt: '#e8decb',
        ink: '#251f18',
        muted: '#6c5f4f',
        accent: '#8f6229',
        accent2: '#325a6b',
        soft: 'rgba(143, 98, 41, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'pillar',
      sampleFormula: 'Ai Cập (Sông Nile)  ·  Lưỡng Hà (Euphrates)  ·  Hy Lạp (Địa Trung Hải)',
      sampleQuote: 'Lịch sử là ngọn đèn soi sáng quá khứ để ta hiểu rõ hiện tại của nhân loại.',
      quoteAuthor: 'Herodotus',
      chapters: [
        'Cái nôi Văn minh Lưu vực Sông lớn',
        'Ai Cập & Lưỡng Hà: Chữ viết và Kiến trúc',
        'Ấn Độ & Trung Hoa Cổ đại',
        'Hy Lạp – La Mã: Triết học & Dân chủ',
        'Di sản Thế giới & Giá trị Đương đại'
      ],
      topics: [
        'Vai trò của các dòng sông lớn với nông nghiệp sơ khai',
        'Chữ tượng hình Ai Cập và chữ hình nêm Lưỡng Hà',
        'Kỹ thuật xây dựng Kim tự tháp và lịch mặt trời',
        'Hệ chữ số Ấn Độ và bốn phát minh lớn của Trung Hoa',
        'Thành bang Athens và nền dân chủ cổ đại',
        'Triết học Socrates, Plato, Aristotle và khoa học tự nhiên',
        'Kiến trúc mái vòm, cầu dẫn nước và luật pháp La Mã',
        'Con đường Tơ lụa kết nối giao thương Đông – Tây',
        'So sánh thành tựu văn minh Phương Đông và Phương Tây',
        'Bảo tồn di sản văn minh nhân loại thời hiện đại'
      ],
      metrics: [
        { label: 'Ai Cập', val: 94 },
        { label: 'Trung Hoa', val: 90 },
        { label: 'Hy Lạp', val: 96 },
        { label: 'La Mã', val: 88 }
      ],
      timeline: [
        { step: '3200 TCN', title: 'Chữ viết ra đời', desc: 'Lưỡng Hà và Ai Cập ghi chép lịch sử đầu tiên.' },
        { step: '2560 TCN', title: 'Đại Kim tự tháp', desc: 'Đỉnh cao kiến trúc và toán học Ai Cập cổ.' },
        { step: '500 TCN', title: 'Thời đại Athens', desc: 'Nở rộ triết học, kịch nghệ và dân chủ.' },
        { step: '100 TCN', title: 'Con đường Tơ lụa', desc: 'Mở rộng giao lưu văn hóa Á – Âu.' }
      ],
      comparison: {
        leftTitle: 'Văn minh Phương Đông Cổ đại',
        leftPoints: ['Hình thành dọc lưu vực sông lớn màu mỡ', 'Kinh tế nông nghiệp tưới tiêu là chủ đạo', 'Sớm phát minh chữ tượng hình, lịch pháp, giấy'],
        rightTitle: 'Văn minh Phương Tây Cổ đại',
        rightPoints: ['Hình thành ven biển Địa Trung Hải', 'Phát triển mạnh hàng hải và thương nghiệp', 'Đặt nền móng chữ cái Latinh, triết học, luật pháp']
      },
      quiz: {
        question: 'Bốn phát minh kỹ thuật vĩ đại của Trung Hoa cổ – trung đại gồm những gì?',
        options: ['Giấy, kỹ thuật in, la bàn, thuốc súng', 'Bánh xe, đồng thau, thủy tinh, giấy', 'La bàn, kính viễn vọng, giấy, bản đồ', 'Thuốc súng, động cơ hơi nước, in, la bàn'],
        answer: 0
      }
    },
    {
      id: 'su-hien-dai',
      title: 'Lịch sử Hiện đại & Tư liệu Lưu trữ',
      subject: 'su',
      subjectLabel: 'Lịch sử',
      slideCount: 40,
      purposes: ['bao-ve', 'on-tap'],
      purposeLabels: ['Bảo vệ đề tài', 'Ôn tập & Kiểm tra'],
      popularity: 82,
      isNew: false,
      styleTag: 'Tư liệu báo chí',
      teacherScore: '9.5/10',
      description: 'Phong cách hồ sơ lưu trữ thanh lịch với giấy ngà và xanh ô-liu than, thích hợp trình bày quan hệ quốc tế, ASEAN và thế kỷ XX–XXI.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f4f2ec',
        surface: '#ffffff',
        surfaceAlt: '#e4e2d8',
        ink: '#1e211d',
        muted: '#5d6158',
        accent: '#425943',
        accent2: '#9c5a3c',
        soft: 'rgba(66, 89, 67, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'archive',
      sampleFormula: '1945 (LHQ)  →  1967 (ASEAN)  →  1991 (Đa cực)',
      sampleQuote: 'Hòa bình không chỉ là không có chiến tranh, mà là sự hợp tác cùng phát triển.',
      quoteAuthor: 'Hiến chương Liên Hợp Quốc',
      chapters: [
        'Trật tự Thế giới Sau Năm 1945',
        'Chiến tranh Lạnh & Cuộc Chạy đua Khoa học',
        'Sự Hình thành & Phát triển của ASEAN',
        'Toàn cầu hóa & Thế giới Đa cực',
        'Phân tích Tư liệu & Tổng kết'
      ],
      topics: [
        'Hội nghị Yalta và sự ra đời của Liên Hợp Quốc',
        'Phong trào giải phóng dân tộc ở châu Á và châu Phi',
        'Bối cảnh đối đầu Đông – Tây thời Chiến tranh Lạnh',
        'Sự phát triển thần kỳ của Nhật Bản và Tây Âu',
        'Tuyên bố Bangkok 1967 thành lập tổ chức ASEAN',
        'Việt Nam gia nhập ASEAN năm 1995 và vai trò kết nối',
        'Cách mạng khoa học – kỹ thuật lần thứ ba',
        'Xu thế đa cực và hợp tác kinh tế khu vực',
        'Thách thức an ninh phi truyền thống thế kỷ XXI',
        'Kỹ năng đọc hiểu và kiểm chứng nguồn sử liệu'
      ],
      metrics: [
        { label: 'LHQ 1945', val: 90 },
        { label: 'ASEAN', val: 94 },
        { label: 'Hội nhập', val: 88 },
        { label: 'KH-KT', val: 92 }
      ],
      timeline: [
        { step: '1945', title: 'Liên Hợp Quốc', desc: 'Thành lập nhằm duy trì hòa bình và an ninh.' },
        { step: '1967', title: 'Thành lập ASEAN', desc: '5 nước Đông Nam Á ký Tuyên bố Bangkok.' },
        { step: '1991', title: 'Kết thúc CTL', desc: 'Thế giới chuyển dần sang xu thế đa cực.' },
        { step: '1995', title: 'Việt Nam – ASEAN', desc: 'Mở rộng hợp tác khu vực và quốc tế sâu rộng.' }
      ],
      comparison: {
        leftTitle: 'Trật tự Hai cực (1945–1991)',
        leftPoints: ['Chi phối bởi hai siêu cường đối đầu', 'Cạnh tranh gay gắt về quân sự, ý thức hệ', 'Nguy cơ xung đột cục bộ kéo dài'],
        rightTitle: 'Xu thế Đa cực (Sau 1991)',
        rightPoints: ['Nhiều trung tâm kinh tế – chính trị cùng ảnh hưởng', 'Ưu tiên hợp tác phát triển và thương mại', 'Đề cao đối thoại và luật pháp quốc tế']
      },
      quiz: {
        question: 'Việt Nam chính thức trở thành thành viên thứ 7 của ASEAN vào năm nào?',
        options: ['1986', '1991', '1995', '2007'],
        answer: 2
      }
    },

    // ================= ĐỊA LÝ (2) =================
    {
      id: 'dia-khi-hau',
      title: 'Bản đồ Khí hậu & Địa mạo',
      subject: 'dia',
      subjectLabel: 'Địa lý',
      slideCount: 44,
      purposes: ['bai-giang', 'du-an'],
      purposeLabels: ['Thuyết trình bài học', 'Dự án nhóm'],
      popularity: 92,
      isNew: true,
      styleTag: 'Atlat địa lý hiện đại',
      teacherScore: '9.7/10',
      description: 'Thiết kế lấy cảm hứng từ đường đồng mức địa hình và Atlat khí hậu, có biểu đồ nhiệt độ – lượng mưa trực quan và bố cục thoáng đãng.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f2f6f7',
        surface: '#ffffff',
        surfaceAlt: '#dde8ec',
        ink: '#15252e',
        muted: '#4e6572',
        accent: '#1f6382',
        accent2: '#4d8a5b',
        soft: 'rgba(31, 99, 130, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'contour',
      sampleFormula: 'Biên độ nhiệt năm = T_max(tháng nóng) − T_min(tháng lạnh)',
      sampleQuote: 'Địa lý giúp ta đọc hiểu từng nhịp thở của Trái Đất và mối gắn kết với con người.',
      quoteAuthor: 'Alexander von Humboldt',
      chapters: [
        'Kiến tạo Mảng & Địa hình Bề mặt',
        'Hoàn lưu Khí quyển & Gió mùa Châu Á',
        'Thủy quyển, Dòng biển & Mạng lưới Sông',
        'Thiên nhiên Nhiệt đới Ẩm Gió mùa Việt Nam',
        'Ứng phó Biến đổi Khí hậu & Tổng kết'
      ],
      topics: [
        'Thuyết kiến tạo mảng và vành đai lửa Thái Bình Dương',
        'Tác động của nội lực và ngoại lực lên địa hình',
        'Hệ thống các đới khí hậu theo vĩ độ địa lý',
        'Cơ chế hoạt động của gió mùa mùa đông và mùa hạ',
        'Dòng biển nóng – lạnh và ảnh hưởng đến lượng mưa',
        'Đặc điểm địa hình đồi núi chiếm 3/4 diện tích Việt Nam',
        'Sự phân hóa thiên nhiên theo Bắc – Nam và độ cao',
        'Hệ thống sông Hồng và sông Cửu Long màu mỡ',
        'Kỹ năng đọc biểu đồ nhiệt độ – lượng mưa trong Atlat',
        'Giải pháp thích ứng nước biển dâng tại ĐBSCL'
      ],
      metrics: [
        { label: 'Bắc Bộ', val: 82 },
        { label: 'Trung Bộ', val: 94 },
        { label: 'Tây Nguyên', val: 86 },
        { label: 'Nam Bộ', val: 88 }
      ],
      timeline: [
        { step: '01', title: 'Đọc tên & chú giải', desc: 'Xác định đơn vị đo và tỷ lệ bản đồ Atlat.' },
        { step: '02', title: 'Xác định vùng địa lý', desc: 'Đối chiếu vĩ độ, kinh độ và ranh giới tự nhiên.' },
        { step: '03', title: 'Phân tích số liệu', desc: 'So sánh giá trị cực đại, cực tiểu và xu hướng.' },
        { step: '04', title: 'Giải thích nguyên nhân', desc: 'Liên hệ gió mùa, địa hình và vị trí tiếp giáp biển.' }
      ],
      comparison: {
        leftTitle: 'Gió mùa Mùa đông (Đông Bắc)',
        leftPoints: ['Hoạt động từ tháng 11 đến tháng 4', 'Tạo mùa đông lạnh khô ở miền Bắc', 'Suy yếu dần khi vượt qua dãy Bạch Mã'],
        rightTitle: 'Gió mùa Mùa hạ (Tây Nam)',
        rightPoints: ['Hoạt động từ tháng 5 đến tháng 10', 'Mang lượng ẩm lớn gây mưa trên cả nước', 'Gây hiệu ứng phơn khô nóng ở Bắc Trung Bộ']
      },
      quiz: {
        question: 'Dãy núi nào đóng vai trò ranh giới tự nhiên quan trọng tạo nên sự khác biệt khí hậu giữa miền Bắc và miền Nam Việt Nam?',
        options: ['Hoàng Liên Sơn', 'Bạch Mã', 'Trường Sơn Bắc', 'Đông Triều'],
        answer: 1
      }
    },
    {
      id: 'dia-kinh-te',
      title: 'Địa lý Kinh tế & Đô thị hóa',
      subject: 'dia',
      subjectLabel: 'Địa lý',
      slideCount: 42,
      purposes: ['bao-ve', 'du-an'],
      purposeLabels: ['Bảo vệ đề tài', 'Dự án nhóm'],
      popularity: 85,
      isNew: false,
      styleTag: 'Quy hoạch đô thị',
      teacherScore: '9.5/10',
      description: 'Tông xám ấm đô thị kết hợp xanh xô thơm và vàng đất, làm nổi bật cơ cấu GDP, chuỗi cung ứng toàn cầu và phát triển bền vững.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f4f4f1',
        surface: '#ffffff',
        surfaceAlt: '#e4e5df',
        ink: '#1d221f',
        muted: '#5c635e',
        accent: '#3b6b5c',
        accent2: '#c28135',
        soft: 'rgba(59, 107, 92, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'urban',
      sampleFormula: 'Mật độ dân số = Tổng dân số / Diện tích (người/km²)',
      sampleQuote: 'Thành phố bền vững là nơi kinh tế tăng trưởng hài hòa cùng chất lượng sống của cư dân.',
      quoteAuthor: 'UN-Habitat',
      chapters: [
        'Dân số, Lao động & Đô thị hóa',
        'Chuyển dịch Cơ cấu Kinh tế',
        'Nông nghiệp Công nghệ cao & Công nghiệp Xanh',
        'Thương mại, Logistics & Du lịch Bền vững',
        'Chiến lược Phát triển Vùng & Tổng kết'
      ],
      topics: [
        'Cơ cấu dân số vàng và thách thức già hóa dân số',
        'Xu hướng đô thị hóa thông minh tại các siêu đô thị',
        'Chuyển dịch tỷ trọng Nông nghiệp – Công nghiệp – Dịch vụ',
        'Chuỗi giá trị nông sản xuất khẩu chủ lực Việt Nam',
        'Các trung tâm công nghiệp công nghệ cao và bán dẫn',
        'Hành lang vận tải biển và cảng nước sâu chiến lược',
        'Kinh tế số và thương mại điện tử xuyên biên giới',
        'Phát triển du lịch sinh thái gắn với bảo tồn văn hóa',
        'Liên kết 6 vùng kinh tế – xã hội trọng điểm',
        'Mục tiêu phát triển bền vững SDGs đến năm 2030'
      ],
      metrics: [
        { label: 'Dịch vụ', val: 44 },
        { label: 'Công nghiệp', val: 38 },
        { label: 'Nông nghiệp', val: 12 },
        { label: 'Thuế SP', val: 6 }
      ],
      timeline: [
        { step: '01', title: 'Đánh giá tiềm năng', desc: 'Phân tích tài nguyên, hạ tầng và nguồn nhân lực.' },
        { step: '02', title: 'Thu hút đầu tư xanh', desc: 'Ưu tiên công nghệ sạch, giá trị gia tăng cao.' },
        { step: '03', title: 'Kết nối hạ tầng', desc: 'Đồng bộ đường cao tốc, cảng biển và logistics.' },
        { step: '04', title: 'Phát triển bền vững', desc: 'Cân bằng tăng trưởng kinh tế và môi trường.' }
      ],
      comparison: {
        leftTitle: 'Kinh tế Tuyến tính Truyền thống',
        leftPoints: ['Khai thác → Sản xuất → Tiêu dùng → Thải bỏ', 'Tiêu tốn tài nguyên không tái tạo', 'Áp lực lớn lên xử lý rác thải đô thị'],
        rightTitle: 'Kinh tế Tuần hoàn Bền vững',
        rightPoints: ['Thiết kế để tái sử dụng và tái chế liên tục', 'Giảm phát thải carbon và tiết kiệm năng lượng', 'Tạo việc làm xanh và giá trị dài hạn']
      },
      quiz: {
        question: 'Xu hướng chuyển dịch cơ cấu kinh tế tích cực của một quốc gia đang công nghiệp hóa là gì?',
        options: ['Tăng mạnh tỷ trọng nông nghiệp thuần túy', 'Giảm tỷ trọng nông nghiệp, tăng công nghiệp & dịch vụ', 'Giữ nguyên cơ cấu cũ', 'Chỉ tập trung khai thác khoáng sản thô'],
        answer: 1
      }
    },

    // ================= CÔNG NGHỆ (2) =================
    {
      id: 'cn-ai-cs',
      title: 'Trí tuệ Nhân tạo & Khoa học Máy tính',
      subject: 'congnghe',
      subjectLabel: 'Công nghệ',
      slideCount: 46,
      purposes: ['bao-ve', 'du-an'],
      purposeLabels: ['Bảo vệ đề tài', 'Dự án nhóm'],
      popularity: 99,
      isNew: true,
      styleTag: 'Thụy Sĩ hiện đại',
      teacherScore: '9.9/10',
      description: 'Phong cách Swiss Editorial tối giản cực kỳ sắc nét: nền giấy trắng mực carbon và xanh cobalt chuẩn mực cho đồ án Tin học, AI và Thuật toán.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f5f6f8',
        surface: '#ffffff',
        surfaceAlt: '#e5e8ee',
        ink: '#11161f',
        muted: '#4d586b',
        accent: '#1d4ed8',
        accent2: '#0f766e',
        soft: 'rgba(29, 78, 216, 0.09)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'neural',
      sampleFormula: 'Attention(Q, K, V) = softmax(Q·Kᵀ / √dₖ) · V',
      sampleQuote: 'Công nghệ tuyệt vời nhất là công nghệ mở rộng trí tưởng tượng của con người.',
      quoteAuthor: 'Alan Kay',
      chapters: [
        'Tư duy Thuật toán & Cấu trúc Dữ liệu',
        'Học máy (Machine Learning) Cơ bản',
        'Mạng Nơ-ron & AI Tạo sinh (GenAI)',
        'Kiến trúc Web, Dữ liệu & Bảo mật',
        'Demo Sản phẩm, Đạo đức AI & Q&A'
      ],
      topics: [
        'Độ phức tạp thuật toán Big-O và tối ưu thời gian chạy',
        'Cây nhị phân, đồ thị và thuật toán tìm đường ngắn nhất',
        'Học có giám sát, không giám sát và học tăng cường',
        'Quy trình thu thập, tiền xử lý và chia tập dữ liệu',
        'Cách mạng Nơ-ron sâu nhận diện hình ảnh và giọng nói',
        'Kiến trúc Transformer đằng sau các mô hình ngôn ngữ lớn',
        'Kỹ thuật viết Prompt hiệu quả cho học tập thông minh',
        'An toàn thông tin, mã hóa và phòng chống lừa đảo mạng',
        'Xây dựng ứng dụng web hỗ trợ học sinh tự học',
        'Sử dụng AI có trách nhiệm, trung thực trong học đường'
      ],
      metrics: [
        { label: 'Độ chính xác', val: 94 },
        { label: 'Tốc độ', val: 91 },
        { label: 'Tối ưu RAM', val: 85 },
        { label: 'Bảo mật', val: 96 }
      ],
      timeline: [
        { step: '01', title: 'Định nghĩa bài toán', desc: 'Xác định đầu vào, đầu ra và tiêu chí đánh giá.' },
        { step: '02', title: 'Chuẩn bị dữ liệu', desc: 'Làm sạch, gán nhãn và cân bằng mẫu huấn luyện.' },
        { step: '03', title: 'Huấn luyện & tinh chỉnh', desc: 'Đo lường độ chính xác trên tập kiểm thử độc lập.' },
        { step: '04', title: 'Triển khai ứng dụng', desc: 'Đóng gói giao diện thân thiện cho người dùng cuối.' }
      ],
      comparison: {
        leftTitle: 'Lập trình Quy tắc Cổ điển',
        leftPoints: ['Con người viết rõ từng điều kiện if–else', 'Minh bạch 100%, dễ kiểm chứng logic', 'Khó xử lý ảnh, ngôn ngữ tự nhiên phức tạp'],
        rightTitle: 'Học máy & AI Hiện đại',
        rightPoints: ['Tự học quy luật từ lượng lớn dữ liệu mẫu', 'Xuất sắc với văn bản, hình ảnh, dự đoán', 'Cần kiểm định thiên lệch và chất lượng dữ liệu']
      },
      quiz: {
        question: 'Vì sao trong Machine Learning ta luôn phải tách riêng tập kiểm thử (Test set) khỏi tập huấn luyện?',
        options: ['Để giảm dung lượng ổ cứng', 'Để đánh giá khách quan khả năng tổng quát hóa', 'Để code chạy nhanh hơn', 'Vì mô hình không đọc được hết dữ liệu'],
        answer: 1
      }
    },
    {
      id: 'cn-robotics-iot',
      title: 'Robotics, Mạch số & IoT',
      subject: 'congnghe',
      subjectLabel: 'Công nghệ',
      slideCount: 42,
      purposes: ['thi-nghiem', 'du-an'],
      purposeLabels: ['Báo cáo thí nghiệm', 'Dự án nhóm'],
      popularity: 90,
      isNew: false,
      styleTag: 'Bản vẽ kỹ thuật số',
      teacherScore: '9.6/10',
      description: 'Nền than chì kỹ thuật với điểm nhấn xanh bạc hà tín hiệu, hoàn hảo cho dự án STEM, Arduino, cảm biến IoT và mô hình Robot.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#11171a',
        surface: '#192226',
        surfaceAlt: '#222f35',
        ink: '#edf4f2',
        muted: '#99aeb0',
        accent: '#49c5a8',
        accent2: '#e2a856',
        soft: 'rgba(73, 197, 168, 0.14)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'circuit',
      sampleFormula: 'Cảm biến  →  Vi điều khiển (MCU)  →  Cơ cấu chấp hành',
      sampleQuote: 'Kỹ thuật là chiếc cầu biến ý tưởng khoa học thành sản phẩm phục vụ đời sống.',
      quoteAuthor: 'Theodore von Kármán',
      chapters: [
        'Tổng quan Hệ thống Nhúng & IoT',
        'Cảm biến, Vi điều khiển & Giao tiếp',
        'Thiết kế Cơ khí & Điều khiển Robot',
        'Kết nối Đám mây & Giám sát Thời gian thực',
        'Thử nghiệm STEM & Hướng Phát triển'
      ],
      topics: [
        'Kiến trúc 4 tầng của một hệ thống IoT thông minh',
        'So sánh vi điều khiển Arduino Uno và ESP32 Wi-Fi',
        'Đọc tín hiệu Analog/Digital từ cảm biến siêu âm, DHT22',
        'Điều khiển tốc độ động cơ bằng xung PWM',
        'Thuật toán dò đường PID giúp robot di chuyển mượt',
        'Thiết kế mạch in PCB và mô hình vỏ bằng in 3D',
        'Truyền dữ liệu qua giao thức MQTT siêu nhẹ',
        'Xây dựng hệ thống tưới cây tự động trường học',
        'Tối ưu năng lượng pin cho thiết bị cảm biến ngoài trời',
        'Đánh giá hiệu năng và kế hoạch nâng cấp phiên bản 2.0'
      ],
      metrics: [
        { label: 'Độ nhạy CB', val: 93 },
        { label: 'Độ trễ thấp', val: 89 },
        { label: 'Thời lượng pin', val: 82 },
        { label: 'Độ ổn định', val: 95 }
      ],
      timeline: [
        { step: '01', title: 'Lên bản vẽ 3D', desc: 'Thiết kế khung robot và vị trí đặt cảm biến.' },
        { step: '02', title: 'Đấu nối phần cứng', desc: 'Kiểm tra nguồn áp 3.3V/5V tránh chập mạch.' },
        { step: '03', title: 'Lập trình firmware', desc: 'Viết mã đọc cảm biến và điều khiển động cơ.' },
        { step: '04', title: 'Chạy thử & hiệu chỉnh', desc: 'Tinh chỉnh tham số PID trên sa bàn thực tế.' }
      ],
      comparison: {
        leftTitle: 'Cảm biến Tương tự (Analog)',
        leftPoints: ['Trả về dải giá trị điện áp liên tục', 'Đo chính xác độ ẩm đất, cường độ sáng', 'Cần bộ chuyển đổi ADC trên vi điều khiển'],
        rightTitle: 'Cảm biến Số (Digital)',
        rightPoints: ['Trả về trạng thái 0/1 hoặc gói dữ liệu số', 'Chống nhiễu tốt trên đường truyền dài', 'Dễ giao tiếp qua I2C, SPI, UART']
      },
      quiz: {
        question: 'Kỹ thuật điều chế độ rộng xung (PWM) thường được dùng để làm gì trong chế độ điều khiển Robot?',
        options: ['Lưu trữ mật khẩu Wi-Fi', 'Điều chỉnh tốc độ động cơ và độ sáng LED', 'Tăng dung lượng bộ nhớ Flash', 'Đo trọng lượng robot'],
        answer: 1
      }
    },

    // ================= NGỮ VĂN (2) =================
    {
      id: 'van-co-dien',
      title: 'Văn học Cổ điển & Thi ca',
      subject: 'van',
      subjectLabel: 'Ngữ văn',
      slideCount: 42,
      purposes: ['phan-tich', 'bai-giang'],
      purposeLabels: ['Phân tích & Kể chuyện', 'Thuyết trình bài học'],
      popularity: 95,
      isNew: true,
      styleTag: 'Thơ ca mực trầm',
      teacherScore: '9.9/10',
      description: 'Giấy lụa cổ điển phối mực nâu trầm và đỏ mận nhẹ, có các slide trích dẫn thơ đầy chất nghệ thuật khiến tiết học Văn trở nên sâu lắng.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f7f2ea',
        surface: '#fffdf9',
        surfaceAlt: '#ebe1d3',
        ink: '#241b1d',
        muted: '#6b5a5d',
        accent: '#7c3442',
        accent2: '#8a6b3d',
        soft: 'rgba(124, 52, 66, 0.09)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'poetry',
      sampleFormula: 'Hình tượng nghệ thuật  +  Nhạc điệu  +  Chiều sâu nhân đạo',
      sampleQuote: 'Văn học là nhân học — nơi mỗi câu chữ đánh thức lòng trắc ẩn trong tâm hồn.',
      quoteAuthor: 'Maxim Gorky',
      chapters: [
        'Bối cảnh Thời đại & Chân dung Tác giả',
        'Cấu tứ, Hình ảnh & Nhạc điệu Thi ca',
        'Phân tích Nhân vật & Diễn biến Tâm lý',
        'Giá trị Hiện thực & Tư tưởng Nhân đạo',
        'Liên hệ Mở rộng & Cảm nhận Cá nhân'
      ],
      topics: [
        'Cuộc đời, sự nghiệp và phong cách sáng tác tiêu biểu',
        'Hoàn cảnh ra đời tác phẩm gắn với biến động lịch sử',
        'Nghệ thuật tả cảnh ngụ tình trong Truyện Kiều',
        'Âm hưởng bi tráng và cái tôi trữ tình Thơ Mới',
        'Các biện pháp tu từ ẩn dụ, hoán dụ, tương phản',
        'Nghệ thuật xây dựng tình huống truyện độc đáo',
        'Diễn biến nội tâm nhân vật qua chi tiết đắt giá',
        'Tiếng nói bênh vực quyền sống và khát vọng hạnh phúc',
        'Đối thoại giữa tác phẩm cổ điển và bạn đọc trẻ hôm nay',
        'Sơ đồ tư duy ôn tập dẫn chứng cho bài nghị luận'
      ],
      metrics: [
        { label: 'Nghệ thuật', val: 95 },
        { label: 'Nhân đạo', val: 98 },
        { label: 'Hiện thực', val: 90 },
        { label: 'Liên hệ', val: 87 }
      ],
      timeline: [
        { step: '01', title: 'Đọc sâu văn bản', desc: 'Cảm nhận giọng điệu, nhịp thơ và từ khóa đắt.' },
        { step: '02', title: 'Đặt vào bối cảnh', desc: 'Kết nối hoàn cảnh lịch sử và tư tưởng tác giả.' },
        { step: '03', title: 'Giải mã nghệ thuật', desc: 'Phân tích hình ảnh, bút pháp và cấu trúc.' },
        { step: '04', title: 'Rút ra thông điệp', desc: 'Liên hệ giá trị nhân văn với đời sống hiện tại.' }
      ],
      comparison: {
        leftTitle: 'Văn học Trung đại',
        leftPoints: ['Đề cao tính quy phạm, ước lệ tượng trưng', 'Ngôn ngữ trang trọng, giàu điển tích điển cố', 'Cảm hứng yêu nước và nhân đạo sâu sắc'],
        rightTitle: 'Văn học Hiện đại',
        rightPoints: ['Giải phóng cái tôi cá nhân giàu cảm xúc', 'Ngôn ngữ gần gũi đời sống, đa dạng thể loại', 'Khám phá chiều sâu tâm lý và thân phận con người']
      },
      quiz: {
        question: 'Bút pháp "tả cảnh ngụ tình" trong văn học trung đại có đặc trưng nổi bật nào?',
        options: ['Chỉ miêu tả thiên nhiên khách quan', 'Mượn khung cảnh thiên nhiên để gửi gắm tâm trạng nhân vật', 'Kể chuyện theo trình tự thời gian', 'Sử dụng nhiều số liệu thống kê'],
        answer: 1
      }
    },
    {
      id: 'van-nghi-luan',
      title: 'Phân tích Tác phẩm & Nghị luận Xã hội',
      subject: 'van',
      subjectLabel: 'Ngữ văn',
      slideCount: 40,
      purposes: ['bao-ve', 'on-tap'],
      purposeLabels: ['Bảo vệ đề tài', 'Ôn tập & Kiểm tra'],
      popularity: 91,
      isNew: false,
      styleTag: 'Tạp chí tư tưởng',
      teacherScore: '9.7/10',
      description: 'Bố cục tạp chí văn chương hiện đại giúp triển khai luận điểm, luận cứ và dẫn chứng sắc bén cho bài thuyết trình nghị luận xã hội.',
      canvaUrl: 'https://www.canva.com/create/presentations/',
      palette: {
        bg: '#f5f4ef',
        surface: '#ffffff',
        surfaceAlt: '#e5e3da',
        ink: '#19211d',
        muted: '#59635d',
        accent: '#274d3d',
        accent2: '#b36b32',
        soft: 'rgba(39, 77, 61, 0.1)'
      },
      fonts: { display: 'Be Vietnam Pro', body: 'Manrope' },
      motif: 'editorial',
      sampleFormula: 'Luận điểm rõ ràng  →  Lý lẽ sắc bén  →  Dẫn chứng thuyết phục',
      sampleQuote: 'Viết mạch lạc là biểu hiện rõ ràng nhất của một tư duy sâu sắc và tự chủ.',
      quoteAuthor: 'William Zinsser',
      chapters: [
        'Xác định Vấn đề & Câu hỏi Trọng tâm',
        'Hệ thống Luận điểm & Lập luận Đa chiều',
        'Dẫn chứng Thực tiễn & Phản biện Sắc sảo',
        'Kỹ năng Trình bày & Hùng biện Trước lớp',
        'Bài học Nhận thức & Hành động'
      ],
      topics: [
        'Cách mở bài ấn tượng bằng câu chuyện hoặc câu hỏi mở',
        'Xây dựng luận điểm chính bao quát vấn đề nghị luận',
        'Phân tích nguyên nhân – hệ quả theo chiều sâu',
        'Lựa chọn dẫn chứng mới mẻ, xác thực và giàu sức nặng',
        'Nghệ thuật bàn luận mở rộng và phản biện lịch thiệp',
        'Bản lĩnh người trẻ trước áp lực mạng xã hội',
        'Giá trị của lòng trung thực và tinh thần tự học',
        'Đọc sách sâu trong thời đại thông tin ngắn',
        'Cấu trúc bài nói thuyết phục trong 5 phút',
        'Checklist tự chấm điểm bài nghị luận đạt điểm cao'
      ],
      metrics: [
        { label: 'Luận điểm', val: 94 },
        { label: 'Lý lẽ', val: 90 },
        { label: 'Dẫn chứng', val: 92 },
        { label: 'Phản biện', val: 86 }
      ],
      timeline: [
        { step: '01', title: 'Giải thích khái niệm', desc: 'Làm rõ từ khóa cốt lõi trong đề bài.' },
        { step: '02', title: 'Bàn luận & chứng minh', desc: 'Triển khai 2–3 luận điểm kèm dẫn chứng sống.' },
        { step: '03', title: 'Mở rộng & phản biện', desc: 'Nhìn nhận vấn đề từ góc độ đa chiều khách quan.' },
        { step: '04', title: 'Liên hệ bản thân', desc: 'Đề xuất hành động cụ thể, chân thành của học sinh.' }
      ],
      comparison: {
        leftTitle: 'Lập luận Thiếu chiều sâu',
        leftPoints: ['Nêu ý kiến chung chung, sáo rỗng', 'Dẫn chứng cũ kỹ, lặp lại thiếu phân tích', 'Thiếu góc nhìn phản biện cân bằng'],
        rightTitle: 'Lập luận Thuyết phục Cao',
        rightPoints: ['Luận điểm sắc nét, có trình tự logic', 'Dẫn chứng chọn lọc, gắn sát đời sống hiện đại', 'Biết đối thoại với quan điểm trái chiều']
      },
      quiz: {
        question: 'Yếu tố nào giúp phần phản biện trong bài nghị luận xã hội trở nên thuyết phục và khách quan?',
        options: ['Phủ nhận hoàn toàn mọi ý kiến khác', 'Xem xét mặt trái hoặc giới hạn của vấn đề một cách thấu đáo', 'Lặp lại mở bài bằng từ ngữ khác', 'Bỏ qua dẫn chứng thực tế'],
        answer: 1
      }
    }
  ];

  /**
   * Interconnected Morph states for each layout type.
   * Shared persistent elements (orb1, orb2, frame, ribbon) smoothly interpolate
   * their transform, scale, rotation, and radius across consecutive slides.
   */
  const MORPH_PRESETS = {
    cover: {
      orb1: { x: 76, y: 18, size: 38, rot: 0, radius: '50%', opacity: 0.22 },
      orb2: { x: 14, y: 78, size: 22, rot: 45, radius: '28%', opacity: 0.14 },
      frame: { x: 64, y: 12, w: 30, h: 76, rot: 0, radius: '18px', opacity: 0.28 },
      ribbon: { x: 6, y: 84, w: 46, h: 0.8, rot: 0, opacity: 0.65 }
    },
    agenda: {
      orb1: { x: 82, y: 72, size: 30, rot: 35, radius: '42%', opacity: 0.18 },
      orb2: { x: 8, y: 18, size: 18, rot: 12, radius: '50%', opacity: 0.12 },
      frame: { x: 5, y: 14, w: 34, h: 72, rot: 0, radius: '20px', opacity: 0.22 },
      ribbon: { x: 44, y: 22, w: 50, h: 0.8, rot: 0, opacity: 0.45 }
    },
    objectives: {
      orb1: { x: 18, y: 22, size: 28, rot: 70, radius: '36%', opacity: 0.16 },
      orb2: { x: 84, y: 20, size: 24, rot: -20, radius: '50%', opacity: 0.14 },
      frame: { x: 6, y: 34, w: 88, h: 52, rot: 0, radius: '16px', opacity: 0.16 },
      ribbon: { x: 6, y: 26, w: 28, h: 0.9, rot: 0, opacity: 0.7 }
    },
    'section-break': {
      orb1: { x: 52, y: 46, size: 54, rot: 120, radius: '48%', opacity: 0.26 },
      orb2: { x: 80, y: 16, size: 20, rot: 60, radius: '24%', opacity: 0.16 },
      frame: { x: 8, y: 14, w: 84, h: 72, rot: 0, radius: '24px', opacity: 0.34 },
      ribbon: { x: 12, y: 76, w: 76, h: 1.0, rot: 0, opacity: 0.6 }
    },
    'split-visual': {
      orb1: { x: 74, y: 50, size: 36, rot: 155, radius: '44%', opacity: 0.2 },
      orb2: { x: 24, y: 84, size: 16, rot: 90, radius: '50%', opacity: 0.12 },
      frame: { x: 56, y: 16, w: 38, h: 68, rot: 0, radius: '20px', opacity: 0.28 },
      ribbon: { x: 6, y: 24, w: 42, h: 0.8, rot: 0, opacity: 0.55 }
    },
    'formula-spotlight': {
      orb1: { x: 50, y: 50, size: 48, rot: 195, radius: '50%', opacity: 0.18 },
      orb2: { x: 14, y: 24, size: 20, rot: 130, radius: '32%', opacity: 0.14 },
      frame: { x: 12, y: 26, w: 76, h: 48, rot: 0, radius: '22px', opacity: 0.32 },
      ribbon: { x: 28, y: 82, w: 44, h: 0.9, rot: 0, opacity: 0.65 }
    },
    'data-chart': {
      orb1: { x: 84, y: 24, size: 28, rot: 225, radius: '38%', opacity: 0.17 },
      orb2: { x: 12, y: 72, size: 24, rot: 160, radius: '46%', opacity: 0.12 },
      frame: { x: 6, y: 28, w: 54, h: 58, rot: 0, radius: '18px', opacity: 0.22 },
      ribbon: { x: 64, y: 28, w: 30, h: 0.8, rot: 0, opacity: 0.6 }
    },
    timeline: {
      orb1: { x: 22, y: 78, size: 32, rot: 260, radius: '50%', opacity: 0.16 },
      orb2: { x: 82, y: 22, size: 20, rot: 200, radius: '30%', opacity: 0.14 },
      frame: { x: 6, y: 36, w: 88, h: 46, rot: 0, radius: '18px', opacity: 0.18 },
      ribbon: { x: 8, y: 50, w: 84, h: 0.9, rot: 0, opacity: 0.5 }
    },
    comparison: {
      orb1: { x: 50, y: 18, size: 28, rot: 295, radius: '42%', opacity: 0.16 },
      orb2: { x: 50, y: 84, size: 24, rot: 240, radius: '42%', opacity: 0.14 },
      frame: { x: 50, y: 26, w: 44, h: 60, rot: 0, radius: '18px', opacity: 0.24 },
      ribbon: { x: 6, y: 22, w: 88, h: 0.7, rot: 0, opacity: 0.45 }
    },
    'bento-grid': {
      orb1: { x: 78, y: 76, size: 34, rot: 330, radius: '34%', opacity: 0.18 },
      orb2: { x: 16, y: 22, size: 18, rot: 280, radius: '50%', opacity: 0.13 },
      frame: { x: 6, y: 26, w: 42, h: 60, rot: 0, radius: '18px', opacity: 0.22 },
      ribbon: { x: 52, y: 26, w: 42, h: 0.8, rot: 0, opacity: 0.55 }
    },
    'process-flow': {
      orb1: { x: 16, y: 50, size: 30, rot: 20, radius: '48%', opacity: 0.17 },
      orb2: { x: 84, y: 50, size: 30, rot: -20, radius: '48%', opacity: 0.17 },
      frame: { x: 6, y: 30, w: 88, h: 52, rot: 0, radius: '20px', opacity: 0.2 },
      ribbon: { x: 10, y: 56, w: 80, h: 0.9, rot: 0, opacity: 0.55 }
    },
    'quote-focus': {
      orb1: { x: 30, y: 36, size: 46, rot: 55, radius: '50%', opacity: 0.22 },
      orb2: { x: 74, y: 70, size: 26, rot: 15, radius: '36%', opacity: 0.14 },
      frame: { x: 14, y: 18, w: 72, h: 64, rot: 0, radius: '24px', opacity: 0.3 },
      ribbon: { x: 40, y: 74, w: 20, h: 1.0, rot: 0, opacity: 0.75 }
    },
    'quiz-check': {
      orb1: { x: 82, y: 26, size: 32, rot: 95, radius: '30%', opacity: 0.18 },
      orb2: { x: 12, y: 78, size: 22, rot: 45, radius: '50%', opacity: 0.14 },
      frame: { x: 6, y: 24, w: 88, h: 62, rot: 0, radius: '20px', opacity: 0.24 },
      ribbon: { x: 6, y: 20, w: 32, h: 0.9, rot: 0, opacity: 0.7 }
    },
    'summary-closing': {
      orb1: { x: 50, y: 48, size: 52, rot: 145, radius: '50%', opacity: 0.24 },
      orb2: { x: 18, y: 22, size: 24, rot: 80, radius: '38%', opacity: 0.14 },
      frame: { x: 10, y: 14, w: 80, h: 72, rot: 0, radius: '24px', opacity: 0.32 },
      ribbon: { x: 32, y: 78, w: 36, h: 1.0, rot: 0, opacity: 0.75 }
    }
  };

  /**
   * Builds the complete 40–46 slide deck for a template, with optional AI personalization.
   */
  function buildSlidesForTemplate(template, custom) {
    const c = custom || {};
    const deckTitle = c.title || template.title;
    const studentName = c.student || 'Nhóm Học sinh Fernora';
    const className = c.className || 'Lớp 11A1 · Học kỳ I';
    const teacherName = c.teacher || 'GVHD: Thầy/Cô bộ môn';
    const targetCount = Math.max(40, Math.min(50, Number(c.slideCount) || template.slideCount));
    const chapters = template.chapters;
    const topics = template.topics;

    const slides = [];
    const pushSlide = (layout, chapterIdx, data) => {
      const idx = slides.length;
      const baseMorph = MORPH_PRESETS[layout] || MORPH_PRESETS['split-visual'];
      // Slight deterministic drift so even repeated layout families morph visibly
      const jitter = ((idx * 7) % 9) - 4;
      const morph = {
        orb1: { ...baseMorph.orb1, rot: baseMorph.orb1.rot + idx * 9, x: Math.max(8, Math.min(90, baseMorph.orb1.x + jitter * 0.6)) },
        orb2: { ...baseMorph.orb2, rot: baseMorph.orb2.rot - idx * 6 },
        frame: { ...baseMorph.frame },
        ribbon: { ...baseMorph.ribbon }
      };
      slides.push({
        number: idx + 1,
        layout,
        chapterIndex: chapterIdx,
        chapterName: chapters[chapterIdx] || chapters[0],
        morph,
        ...data
      });
    };

    // 1. Cover
    pushSlide('cover', 0, {
      kicker: `${template.subjectLabel.toUpperCase()} · ${template.styleTag.toUpperCase()}`,
      title: deckTitle,
      subtitle: c.prompt
        ? `Chủ đề trọng tâm: ${c.prompt}`
        : `Bộ bài giảng trực quan chuẩn Morph gồm ${targetCount} slide dành cho học sinh & giáo viên.`,
      meta: [studentName, className, teacherName]
    });

    // 2. Agenda
    pushSlide('agenda', 0, {
      kicker: 'LỘ TRÌNH BÀI THUYẾT TRÌNH',
      title: 'Cấu trúc 5 phần trọng tâm',
      items: chapters.map((ch, i) => ({
        num: String(i + 1).padStart(2, '0'),
        title: ch,
        desc: topics[i * 2] || 'Phân tích chuyên sâu & minh họa trực quan.'
      }))
    });

    // 3. Learning Objectives
    pushSlide('objectives', 0, {
      kicker: 'MỤC TIÊU BÀI HỌC',
      title: 'Ba giá trị cốt lõi cần nắm vững',
      cards: [
        { num: '01', title: 'Hiểu bản chất cốt lõi', body: `Nắm rõ nền tảng lý thuyết của ${deckTitle} qua sơ đồ trực quan và ví dụ gần gũi.` },
        { num: '02', title: 'Vận dụng linh hoạt', body: `Kết nối kiến thức ${template.subjectLabel.toLowerCase()} vào giải quyết bài tập và tình huống thực tiễn.` },
        { num: '03', title: 'Trình bày thuyết phục', body: 'Bố cục rõ ràng, chuyển cảnh Morph mạch lạc, tối ưu khả năng theo dõi của thầy cô.' }
      ]
    });

    // 4. Quote opener
    pushSlide('quote-focus', 0, {
      kicker: 'CẢM HỨNG KHỞI ĐẦU',
      quote: template.sampleQuote,
      author: template.quoteAuthor,
      note: `Điểm khởi đầu cho hành trình khám phá ${deckTitle}.`
    });

    // Build structured chapters (5 chapters × ~7 slides each = 35 slides)
    const chapterPatterns = [
      ['section-break', 'split-visual', 'formula-spotlight', 'bento-grid', 'data-chart', 'timeline', 'quiz-check'],
      ['section-break', 'split-visual', 'comparison', 'process-flow', 'bento-grid', 'formula-spotlight', 'split-visual'],
      ['section-break', 'data-chart', 'split-visual', 'timeline', 'comparison', 'quote-focus', 'quiz-check'],
      ['section-break', 'process-flow', 'split-visual', 'bento-grid', 'data-chart', 'formula-spotlight', 'comparison'],
      ['section-break', 'timeline', 'split-visual', 'bento-grid', 'quiz-check', 'process-flow']
    ];

    let topicCursor = 0;
    for (let ch = 0; ch < chapters.length; ch++) {
      const pattern = chapterPatterns[ch];
      for (let p = 0; p < pattern.length; p++) {
        if (slides.length >= targetCount - 3) break;
        const layout = pattern[p];
        const topic = topics[topicCursor % topics.length];
        const nextTopic = topics[(topicCursor + 1) % topics.length];
        const thirdTopic = topics[(topicCursor + 2) % topics.length];
        topicCursor++;

        if (layout === 'section-break') {
          pushSlide('section-break', ch, {
            kicker: `PHẦN 0${ch + 1}`,
            bigNum: `0${ch + 1}`,
            title: chapters[ch],
            subtitle: `Trọng tâm: ${topic}.`
          });
        } else if (layout === 'split-visual') {
          pushSlide('split-visual', ch, {
            kicker: chapters[ch],
            title: topic,
            lead: `Phân tích trực quan các yếu tố cốt lõi giúp người nghe nắm bắt nhanh cấu trúc vấn đề trong ${template.subjectLabel.toLowerCase()}.`,
            bullets: [
              `Khái niệm nền tảng và điều kiện áp dụng chuẩn xác.`,
              `Mối liên hệ trực tiếp với: ${nextTopic.toLowerCase()}.`,
              `Ví dụ minh họa gắn với bài học trên lớp và thực tiễn.`
            ],
            visualCaption: `Sơ đồ minh họa · ${template.subjectLabel}`
          });
        } else if (layout === 'formula-spotlight') {
          pushSlide('formula-spotlight', ch, {
            kicker: 'ĐỊNH LÝ & CÔNG THỨC TRỌNG TÂM',
            title: topic,
            formula: template.sampleFormula,
            annotations: [
              { tag: 'Điều kiện', text: 'Xác định đúng phạm vi và đơn vị chuẩn trước khi áp dụng.' },
              { tag: 'Ý nghĩa', text: `Mô tả mối liên hệ định lượng lõi của ${chapters[ch].toLowerCase()}.` },
              { tag: 'Lưu ý', text: 'Kiểm tra dấu, bậc và trường hợp biên khi giải bài tập.' }
            ]
          });
        } else if (layout === 'data-chart') {
          const shift = (ch * 3 + p * 2) % 9;
          pushSlide('data-chart', ch, {
            kicker: 'PHÂN TÍCH SỐ LIỆU & BIỂU ĐỒ',
            title: topic,
            bars: template.metrics.map((m, idx) => ({
              label: m.label,
              val: Math.max(22, Math.min(98, m.val + ((idx % 2 === 0 ? 1 : -1) * shift)))
            })),
            insightTitle: 'Nhận xét rút ra',
            insightBody: `Số liệu cho thấy sự phân hóa rõ rệt giữa các nhóm tiêu chí, hỗ trợ trực tiếp cho luận điểm về ${nextTopic.toLowerCase()}.`
          });
        } else if (layout === 'timeline') {
          pushSlide('timeline', ch, {
            kicker: 'TIẾN TRÌNH & CỘT MỐC',
            title: topic,
            steps: template.timeline
          });
        } else if (layout === 'comparison') {
          pushSlide('comparison', ch, {
            kicker: 'SO SÁNH ĐỐI CHIẾU',
            title: topic,
            leftTitle: template.comparison.leftTitle,
            leftPoints: template.comparison.leftPoints,
            rightTitle: template.comparison.rightTitle,
            rightPoints: template.comparison.rightPoints
          });
        } else if (layout === 'bento-grid') {
          pushSlide('bento-grid', ch, {
            kicker: 'TỔNG HỢP ĐA CHIỀU',
            title: topic,
            cards: [
              { tag: 'Trọng tâm 01', title: 'Bản chất cốt lõi', body: `Làm rõ cơ chế hoạt động của ${topic.toLowerCase()} bằng ngôn ngữ súc tích.` },
              { tag: 'Trọng tâm 02', title: 'Liên kết hệ thống', body: `Kết nối mạch lạc sang nội dung ${nextTopic.toLowerCase()}.` },
              { tag: 'Trọng tâm 03', title: 'Ứng dụng thực tế', body: `Minh họa sinh động qua tình huống liên quan đến ${thirdTopic.toLowerCase()}.` }
            ]
          });
        } else if (layout === 'process-flow') {
          pushSlide('process-flow', ch, {
            kicker: 'QUY TRÌNH THỰC HIỆN',
            title: topic,
            steps: template.timeline
          });
        } else if (layout === 'quote-focus') {
          pushSlide('quote-focus', ch, {
            kicker: 'GÓC NHÌN CHUYÊN SÂU',
            quote: template.sampleQuote,
            author: template.quoteAuthor,
            note: `Liên hệ thực tiễn với chủ đề: ${topic}.`
          });
        } else if (layout === 'quiz-check') {
          pushSlide('quiz-check', ch, {
            kicker: `CÂU HỎI TƯƠNG TÁC · PHẦN 0${ch + 1}`,
            title: template.quiz.question,
            options: template.quiz.options,
            answer: template.quiz.answer
          });
        }
      }
    }

    // Fill any remaining slides before the 3 closing slides so we always hit targetCount >= 40
    const fillerLayouts = ['split-visual', 'bento-grid', 'data-chart', 'comparison', 'process-flow'];
    let fillerIdx = 0;
    while (slides.length < targetCount - 3) {
      const layout = fillerLayouts[fillerIdx % fillerLayouts.length];
      const topic = topics[(topicCursor + fillerIdx) % topics.length];
      fillerIdx++;
      if (layout === 'split-visual') {
        pushSlide('split-visual', 4, {
          kicker: 'MỞ RỘNG CHUYÊN SÂU',
          title: `Vận dụng: ${topic}`,
          lead: 'Tình huống thực tế giúp cả lớp thảo luận và củng cố kiến thức trước khi kết thúc bài trình bày.',
          bullets: [
            'Đặt giả thuyết và xác định dữ kiện quan trọng nhất.',
            'Trình bày phương án giải quyết theo từng bước ngắn gọn.',
            'Đánh giá kết quả và rút kinh nghiệm cho bài kiểm tra.'
          ],
          visualCaption: `Tình huống thực hành · ${template.subjectLabel}`
        });
      } else if (layout === 'bento-grid') {
        pushSlide('bento-grid', 4, {
          kicker: 'GỢI Ý THẢO LUẬN NHÓM',
          title: `Phân tích nhanh: ${topic}`,
          cards: [
            { tag: 'Nhóm 1', title: 'Quan sát & đặt vấn đề', body: 'Xác định câu hỏi trung tâm và phạm vi cần giải quyết.' },
            { tag: 'Nhóm 2', title: 'Đề xuất giải pháp', body: 'Áp dụng kiến thức trọng tâm để đưa ra lập luận sắc nét.' },
            { tag: 'Nhóm 3', title: 'Phản biện & hoàn thiện', body: 'Bổ sung ví dụ thực tiễn và tối ưu cách trình bày.' }
          ]
        });
      } else if (layout === 'data-chart') {
        pushSlide('data-chart', 4, {
          kicker: 'ĐÁNH GIÁ MỨC ĐỘ HOÀN THÀNH',
          title: `Tổng hợp chỉ số: ${topic}`,
          bars: template.metrics,
          insightTitle: 'Điểm sáng nổi bật',
          insightBody: 'Các tiêu chí trọng tâm đều đạt mức rõ ràng, mạch lạc và sẵn sàng cho phần hỏi đáp.'
        });
      } else if (layout === 'comparison') {
        pushSlide('comparison', 4, {
          kicker: 'ĐỐI CHIẾU TỔNG HỢP',
          title: `Phân biệt nhanh: ${topic}`,
          leftTitle: template.comparison.leftTitle,
          leftPoints: template.comparison.leftPoints,
          rightTitle: template.comparison.rightTitle,
          rightPoints: template.comparison.rightPoints
        });
      } else {
        pushSlide('process-flow', 4, {
          kicker: 'TỪ LÝ THUYẾT ĐẾN THỰC HÀNH',
          title: `Lộ trình ôn tập: ${topic}`,
          steps: template.timeline
        });
      }
    }

    // Final 3 closing slides: Takeaways, References, Thank You & Q&A
    pushSlide('objectives', 4, {
      kicker: 'TỔNG KẾT BÀI THUYẾT TRÌNH',
      title: 'Ba điểm ghi nhớ quan trọng nhất',
      cards: [
        { num: '01', title: 'Hệ thống kiến thức', body: `Toàn bộ 5 phần của ${deckTitle} đã được xâu chuỗi theo mạch tư duy rõ ràng.` },
        { num: '02', title: 'Trọng tâm dễ nhớ', body: 'Công thức, mốc thời gian và bảng so sánh được trình bày tinh gọn để ôn tập nhanh.' },
        { num: '03', title: 'Sẵn sàng mở rộng', body: 'Có thể tiếp tục tùy biến thêm hình ảnh, biểu đồ cá nhân ngay trên Canva.' }
      ]
    });

    pushSlide('bento-grid', 4, {
      kicker: 'TÀI LIỆU THAM KHẢO & NGUỒN DỮ LIỆU',
      title: 'Nguồn học liệu chuẩn xác',
      cards: [
        { tag: 'Sách giáo khoa', title: `SGK ${template.subjectLabel} Chương trình Mới`, body: 'Hệ thống khái niệm, định lý và bài tập chuẩn chương trình phổ thông.' },
        { tag: 'Học liệu mở', title: 'Tư liệu Khoa học & Thư viện Số', body: 'Hình ảnh sơ đồ, số liệu tham khảo và bài viết nghiên cứu cập nhật.' },
        { tag: 'Công cụ thiết kế', title: 'Fernora AI & Canva Studio', body: 'Tạo cấu trúc tự động chuẩn Morph và tùy chỉnh dễ dàng trên Canva.' }
      ]
    });

    pushSlide('summary-closing', 4, {
      kicker: 'CẢM ƠN THẦY CÔ VÀ CÁC BẠN ĐÃ LẮNG NGHE',
      title: 'Trân trọng cảm ơn & Q&A',
      subtitle: `${deckTitle} · Thực hiện bởi ${studentName} (${className})`,
      note: 'Sẵn sàng trao đổi và giải đáp các câu hỏi thảo luận từ lớp.'
    });

    return slides;
  }

  global.FERNORA_DATA = {
    SUBJECTS,
    PURPOSES,
    TEMPLATES: TEMPLATES_META,
    buildSlidesForTemplate
  };
})(window);
