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
      motif: 'geometry'
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
      motif: 'data'
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
      motif: 'matrix'
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
      motif: 'molecule'
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
      motif: 'atom'
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
      motif: 'helix'
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
      motif: 'botanical'
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
      motif: 'pulse'
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
      motif: 'wave'
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
      motif: 'orbit'
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
      motif: 'circuit'
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
      motif: 'heritage'
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
      motif: 'pillar'
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
      motif: 'archive'
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
      motif: 'contour'
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
      motif: 'urban'
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
      motif: 'neural'
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
      motif: 'circuit'
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
      motif: 'poetry'
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
      motif: 'editorial'
    }
  ];

  function illustration({ file, local, author, license, licenseUrl, caption, observation, fit }) {
    const name = encodeURIComponent(file);
    const wikimedia = 'https://commons.wikimedia.org/wiki/';
    const download = wikimedia + 'Special:FilePath/' + name;
    return {
      url: download + '?width=1200',
      thumbUrl: download + '?width=480',
      localUrl: 'slide-media/' + local + '.jpg',
      localThumbUrl: 'slide-media/' + local + '-thumb.jpg',
      sourceUrl: wikimedia + 'File:' + name,
      licenseUrl,
      alt: caption,
      caption,
      credit: author + ' · ' + license + ' · Wikimedia Commons',
      observation,
      fit
    };
  }

  // Each chapter contains two explanations, an applied example, a knowledge
  // check and three specific notes. Longer editions add the last two notes.
  const DECKS = {
    "toan-giai-tich": {
      coverIndex: 0,
      introduction: "Từ một lỗ hổng trên đồ thị đến một phương trình mặt phẳng.",
      goals: [
        "Đọc giới hạn mà giữ điều kiện xác định.",
        "Dùng dấu đạo hàm và dấu hàm số đúng chỗ.",
        "Kiểm tra mô hình và miền nghiệm trước khi kết luận.",
      ],
      closing: "Một đáp số đáng tin đi kèm điều kiện dùng nó.",
      images: [
        illustration({
          file: "Epsilon-delta_limit.svg", local: "6d7725a93162", author: "Sabate", license: "Public domain", fit: "contain",
          caption: "Sơ đồ ε–δ quanh một điểm",
          observation: "Quan sát hai khoảng được đánh dấu quanh đầu vào và đầu ra."
        }),
        illustration({
          file: "Tangent_to_a_curve.svg", local: "f1e67037168c", author: "Jacj and Oleg Alexandrov", license: "Public domain", fit: "contain",
          caption: "Tiếp tuyến tại một điểm trên đường cong",
          observation: "So độ dốc của đường thẳng với hướng của đồ thị tại điểm chạm."
        }),
        illustration({
          file: "Integral_example.svg", local: "b922612937eb", author: "KSmrq", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", fit: "contain",
          caption: "Miền ứng với tích phân xác định",
          observation: "Để ý đường biên của miền tô màu và vị trí trục hoành."
        }),
        illustration({
          file: "3D_coordinates_system_and_planes.png", local: "5d48d4095717", author: "Мурад Зиналиев", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", fit: "contain",
          caption: "Hệ tọa độ Descartes ba chiều",
          observation: "Đọc các trục trước khi xác định tọa độ của một điểm."
        }),
        illustration({
          file: "GodfreyKneller-IsaacNewton-1689.jpg", local: "d3c36a496b28", author: "Godfrey Kneller", license: "Public domain", fit: "contain",
          caption: "Isaac Newton qua chân dung của Godfrey Kneller",
          observation: "Newton phát triển giải tích trong bối cảnh nghiên cứu chuyển động."
        }),
      ],
      chapters: [
        {
          name: "Giới hạn và tính liên tục",
          question: "Một hàm có thể không xác định tại điểm mà vẫn có giới hạn ở đó không?",
          concepts: [
            { layout: "formula-spotlight", title: "Bỏ nhân tử chung, giữ điều kiện", formula: "limₓ→₂ (x²−4)/(x−2) = 4", annotations: [{"tag": "Biến đổi", "text": "Với x ≠ 2, phân thức bằng x + 2."}, {"tag": "Ý nghĩa", "text": "Giới hạn mô tả giá trị gần 2."}, {"tag": "Cảnh giác", "text": "Biểu thức ban đầu không xác định tại 2."}] },
            { layout: "data-chart", title: "Hai phía cùng tới 4", bars: [{"label": "x = 1,9", "val": 3.9, "unit": ""}, {"label": "x = 1,99", "val": 3.99, "unit": ""}, {"label": "x = 2,01", "val": 4.01, "unit": ""}, {"label": "x = 2,1", "val": 4.1, "unit": ""}], insightBody: "Các giá trị là x + 2, chưa xét f(2)." }
          ],
          exercise: { title: "Kiểm tra một mối nối", context: "Cho f(x)=x+1 khi x<1 và f(x)=kx khi x≥1.", mechanism: "So sánh hai giới hạn một phía tại 1.", takeaway: "k=2 giúp hai nhánh gặp nhau tại (1; 2)." },
          check: { title: "Một hàm liên tục tại a khi nào?", options: ["limₓ→ₐ f(x) = f(a)", "Chỉ cần f(a) tồn tại", "Chỉ cần giới hạn trái", "f(a) phải bằng 0"] },
          notes: [
            { title: "Lỗ hổng có thể vá", lead: "Gán f(2)=4 cho phân thức đã xét thì hàm mở rộng liên tục." },
            { title: "Hai phía nói khác nhau", lead: "Với x/∣x∣, giới hạn trái tại 0 là −1, giới hạn phải là 1." },
            { title: "Liên tục trên đoạn", lead: "Tại đầu mút chỉ cần giới hạn một phía từ bên trong đoạn." },
          ]
        },
        {
          name: "Đạo hàm và biến thiên",
          question: "Độ dốc tức thời cho biết điều gì mà độ dốc trung bình bỏ qua?",
          concepts: [
            { layout: "formula-spotlight", title: "Đọc hệ số góc tiếp tuyến", formula: "f′(a) = limₕ→₀ [f(a+h)−f(a)]/h", annotations: [{"tag": "Tử số", "text": "Độ thay đổi của giá trị hàm."}, {"tag": "Mẫu số", "text": "Độ thay đổi của biến số."}, {"tag": "Ví dụ", "text": "f(x)=x² cho f′(a)=2a."}] },
            { layout: "process-flow", title: "Tìm khoảng tăng và giảm", steps: [{"step": "Tính", "title": "Lấy đạo hàm", "desc": "Với f(x)=x³−3x, f′(x)=3x²−3."}, {"step": "Chia", "title": "Đánh dấu −1 và 1", "desc": "Hai điểm tách trục số thành ba khoảng."}, {"step": "Đọc", "title": "Dấu +, −, +", "desc": "Hàm tăng, giảm rồi tăng."}] }
          ],
          exercise: { title: "Hình chữ nhật có chu vi 24", context: "Gọi một cạnh là x, cạnh còn lại là 12−x.", mechanism: "Xét A′(x)=12−2x trên (0;12).", takeaway: "A lớn nhất khi x=6, bằng 36 đơn vị diện tích." },
          check: { title: "Nếu f′ đổi dấu từ âm sang dương tại a?", options: ["f có cực tiểu tại a", "f có cực đại tại a", "f không liên tục tại a", "f chắc chắn có tiệm cận"] },
          notes: [
            { title: "Một nghiệm của f′ chưa đủ", lead: "f(x)=x³ có f′(0)=0, nhưng f′ dương ở cả hai phía của 0." },
            { title: "Hàm hợp qua một ví dụ", lead: "(1+x²)³ có đạo hàm 6x(1+x²)²." },
            { title: "Vị trí và vận tốc", lead: "Nếu s(t)=t² mét thì vận tốc lúc t=3 s là 6 m/s." },
          ]
        },
        {
          name: "Tích phân và diện tích",
          question: "Khi đồ thị cắt trục hoành, vì sao diện tích và tích phân có thể khác nhau?",
          concepts: [
            { layout: "formula-spotlight", title: "Định lý Newton–Leibniz", formula: "∫ₐᵇ f(x) dx = F(b) − F(a)", annotations: [{"tag": "Giả thiết", "text": "f liên tục và F′=f trên đoạn."}, {"tag": "Thay cận", "text": "Luôn trừ giá trị ở cận dưới."}, {"tag": "Ví dụ", "text": "∫₀² x dx = 2."}] },
            { layout: "comparison", title: "Tích phân có dấu và diện tích", leftTitle: "Tích phân", leftPoints: ["Vùng dưới Ox đóng góp âm.", "Hai miền có thể triệt tiêu."], rightTitle: "Diện tích", rightPoints: ["Cộng độ lớn các miền.", "Tách đoạn ở nghiệm của f."] }
          ],
          exercise: { title: "Hai tam giác, một tích phân bằng 0", context: "Xét đường y=x trên [−2;2].", mechanism: "Mỗi miền có đáy và chiều cao bằng 2.", takeaway: "Tích phân bằng 0, tổng diện tích bằng 4." },
          check: { title: "Công thức diện tích giữa f và g trên [a;b]?", options: ["∫ₐᵇ ∣f(x)−g(x)∣ dx", "∫ₐᵇ (f(x)+g(x)) dx", "f(b)−g(a)", "∫ₐᵇ f(x)g(x) dx"] },
          notes: [
            { title: "Đổi biến với cận mới", lead: "u=x² thì ∫₀¹ 2x·e^(x²) dx trở thành ∫₀¹ eᵘ du." },
            { title: "Khối quay quanh Ox", lead: "Quay y=x trên [0;1] tạo khối nón, thể tích π/3." },
            { title: "Xấp xỉ bằng hình chữ nhật", lead: "Chia đoạn nhỏ hơn và tính lại tổng để quan sát độ hội tụ." },
          ]
        },
        {
          name: "Không gian Oxyz",
          question: "Một phương trình tuyến tính ba ẩn mô tả mặt phẳng như thế nào?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc các thành phần của hệ tọa độ", callouts: [{"num": "01", "label": "Gốc O", "text": "Điểm (0;0;0)."}, {"num": "02", "label": "Ba trục", "text": "Ox, Oy, Oz đôi một vuông góc."}, {"num": "03", "label": "Điểm M", "text": "Ba tọa độ là các độ dời có dấu."}] },
            { layout: "formula-spotlight", title: "Mặt phẳng qua A và có pháp tuyến n", formula: "a(x−x₀)+b(y−y₀)+c(z−z₀)=0", annotations: [{"tag": "Điểm", "text": "A=(x₀;y₀;z₀) nằm trên mặt."}, {"tag": "Vectơ", "text": "n=(a;b;c) khác vectơ không."}, {"tag": "Tích vô hướng", "text": "n·AM=0 với M thuộc mặt."}] }
          ],
          exercise: { title: "Dựng một mặt phẳng ngang", context: "Mặt phẳng qua A(2;1;3), vuông góc với Oz.", mechanism: "Chọn n=(0;0;1).", takeaway: "Phương trình z=3, x và y tùy ý." },
          check: { title: "Pháp tuyến của 2x−y+z−3=0 là?", options: ["(2;−1;1)", "(2;1;−1)", "(1;0;0)", "(2;−1;−3)"] },
          notes: [
            { title: "Kiểm tra điểm bằng một phép thế", lead: "M(1;0;1) thỏa 2x−y+z−3=0." },
            { title: "Hai mặt phẳng song song", lead: "So sánh pháp tuyến và kiểm tra một điểm để phân biệt song song với trùng nhau." },
            { title: "Khoảng cách theo phương vuông góc", lead: "Từ (0;0;5) tới z=3 là 2 đơn vị." },
          ]
        },
        {
          name: "Mô hình hóa và kiểm chứng",
          question: "Làm sao nhận ra đáp số đúng phép tính nhưng sai câu hỏi?",
          concepts: [
            { layout: "process-flow", title: "Một lượt dựng mô hình", steps: [{"step": "Định miền", "title": "Ghi đơn vị và ràng buộc", "desc": "Cạnh hình phải dương."}, {"step": "Giải", "title": "Lập hàm hoặc phương trình", "desc": "Dùng đạo hàm khi tìm cực trị."}, {"step": "Đối chiếu", "title": "Trả lời theo đề", "desc": "Loại nghiệm ngoài miền khả thi."}] },
            { layout: "comparison", title: "Nghiệm đại số hay nghiệm của bài toán?", leftTitle: "Sau biến đổi", leftPoints: ["Có thể xuất hiện nghiệm ngoại lai.", "Chỉ là ứng viên."], rightTitle: "Sau kiểm tra", rightPoints: ["Thỏa phương trình gốc.", "Thỏa đơn vị và miền thực tế."] }
          ],
          exercise: { title: "Từ tấm bìa 12 cm đến chiếc hộp", context: "Cắt bốn hình vuông cạnh x rồi gấp thành hộp.", mechanism: "Thể tích V=x(12−2x)² với 0<x<6.", takeaway: "V′=(12−2x)(12−6x), đạt cực đại tại x=2 cm." },
          check: { title: "Khi tìm cực trị tuyệt đối trên đoạn đóng cần xét thêm đâu?", options: ["Hai đầu mút", "Chỉ nghiệm âm", "Chỉ điểm uốn", "Chỉ các tiệm cận"] },
          notes: [
            { title: "Một cách tự dò lỗi", lead: "Đặt x=0 và x=6 vào mô hình chiếc hộp để kiểm tra hai trường hợp suy biến." },
            { title: "Giới hạn khác giá trị tại điểm", lead: "Viết hai dòng riêng khi kết luận để tránh đánh tráo khái niệm." },
            { title: "Diện tích không mang dấu âm", lead: "Nếu đáp số diện tích âm, rà lại khoảng tích phân và vị trí đồ thị." },
          ]
        },
      ]
    },
    "toan-xac-suat": {
      coverIndex: 0,
      introduction: "Từ hai xúc xắc trên bàn đến cách kể chuyện bằng dữ liệu.",
      goals: [
        "Đếm theo đúng không gian mẫu.",
        "Đổi mẫu số khi có điều kiện.",
        "Đọc cả vị trí trung tâm lẫn độ phân tán.",
      ],
      closing: "Mỗi tỷ lệ cần một mẫu số và một phạm vi.",
      images: [
        illustration({
          file: "6sided_dice_(cropped).jpg", local: "ed79137598db", author: "Diacritica", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          caption: "Xúc xắc sáu mặt",
          observation: "Trong mô hình công bằng, mỗi mặt có xác suất như nhau."
        }),
        illustration({
          file: "Bayes_theorem_visual_proof.svg", local: "d6f74bbb36b8", author: "Cmglee", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Sơ đồ minh họa định lý Bayes",
          observation: "Đối chiếu phần giao với tập còn xét sau khi đặt điều kiện."
        }),
        illustration({
          file: "Normal_Distribution_PDF.svg", local: "67cc5ec6cc50", author: "Inductiveload", license: "Public domain", fit: "contain",
          caption: "Mật độ của các phân phối chuẩn",
          observation: "So vị trí đỉnh và độ rộng khi tham số thay đổi."
        }),
        illustration({
          file: "Michelsonmorley-boxplot.svg", local: "a7ca2a76a8ed", author: "User:Schutz", license: "Public domain", fit: "contain",
          caption: "Biểu đồ hộp của các mẫu số liệu",
          observation: "Đọc vị trí trung vị, bề rộng hộp và quy ước vẽ râu."
        }),
        illustration({
          file: "Example_histogram.png", local: "c03af162ac50", author: "Visnut", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", fit: "contain",
          caption: "Ví dụ histogram",
          observation: "Đọc các khoảng ở trục ngang rồi đối chiếu chiều cao từng cột."
        }),
      ],
      chapters: [
        {
          name: "Không gian mẫu",
          question: "Tại sao tổng 7 dễ xuất hiện hơn tổng 2 khi gieo hai xúc xắc?",
          concepts: [
            { layout: "data-chart", title: "Đếm cặp có thứ tự", bars: [{"label": "Tổng 2", "val": 1, "unit": "cách"}, {"label": "Tổng 4", "val": 3, "unit": "cách"}, {"label": "Tổng 7", "val": 6, "unit": "cách"}, {"label": "Tổng 12", "val": 1, "unit": "cách"}], insightBody: "Với hai xúc xắc cân đối, 36 cặp kết quả đồng khả năng." },
            { layout: "formula-spotlight", title: "Xác suất trong mô hình đồng khả năng", formula: "P(A) = n(A) / n(Ω)", annotations: [{"tag": "Ω", "text": "Tất cả kết quả có thể có."}, {"tag": "A", "text": "Các kết quả thuận lợi."}, {"tag": "Điều kiện", "text": "Công thức đếm cần các kết quả đồng khả năng."}] }
          ],
          exercise: { title: "Ít nhất một mặt 6", context: "Hai xúc xắc độc lập, cùng cân đối.", mechanism: "Đếm trường hợp cả hai đều không ra 6.", takeaway: "P=1−(5/6)²=11/36." },
          check: { title: "Hai xúc xắc phân biệt có bao nhiêu cặp kết quả?", options: ["36", "12", "21", "6"] },
          notes: [
            { title: "Chọn người và xếp thứ tự", lead: "Chọn 2 trong 4 bạn có 6 cách. Phân vai trưởng và phó có 12 cách." },
            { title: "Biến cố rỗng", lead: "Một xúc xắc sáu mặt không thể cho số 8 trong một lượt." },
            { title: "Thử tần suất", lead: "Gieo 30 lượt rồi so sánh tần suất với mô hình, có tính đến dao động ngẫu nhiên." },
          ]
        },
        {
          name: "Điều kiện và Bayes",
          question: "Khi có thông tin mới, mẫu số của xác suất thay đổi ra sao?",
          concepts: [
            { layout: "formula-spotlight", title: "Đổi góc nhìn của điều kiện", formula: "P(A∣B) = P(A∩B) / P(B)", annotations: [{"tag": "B", "text": "Tập kết quả còn xét sau khi biết B."}, {"tag": "A∩B", "text": "Các kết quả thỏa cả hai điều kiện."}, {"tag": "Giả thiết", "text": "P(B)>0."}] },
            { layout: "process-flow", title: "Đọc một cây xác suất", steps: [{"step": "Tách", "title": "Hai nguồn thư", "desc": "Tách thư thường và thư quảng cáo."}, {"step": "Nhân", "title": "Đi theo từng nhánh", "desc": "Nhân xác suất nguồn với xác suất bị gắn cờ."}, {"step": "Chuẩn hóa", "title": "Giữ thư có cờ", "desc": "Chia nhánh quan tâm cho tổng các nhánh có cờ."}] }
          ],
          exercise: { title: "Đọc dữ kiện bộ lọc thư", context: "Trong 100 thư có 20 quảng cáo. Bộ lọc gắn cờ 15 quảng cáo và 5 thư thường.", mechanism: "Chỉ xét các thư đã có cờ.", takeaway: "Xác suất thư có cờ là quảng cáo bằng 15/20=75%." },
          check: { title: "Trong mẫu 40 bạn, 10 đi xe đạp và 6 trong số đó đội mũ. Xác suất đội mũ khi biết đi xe đạp?", options: ["6/10", "6/40", "10/40", "4/10"] },
          notes: [
            { title: "Không tráo điều kiện", lead: "P(có cờ ∣ quảng cáo)=15/20 trong ví dụ, còn P(có cờ ∣ thư thường)=5/80." },
            { title: "Độc lập là một điều kiện cụ thể", lead: "Khi P(A∣B)=P(A) với P(B)>0, thông tin B không đổi xác suất A." },
            { title: "Tái lập bảng đếm", lead: "Sửa số thư thường có cờ thành 15, xác suất quảng cáo trong nhóm có cờ giảm còn 50%." },
          ]
        },
        {
          name: "Biến ngẫu nhiên và phân phối",
          question: "Một giá trị trung bình có thể không xuất hiện trong bất kỳ phép thử nào không?",
          concepts: [
            { layout: "stat-showcase", title: "Một lần gieo xúc xắc", heroStat: {"value": "3,5", "unit": "điểm", "label": "Kỳ vọng mỗi lượt", "context": "Trung bình lý thuyết của sáu giá trị đồng khả năng."}, cards: [{"title": "Kết quả lẻ", "body": "Không mặt nào ghi 3,5."}, {"title": "Dài hạn", "body": "Trung bình nhiều lượt có xu hướng tiến gần 3,5."}] },
            { layout: "comparison", title: "Mô hình rời rạc và liên tục", leftTitle: "Rời rạc", leftPoints: ["Số lượt lỗi nhận giá trị nguyên.", "Gán xác suất cho từng giá trị."], rightTitle: "Liên tục", rightPoints: ["Chiều dài mô hình hóa trên một khoảng.", "Đọc xác suất bằng diện tích dưới mật độ."] }
          ],
          exercise: { title: "Hai dãy cùng trung bình", context: "Dãy A: 4, 5, 6. Dãy B: 1, 5, 9.", mechanism: "Đối chiếu khoảng cách tới 5.", takeaway: "B phân tán hơn dù trung bình hai dãy đều bằng 5." },
          check: { title: "Trong phân phối chuẩn đối xứng, trung vị nằm ở đâu?", options: ["Tại trung bình", "Tại giá trị nhỏ nhất", "Cách trung bình đúng 1 đơn vị", "Luôn tại 0"] },
          notes: [
            { title: "Dấu của phương sai", lead: "Phương sai dùng độ lệch bình phương nên luôn không âm." },
            { title: "Đổi đơn vị", lead: "Nhân tất cả điểm với 2 làm độ lệch chuẩn gấp 2, phương sai gấp 4." },
            { title: "Chuẩn hóa z", lead: "z=−1 nghĩa là giá trị nằm dưới trung bình một độ lệch chuẩn." },
          ]
        },
        {
          name: "Mẫu và ngoại lệ",
          question: "Một giá trị rất lớn có thể làm đổi câu chuyện của cả bảng số liệu thế nào?",
          concepts: [
            { layout: "data-chart", title: "Bốn thời gian chờ giả lập", bars: [{"label": "Bạn A", "val": 3, "unit": "phút"}, {"label": "Bạn B", "val": 4, "unit": "phút"}, {"label": "Bạn C", "val": 5, "unit": "phút"}, {"label": "Bạn D", "val": 28, "unit": "phút"}], insightBody: "Trung bình là 10 phút nhưng trung vị chỉ 4,5 phút." },
            { layout: "annotated-diagram", title: "Hộp tứ phân vị cho biết gì?", callouts: [{"num": "01", "label": "Hộp", "text": "Từ Q₁ đến Q₃, chứa nửa giữa theo thứ hạng."}, {"num": "02", "label": "Vạch giữa", "text": "Đánh dấu trung vị."}, {"num": "03", "label": "Râu", "text": "Cách vẽ râu tùy quy ước; đọc chú giải trước."}] }
          ],
          exercise: { title: "Có nên bỏ 28 phút?", context: "Một thời gian chờ cao bất thường trong nhóm bốn bạn.", mechanism: "Đối chiếu phiếu gốc và hỏi hoàn cảnh đo.", takeaway: "Giữ nếu số đo đúng, giải thích ảnh hưởng của nó." },
          check: { title: "Chỉ số nào ít nhạy với ngoại lệ hơn trung bình?", options: ["Trung vị", "Tổng", "Khoảng biến thiên", "Giá trị lớn nhất"] },
          notes: [
            { title: "Lệch mẫu từ cửa lớp", lead: "Khảo sát đúng giờ ra chơi có thể bỏ sót học sinh ở lại trong lớp." },
            { title: "Khoảng tứ phân vị", lead: "IQR=Q₃−Q₁ đo độ rộng của nửa giữa theo thứ hạng." },
            { title: "Biểu đồ cột hay histogram?", lead: "Histogram nhóm số đo theo khoảng, biểu đồ cột có thể so nhóm tên." },
          ]
        },
        {
          name: "Từ dữ liệu đến lập luận",
          question: "Một biểu đồ đẹp cần gì để người đọc đưa ra kết luận đúng phạm vi?",
          concepts: [
            { layout: "process-flow", title: "Đi từ phiếu khảo sát đến biểu đồ", steps: [{"step": "Hỏi", "title": "Chọn biến cần đo", "desc": "Ví dụ số phút đi học."}, {"step": "Sạch", "title": "Rà ô trống và đơn vị", "desc": "Giữ quy tắc xử lý nhất quán."}, {"step": "Trình bày", "title": "Nêu cỡ mẫu", "desc": "Ghi khoảng thời gian và đối tượng khảo sát."}] },
            { layout: "comparison", title: "Tương quan và nhân quả", leftTitle: "Có tương quan", leftPoints: ["Hai biến cùng thay đổi theo mẫu.", "Có thể do biến thứ ba."], rightTitle: "Có quan hệ nhân quả", rightPoints: ["Cần thiết kế hoặc lập luận nhận diện phù hợp.", "Cần kiểm tra giải thích khác."] }
          ],
          exercise: { title: "Viết chú thích cho số liệu lớp", context: "15/30 bạn được hỏi đi bộ dưới 10 phút.", mechanism: "Xác định mẫu và diễn đạt đúng đơn vị.", takeaway: "Trong 30 bạn được hỏi, một nửa dành dưới 10 phút đi bộ." },
          check: { title: "Trục tung bị cắt ở biểu đồ cột có thể làm gì?", options: ["Phóng đại chênh lệch trực quan", "Tăng cỡ mẫu", "Sửa sai số đo", "Loại tương quan giả"] },
          notes: [
            { title: "Một điểm ước lượng", lead: "Tỷ lệ 15/30 mô tả mẫu; muốn suy rộng cần biết cách chọn mẫu." },
            { title: "Một câu hỏi trung tính", lead: "Hỏi số phút ôn bài hôm qua, thay vì hỏi bạn có chăm học hay không." },
            { title: "Bản đồ nhiệt có cần không?", lead: "Với bốn nhóm đơn giản, biểu đồ cột thường dễ đọc hơn bảng màu." },
          ]
        },
      ]
    },
    "toan-dai-so": {
      coverIndex: 4,
      introduction: "Đi từ một mệnh đề đến lời giải có thể kiểm tra từng bước.",
      goals: [
        "Dùng ví dụ phản chứng đúng vai trò.",
        "Biểu diễn hệ bằng phương trình và hình học.",
        "Kiểm tra điều kiện dấu và nghiệm ở bước cuối.",
      ],
      closing: "Một phép biến đổi tốt cho biết điều gì được bảo toàn.",
      images: [
        illustration({
          file: "Venn_diagram_gr_la_ru.svg", local: "3a5f7935592d", author: "Watchduck (Tilman Piesk)", license: "Public domain", fit: "contain",
          caption: "Sơ đồ Venn của ba tập",
          observation: "Phần chồng lên nhau biểu diễn các phần tử chung của những tập được xét."
        }),
        illustration({
          file: "Intersecting_Lines.svg", local: "f71dd63b8316", author: "Jim.belk", license: "Public domain", fit: "contain",
          caption: "Hai đường thẳng cắt nhau",
          observation: "Giao điểm có tọa độ thỏa đồng thời hai phương trình."
        }),
        illustration({
          file: "Linear_Programming_Feasible_Region.svg", local: "514aaf13f047", author: "Inductiveload", license: "Public domain", fit: "contain",
          caption: "Miền khả thi của các bất đẳng thức tuyến tính",
          observation: "Miền được tô là giao của các điều kiện đã đặt."
        }),
        illustration({
          file: "Arithmetic_progression.svg", local: "05b33a6518c4", author: "Cmglee", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Biểu diễn một cấp số cộng",
          observation: "Quan sát độ thay đổi giữa các số hạng ở những chỉ số liên tiếp."
        }),
        illustration({
          file: "Dominoes_falling.jpg", local: "5401b3287a74", author: "Kurt:S", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0",
          caption: "Các quân domino đang đổ",
          observation: "Mỗi quân làm đổ quân sau là hình ảnh gợi bước chuyển của quy nạp."
        }),
      ],
      chapters: [
        {
          name: "Mệnh đề và tập hợp",
          question: "Muốn bác bỏ câu “mọi số nguyên tố đều lẻ”, cần bao nhiêu ví dụ?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc sơ đồ tập hợp", callouts: [{"num": "01", "label": "Giao", "text": "Các phần tử chung của hai tập."}, {"num": "02", "label": "Hợp", "text": "Các phần tử có mặt ở ít nhất một tập."}, {"num": "03", "label": "Phần bù", "text": "Phụ thuộc tập vũ trụ đang xét."}] },
            { layout: "comparison", title: "Điều kiện cần và đủ", leftTitle: "A đủ cho B", leftPoints: ["Nếu A đúng thì B đúng.", "Chia hết cho 4 đủ để chia hết cho 2."], rightTitle: "B cần cho A", rightPoints: ["Nếu B sai thì A không thể đúng.", "Chia hết cho 2 cần để chia hết cho 4."] }
          ],
          exercise: { title: "Phủ định một mệnh đề", context: "Mọi học sinh trong tổ đều đã nộp bài.", mechanism: "Đổi lượng từ và phủ định vị từ.", takeaway: "Có ít nhất một học sinh trong tổ chưa nộp bài." },
          check: { title: "Số nào bác bỏ câu mọi số nguyên tố đều lẻ?", options: ["2", "3", "5", "7"] },
          notes: [
            { title: "Mệnh đề đảo cần kiểm tra riêng", lead: "Từ chia hết cho 4 suy ra chia hết cho 2. Số 6 bác bỏ chiều đảo." },
            { title: "Giao rỗng", lead: "Hai tập số nguyên chẵn và lẻ không có phần tử chung." },
            { title: "Luật De Morgan", lead: "Phần bù của A∪B bằng giao hai phần bù." },
          ]
        },
        {
          name: "Hệ phương trình và ma trận",
          question: "Hai phương trình có thể biểu diễn cùng một đường thẳng không?",
          concepts: [
            { layout: "formula-spotlight", title: "Khử một ẩn bằng tổ hợp dòng", formula: "x+y=5; 2x−y=1 ⇒ 3x=6", annotations: [{"tag": "Cộng", "text": "Hệ số của y đối nhau."}, {"tag": "Thay", "text": "x=2 suy ra y=3."}, {"tag": "Đối chiếu", "text": "(2;3) thỏa cả hai phương trình."}] },
            { layout: "comparison", title: "Ba khả năng của hệ tuyến tính hai ẩn", leftTitle: "Có một nghiệm", leftPoints: ["Hai đường cắt nhau.", "Tìm tọa độ giao điểm."], rightTitle: "Không hoặc vô số nghiệm", rightPoints: ["Song song phân biệt: vô nghiệm.", "Trùng đường: vô số nghiệm."] }
          ],
          exercise: { title: "Kiểm tra một hệ có tham số", context: "x+y=3 và 2x+2y=k.", mechanism: "Nhân phương trình đầu với 2.", takeaway: "k=6 cho vô số nghiệm; các k khác cho vô nghiệm." },
          check: { title: "Hệ ax+by=c và 2ax+2by=2c với (a;b)≠(0;0) có?", options: ["Vô số nghiệm", "Đúng một nghiệm", "Đúng hai nghiệm", "Vô nghiệm"] },
          notes: [
            { title: "Nghiệm dưới dạng tham số", lead: "Từ x+y=3, đặt x=t, y=3−t với t thực." },
            { title: "Ma trận mở rộng", lead: "Cột cuối chứa hằng số vế phải; phép biến đổi dòng phải áp dụng cả cột đó." },
            { title: "Khử chậm mà chắc", lead: "Thay nghiệm vào phương trình chưa dùng để phát hiện lỗi đổi dấu." },
          ]
        },
        {
          name: "Bất đẳng thức và cực trị",
          question: "Tại sao cân bằng hai số dương có thể làm tích của chúng lớn hơn?",
          concepts: [
            { layout: "formula-spotlight", title: "AM–GM cho hai số không âm", formula: "(a+b)/2 ≥ √(ab)", annotations: [{"tag": "Điều kiện", "text": "a,b ≥ 0."}, {"tag": "Nguồn gốc", "text": "Bình phương của √a−√b không âm."}, {"tag": "Dấu bằng", "text": "Xảy ra khi a=b."}] },
            { layout: "data-chart", title: "Giữ tổng 10, thay đổi hai số", bars: [{"label": "1×9", "val": 9, "unit": ""}, {"label": "2×8", "val": 16, "unit": ""}, {"label": "3×7", "val": 21, "unit": ""}, {"label": "5×5", "val": 25, "unit": ""}], insightBody: "Các tích đạt lớn nhất ở cặp cân bằng." }
          ],
          exercise: { title: "Tìm tích tối đa", context: "x>0, y>0 và x+y=18.", mechanism: "Từ AM–GM, √(xy)≤9.", takeaway: "xy lớn nhất bằng 81 tại x=y=9." },
          check: { title: "Có được dùng √(ab) trong AM–GM khi a và b đều âm?", options: ["Không, điều kiện a,b≥0", "Có với mọi a,b", "Có nếu a=b", "Chỉ cần a+b âm"] },
          notes: [
            { title: "Nhân với số âm", lead: "Từ 2<3 suy ra −2>−3 vì phép nhân với −1 đảo chiều thứ tự." },
            { title: "Bình phương hoàn chỉnh", lead: "x²−6x+11=(x−3)²+2, giá trị nhỏ nhất là 2." },
            { title: "Không quên dấu bằng", lead: "Chứng minh một cận cần thêm trường hợp đạt cận nếu muốn khẳng định cực trị." },
          ]
        },
        {
          name: "Dãy số và quy nạp",
          question: "Thấy quy luật đúng ở năm số đầu đã đủ để khẳng định cho mọi n chưa?",
          concepts: [
            { layout: "formula-spotlight", title: "Cấp số cộng từ số hạng đầu", formula: "uₙ = u₁ + (n−1)d", annotations: [{"tag": "d", "text": "Hiệu cố định giữa hai số hạng liền nhau."}, {"tag": "Ví dụ", "text": "3, 7, 11,… có d=4."}, {"tag": "Chỉ số", "text": "u₁=3, không phải u₀."}] },
            { layout: "process-flow", title: "Khóa hai bước của quy nạp", steps: [{"step": "Cơ sở", "title": "Chứng minh tại n=1", "desc": "Khởi đầu chuỗi suy luận."}, {"step": "Giả thiết", "title": "Giả sử đúng tại k", "desc": "Giữ k tùy ý."}, {"step": "Bước chuyển", "title": "Suy ra tại k+1", "desc": "Kết luận cho mọi n≥1."}] }
          ],
          exercise: { title: "Tổng các số lẻ đầu tiên", context: "Dự đoán 1+3+⋯+(2n−1)=n².", mechanism: "Cộng thêm 2k+1 vào k².", takeaway: "k²+2k+1=(k+1)², cơ sở n=1 đúng." },
          check: { title: "Trong cấp số nhân 3, 6, 12, số tiếp theo là?", options: ["24", "18", "21", "36"] },
          notes: [
            { title: "Một dãy giảm", lead: "Cấp số cộng có d<0 luôn giảm." },
            { title: "Tổng bằng ghép cặp", lead: "Ghép đầu và cuối để thấy Sₙ=n(u₁+uₙ)/2." },
            { title: "Kiểm tra chỉ số", lead: "Nếu đánh số từ 0, công thức chuyển thành uₙ=u₀+nd." },
          ]
        },
        {
          name: "Kiểm tra điều kiện và nghiệm",
          question: "Vì sao phương trình mới sau khi bình phương có thể thêm nghiệm?",
          concepts: [
            { layout: "comparison", title: "Điều kiện và phép biến đổi", leftTitle: "Tương đương", leftPoints: ["Bảo toàn tập nghiệm.", "Cộng cùng biểu thức hợp lệ vào hai vế."], rightTitle: "Hệ quả", rightPoints: ["Mọi nghiệm gốc vẫn thỏa.", "Có thể thêm ứng viên sau bình phương."] },
            { layout: "formula-spotlight", title: "Ràng buộc của căn bậc hai", formula: "√(x+2) = x ⇒ x ≥ 0", annotations: [{"tag": "Vế trái", "text": "Cần x+2≥0."}, {"tag": "Dấu", "text": "Căn chính không âm."}, {"tag": "Thử lại", "text": "Bình phương cho x=2 hoặc −1, giữ 2."}] }
          ],
          exercise: { title: "Hai tập nghiệm khác nhau", context: "So sánh x=−3 và x²=9.", mechanism: "Bình phương đã xóa thông tin về dấu.", takeaway: "x=3 thỏa phương trình sau nhưng không thỏa phương trình gốc." },
          check: { title: "Bước nào chắc chắn phát hiện nghiệm ngoại lai?", options: ["Thay ứng viên vào đề gốc", "Bình phương lần nữa", "Chỉ đếm nghiệm", "Chỉ nhìn hệ số cao nhất"] },
          notes: [
            { title: "Mẫu số phải khác 0", lead: "Với (x²−1)/(x−1), điều kiện x≠1 vẫn giữ sau khi rút gọn." },
            { title: "Dấu của tích", lead: "Tích hai số dương hoặc hai số âm đều dương; xét theo từng khoảng nghiệm." },
            { title: "Đọc đúng miền nghiệm", lead: "Với đề hỏi nghiệm nguyên, nghiệm thực lẻ dạng phân số không được nhận." },
          ]
        },
      ]
    },
    "hoa-huu-co": {
      coverIndex: 3,
      introduction: "Nhìn cấu trúc phân tử qua đồng phân, nhóm chức và vật liệu quen thuộc.",
      goals: [
        "Đọc cách carbon tạo khung.",
        "Nhận diện nhóm chức theo liên kết.",
        "Tách hiện tượng thí nghiệm khỏi kết luận định danh.",
      ],
      closing: "Cùng công thức phân tử vẫn có thể cho những chất khác nhau.",
      images: [
        illustration({
          file: "Methane-2D-dimensions.svg", local: "7194c8b66e4b", author: "Original: Benjah-bmm27 Vector: Jynto", license: "Public domain", fit: "contain",
          caption: "Công thức cấu tạo của methane",
          observation: "Đếm bốn liên kết C–H trên hình chiếu hai chiều."
        }),
        illustration({
          file: "Structural_isomers.svg", local: "5f786fc1a532", author: "User:Innerstream", license: "Public domain", fit: "contain",
          caption: "Các đồng phân cấu tạo",
          observation: "Nối cùng số nguyên tử theo cách khác có thể tạo khung khác."
        }),
        illustration({
          file: "Ethyl_alcohol_usp_grade.jpg", local: "00fed1574fe8", author: "Diane A. Reid, Photographer", license: "Public domain",
          caption: "Một chai ethanol với nhãn định danh",
          observation: "Đọc nhãn trước khi liên hệ ethanol với công thức và nhóm OH."
        }),
        illustration({
          file: "PETling.jpg", local: "7da51d82cd81", author: "Frank Murmann", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0",
          caption: "Phôi PET trước khi thổi thành chai",
          observation: "Phân biệt hình dạng của sản phẩm với thành phần polymer."
        }),
        illustration({
          file: "Lab_glassware.jpg", local: "78182d7357c8", author: "Tweenk", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0",
          caption: "Dụng cụ thủy tinh phòng thí nghiệm",
          observation: "Hình minh họa các kiểu dụng cụ dùng để chứa, chuyển hay quan sát mẫu."
        }),
      ],
      chapters: [
        {
          name: "Carbon và khung phân tử",
          question: "Điều gì cho phép carbon tạo thành mạch dài, nhánh và vòng?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc mô hình methane", callouts: [{"num": "01", "label": "Carbon", "text": "Nguyên tử ở tâm mô hình."}, {"num": "02", "label": "Hydrogen", "text": "Bốn nguyên tử liên kết với C."}, {"num": "03", "label": "Không gian", "text": "Bốn liên kết hướng về các đỉnh tứ diện."}] },
            { layout: "comparison", title: "Công thức phân tử và cấu tạo", leftTitle: "Phân tử", leftPoints: ["Đếm số nguyên tử từng nguyên tố.", "C₂H₆O cho biết tỉ lệ nguyên tử."], rightTitle: "Cấu tạo", rightPoints: ["Thể hiện nguyên tử nào nối với nhau.", "CH₃CH₂OH và CH₃OCH₃ có cách nối khác."] }
          ],
          exercise: { title: "Đếm nguyên tử trong ethanol", context: "Quan sát CH₃–CH₂–OH.", mechanism: "Nhớ tính cả H trên nhóm OH.", takeaway: "Công thức phân tử là C₂H₆O." },
          check: { title: "Trong methane, carbon tạo bao nhiêu liên kết đơn?", options: ["4", "2", "3", "6"] },
          notes: [
            { title: "Cùng bộ nguyên tử, khác cấu trúc", lead: "Cách nối nguyên tử có thể làm đổi nhiệt độ sôi và tính phản ứng." },
            { title: "Mô hình que–cầu có giới hạn", lead: "Kích thước quả cầu và chiều dài que chỉ minh họa tương đối." },
            { title: "Mạch vòng", lead: "Cyclohexane có sáu carbon thành vòng và có công thức C₆H₁₂." },
          ]
        },
        {
          name: "Hydrocarbon và đồng phân",
          question: "Một công thức phân tử có thể cho bao nhiêu khung carbon khác nhau?",
          concepts: [
            { layout: "comparison", title: "Butane và 2-methylpropane", leftTitle: "Mạch thẳng", leftPoints: ["Bốn carbon nối liên tiếp.", "Có hai carbon đầu mạch."], rightTitle: "Mạch nhánh", rightPoints: ["Một carbon nối với ba carbon khác.", "Cùng công thức C₄H₁₀."] },
            { layout: "formula-spotlight", title: "Alkane mạch hở", formula: "CₙH₂ₙ₊₂", annotations: [{"tag": "Phạm vi", "text": "Chỉ có liên kết đơn C–C, không có vòng."}, {"tag": "Ví dụ", "text": "n=3 cho propane, C₃H₈."}, {"tag": "Đối chiếu", "text": "Cycloalkane một vòng có công thức CₙH₂ₙ."}] }
          ],
          exercise: { title: "Phân biệt propene và propane", context: "Cho hai công thức C₃H₆ và C₃H₈, biết cả hai đều mạch hở.", mechanism: "So sánh với số H tối đa của mạch hở.", takeaway: "C₃H₆ là propene có một liên kết đôi." },
          check: { title: "Với một alkene mạch hở có một liên kết đôi, n=4 cho?", options: ["C₄H₈", "C₄H₁₀", "C₄H₆", "C₄H₄"] },
          notes: [
            { title: "Điều kiện đồng phân hình học", lead: "Mỗi carbon của liên kết đôi phải gắn với hai nhóm khác nhau." },
            { title: "Carbon đầu mạch", lead: "Ở propene, đầu CH₂ có hai H giống nhau nên không có dạng E/Z." },
            { title: "Vẽ rồi xoay giấy", lead: "Hai hình vẽ giống nhau khi chỉ đổi hướng nhìn không đại diện cho hai đồng phân." },
          ]
        },
        {
          name: "Alcohol và ester",
          question: "Sự xuất hiện của nguyên tử oxygen có đủ để gọi một chất là alcohol?",
          concepts: [
            { layout: "annotated-diagram", title: "Nhận diện nhóm chức", callouts: [{"num": "01", "label": "Alcohol", "text": "Nhóm OH gắn với carbon no."}, {"num": "02", "label": "Ether", "text": "Oxygen nối hai nhóm carbon."}, {"num": "03", "label": "Ester", "text": "Nhóm –C(=O)–O– nằm giữa khung phân tử."}] },
            { layout: "formula-spotlight", title: "Ester hóa ở dạng phương trình", formula: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", annotations: [{"tag": "Chất đầu", "text": "Acid acetic và ethanol."}, {"tag": "Sản phẩm", "text": "Ethyl acetate và nước."}, {"tag": "Ký hiệu", "text": "Mũi tên hai chiều biểu diễn phản ứng thuận nghịch."}] }
          ],
          exercise: { title: "Chọn đúng tên nhóm chức", context: "So sánh CH₃CH₂OH và CH₃COOCH₃.", mechanism: "Khoanh phần có O và đọc liên kết liền kề.", takeaway: "Chất thứ nhất là alcohol, chất thứ hai là ester." },
          check: { title: "Nhóm –C(=O)–O– trong chuỗi hữu cơ thường nhận diện?", options: ["Ester", "Alkane", "Alcohol", "Alkene"] },
          notes: [
            { title: "Ester trong hương liệu", lead: "Một số ester góp phần tạo mùi đặc trưng; mùi không đủ để định danh chất." },
            { title: "Ethanol hòa tan trong nước", lead: "Nhóm OH có thể tạo liên kết hydrogen với nước." },
            { title: "Đọc nhãn", lead: "Phần trăm theo thể tích và theo khối lượng dùng hai mẫu số khác nhau." },
          ]
        },
        {
          name: "Polymer và vật liệu",
          question: "Vì sao chai PET và túi PE có thể cần các luồng tái chế khác nhau?",
          concepts: [
            { layout: "process-flow", title: "Từ mắt xích đến vật liệu", steps: [{"step": "Phân tử", "title": "Đọc đơn vị lặp", "desc": "Nhận ra phần cấu trúc lặp lại."}, {"step": "Chuỗi", "title": "So cấu trúc", "desc": "Nhóm chức và cách sắp xếp ảnh hưởng tính chất."}, {"step": "Sản phẩm", "title": "Xem nhãn", "desc": "PET và PE là hai polymer khác nhau."}] },
            { layout: "comparison", title: "PET và polyethylene", leftTitle: "PET", leftPoints: ["Polyester chứa nhóm ester trong mạch.", "Thường gặp ở chai nước và sợi polyester."], rightTitle: "PE", rightPoints: ["Mạch chính chủ yếu là C và H.", "Nhiều loại màng và bao bì sử dụng PE."] }
          ],
          exercise: { title: "Mã nhựa và điểm thu gom", context: "Nhóm tìm thấy chai ký hiệu 1 và túi ký hiệu 4.", mechanism: "Đọc hướng dẫn của điểm thu gom địa phương.", takeaway: "Mã giúp nhận diện vật liệu, khả năng thu gom còn phụ thuộc cơ sở xử lý." },
          check: { title: "Có thể kết luận bao bì phân hủy sinh học chỉ từ chữ “nguồn gốc sinh học”?", options: ["Không, hai thuộc tính cần chứng cứ riêng", "Có với mọi polymer", "Có nếu bao bì trong suốt", "Có nếu bao bì nhẹ"] },
          notes: [
            { title: "Tái sử dụng và tái chế", lead: "Tái sử dụng kéo dài số lần dùng, tái chế xử lý vật liệu thành nguyên liệu hoặc sản phẩm mới." },
            { title: "Đọc ký hiệu PET", lead: "Các chữ PET chỉ tên vật liệu, không chứng minh chai đã được tái chế." },
            { title: "Vật liệu có nhiều tiêu chí", lead: "Khả năng chịu lực, độ bền và tác động cuối vòng đời cần được cân nhắc cùng nhau." },
          ]
        },
        {
          name: "Đọc thí nghiệm hữu cơ",
          question: "Mùi, màu hay sự tách lớp cho phép kết luận đến mức nào?",
          concepts: [
            { layout: "process-flow", title: "Viết báo cáo theo thứ tự quan sát", steps: [{"step": "Trước", "title": "Ghi dữ kiện ban đầu", "desc": "Nhãn mẫu, trạng thái và điều kiện."}, {"step": "Trong", "title": "Ghi hiện tượng", "desc": "Tách lớp hoặc biến đổi màu theo quan sát được."}, {"step": "Sau", "title": "Giải thích có giới hạn", "desc": "Phân biệt dấu hiệu và xác nhận."}] },
            { layout: "comparison", title: "Hiện tượng và nhận định", leftTitle: "Quan sát", leftPoints: ["Hai lớp chất lỏng xuất hiện.", "Có thể kiểm bằng người quan sát khác."], rightTitle: "Diễn giải", rightPoints: ["Các thành phần có độ hòa tan khác nhau.", "Cần thêm bằng chứng để nhận diện từng lớp."] }
          ],
          exercise: { title: "Rà một câu kết luận", context: "Báo cáo ghi “mẫu có mùi trái cây nên chắc chắn là ester X”.", mechanism: "Tách dấu hiệu mùi khỏi bằng chứng định danh.", takeaway: "Viết: mùi gợi ý nhưng chưa đủ để xác định hợp chất X." },
          check: { title: "Chi tiết nào thuộc phần quan sát trực tiếp?", options: ["Hỗn hợp tạo hai lớp", "Mẫu chắc chắn là ethyl acetate", "Phản ứng chuyển dịch sang phải", "Cấu trúc phân tử đã đổi"] },
          notes: [
            { title: "Vai trò mẫu đối chứng", lead: "So sánh với mẫu đã biết để tránh gán nhầm hiện tượng nền cho mẫu thử." },
            { title: "Đơn vị đo phải đi kèm số", lead: "Giá trị 5 mL khác 5 g; ghi đơn vị và dụng cụ đã dùng." },
            { title: "Nguồn sai số", lead: "Phân biệt sai số dụng cụ với việc đọc sai nhãn mẫu." },
          ]
        },
      ]
    },
    "hoa-tuan-hoan": {
      coverIndex: 4,
      introduction: "Từ một ô nguyên tố đến dấu hiệu của phản ứng và quá trình kết tinh.",
      goals: [
        "Phân biệt proton, neutron và electron.",
        "Đọc dấu enthalpy theo ranh giới hệ.",
        "Phân biệt tốc độ phản ứng và trạng thái cân bằng.",
      ],
      closing: "Một xu hướng chung cần đi cùng điều kiện và bằng chứng cụ thể.",
      images: [
        illustration({
          file: "Neon_orbitals.png", local: "3d735e2e0e39", author: "Rakudaniku", license: "Public domain", fit: "contain",
          caption: "Các orbital của neon",
          observation: "Hình biểu diễn phân bố electron, không phải quỹ đạo của từng electron."
        }),
        illustration({
          file: "Colour_18-col_PT_with_labels.svg", local: "adc9e7a4affc", author: "Lekritz", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Bảng tuần hoàn với mã màu theo nhóm",
          observation: "Xác định hàng và cột trước khi suy ra xu hướng."
        }),
        illustration({
          file: "Ice-calorimeter.jpg", local: "b8e85aa74f6e", author: "Originally en:User:Sadi Carnot", license: "Public domain",
          caption: "Nhiệt lượng kế dùng nước đá",
          observation: "Đây là tư liệu về cách liên hệ nhiệt trao đổi với đại lượng đo được."
        }),
        illustration({
          file: "Diag_eq.svg", local: "9b98b45e5987", author: "Maghémite", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", fit: "contain",
          caption: "Đồ thị nồng độ tiến tới cân bằng",
          observation: "Quan sát nơi các đường nồng độ dần ổn định theo thời gian."
        }),
        illustration({
          file: "Sodium_chloride_crystals.jpg", local: "097cee68a030", author: "Stanislav.nevyhosteny", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Tinh thể sodium chloride cỡ lớn",
          observation: "Các mặt tinh thể giúp đặt câu hỏi về trật tự của mạng ion."
        }),
      ],
      chapters: [
        {
          name: "Cấu tạo nguyên tử",
          question: "Số proton, neutron và electron trả lời ba câu hỏi khác nhau như thế nào?",
          concepts: [
            { layout: "formula-spotlight", title: "Ba phép đếm từ ký hiệu nguyên tử", formula: "A = Z + N", annotations: [{"tag": "Z", "text": "Số proton, xác định nguyên tố."}, {"tag": "N", "text": "Số neutron, bằng A−Z."}, {"tag": "Nguyên tử trung hòa", "text": "Số electron bằng Z."}] },
            { layout: "comparison", title: "Đồng vị và ion", leftTitle: "Đồng vị", leftPoints: ["Cùng số proton.", "Khác số neutron."], rightTitle: "Ion", rightPoints: ["Hình thành do nhường hay nhận electron.", "Số proton giữ nguyên."] }
          ],
          exercise: { title: "Tính ba số cho chloride", context: "Xét ion ³⁵Cl⁻. Chlorine có Z=17.", mechanism: "Điện tích âm 1 nghĩa là thêm một electron.", takeaway: "Có 17 proton, 18 neutron và 18 electron." },
          check: { title: "Hai nguyên tử cùng Z nhưng khác A là?", options: ["Hai đồng vị của cùng nguyên tố", "Hai nguyên tố khác nhau", "Hai ion cùng điện tích", "Hai phân tử cùng công thức"] },
          notes: [
            { title: "Lớp và orbital", lead: "Orbital biểu diễn vùng xác suất, không phải đường đi cố định của electron." },
            { title: "Khối lượng nguyên tử tương đối", lead: "Giá trị trong bảng tuần hoàn thường là trung bình có trọng số theo thành phần đồng vị." },
            { title: "Lớp ngoài cùng", lead: "Với nguyên tố nhóm chính, electron hóa trị giúp giải thích nhiều xu hướng liên kết." },
          ]
        },
        {
          name: "Quy luật tuần hoàn",
          question: "Nếu hai nguyên tố ở cùng nhóm, ta dự đoán được điều gì về tính chất của chúng?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc một ô trong bảng tuần hoàn", callouts: [{"num": "01", "label": "Số hiệu", "text": "Bằng số proton của nguyên tử."}, {"num": "02", "label": "Ký hiệu", "text": "Viết hoa chữ đầu, như Na."}, {"num": "03", "label": "Vị trí", "text": "Hàng là chu kỳ, cột là nhóm."}] },
            { layout: "comparison", title: "Hai chiều biến thiên bán kính", leftTitle: "Theo một chu kỳ", leftPoints: ["Bán kính nguyên tử thường giảm từ trái sang phải.", "Lực hút hạt nhân hiệu dụng thường tăng."], rightTitle: "Theo một nhóm", rightPoints: ["Bán kính thường tăng từ trên xuống.", "Có thêm lớp electron."] }
          ],
          exercise: { title: "Chọn nguyên tố tương tự sodium", context: "So sánh Li, Mg và Cl với Na.", mechanism: "Tìm nguyên tố cùng nhóm 1.", takeaway: "Li tương tự về số electron hóa trị, dù độ hoạt động khác." },
          check: { title: "Vì sao K thường có bán kính lớn hơn Na?", options: ["K có thêm một lớp electron", "K có ít proton hơn Na", "Na đã là ion trong bảng", "K có ít electron hơn Na"] },
          notes: [
            { title: "Bảng hiện đại sắp theo Z", lead: "Khối lượng nguyên tử không phải tiêu chí sắp thứ tự cơ bản." },
            { title: "Tính kim loại", lead: "Thường mạnh hơn về phía trái và dưới, xét theo xu hướng chung." },
            { title: "Ngoại lệ có lý do", lead: "Một xu hướng hóa học không thay thế việc tra dữ liệu từng nguyên tố." },
          ]
        },
        {
          name: "Nhiệt hóa học",
          question: "Dấu âm của biến thiên enthalpy cho biết nhiệt đi về đâu?",
          concepts: [
            { layout: "formula-spotlight", title: "Dấu và độ lớn của nhiệt phản ứng", formula: "ΔH = H(sản phẩm) − H(chất đầu)", annotations: [{"tag": "Tỏa nhiệt", "text": "ΔH<0, hệ truyền nhiệt ra ngoài ở áp suất không đổi."}, {"tag": "Thu nhiệt", "text": "ΔH>0, hệ nhận nhiệt."}, {"tag": "Hệ số", "text": "Nhân phương trình với 2 thì ΔH phản ứng cũng gấp 2."}] },
            { layout: "data-chart", title: "Cùng lượng nước, theo dõi nhiệt độ", bars: [{"label": "Ban đầu", "val": 22, "unit": "°C"}, {"label": "Sau 1 phút", "val": 27, "unit": "°C"}, {"label": "Sau 2 phút", "val": 30, "unit": "°C"}, {"label": "Sau 3 phút", "val": 29, "unit": "°C"}], insightBody: "Số minh họa: đỉnh đo được là 30 °C rồi hệ mất nhiệt." }
          ],
          exercise: { title: "Đổi chiều phản ứng trên giấy", context: "Phản ứng thuận có ΔH=−70 kJ theo phương trình đã viết.", mechanism: "Đảo chất đầu và sản phẩm.", takeaway: "Phản ứng nghịch có ΔH=+70 kJ." },
          check: { title: "Nếu môi trường ấm lên vì nhận nhiệt từ phản ứng thì phản ứng?", options: ["Tỏa nhiệt", "Thu nhiệt", "Luôn có ΔH=0", "Luôn không thuận nghịch"] },
          notes: [
            { title: "Chọn ranh giới hệ", lead: "Khi nói nhiệt “đi ra”, cần nêu đi từ hệ phản ứng ra môi trường." },
            { title: "Ảnh hưởng của cách nhiệt", lead: "Thất thoát ra không khí có thể làm thay đổi độ tăng nhiệt quan sát được." },
            { title: "Dùng định luật Hess", lead: "Cộng phương trình từng bước, cộng cả ΔH sau khi đã đổi hệ số đúng." },
          ]
        },
        {
          name: "Tốc độ và cân bằng",
          question: "Tại sao nồng độ không đổi vẫn có thể đi kèm phản ứng diễn ra?",
          concepts: [
            { layout: "comparison", title: "Tốc độ và vị trí cân bằng", leftTitle: "Tốc độ", leftPoints: ["Mô tả phản ứng nhanh hay chậm.", "Xúc tác hạ rào cản động học."], rightTitle: "Cân bằng", rightPoints: ["Tốc độ hai chiều bằng nhau.", "Xúc tác không làm đổi hằng số cân bằng ở cùng nhiệt độ."] },
            { layout: "process-flow", title: "Khi thêm A vào hệ thuận nghịch", steps: [{"step": "Ngay lúc thêm", "title": "A tăng đột ngột", "desc": "Tỉ số phản ứng có thể đổi."}, {"step": "Đáp ứng", "title": "Hai tốc độ lệch nhau", "desc": "Với A ⇌ B, một phần A chuyển thành B."}, {"step": "Cân bằng mới", "title": "Hai tốc độ lại bằng nhau", "desc": "Nồng độ cuối có thể khác trước."}] }
          ],
          exercise: { title: "Đọc hai câu nhận định", context: "Hai học sinh nói “hệ đứng yên” và “nồng độ đứng yên”.", mechanism: "Xét ở cấp độ phân tử khi đã cân bằng.", takeaway: "Chỉ nhận định về nồng độ phù hợp với cân bằng động." },
          check: { title: "Ở cân bằng động trong hệ kín?", options: ["Tốc độ thuận bằng tốc độ nghịch", "Hai tốc độ đều bằng 0", "Nồng độ mọi chất bằng nhau", "Chất phản ứng đã hết sạch"] },
          notes: [
            { title: "Nhiệt độ có thể đổi hằng số", lead: "K phụ thuộc nhiệt độ; xúc tác không đổi K khi nhiệt độ giữ nguyên." },
            { title: "Bề mặt tiếp xúc", lead: "Bột và viên có cùng khối lượng nhưng bột có thể phản ứng nhanh hơn nhờ diện tích tiếp xúc lớn." },
            { title: "Không suy từ nhanh sang nhiều", lead: "Nhiều sản phẩm sớm hơn chưa có nghĩa lượng cân bằng cuối cùng lớn hơn." },
          ]
        },
        {
          name: "Tinh thể và đọc bằng chứng",
          question: "Hình dạng của tinh thể giúp ta đặt câu hỏi gì về cách ion sắp xếp?",
          concepts: [
            { layout: "annotated-diagram", title: "Nhìn tinh thể NaCl ở hai thang đo", callouts: [{"num": "01", "label": "Mắt thường", "text": "Có thể thấy những mặt gần vuông."}, {"num": "02", "label": "Mạng tinh thể", "text": "Ion Na⁺ và Cl⁻ xếp tuần hoàn trong không gian."}, {"num": "03", "label": "Giới hạn", "text": "Ảnh không cho biết ngay nồng độ dung dịch ban đầu."}] },
            { layout: "comparison", title: "Hòa tan và nóng chảy", leftTitle: "Hòa tan", leftPoints: ["Chất phân tán trong dung môi.", "NaCl tan trong nước tạo các ion được solvat hóa."], rightTitle: "Nóng chảy", rightPoints: ["Chất rắn chuyển thành lỏng do gia nhiệt.", "Không cần thêm dung môi."] }
          ],
          exercise: { title: "Viết một chú thích thí nghiệm", context: "Một mẫu có tinh thể sau khi lượng nước giảm.", mechanism: "Tách diễn biến nhìn thấy khỏi cơ chế đề xuất.", takeaway: "Nước bay hơi có thể làm dung dịch quá bão hòa, thuận lợi cho kết tinh." },
          check: { title: "Chi tiết nào giúp lặp lại phép quan sát kết tinh?", options: ["Nồng độ, nhiệt độ và thời gian", "Chỉ tên nhóm", "Chỉ màu bàn thí nghiệm", "Chỉ ảnh cuối"] },
          notes: [
            { title: "Ion chuyển động và dòng điện", lead: "Ion linh động có thể tải điện trong dung dịch NaCl." },
            { title: "Một đối chứng thích hợp", lead: "Đối chiếu dung môi không chứa muối trong cùng điều kiện quan sát." },
            { title: "Giới hạn một ảnh tĩnh", lead: "Cần chuỗi ảnh hoặc ghi giờ nếu muốn mô tả tốc độ kết tinh." },
          ]
        },
      ]
    },
    "sinh-di-truyen": {
      coverIndex: 0,
      introduction: "Theo dấu thông tin từ xoắn kép đến tính trạng và cách đọc dự báo.",
      goals: [
        "Đọc mạch DNA bổ sung theo chiều.",
        "Phân biệt sản phẩm phiên mã và dịch mã.",
        "Giải thích tỷ lệ di truyền trong giả thiết đã nêu.",
      ],
      closing: "Một dự báo về tính trạng luôn có phạm vi của mô hình và dữ liệu.",
      images: [
        illustration({
          file: "DNA_Structure+Key+Labelled.pn_NoBB.png", local: "7951253e2a80", author: "Zephyris", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", fit: "contain",
          caption: "Sơ đồ xoắn kép DNA",
          observation: "Theo hai khung đường–phosphate và các cặp base ở giữa."
        }),
        illustration({
          file: "Protein_synthesis.svg", local: "14091bf30808", author: "Kelvinsong", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", fit: "contain",
          caption: "Sơ đồ ribosome dịch mã",
          observation: "Đọc hướng của mRNA và vị trí tRNA đưa amino acid tới."
        }),
        illustration({
          file: "NHGRI_human_male_karyotype.png", local: "a842966a10cc", author: "Courtesy: National Human Genome Research Institute", license: "Public domain", fit: "contain",
          caption: "Bộ nhiễm sắc thể của người",
          observation: "Quan sát cách sắp từng cặp thay vì cố tìm từng nucleotide."
        }),
        illustration({
          file: "Gregor_Mendel_2.jpg", local: "9fd1a6c2e2e7", author: "Unknown authorUnknown author", license: "Public domain", fit: "contain",
          caption: "Chân dung Gregor Mendel",
          observation: "Thí nghiệm trên đậu Hà Lan là bối cảnh cho các mô hình phân li trong bài."
        }),
        illustration({
          file: "Punnett_Square_(Green_Dominant).svg", local: "fbb9fd832cd2", author: "Pbrks and contributors", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", fit: "contain",
          caption: "Bảng Punnett minh họa phép lai",
          observation: "Tìm giả thiết về allele trước khi đọc tỷ lệ các ô."
        }),
      ],
      chapters: [
        {
          name: "DNA và sao chép",
          question: "Một mạch DNA có thể mang đủ gợi ý để dựng mạch bổ sung như thế nào?",
          concepts: [
            { layout: "annotated-diagram", title: "Ba lớp thông tin trên xoắn kép", callouts: [{"num": "01", "label": "Khung", "text": "Đường và phosphate tạo khung mỗi mạch."}, {"num": "02", "label": "Base", "text": "A ghép T, G ghép C."}, {"num": "03", "label": "Chiều", "text": "Hai mạch chạy ngược chiều nhau."}] },
            { layout: "process-flow", title: "Minh họa sao chép bán bảo tồn", steps: [{"step": "Mở", "title": "Tách hai mạch", "desc": "Các base có thể bắt cặp lại."}, {"step": "Sao", "title": "Tổng hợp mạch mới", "desc": "Mỗi mạch cũ làm khuôn."}, {"step": "Giữ", "title": "Một cũ, một mới", "desc": "Mỗi phân tử con có hai mạch khác nguồn."}] }
          ],
          exercise: { title: "Viết mạch bổ sung", context: "Cho mạch 5′–AGTC–3′.", mechanism: "Đổi base và ghi chiều ngược.", takeaway: "Mạch đối diện là 3′–TCAG–5′." },
          check: { title: "Trong DNA, base nào bắt cặp với guanine?", options: ["Cytosine", "Adenine", "Thymine", "Uracil"] },
          notes: [
            { title: "Chiều đọc không thể bỏ", lead: "Nếu yêu cầu viết mạch bổ sung theo chiều 5′→3′ thì phải đảo thứ tự base sau khi bổ sung." },
            { title: "Thông tin và vật chất", lead: "Trình tự base mang thông tin; khung hóa học giữ các base theo một thứ tự." },
            { title: "DNA trong tế bào", lead: "Ở tế bào nhân thực, phần lớn DNA nằm trong nhân, một phần có trong ti thể." },
          ]
        },
        {
          name: "Biểu hiện gene",
          question: "Vì sao một trình tự nucleotide có thể dẫn tới chuỗi amino acid?",
          concepts: [
            { layout: "process-flow", title: "Từ DNA tới protein", steps: [{"step": "Phiên mã", "title": "Tạo RNA", "desc": "Một mạch DNA làm khuôn."}, {"step": "Dịch mã", "title": "Đọc mRNA", "desc": "Ribosome đọc từng codon."}, {"step": "Gấp cuộn", "title": "Chuỗi thành cấu trúc", "desc": "Cấu trúc ảnh hưởng chức năng protein."}] },
            { layout: "comparison", title: "Phiên mã và dịch mã", leftTitle: "Phiên mã", leftPoints: ["Tạo RNA từ khuôn DNA.", "Dùng bắt cặp bổ sung."], rightTitle: "Dịch mã", rightPoints: ["Tạo chuỗi amino acid theo mRNA.", "Dùng ribosome và tRNA."] }
          ],
          exercise: { title: "Đọc một codon mở đầu thường gặp", context: "mRNA có AUG ở vị trí khởi đầu thích hợp.", mechanism: "Tra bảng mã di truyền chuẩn.", takeaway: "AUG mã hóa methionine và thường là codon mở đầu." },
          check: { title: "Bộ ba được ribosome đọc trong dịch mã nằm trên?", options: ["mRNA", "Lipid màng", "DNA trên nhiễm sắc thể", "Phân tử glucose"] },
          notes: [
            { title: "Nhiều codon cùng nghĩa", lead: "UUU và UUC đều mã hóa phenylalanine trong mã chuẩn." },
            { title: "Codon kết thúc", lead: "Trong mã chuẩn, UAA, UAG và UGA báo dừng dịch mã." },
            { title: "Biểu hiện theo loại tế bào", lead: "Tế bào có thể dùng những bộ gene khác nhau dù bộ DNA gần như giống nhau." },
          ]
        },
        {
          name: "Biến đổi vật chất di truyền",
          question: "Một thay đổi ở mức base khác gì với thay đổi số nhiễm sắc thể?",
          concepts: [
            { layout: "comparison", title: "Hai cấp độ quan sát", leftTitle: "Đột biến gene", leftPoints: ["Thay đổi trình tự nucleotide ở một vùng.", "Mức ảnh hưởng tùy vị trí và chức năng."], rightTitle: "Bất thường số nhiễm sắc thể", rightPoints: ["Thừa hoặc thiếu nhiễm sắc thể.", "Có thể khảo sát bằng bộ nhiễm sắc thể."] },
            { layout: "annotated-diagram", title: "Đọc một bộ nhiễm sắc thể", callouts: [{"num": "01", "label": "Cách xếp", "text": "Các cặp được sắp theo kích thước và đặc điểm hình thái."}, {"num": "02", "label": "Đếm", "text": "Tìm số bản sao của từng nhiễm sắc thể."}, {"num": "03", "label": "Giới hạn", "text": "Ảnh bộ nhiễm sắc thể không cho thấy từng base."}] }
          ],
          exercise: { title: "Phân biệt ba mức mô tả", context: "Xét thay một base, mất một đoạn lớn và có thêm một nhiễm sắc thể.", mechanism: "Xác định thứ thay đổi là trình tự, cấu trúc hay số lượng.", takeaway: "Ba mức lần lượt là gene, cấu trúc NST và số lượng NST." },
          check: { title: "Đột biến thay một base luôn làm đổi amino acid?", options: ["Không, nhiều codon có thể mã hóa cùng amino acid", "Có trong mọi gene", "Có nếu thay ở vị trí thứ ba", "Chỉ không đổi khi xảy ra trên NST giới tính"] },
          notes: [
            { title: "Biến đổi ngoài vùng mã hóa", lead: "Thay đổi ở vùng điều hòa có thể ảnh hưởng mức biểu hiện gene." },
            { title: "Đột biến và kiểu hình", lead: "Có thay đổi nhận biết được, có thay đổi không rõ trong điều kiện khảo sát." },
            { title: "Một tấm ảnh có giới hạn", lead: "Không dùng hình bộ NST để kết luận về cơ chế của mọi tính trạng." },
          ]
        },
        {
          name: "Mendel và xác suất",
          question: "Từ bố mẹ Aa × Aa, vì sao tỷ lệ kiểu gene dự kiến là 1:2:1?",
          concepts: [
            { layout: "data-chart", title: "Bốn ô của phép lai Aa × Aa", bars: [{"label": "AA", "val": 1, "unit": "ô"}, {"label": "Aa", "val": 2, "unit": "ô"}, {"label": "aa", "val": 1, "unit": "ô"}], insightBody: "Giả sử hai allele phân li đều và giao tử kết hợp ngẫu nhiên." },
            { layout: "comparison", title: "Kiểu gene và kiểu hình", leftTitle: "Kiểu gene", leftPoints: ["Tổ hợp allele, ví dụ Aa.", "Có thể mang allele lặn."], rightTitle: "Kiểu hình", rightPoints: ["Đặc điểm quan sát được.", "Có thể chịu tác động cả gene và môi trường."] }
          ],
          exercise: { title: "Từ kiểu gene đến màu đậu", context: "Giả sử A trội hoàn toàn so với a và hai bố mẹ đều Aa.", mechanism: "Gộp AA và Aa thành nhóm cùng kiểu hình trội.", takeaway: "Tỉ lệ kỳ vọng trội:lặn là 3:1." },
          check: { title: "Phép lai Aa × aa cho xác suất aa bằng?", options: ["1/2", "1/4", "3/4", "1"] },
          notes: [
            { title: "Mẫu nhỏ có thể lệch tỉ lệ", lead: "Bốn cá thể con không buộc phải có đúng một cá thể aa." },
            { title: "Một gene, hơn hai kiểu hình", lead: "Trong trội không hoàn toàn, Aa có thể có kiểu hình trung gian." },
            { title: "Tỉ lệ 3:1 có điều kiện", lead: "Tỉ lệ này không áp dụng cho mọi tính trạng hay mọi phép lai." },
          ]
        },
        {
          name: "Dữ liệu di truyền và trách nhiệm",
          question: "Khi thấy một sơ đồ dự đoán tính trạng, ta cần hỏi dữ liệu đó cho phép suy ra đến đâu?",
          concepts: [
            { layout: "process-flow", title: "Đọc tuyên bố về gene", steps: [{"step": "Định nghĩa", "title": "Kiểm tra tính trạng đang xét", "desc": "Nêu cách đo cụ thể."}, {"step": "Đối chiếu", "title": "Xem loại bằng chứng", "desc": "Gia đình, mô hình hay nhiều quần thể."}, {"step": "Giới hạn", "title": "Nêu điều chưa biết", "desc": "Tránh suy diễn từ nhóm sang từng người."}] },
            { layout: "comparison", title: "Dự đoán đơn gene và đa yếu tố", leftTitle: "Mô hình đơn gene", leftPoints: ["Dùng một locus trong giả thiết bài tập.", "Dễ biểu diễn bằng bảng Punnett."], rightTitle: "Đa yếu tố", rightPoints: ["Nhiều gene và môi trường cùng ảnh hưởng.", "Một bảng Punnett đơn giản khó mô tả đủ."] }
          ],
          exercise: { title: "Thảo luận quyền riêng tư", context: "Nhóm muốn dựng ví dụ từ dữ liệu sức khỏe của người quen.", mechanism: "Dùng dữ liệu hư cấu và nêu giả thiết.", takeaway: "Giữ mục tiêu học tập mà tránh lộ thông tin nhận dạng." },
          check: { title: "Câu nào phù hợp khi gene chỉ là một yếu tố ảnh hưởng?", options: ["Kiểu hình còn phụ thuộc bối cảnh và dữ liệu", "Một allele quyết định chắc chắn mọi kết quả", "Ảnh thay được toàn bộ dữ liệu", "Mẫu nhỏ chứng minh quy luật cho mọi người"] },
          notes: [
            { title: "Đọc sơ đồ chỉnh sửa gene ở mức khái niệm", lead: "Phân biệt câu hỏi về mục tiêu sinh học với câu hỏi về tác động và giám sát." },
            { title: "Tính trạng không đồng nghĩa số phận", lead: "Một dự báo xác suất không phải kết luận chắc chắn cho từng cá nhân." },
            { title: "Tư liệu phổ thông", lead: "Mô hình đậu Hà Lan giúp học phân li; cần thêm bằng chứng khi áp dụng cho hệ phức tạp." },
          ]
        },
      ]
    },
    "sinh-he-sinh-thai": {
      coverIndex: 3,
      introduction: "Theo vật chất và năng lượng từ chiếc lá đến cả một sinh cảnh.",
      goals: [
        "Nêu nguồn carbon khi cây tạo chất hữu cơ.",
        "Đọc quan hệ sinh thái trong một mạng lưới.",
        "Chọn chỉ số để theo dõi phục hồi.",
      ],
      closing: "Hiệu quả bảo tồn cần được quan sát qua thời gian.",
      images: [
        illustration({
          file: "Photosynthesis_en.svg", local: "cb0eafd4b696", author: "At09kg, Wattcle and Nefronus", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Sơ đồ các dòng vào và ra khi quang hợp",
          observation: "Theo riêng đường đi của vật chất và vai trò năng lượng ánh sáng."
        }),
        illustration({
          file: "Hummingbird_hawkmoth_a.jpg", local: "1e3c51b4227f", author: "Yummifruitbat (attributed)", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Bướm chim ruồi tìm mật trên hoa",
          observation: "Ảnh cho thấy tương tác; lợi ích cho cây cần xét việc chuyển phấn."
        }),
        illustration({
          file: "Aquatic_food_web.jpg", local: "4d9c0f2658d5", author: "Kestin Schulz, Mariya W. Smit, Lydie Herfort and Holly M. Simon", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Lưới thức ăn thủy sinh",
          observation: "So nhiều đường chuyển vật chất và năng lượng giữa các nhóm."
        }),
        illustration({
          file: "Aerial_view_of_the_Amazon_Rainforest.jpg", local: "16fa9ce72068", author: "lubasi", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
          caption: "Tán rừng mưa Amazon nhìn từ trên cao",
          observation: "Góc nhìn rộng thấy độ che phủ, chưa cho tổng số loài."
        }),
        illustration({
          file: "Sonneratia_alba_-_Manado_(2).JPG", local: "22bafc8e7216", author: "Ariefrahman", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Cây ngập mặn Sonneratia alba ở Manado",
          observation: "Quan sát mối liên hệ giữa bộ rễ và môi trường bùn ven nước."
        }),
      ],
      chapters: [
        {
          name: "Quang hợp và lá cây",
          question: "Carbon trong sinh khối mới đi vào cây từ đâu?",
          concepts: [
            { layout: "formula-spotlight", title: "Phương trình tổng quát quang hợp", formula: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", annotations: [{"tag": "Đầu vào", "text": "Carbon dioxide và nước."}, {"tag": "Năng lượng", "text": "Ánh sáng cung cấp năng lượng cho quá trình."}, {"tag": "Lưu ý", "text": "Đây là biểu diễn gộp, không phải một bước phản ứng."}] },
            { layout: "annotated-diagram", title: "Ba nơi cần chú ý khi đọc hình chiếc lá", callouts: [{"num": "01", "label": "Khí khổng", "text": "Điều hòa trao đổi khí và thoát hơi nước."}, {"num": "02", "label": "Lục lạp", "text": "Nơi diễn ra quang hợp ở mô lá."}, {"num": "03", "label": "Gân lá", "text": "Vận chuyển nước và các chất hòa tan."}] }
          ],
          exercise: { title: "Lá được che sáng một phần", context: "So vùng che và vùng nhận sáng trên cùng lá trong một mô hình thí nghiệm.", mechanism: "Các vùng dùng chung nhiều điều kiện nhưng khác mức chiếu sáng.", takeaway: "So sánh giúp tách ảnh hưởng của ánh sáng." },
          check: { title: "Carbon trong chất hữu cơ mới được cây lấy chủ yếu từ?", options: ["CO₂", "O₂", "Muối ăn", "Ánh sáng"] },
          notes: [
            { title: "Ánh sáng mang năng lượng", lead: "Photon cung cấp năng lượng, không cung cấp nguyên tử carbon." },
            { title: "Giới hạn của phương trình gộp", lead: "O₂ giải phóng trong quang hợp có nguồn từ nước." },
            { title: "Hô hấp vẫn diễn ra", lead: "Cây hô hấp cả khi có ánh sáng, bên cạnh quá trình quang hợp." },
          ]
        },
        {
          name: "Quan hệ sinh thái",
          question: "Hai loài xuất hiện cạnh nhau có nhất thiết đang giúp nhau không?",
          concepts: [
            { layout: "comparison", title: "Cộng sinh có lợi và cạnh tranh", leftTitle: "Hai bên cùng lợi", leftPoints: ["Sinh vật thụ phấn nhận thức ăn.", "Cây có thể được chuyển phấn."], rightTitle: "Cạnh tranh", rightPoints: ["Cả hai cần một nguồn lực hữu hạn.", "Kết quả thay đổi theo điều kiện sống."] },
            { layout: "data-chart", title: "Mô hình cây con trong khay giả lập", bars: [{"label": "4 cây/khay", "val": 12, "unit": "cm"}, {"label": "8 cây/khay", "val": 9, "unit": "cm"}, {"label": "16 cây/khay", "val": 6, "unit": "cm"}], insightBody: "Chiều cao trung bình giảm trong ví dụ giả lập; cần kiểm soát nước, ánh sáng và đất." }
          ],
          exercise: { title: "Phân loại quan hệ ong và hoa", context: "Ong lấy mật, phấn có thể được chuyển giữa hoa.", mechanism: "Xem lợi ích ở cả hai phía.", takeaway: "Đây là một ví dụ tương hỗ nếu hai loài cùng có lợi." },
          check: { title: "Loài A có lợi, loài B bị hại khi A sống nhờ B là quan hệ?", options: ["Ký sinh", "Cạnh tranh", "Hội sinh", "Tương hỗ"] },
          notes: [
            { title: "Sức chứa môi trường", lead: "Số cá thể có thể duy trì phụ thuộc tài nguyên và biến động của môi trường." },
            { title: "Quan hệ thay đổi theo bối cảnh", lead: "Hai cây gần nhau có thể cạnh tranh ánh sáng, đồng thời cùng giảm tác động gió." },
            { title: "Đếm có đơn vị", lead: "Mật độ tính trên diện tích hoặc thể tích, cần ghi rõ đơn vị." },
          ]
        },
        {
          name: "Lưới thức ăn và năng lượng",
          question: "Vì sao lưới thức ăn thường hữu ích hơn một chuỗi đơn?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc chiều mũi tên trong lưới", callouts: [{"num": "01", "label": "Sinh vật sản xuất", "text": "Chuyển năng lượng ánh sáng thành năng lượng hóa học."}, {"num": "02", "label": "Mũi tên", "text": "Theo quy ước phổ biến chỉ từ thức ăn tới sinh vật tiêu thụ."}, {"num": "03", "label": "Phân giải", "text": "Vật chất trở lại môi trường qua phân giải."}] },
            { layout: "data-chart", title: "Tháp năng lượng giả định", bars: [{"label": "Sinh vật sản xuất", "val": 10000, "unit": "kJ"}, {"label": "Tiêu thụ bậc 1", "val": 1000, "unit": "kJ"}, {"label": "Tiêu thụ bậc 2", "val": 100, "unit": "kJ"}], insightBody: "Minh họa mức truyền 10% ở mỗi bậc; hiệu suất thực tế có thể khác." }
          ],
          exercise: { title: "Một loài ăn hai nguồn", context: "Nếu sâu giảm, chim còn ăn hạt trong mô hình lưới đã cho.", mechanism: "Theo dõi thêm nhánh hạt → chim.", takeaway: "Ảnh hưởng có thể nhẹ hơn giả thiết chim chỉ ăn sâu." },
          check: { title: "Trong sơ đồ cỏ → châu chấu, chiều mũi tên biểu diễn?", options: ["Chuyển vật chất và năng lượng từ cỏ sang châu chấu", "Cỏ ăn châu chấu", "Cả hai là sinh vật phân giải", "Hai loài có mật độ bằng nhau"] },
          notes: [
            { title: "Năng lượng đi qua, chất dinh dưỡng tuần hoàn", lead: "Năng lượng suy hao dưới dạng nhiệt trong khi các nguyên tố có thể tái sử dụng." },
            { title: "Tháp sinh khối", lead: "Sinh khối phản ánh lượng vật chất sống tại thời điểm đo, khác dòng năng lượng theo thời gian." },
            { title: "Truyền năng lượng không cố định", lead: "Quy tắc 10% là mô hình gần đúng, không phải định luật cho mọi hệ." },
          ]
        },
        {
          name: "Rừng nhiệt đới và đa dạng",
          question: "Đếm số loài đã đủ để mô tả một hệ sinh thái đa dạng chưa?",
          concepts: [
            { layout: "comparison", title: "Giàu loài và độ đồng đều", leftTitle: "Giàu loài", leftPoints: ["Đếm số loài ghi nhận.", "Phụ thuộc nỗ lực khảo sát."], rightTitle: "Đồng đều", rightPoints: ["Xem cá thể phân bố ra sao giữa các loài.", "Một loài áp đảo làm độ đồng đều giảm."] },
            { layout: "process-flow", title: "Khảo sát đa dạng theo ô tiêu chuẩn", steps: [{"step": "Chọn", "title": "Định kích thước ô", "desc": "Dùng ô so sánh được."}, {"step": "Ghi", "title": "Đếm loài và số cá thể", "desc": "Dùng cùng thời gian quan sát."}, {"step": "Đọc", "title": "So sánh nhiều ô", "desc": "Nêu rõ sai lệch có thể có."}] }
          ],
          exercise: { title: "Hai mảnh rừng cùng bốn loài", context: "Ô A có 10–10–10–10 cá thể. Ô B có 37–1–1–1.", mechanism: "Giữ số loài bằng nhau, xem độ chênh số cá thể.", takeaway: "Ô A đồng đều hơn, dù độ giàu loài bằng B." },
          check: { title: "Lấy mẫu ở nhiều ô giúp giảm vấn đề nào?", options: ["Lệch do chọn một điểm không đại diện", "Sinh vật phải ngừng sinh trưởng", "Sai mọi đơn vị đo", "Cần ghi tên loài"] },
          notes: [
            { title: "Hành lang sinh thái", lead: "Kết nối các mảng sinh cảnh có thể hỗ trợ di chuyển giữa chúng." },
            { title: "Một tầng rừng là một môi trường", lead: "Ánh sáng và độ ẩm thay đổi từ tán xuống nền rừng." },
            { title: "So sánh đúng mùa", lead: "Số loài ghi nhận có thể đổi theo mùa và thời điểm trong ngày." },
          ]
        },
        {
          name: "Bảo tồn có theo dõi",
          question: "Dấu hiệu nào cho biết hoạt động phục hồi sinh cảnh thực sự tiến triển?",
          concepts: [
            { layout: "process-flow", title: "Đặt chỉ tiêu cho khu vực phục hồi", steps: [{"step": "Đo gốc", "title": "Ghi hiện trạng trước hành động", "desc": "Ảnh và chỉ số cùng vị trí."}, {"step": "Can thiệp", "title": "Chọn hành động vừa sức", "desc": "Bảo vệ nơi cây tái sinh."}, {"step": "Đo lại", "title": "Theo cùng phương pháp", "desc": "So các kỳ đo đã định."}] },
            { layout: "comparison", title: "Số cây trồng và số cây sống", leftTitle: "Chỉ số đầu vào", leftPoints: ["Đếm cây được trồng trong buổi hoạt động.", "Dễ ghi ngay."], rightTitle: "Chỉ số kết quả", rightPoints: ["Theo dõi cây sống qua mùa khó khăn.", "Đòi hỏi đo lặp lại và ghi diện tích."] }
          ],
          exercise: { title: "Lập nhóm theo dõi ảnh", context: "Nhóm chụp bờ kênh trước và sau một đợt phục hồi.", mechanism: "Giữ góc máy, khoảng cách và thời điểm tương tự.", takeaway: "Ảnh so sánh cùng thước đo rõ hơn cảm nhận." },
          check: { title: "Chỉ số nào phản ánh kết quả sau một mùa khô sát hơn?", options: ["Tỷ lệ cây sống", "Số ảnh đăng trong ngày trồng", "Số nhóm được chia", "Giá mỗi cây lúc mua"] },
          notes: [
            { title: "Rễ ngập mặn và bờ bùn", lead: "Rễ có thể giữ trầm tích, nhưng phục hồi cần tính đến động lực dòng chảy." },
            { title: "Đặt mốc ảnh cố định", lead: "Đánh dấu vị trí chụp để người khác có thể lặp lại." },
            { title: "Giữ sinh cảnh tự nhiên", lead: "Nhiều nơi bảo vệ tái sinh tự nhiên phù hợp hơn trồng cây đồng loạt." },
          ]
        },
      ]
    },
    "sinh-giai-phau": {
      coverIndex: 0,
      introduction: "Đọc các hệ cơ quan từ đường đi của máu, khí và tín hiệu.",
      goals: [
        "Theo dòng máu giữa tim, phổi và mô.",
        "Giải thích vì sao lớp trao đổi khí mỏng.",
        "Nối cung phản xạ với vòng điều hòa cơ thể.",
      ],
      closing: "Hướng đi của một tín hiệu quan trọng ngang với nơi nó bắt đầu.",
      images: [
        illustration({
          file: "Diagram_of_the_human_heart_(cropped).svg", local: "c53f742ef376", author: "Wapcaplet", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", fit: "contain",
          caption: "Sơ đồ cấu tạo tim người",
          observation: "Định vị các ngăn tim và những mạch lớn đi vào, đi ra."
        }),
        illustration({
          file: "Alveolus_diagram.svg", local: "d8f02a25af9b", author: "LadyofHats", license: "Public domain", fit: "contain",
          caption: "Sơ đồ phế nang và mao mạch",
          observation: "Tìm bề mặt tiếp xúc giữa túi khí và dòng máu."
        }),
        illustration({
          file: "Blausen_0657_MultipolarNeuron.png", local: "afa111475177", author: "BruceBlaus", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", fit: "contain",
          caption: "Minh họa một neuron đa cực",
          observation: "Theo hướng từ vùng nhận tín hiệu đến sợi trục dẫn xung."
        }),
        illustration({
          file: "Blausen_0909_WhiteBloodCells.png", local: "6ac6e27d3206", author: "BruceBlaus / Blausen Medical, 2014", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", fit: "contain",
          caption: "Minh họa các loại bạch cầu",
          observation: "Khác biệt hình dạng gợi nhiều vai trò trong đáp ứng miễn dịch."
        }),
        illustration({
          file: "Anatomical_Male_Figure_Showing_Heart,_Lungs,_and_Main_Arteries.jpg", local: "cbbcc56421a4", author: "Leonardo da Vinci", license: "Public domain",
          caption: "Hình giải phẫu tim, phổi và mạch lớn",
          observation: "Các cơ quan được đặt cạnh nhau để thấy mối liên hệ không gian."
        }),
      ],
      chapters: [
        {
          name: "Tim và hai vòng tuần hoàn",
          question: "Máu từ cơ thể trở về tim sẽ đi qua đâu trước khi trở lại động mạch chủ?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc hướng máu qua tim", callouts: [{"num": "01", "label": "Tim phải", "text": "Nhận máu từ cơ thể và bơm đến phổi."}, {"num": "02", "label": "Tim trái", "text": "Nhận máu từ phổi và bơm đi toàn thân."}, {"num": "03", "label": "Van", "text": "Hạn chế dòng máu chảy ngược."}] },
            { layout: "comparison", title: "Động mạch và tĩnh mạch", leftTitle: "Động mạch", leftPoints: ["Dẫn máu ra khỏi tim.", "Động mạch phổi dẫn máu đến phổi."], rightTitle: "Tĩnh mạch", rightPoints: ["Dẫn máu về tim.", "Tĩnh mạch phổi đưa máu về nhĩ trái."] }
          ],
          exercise: { title: "Nối các chặng của một vòng", context: "Bắt đầu từ thất phải, tìm đường đến nhĩ trái.", mechanism: "Đi qua động mạch phổi và mao mạch phổi.", takeaway: "Máu rời phổi qua tĩnh mạch phổi đến nhĩ trái." },
          check: { title: "Mạch máu được gọi là động mạch dựa vào?", options: ["Hướng máu đi ra khỏi tim", "Luôn giàu oxygen", "Luôn có đường kính nhỏ", "Luôn nằm gần bề mặt da"] },
          notes: [
            { title: "Áp lực và bơm máu", lead: "Thất trái có thành dày hơn vì bơm vào vòng tuần hoàn toàn thân." },
            { title: "Mao mạch là nơi trao đổi", lead: "Thành mỏng và mạng lưới rộng hỗ trợ trao đổi với mô." },
            { title: "Tiếng tim", lead: "Tiếng tim thường gắn với hoạt động đóng van." },
          ]
        },
        {
          name: "Hô hấp và phế nang",
          question: "Vì sao cấu trúc phế nang giúp trao đổi khí nhanh?",
          concepts: [
            { layout: "annotated-diagram", title: "Bề mặt trao đổi ở phổi", callouts: [{"num": "01", "label": "Phế nang", "text": "Nhiều túi khí nhỏ tạo diện tích lớn."}, {"num": "02", "label": "Mao mạch", "text": "Dòng máu đi sát bề mặt trao đổi."}, {"num": "03", "label": "Lớp ngăn", "text": "Quãng khuếch tán ngắn hỗ trợ trao đổi khí."}] },
            { layout: "process-flow", title: "Từ khí hít vào đến máu", steps: [{"step": "Thông khí", "title": "Không khí tới phế nang", "desc": "Co cơ hoành giúp lồng ngực nở khi hít vào."}, {"step": "Khuếch tán", "title": "O₂ qua màng trao đổi", "desc": "Theo gradient áp suất riêng phần."}, {"step": "Vận chuyển", "title": "Hemoglobin gắn O₂", "desc": "Máu mang oxygen đến mô."}] }
          ],
          exercise: { title: "Phân biệt hai hiện tượng", context: "Lồng ngực nở và O₂ đi từ phế nang vào máu.", mechanism: "Xác định cái nào là dòng không khí, cái nào qua màng.", takeaway: "Đó lần lượt là thông khí và trao đổi khí." },
          check: { title: "Đặc điểm nào rút ngắn đường đi của khí khi khuếch tán?", options: ["Lớp ngăn phế nang–mao mạch mỏng", "Khí quản dài hơn", "Thành phế nang dày hơn", "Diện tích phế nang nhỏ đi"] },
          notes: [
            { title: "Đường đi của CO₂", lead: "CO₂ đi từ máu mao mạch phổi vào phế nang theo gradient." },
            { title: "Hô hấp tế bào", lead: "Tế bào dùng oxygen trong quá trình giải phóng năng lượng từ chất dinh dưỡng." },
            { title: "Sơ đồ giản lược", lead: "Hình minh họa không thể hiện số lượng thật của phế nang." },
          ]
        },
        {
          name: "Neuron và phản xạ",
          question: "Tại sao rụt tay có thể bắt đầu trước khi ta kịp gọi tên cảm giác nóng?",
          concepts: [
            { layout: "annotated-diagram", title: "Các phần thường thấy của neuron", callouts: [{"num": "01", "label": "Sợi nhánh", "text": "Tiếp nhận nhiều tín hiệu."}, {"num": "02", "label": "Thân tế bào", "text": "Chứa nhân và tích hợp tín hiệu."}, {"num": "03", "label": "Sợi trục", "text": "Dẫn xung đến tế bào đích."}] },
            { layout: "process-flow", title: "Đường đi của phản xạ rút tay", steps: [{"step": "Nhận", "title": "Thụ thể phát hiện kích thích", "desc": "Tín hiệu vào neuron cảm giác."}, {"step": "Xử lý", "title": "Mạch thần kinh trong tủy", "desc": "Tín hiệu chuyển tới neuron vận động."}, {"step": "Đáp ứng", "title": "Cơ co", "desc": "Tay rụt ra, cảm giác được xử lý thêm ở não."}] }
          ],
          exercise: { title: "So phản xạ với hành động có chủ ý", context: "Rụt tay khi chạm nóng và chủ động giơ tay phát biểu.", mechanism: "Tìm vai trò kích thích và quyết định có ý thức.", takeaway: "Rụt tay có thể khởi phát qua mạch phản xạ, giơ tay là chủ ý." },
          check: { title: "Neuron vận động trong cung phản xạ truyền tín hiệu tới?", options: ["Cơ hoặc cơ quan đáp ứng", "Thụ thể da đầu tiên", "Hồng cầu", "Phế nang"] },
          notes: [
            { title: "Synapse và chiều truyền", lead: "Nhiều synapse hóa học truyền theo chiều từ đầu tận cùng tới tế bào sau synapse." },
            { title: "Myelin", lead: "Lớp myelin giúp tín hiệu dẫn nhanh hơn dọc nhiều sợi trục." },
            { title: "Cảm giác và phản xạ", lead: "Não vẫn nhận thông tin cảm giác trong tình huống có phản xạ." },
          ]
        },
        {
          name: "Miễn dịch và cân bằng nội môi",
          question: "Cơ thể có những lớp đáp ứng khác nhau như thế nào khi gặp tác nhân lạ?",
          concepts: [
            { layout: "comparison", title: "Miễn dịch bẩm sinh và thích ứng", leftTitle: "Bẩm sinh", leftPoints: ["Hàng rào da và nhiều đáp ứng nhanh.", "Nhận diện các mẫu chung."], rightTitle: "Thích ứng", rightPoints: ["Đáp ứng đặc hiệu hơn với kháng nguyên.", "Có thể tạo trí nhớ miễn dịch."] },
            { layout: "process-flow", title: "Một vòng phản hồi âm", steps: [{"step": "Lệch", "title": "Đại lượng thay đổi", "desc": "Ví dụ thân nhiệt có xu hướng tăng."}, {"step": "Nhận", "title": "Cơ thể phát hiện thay đổi", "desc": "Tín hiệu điều phối đáp ứng."}, {"step": "Bù", "title": "Tăng tỏa nhiệt", "desc": "Đáp ứng làm giảm độ lệch ban đầu."}] }
          ],
          exercise: { title: "Giải thích ra mồ hôi khi vận động", context: "Nhiệt sinh ra trong cơ tăng lên.", mechanism: "Khi mồ hôi bay hơi, năng lượng nhiệt được lấy khỏi da.", takeaway: "Đó là một cơ chế góp phần hạ nhiệt." },
          check: { title: "Phản hồi âm có xu hướng làm gì với thay đổi ban đầu?", options: ["Làm giảm độ lệch", "Luôn khuếch đại độ lệch", "Luôn ngừng mọi hoạt động tế bào", "Biến nhiệt thành đường"] },
          notes: [
            { title: "Bạch cầu có nhiều nhóm", lead: "Một ảnh hiển vi có thể cho thấy hình thái nhưng phân loại cần dựa thêm vào tiêu chí phù hợp." },
            { title: "Trí nhớ miễn dịch", lead: "Đáp ứng với kháng nguyên đã gặp có thể nhanh và mạnh hơn." },
            { title: "Điểm đặt không tuyệt đối", lead: "Các đại lượng nội môi dao động trong khoảng sinh lý." },
          ]
        },
        {
          name: "Đọc dữ liệu sinh lý học đường",
          question: "Số đo trước và sau hoạt động cho biết gì nếu ta giữ cùng cách đo?",
          concepts: [
            { layout: "data-chart", title: "Nhịp tim giả lập qua ba thời điểm", bars: [{"label": "Trước", "val": 72, "unit": "lần/phút"}, {"label": "Vừa xong", "val": 112, "unit": "lần/phút"}, {"label": "Nghỉ 3 phút", "val": 84, "unit": "lần/phút"}], insightBody: "Số minh họa cho xu hướng hồi phục, không dùng để chẩn đoán." },
            { layout: "comparison", title: "Một lần đo và chuỗi đo", leftTitle: "Một lần", leftPoints: ["Chụp lại một thời điểm.", "Dễ chịu ảnh hưởng tư thế hoặc cách đếm."], rightTitle: "Chuỗi đo", rightPoints: ["Cho thấy mức biến động và xu hướng.", "Cần giữ điều kiện đo có thể so sánh."] }
          ],
          exercise: { title: "Viết nhãn cho biểu đồ nhịp", context: "So nhịp trước và sau cùng một hoạt động mức nhẹ.", mechanism: "Ghi thời điểm, trạng thái và đơn vị lần/phút.", takeaway: "Người đọc biết từng giá trị thuộc thời điểm nào." },
          check: { title: "Yếu tố nào cần giữ nhất quán để so các lần đo?", options: ["Cách đo và thời điểm tương đối", "Màu bút", "Tên biểu đồ", "Thứ tự tên nhóm"] },
          notes: [
            { title: "Đọc kết quả trong bối cảnh", lead: "Vận động, cảm xúc và thời điểm đều có thể ảnh hưởng số đo." },
            { title: "Mô hình hóa bằng dữ liệu giả lập", lead: "Lớp có thể luyện đọc đồ thị mà không công bố dữ liệu riêng của từng bạn." },
            { title: "Kết nối hệ cơ quan", lead: "Khi vận động, tuần hoàn và hô hấp cùng hỗ trợ vận chuyển oxygen và CO₂." },
          ]
        },
      ]
    },
    "ly-luong-tu": {
      coverIndex: 4,
      introduction: "Từ vân sáng tối trên màn đến photon, quang phổ và tia laser.",
      goals: [
        "Giải thích vân bằng hiệu đường đi.",
        "Liên hệ tần số với năng lượng một photon.",
        "Đọc vạch phổ như dấu hiệu chuyển mức.",
      ],
      closing: "Hỏi phép đo đang cần mô hình sóng hay mô hình lượng tử.",
      images: [
        illustration({
          file: "Young_Double_Slit.svg", local: "b4e5ed6dec66", author: "Bibekbabupokharel", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", fit: "contain",
          caption: "Sơ đồ giao thoa hai khe",
          observation: "Theo hai đường truyền tới màn và vị trí các vân."
        }),
        illustration({
          file: "PrismDispersion.png", local: "5853d0f745da", author: "PhysicsEtc", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", fit: "contain",
          caption: "Ánh sáng tách màu qua lăng kính",
          observation: "Thứ tự màu gợi dải bước sóng và năng lượng photon khác nhau."
        }),
        illustration({
          file: "Solar_cell.png", local: "e51382bee8c8", author: "Unknown authorUnknown author", license: "Public domain", fit: "contain",
          caption: "Một tế bào quang điện",
          observation: "Quan sát bề mặt nhận sáng và các phần thu dòng của tế bào."
        }),
        illustration({
          file: "MHL.png", local: "9ce1aea6ba39", author: "Philips Lighting", license: "CC BY-SA 2.5 nl", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/nl/deed.en", fit: "contain",
          caption: "Các vạch trong một phổ phát xạ",
          observation: "Vị trí vạch có thể đối chiếu theo bước sóng, ngoài việc nhận biết màu."
        }),
        illustration({
          file: "Guiding_the_Milky_Way_(potw2222a).jpg", local: "12baa6627e3c", author: "ESO / A. Ghizzi Panizza", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0",
          caption: "Laser dẫn đường quan sát thiên văn",
          observation: "Chùm hẹp cho thấy tính định hướng trong một ứng dụng thực tế."
        }),
      ],
      chapters: [
        {
          name: "Giao thoa và nhiễu xạ",
          question: "Vì sao hai vùng ánh sáng chồng lên nhau có thể cho một vân tối?",
          concepts: [
            { layout: "annotated-diagram", title: "Theo dấu đường đi qua hai khe", callouts: [{"num": "01", "label": "Nguồn", "text": "Chiếu tới hai khe bằng ánh sáng phù hợp."}, {"num": "02", "label": "Hai khe", "text": "Tạo hai sóng có hiệu pha ổn định."}, {"num": "03", "label": "Màn", "text": "Vân sáng và tối ứng với cách sóng chồng nhau."}] },
            { layout: "formula-spotlight", title: "Khoảng vân trong thí nghiệm Young", formula: "i = λD/a", annotations: [{"tag": "λ", "text": "Bước sóng trong môi trường xét."}, {"tag": "D và a", "text": "Khoảng cách tới màn và khoảng cách hai khe."}, {"tag": "Điều kiện", "text": "Màn xa, xét gần trục theo xấp xỉ góc nhỏ."}] }
          ],
          exercise: { title: "Tăng khoảng cách tới màn", context: "D tăng gấp đôi, λ và a giữ nguyên.", mechanism: "Đọc tỉ lệ thuận trong i=λD/a.", takeaway: "Khoảng vân cũng tăng gấp đôi." },
          check: { title: "Giữ λ và D, nếu hai khe xa nhau hơn thì khoảng vân?", options: ["Giảm", "Tăng", "Không đổi", "Luôn bằng bước sóng"] },
          notes: [
            { title: "Điều kiện vân sáng", lead: "Hai nguồn cùng pha cho cực đại khi hiệu đường đi bằng một số nguyên lần λ." },
            { title: "Nhiễu xạ qua khe hẹp", lead: "Khe càng hẹp so với λ, góc loe của miền trung tâm thường càng lớn." },
            { title: "Đọc được gì từ vân tối?", lead: "Vân tối thể hiện biên độ tổng nhỏ do chồng sóng ngược pha." },
          ]
        },
        {
          name: "Photon và năng lượng",
          question: "Ánh sáng tím và ánh sáng đỏ khác nhau thế nào về năng lượng mỗi photon?",
          concepts: [
            { layout: "formula-spotlight", title: "Năng lượng lượng tử ánh sáng", formula: "E = hf = hc/λ", annotations: [{"tag": "h", "text": "Hằng số Planck."}, {"tag": "f", "text": "Tần số ánh sáng."}, {"tag": "λ", "text": "Dùng bước sóng chân không trong biểu thức hc/λ."}] },
            { layout: "comparison", title: "Photon và chùm sáng", leftTitle: "Mỗi photon", leftPoints: ["Năng lượng phụ thuộc tần số.", "Bước sóng ngắn hơn cho photon năng lượng cao hơn."], rightTitle: "Cả chùm", rightPoints: ["Công suất phụ thuộc năng lượng qua mỗi giây.", "Cường độ có thể tăng bằng cách tăng số photon tới."] }
          ],
          exercise: { title: "So 400 nm với 800 nm", context: "Tính tỉ số năng lượng hai photon trong chân không.", mechanism: "Dùng E tỉ lệ nghịch với λ.", takeaway: "Photon 400 nm có năng lượng gấp đôi photon 800 nm." },
          check: { title: "Tăng cường độ một chùm đơn sắc mà giữ f cố định thì E mỗi photon?", options: ["Không đổi", "Gấp đôi", "Giảm một nửa", "Bằng 0"] },
          notes: [
            { title: "Đổi nanomet ra mét", lead: "1 nm bằng 10⁻⁹ m, cần đổi trước khi thay số SI." },
            { title: "Nguồn có nhiều bước sóng", lead: "Phổ mô tả năng lượng hoặc cường độ theo bước sóng, tùy cách ghi trục." },
            { title: "Hằng số và đại lượng", lead: "h không thay đổi khi thay màu nguồn; f và E thì có thể đổi." },
          ]
        },
        {
          name: "Quang điện và pin mặt trời",
          question: "Tại sao tăng độ sáng không thay được việc chọn tần số vượt ngưỡng trong quang điện ngoài?",
          concepts: [
            { layout: "formula-spotlight", title: "Năng lượng electron quang điện", formula: "Kₘₐₓ = hf − A", annotations: [{"tag": "A", "text": "Công thoát của vật liệu."}, {"tag": "Ngưỡng", "text": "hf≥A thì một photon đủ năng lượng thoát electron."}, {"tag": "Phần dư", "text": "Năng lượng tối đa còn lại là động năng."}] },
            { layout: "process-flow", title: "Ánh sáng tạo dòng trong pin quang điện", steps: [{"step": "Hấp thụ", "title": "Photon truyền năng lượng", "desc": "Photon đủ năng lượng có thể tạo cặp hạt tải."}, {"step": "Phân tách", "title": "Điện trường nội tách điện tích", "desc": "Giảm tái hợp gần tiếp giáp."}, {"step": "Thu dòng", "title": "Mạch ngoài nhận dòng", "desc": "Công suất tùy tải và điều kiện chiếu."}] }
          ],
          exercise: { title: "Phân biệt hai thay đổi của nguồn", context: "Thử tưởng tượng chùm photon dưới ngưỡng rồi tăng số photon.", mechanism: "Trong mô hình quang điện một photon, xét từng hf.", takeaway: "Nhiều photon dưới ngưỡng vẫn không bù thiếu năng lượng của từng photon." },
          check: { title: "Điều gì quyết định tần số ngưỡng quang điện ngoài?", options: ["Công thoát của vật liệu", "Diện tích của màn quan sát", "Khoảng cách hai khe", "Màu của dây nối"] },
          notes: [
            { title: "Mạch hở và công suất", lead: "Có hiệu điện thế mạch hở, nhưng mạch ngoài không tải dòng nên công suất tải bằng 0." },
            { title: "Hiệu suất không bằng 100%", lead: "Một phần ánh sáng phản xạ, không hấp thụ hoặc biến thành nhiệt." },
            { title: "Vì sao bóng râm quan trọng?", lead: "Giảm bức xạ hữu ích có thể làm giảm dòng và công suất của tấm pin." },
          ]
        },
        {
          name: "Mức năng lượng và quang phổ",
          question: "Tại sao nguyên tử có thể phát ra những vạch màu rời rạc?",
          concepts: [
            { layout: "formula-spotlight", title: "Một bước nhảy, một photon", formula: "hf = Ecao − Ethấp", annotations: [{"tag": "Phát xạ", "text": "Nguyên tử chuyển từ mức cao xuống thấp."}, {"tag": "Hấp thụ", "text": "Chiều ngược có thể cần photon đúng năng lượng."}, {"tag": "Tần số", "text": "Mỗi hiệu năng lượng tương ứng một tần số."}] },
            { layout: "comparison", title: "Phổ liên tục và phổ vạch", leftTitle: "Liên tục", leftPoints: ["Trải trên một dải bước sóng.", "Thường thấy từ vật nóng đặc."], rightTitle: "Vạch", rightPoints: ["Có các bước sóng rời rạc.", "Khí loãng kích thích có phổ phát xạ đặc trưng."] }
          ],
          exercise: { title: "Đổi từ hiệu năng lượng sang màu", context: "Hai chuyển mức có hiệu năng lượng 2 eV và 3 eV.", mechanism: "Dùng E=hf=hc/λ.", takeaway: "Chuyển mức 3 eV cho photon bước sóng ngắn hơn." },
          check: { title: "Vạch phát xạ của nguyên tử xuất hiện khi electron chuyển?", options: ["Từ mức cao xuống mức thấp", "Từ mức thấp lên mức cao", "Giữa hai mức có cùng năng lượng", "Ra khỏi hạt nhân"] },
          notes: [
            { title: "Sử dụng dấu hiệu phổ", lead: "Nhiều vạch trùng với mẫu giúp nhận diện chất chắc hơn một vạch đơn." },
            { title: "Bohr và phạm vi mô hình", lead: "Mô hình Bohr mô tả tốt các mức của hệ giống hydrogen ở mức đơn giản." },
            { title: "Phổ hấp thụ", lead: "Vạch tối có thể xuất hiện khi khí phía trước hấp thụ ở một số bước sóng." },
          ]
        },
        {
          name: "Laser và ứng dụng",
          question: "Điều gì giúp nhiều chùm laser có hướng truyền rất hẹp?",
          concepts: [
            { layout: "process-flow", title: "Từ kích thích đến chùm ra", steps: [{"step": "Bơm", "title": "Đưa năng lượng vào môi trường", "desc": "Tạo điều kiện cho phát xạ kích thích."}, {"step": "Khuếch đại", "title": "Photon kích thích phát xạ phù hợp", "desc": "Ánh sáng tích lũy trong buồng cộng hưởng."}, {"step": "Thoát", "title": "Một phần đi qua gương bán phản xạ", "desc": "Hình thành chùm ra."}] },
            { layout: "comparison", title: "Nguồn laser và đèn thường", leftTitle: "Laser", leftPoints: ["Có thể cho chùm hẹp và độ kết hợp cao.", "Thường tập trung năng lượng theo hướng."], rightTitle: "Đèn thường", rightPoints: ["Ánh sáng thường lan nhiều hướng.", "Phổ có thể rộng hơn nhiều."] }
          ],
          exercise: { title: "Chọn phép đo từ xa", context: "Thiết bị phát xung và nhận phản xạ về sau thời gian t.", mechanism: "Ánh sáng đi cả lượt tới lẫn lượt về.", takeaway: "Khoảng cách gần đúng bằng ct/2." },
          check: { title: "Vì sao chia cho 2 khi tính khoảng cách bằng thời gian khứ hồi?", options: ["Xung ánh sáng đi rồi quay lại", "Ánh sáng truyền chậm một nửa", "Thiết bị có hai màu", "Chỉ nửa xung được phát"] },
          notes: [
            { title: "Laser trong máy quét", lead: "Chùm hẹp hỗ trợ chiếu lên từng vùng nhỏ trên bề mặt." },
            { title: "Giới hạn của tốc độ c", lead: "Công thức ct/2 là gần đúng trong không khí; môi trường khác cần tốc độ phù hợp." },
            { title: "So nguồn theo mục đích", lead: "Chiếu sáng phòng ưu tiên vùng sáng rộng; đo hướng ưu tiên chùm hẹp." },
          ]
        },
      ]
    },
    "ly-thien-van": {
      coverIndex: 0,
      introduction: "Một đường rơi có thể ôm quanh Trái Đất. Một bức ảnh có thể mở ra câu hỏi về hố đen.",
      goals: [
        "Tính tỉ lệ lực hấp dẫn theo bán kính.",
        "Đọc chu kỳ, cận điểm và viễn điểm của quỹ đạo.",
        "Phân biệt ảnh quan sát với mô hình giải thích.",
      ],
      closing: "Đọc quỹ đạo từ tâm và đọc ảnh từ dải bước sóng.",
      images: [
        illustration({
          file: "The_Earth_seen_from_Apollo_17.jpg", local: "067a7698c107", author: "NASA / Apollo 17 crew", license: "Public domain",
          caption: "Trái Đất do phi hành đoàn Apollo 17 chụp",
          observation: "Ảnh cho cái nhìn toàn cầu; mô hình hấp dẫn còn cần khối lượng và khoảng cách."
        }),
        illustration({
          file: "Kepler_laws_diagram.svg", local: "0ced0f1c3fb2", author: "Hankwang", license: "CC BY 2.5", licenseUrl: "https://creativecommons.org/licenses/by/2.5", fit: "contain",
          caption: "Sơ đồ ba định luật Kepler",
          observation: "Chú ý tiêu điểm của ellipse và các miền diện tích được quét."
        }),
        illustration({
          file: "The_station_pictured_from_the_SpaceX_Crew_Dragon_5.jpg", local: "acc9b9fb8ebf", author: "NASA", license: "Public domain",
          caption: "Trạm Vũ trụ Quốc tế nhìn từ Crew Dragon",
          observation: "Trạm và phi hành gia duy trì chuyển động quỹ đạo quanh Trái Đất."
        }),
        illustration({
          file: "Black_hole_-_Messier_87_crop_max_res.jpg", local: "be8e6dd4ec96", author: "Event Horizon Telescope Collaboration", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0",
          caption: "Ảnh vùng gần hố đen M87* của EHT",
          observation: "Vòng sáng đến từ vật chất nóng quanh vùng tối, qua mô hình quan sát."
        }),
        illustration({
          file: "Hubble_2009_close-up_2.jpg", local: "6b94223d380a", author: "NASA", license: "Public domain",
          caption: "Kính viễn vọng không gian Hubble",
          observation: "Công cụ thu tín hiệu ở những dải bước sóng xác định để tạo ảnh và phổ."
        }),
      ],
      chapters: [
        {
          name: "Lực hấp dẫn và chuyển động",
          question: "Mặt Trăng đang rơi về phía Trái Đất như thế nào mà vẫn giữ quỹ đạo?",
          concepts: [
            { layout: "formula-spotlight", title: "Lực hấp dẫn giữa hai khối lượng điểm", formula: "F = Gm₁m₂/r²", annotations: [{"tag": "r", "text": "Khoảng cách giữa hai khối lượng điểm."}, {"tag": "Hướng", "text": "Hai lực hút có cùng độ lớn, ngược hướng."}, {"tag": "Tỉ lệ", "text": "r gấp đôi thì F còn một phần tư."}] },
            { layout: "comparison", title: "Khối lượng và trọng lực", leftTitle: "Khối lượng", leftPoints: ["Đo bằng kilogram.", "Giữ nguyên khi đổi nơi đặt vật."], rightTitle: "Trọng lực", rightPoints: ["Lực hấp dẫn tác dụng tại vị trí xét.", "Độ lớn phụ thuộc gia tốc trọng trường."] }
          ],
          exercise: { title: "So lực ở hai bán kính", context: "Một vệ tinh ở khoảng cách R tính từ tâm và một ở 2R, cùng khối lượng.", mechanism: "Đọc quy luật nghịch đảo bình phương.", takeaway: "Vệ tinh xa hơn chịu lực bằng 1/4 vệ tinh gần." },
          check: { title: "Trong F=Gm₁m₂/r², r đối với vệ tinh gần đúng là?", options: ["Khoảng cách từ tâm Trái Đất tới vệ tinh", "Độ cao từ mặt đất", "Bán kính vệ tinh", "Độ dài quỹ đạo trong một giây"] },
          notes: [
            { title: "Vì sao vệ tinh vẫn “rơi”?", lead: "Lực hấp dẫn liên tục bẻ hướng vận tốc, nên quỹ đạo có thể ôm quanh Trái Đất." },
            { title: "Gia tốc với khoảng cách", lead: "Ở mô hình cầu đối xứng, g=GM/r² bên ngoài Trái Đất." },
            { title: "Dùng đúng đơn vị", lead: "r tính bằng mét khi dùng G theo hệ SI." },
          ]
        },
        {
          name: "Ba định luật Kepler",
          question: "Hành tinh đi nhanh nhất ở gần hay xa Mặt Trời nhất?",
          concepts: [
            { layout: "annotated-diagram", title: "Ba chi tiết trên quỹ đạo ellipse", callouts: [{"num": "01", "label": "Tiêu điểm", "text": "Mặt Trời nằm ở một tiêu điểm."}, {"num": "02", "label": "Cận điểm", "text": "Điểm gần Mặt Trời nhất."}, {"num": "03", "label": "Viễn điểm", "text": "Điểm xa Mặt Trời nhất."}] },
            { layout: "formula-spotlight", title: "Chu kỳ tăng theo kích thước quỹ đạo", formula: "T² ∝ a³", annotations: [{"tag": "T", "text": "Chu kỳ quay quanh vật trung tâm."}, {"tag": "a", "text": "Bán trục lớn của quỹ đạo."}, {"tag": "Phạm vi", "text": "So các vật có khối lượng nhỏ quanh cùng vật trung tâm."}] }
          ],
          exercise: { title: "Tăng bán trục lớn bốn lần", context: "So hai vật nhẹ quanh Mặt Trời, a₂=4a₁.", mechanism: "Lấy căn của tỷ lệ lập phương.", takeaway: "T₂=8T₁." },
          check: { title: "Theo định luật diện tích, tại cận điểm hành tinh thường?", options: ["Chuyển động nhanh hơn tại viễn điểm", "Chậm hơn tại viễn điểm", "Dừng lại", "Luôn chạy cùng tốc độ"] },
          notes: [
            { title: "Ellipse không phải vòng tròn lệch tâm", lead: "Ellipse có hai tiêu điểm; đường tròn là trường hợp đặc biệt." },
            { title: "Diện tích quét bằng nhau", lead: "Trong hai khoảng thời gian bằng nhau, bán kính nối hành tinh với Mặt Trời quét các diện tích bằng nhau." },
            { title: "Một năm và một vòng", lead: "Chu kỳ quỹ đạo khác thời gian thiên thể tự quay quanh trục." },
          ]
        },
        {
          name: "Vệ tinh và quỹ đạo",
          question: "Cùng một độ cao, đổi vận tốc ban đầu có thể làm đổi quỹ đạo ra sao?",
          concepts: [
            { layout: "formula-spotlight", title: "Tốc độ trên quỹ đạo tròn lý tưởng", formula: "v = √(GM/r)", annotations: [{"tag": "Cân bằng phương trình", "text": "Đặt GMm/r²=mv²/r."}, {"tag": "r", "text": "Tính từ tâm vật trung tâm."}, {"tag": "Kết quả", "text": "Không phụ thuộc khối lượng vệ tinh trong mô hình."}] },
            { layout: "comparison", title: "Quỹ đạo thấp và địa tĩnh", leftTitle: "Quỹ đạo thấp", leftPoints: ["Chu kỳ thường ngắn hơn nhiều so với một ngày.", "Nhìn một vùng trong từng lượt bay qua."], rightTitle: "Địa tĩnh", rightPoints: ["Quỹ đạo tròn trên mặt phẳng xích đạo, cùng chiều quay.", "Có vẻ đứng yên đối với người quan sát trên mặt đất."] }
          ],
          exercise: { title: "Giải thích trạng thái lơ lửng", context: "Phi hành gia và trạm cùng rơi theo quỹ đạo.", mechanism: "Xét chuyển động tương đối bên trong trạm.", takeaway: "Gia tốc hấp dẫn vẫn tồn tại, nhưng sàn ít tạo lực đỡ." },
          check: { title: "Vệ tinh địa tĩnh cần có chu kỳ gần với?", options: ["Chu kỳ tự quay của Trái Đất so với các sao", "Chu kỳ Mặt Trăng quanh Trái Đất", "Một năm Trái Đất", "Chu kỳ tự quay của Mặt Trời"] },
          notes: [
            { title: "Thoát và quay tròn", lead: "Tại cùng r, tốc độ thoát lý tưởng lớn hơn tốc độ quỹ đạo tròn √2 lần." },
            { title: "Quan sát lại một vùng", lead: "Vệ tinh quỹ đạo thấp cần nhiều lượt đi qua để phủ vùng rộng." },
            { title: "Ổn định quỹ đạo", lead: "Nhiễu động và khí quyển loãng có thể làm quỹ đạo thật khác mô hình." },
          ]
        },
        {
          name: "Sao và hố đen",
          question: "Điểm kết thúc của một ngôi sao phụ thuộc vào những yếu tố nào?",
          concepts: [
            { layout: "process-flow", title: "Một nhánh tiến hóa của sao khối lượng lớn", steps: [{"step": "Dãy chính", "title": "Tổng hợp hydrogen", "desc": "Năng lượng cân bằng xu hướng co hấp dẫn."}, {"step": "Cuối đời", "title": "Lõi thay đổi nhiên liệu", "desc": "Cấu trúc và các lớp ngoài biến đổi."}, {"step": "Tàn dư", "title": "Lõi có thể sụp đổ", "desc": "Có thể thành sao neutron hoặc hố đen."}] },
            { layout: "comparison", title: "Hố đen và ảnh quan sát hố đen", leftTitle: "Hố đen", leftPoints: ["Bên trong chân trời sự kiện, ánh sáng không thoát ra ngoài.", "Không có bề mặt phát sáng thông thường."], rightTitle: "Ảnh quan sát", rightPoints: ["Có thể ghi bức xạ từ plasma xung quanh.", "Vùng tối và vòng sáng cần mô hình để giải thích."] }
          ],
          exercise: { title: "Đọc một ảnh chụp vùng gần hố đen", context: "Một vòng sáng bao quanh vùng tối.", mechanism: "Phân biệt nguồn phát sáng và vật thể gây hiệu ứng hấp dẫn.", takeaway: "Không chú thích vòng sáng là bề mặt của hố đen." },
          check: { title: "Ánh sáng trong nhiều ảnh hố đen chủ yếu đến từ?", options: ["Vật chất nóng xung quanh", "Ánh sáng phát từ trong chân trời sự kiện", "Bề mặt rắn của hố đen", "Vệ tinh phản chiếu phía sau"] },
          notes: [
            { title: "Hố đen khác “máy hút”", lead: "Ở xa, lực hấp dẫn phụ thuộc khối lượng và khoảng cách như các thiên thể khác." },
            { title: "Dấu vết tiến hóa", lead: "Màu và phổ sao cung cấp thông tin về nhiệt độ, thành phần và giai đoạn." },
            { title: "Vũ trụ giãn nở", lead: "Sự giãn nở mô tả khoảng cách lớn giữa các thiên hà thay đổi theo thời gian." },
          ]
        },
        {
          name: "Quan sát và bằng chứng vũ trụ",
          question: "Một kính thiên văn thu được nhiều loại bằng chứng nào ngoài ảnh đẹp?",
          concepts: [
            { layout: "process-flow", title: "Từ tín hiệu tới kết luận", steps: [{"step": "Thu", "title": "Đo ở dải bước sóng xác định", "desc": "Ghi điều kiện và công cụ đo."}, {"step": "Hiệu chỉnh", "title": "Xử lý nền và sai lệch", "desc": "Giữ bản ghi về các bước xử lý."}, {"step": "Giải thích", "title": "So với mô hình và lần đo khác", "desc": "Nêu phần còn chưa chắc."}] },
            { layout: "comparison", title: "Ảnh và phổ ánh sáng", leftTitle: "Ảnh", leftPoints: ["Cho vị trí và cấu trúc trên bầu trời.", "Màu có thể được gán để biểu diễn các dải."], rightTitle: "Phổ", rightPoints: ["Cho cường độ theo bước sóng.", "Các vạch hỗ trợ nhận diện thành phần."] }
          ],
          exercise: { title: "Chú thích ảnh màu tổ hợp", context: "Ảnh ghép ba bộ lọc, một kênh thu hồng ngoại.", mechanism: "Ghi rõ màu nào đại diện dải bước sóng nào.", takeaway: "Người xem hiểu các màu là cách thể hiện dữ liệu." },
          check: { title: "Thông tin nào hữu ích khi so hai ảnh thiên văn?", options: ["Dải bước sóng và cách xử lý", "Chỉ màu khung ảnh", "Tên người đang thuyết trình", "Số từ trong chú thích"] },
          notes: [
            { title: "Chia trục thời gian quan sát", lead: "Chuỗi ảnh cùng vùng có thể phát hiện vật thể biến đổi." },
            { title: "Kính trên quỹ đạo", lead: "Có thể tránh nhiều cản trở từ khí quyển, nhưng vẫn có giới hạn thiết bị." },
            { title: "Đọc mô hình và dữ liệu cùng nhau", lead: "Một mô hình tốt cần đối chiếu với quan sát độc lập có thể lặp lại." },
          ]
        },
      ]
    },
    "ly-dien-tu": {
      coverIndex: 3,
      introduction: "Theo năng lượng từ điện trường, qua cuộn dây, đến một turbine gió.",
      goals: [
        "Xác định chiều lực từ dấu điện tích và hướng trường.",
        "Nhận ra biến thiên từ thông.",
        "Giải thích cách truyền tải giảm hao phí.",
      ],
      closing: "Đặt tên đại lượng, hướng và đơn vị trước khi thay số.",
      images: [
        illustration({
          file: "VFPt_charges_plus_minus_thumb.svg", local: "c10ceaff2a23", author: "Geek3", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", fit: "contain",
          caption: "Đường sức quanh hai điện tích trái dấu",
          observation: "Theo mũi tên từ điện tích dương về phía điện tích âm."
        }),
        illustration({
          file: "Magnet0873.png", local: "5c4c09d1d865", author: "Newton Henry Black", license: "Public domain", fit: "contain",
          caption: "Mạt sắt tạo hình quanh nam châm",
          observation: "Bố trí mạt sắt gợi hình dạng trường, còn chiều cần chỉ báo riêng."
        }),
        illustration({
          file: "Induction_experiment.png", local: "f709d19461a0", author: "J. Lambert", license: "Public domain", fit: "contain",
          caption: "Thí nghiệm cảm ứng điện từ của Faraday",
          observation: "Quan sát cuộn dây và bộ phận dùng để phát hiện đáp ứng điện."
        }),
        illustration({
          file: "Windmills_D1-D4_(Thornton_Bank).jpg", local: "2ef73a9f7b53", author: "Hans Hillewaert", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Turbine gió ngoài khơi Thornton Bank",
          observation: "Gió làm quay cánh; việc phát và đưa điện lên lưới cần các biến đổi tiếp theo."
        }),
        illustration({
          file: "YX360TRF(Sanwa).JPG", local: "f37ac490b6b5", author: "KZang", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          caption: "Đồng hồ đo điện kim Sanwa",
          observation: "Đọc vị trí núm chọn thang trước khi đọc số và đơn vị."
        }),
      ],
      chapters: [
        {
          name: "Điện trường và mạch một chiều",
          question: "Tại sao phải nói cả độ lớn lẫn hướng khi mô tả điện trường?",
          concepts: [
            { layout: "formula-spotlight", title: "Định nghĩa điện trường qua lực", formula: "E⃗ = F⃗/q₀", annotations: [{"tag": "q₀", "text": "Điện tích thử dương, đủ nhỏ."}, {"tag": "Đơn vị", "text": "N/C hoặc V/m."}, {"tag": "Hướng", "text": "Cùng hướng lực lên điện tích thử dương."}] },
            { layout: "annotated-diagram", title: "Đọc đường sức điện", callouts: [{"num": "01", "label": "Chiều", "text": "Chỉ chiều lực lên điện tích dương."}, {"num": "02", "label": "Nguồn", "text": "Đi ra từ điện tích dương trong hình đơn giản."}, {"num": "03", "label": "Mật độ", "text": "Đường dày hơn minh họa điện trường mạnh hơn."}] }
          ],
          exercise: { title: "Đổi dấu điện tích thử", context: "Điện trường hướng sang phải, đặt electron vào vùng đó.", mechanism: "Lực điện bằng qE và q âm.", takeaway: "Lực tác dụng lên electron hướng sang trái." },
          check: { title: "Dòng điện quy ước trong dây kim loại có chiều thế nào so với dịch chuyển electron?", options: ["Ngược chiều", "Cùng chiều", "Vuông góc", "Chỉ cùng chiều nếu điện trở nhỏ"] },
          notes: [
            { title: "Suất điện động và điện áp đầu cực", lead: "Điện áp đầu cực có thể giảm khi nguồn cấp dòng nếu có điện trở trong." },
            { title: "Điện trường và đường sức", lead: "Đường sức là cách biểu diễn, không phải dây vật chất." },
            { title: "Ghép điện trở nối tiếp", lead: "Cùng một dòng chạy qua các điện trở, tổng điện áp bằng tổng độ sụt áp." },
          ]
        },
        {
          name: "Từ trường và lực Lorentz",
          question: "Điện tích chuyển động song song với từ trường có bị lực từ bẻ hướng không?",
          concepts: [
            { layout: "formula-spotlight", title: "Độ lớn lực từ lên điện tích", formula: "F = ∣q∣vB sin θ", annotations: [{"tag": "θ", "text": "Góc giữa vận tốc và từ trường."}, {"tag": "Cực đại", "text": "Khi v vuông góc B."}, {"tag": "Bằng 0", "text": "Khi v cùng phương B."}] },
            { layout: "comparison", title: "Điện trường và từ trường tác dụng lên hạt", leftTitle: "Điện trường", leftPoints: ["Có thể tác dụng cả lên hạt đứng yên.", "Có thể làm đổi động năng."], rightTitle: "Từ trường tĩnh", rightPoints: ["Lực từ lên hạt cần thành phần vận tốc vuông góc B.", "Lực vuông góc v nên riêng lực từ không sinh công."] }
          ],
          exercise: { title: "Chọn hướng vận tốc cho lực mạnh nhất", context: "B giữ nguyên và tốc độ v không đổi.", mechanism: "So giá trị sin θ.", takeaway: "Góc 90° cho lực từ lớn nhất." },
          check: { title: "Lực từ lên hạt đứng yên trong từ trường đều bằng?", options: ["0", "qB", "q/B", "B/q"] },
          notes: [
            { title: "La bàn dùng gì?", lead: "Kim từ có xu hướng quay theo hướng từ trường tại chỗ." },
            { title: "Vận tốc đổi hướng", lead: "Độ lớn tốc độ có thể giữ nguyên dù vectơ vận tốc đổi." },
            { title: "Đường sức từ", lead: "Các đường sức từ khép kín, khác cách vẽ đường sức điện từ một điện tích điểm." },
          ]
        },
        {
          name: "Cảm ứng và dòng xoay chiều",
          question: "Vì sao nam châm đứng yên gần cuộn dây có thể không sinh suất điện động?",
          concepts: [
            { layout: "formula-spotlight", title: "Định luật Faraday–Lenz", formula: "ε = −N·dΦ/dt", annotations: [{"tag": "N", "text": "Số vòng có cùng từ thông mỗi vòng."}, {"tag": "Φ", "text": "Từ thông phụ thuộc B, diện tích và góc."}, {"tag": "Dấu âm", "text": "Chiều cảm ứng chống lại biến thiên từ thông."}] },
            { layout: "process-flow", title: "Một vòng quay trong máy phát", steps: [{"step": "Quay", "title": "Cuộn dây đổi góc", "desc": "Từ thông thay đổi."}, {"step": "Cảm ứng", "title": "Xuất hiện suất điện động", "desc": "Chiều đổi theo nửa chu kỳ."}, {"step": "Tải", "title": "Nối mạch ngoài", "desc": "Dòng có thể đổi chiều theo thời gian."}] }
          ],
          exercise: { title: "Cùng nam châm, hai chuyển động", context: "Đưa nam châm lại gần cuộn rồi giữ yên.", mechanism: "Xem lúc nào từ thông qua vòng biến thiên.", takeaway: "Có suất điện động khi di chuyển; ở trạng thái yên ổn, giá trị về 0." },
          check: { title: "Điều cần có để tạo suất điện động cảm ứng trong vòng cố định?", options: ["Từ thông qua vòng đổi theo thời gian", "Một nam châm bất kỳ nằm yên", "Dây dẫn phải nóng", "Điện trở luôn bằng 0"] },
          notes: [
            { title: "Ba cách đổi từ thông", lead: "Đổi độ lớn B, diện tích hiệu dụng hoặc góc giữa B và pháp tuyến vòng." },
            { title: "Cảm ứng không đồng nghĩa có dòng", lead: "Mạch hở có thể có suất điện động nhưng không có dòng kín." },
            { title: "Tần số dòng xoay chiều", lead: "Tần số là số chu kỳ mỗi giây, đơn vị hertz." },
          ]
        },
        {
          name: "Truyền tải và điện gió",
          question: "Tăng điện áp truyền tải giúp giảm hao phí theo cơ chế nào?",
          concepts: [
            { layout: "formula-spotlight", title: "Hao phí tỏa nhiệt trên dây", formula: "Phao = I²R", annotations: [{"tag": "I", "text": "Dòng qua dây."}, {"tag": "R", "text": "Điện trở tổng của dây xét."}, {"tag": "Cùng công suất truyền", "text": "Tăng điện áp có thể làm giảm dòng điện."}] },
            { layout: "process-flow", title: "Năng lượng đi qua turbine gió", steps: [{"step": "Không khí", "title": "Gió truyền động năng", "desc": "Cánh nhận mômen quay."}, {"step": "Trục", "title": "Đưa cơ năng tới máy phát", "desc": "Có thể qua bộ truyền."}, {"step": "Điện", "title": "Máy phát chuyển đổi năng lượng", "desc": "Thiết bị điện điều chỉnh điện áp và tần số."}] }
          ],
          exercise: { title: "Giảm dòng từ 20 A xuống 10 A", context: "Cùng điện trở đường dây.", mechanism: "So bình phương của hai giá trị dòng.", takeaway: "Công suất hao phí còn 1/4." },
          check: { title: "Trong mô hình Phao=I²R, giữ I và tăng R gấp đôi thì Phao?", options: ["Tăng gấp đôi", "Giảm một nửa", "Tăng bốn lần", "Không đổi"] },
          notes: [
            { title: "Công suất khác điện năng", lead: "kW đo công suất, kWh đo năng lượng." },
            { title: "Gió thay đổi theo thời gian", lead: "Đánh giá điện năng cần chuỗi dữ liệu, không chỉ tốc độ gió một lúc." },
            { title: "Máy biến áp lý tưởng", lead: "Tỉ số điện áp bằng tỉ số vòng dây khi xét máy biến áp lý tưởng chạy AC." },
          ]
        },
        {
          name: "Mạch học đường và phép đo",
          question: "Mắc đồng hồ ở đâu để đo đúng đại lượng trong mạch điện áp thấp?",
          concepts: [
            { layout: "comparison", title: "Đo hiệu điện thế và cường độ dòng", leftTitle: "Vôn kế", leftPoints: ["Mắc song song với phần tử.", "Điện trở vào thường lớn."], rightTitle: "Ampe kế", rightPoints: ["Mắc nối tiếp trong nhánh cần đo.", "Điện trở thường nhỏ."] },
            { layout: "data-chart", title: "Ba phép đo minh họa cùng điện trở", bars: [{"label": "1 V", "val": 10, "unit": "mA"}, {"label": "2 V", "val": 20, "unit": "mA"}, {"label": "3 V", "val": 30, "unit": "mA"}], insightBody: "Với số giả lập này, U/I=100 Ω ở cả ba lần." }
          ],
          exercise: { title: "Đọc số trên thang đo", context: "Mạch có U=2 V và I=20 mA.", mechanism: "Đổi 20 mA thành 0,020 A.", takeaway: "R=U/I=100 Ω trong điều kiện đo." },
          check: { title: "Muốn đo hiệu điện thế ở hai đầu điện trở, mắc vôn kế?", options: ["Song song qua hai đầu", "Nối tiếp với điện trở", "Qua riêng phần công tắc đang mở", "Ở nhánh bất kỳ không liên quan"] },
          notes: [
            { title: "Ghi thang và đơn vị", lead: "Cùng số 20 nhưng 20 mA khác 20 A một nghìn lần." },
            { title: "Điện trở và nhiệt độ", lead: "Một số linh kiện không giữ U/I không đổi khi nhiệt độ thay đổi." },
            { title: "Kiểm tra đồ thị", lead: "Đường U theo I thẳng qua gốc là dấu hiệu phù hợp mô hình Ohm trong khoảng đo." },
          ]
        },
      ]
    },
    "su-viet-nam": {
      coverIndex: 4,
      introduction: "Một trống đồng, một bia đá và một bức ảnh mở ra những lát cắt khác nhau của lịch sử.",
      goals: [
        "Tách niên đại hiện vật khỏi ngày chụp.",
        "Nối các mốc với hệ quả trực tiếp.",
        "Đặt tư liệu cùng thời cạnh lời kể về sau.",
      ],
      closing: "Mỗi mốc lịch sử cần một ngữ cảnh và một nguồn phù hợp.",
      images: [
        illustration({
          file: "Dong_Son_drums.jpg", local: "b0d6fda07711", author: "Lưu Ly 11:06, 6 April 2008 (UTC)", license: "Public domain",
          caption: "Trống đồng Đông Sơn",
          observation: "Quan sát hình dạng và hoa văn trước khi diễn giải công dụng."
        }),
        illustration({
          file: "Hanoi_Temple_of_Literature_(cropped).jpg", local: "c11058f4a11e", author: "Chuoibk", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
          caption: "Văn Miếu ở Hà Nội",
          observation: "Ảnh hiện trạng giúp đọc không gian; niên đại cần đối chiếu hồ sơ."
        }),
        illustration({
          file: "Vietnam_in_late_18th_century_(orthographic_projection).svg", local: "5943c8f965cf", author: "DannamEmpire", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", fit: "contain",
          caption: "Bản đồ Việt Nam cuối thế kỷ XVIII",
          observation: "Bản đồ là bản dựng hiện đại để đọc địa bàn lịch sử."
        }),
        illustration({
          file: "Cách_mạng_tháng_8_b.jpg", local: "2054fc7e8403", author: "Vũ Năng An", license: "Public domain",
          caption: "Ảnh tư liệu Cách mạng Tháng Tám năm 1945",
          observation: "Khung hình ghi lại một cảnh trong chuỗi sự kiện ở nhiều địa phương."
        }),
        illustration({
          file: "Streets_of_Hoi_An_Ancient_Town,_Quang_Nam_province,_South_Central_Coast,_Vietnam.jpg", local: "033e80899703", author: "Mstyslav Chernov", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          caption: "Một con phố của đô thị cổ Hội An",
          observation: "Ảnh hiện trạng cho thấy một phần không gian di sản của thương cảng xưa."
        }),
      ],
      chapters: [
        {
          name: "Dấu tích Đông Sơn",
          question: "Một chiếc trống đồng kể được gì về xã hội đã tạo ra nó?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc trống đồng như một hiện vật", callouts: [{"num": "01", "label": "Chất liệu", "text": "Đồng đúc cho thấy năng lực luyện kim."}, {"num": "02", "label": "Hoa văn", "text": "Hình người, chim và thuyền gợi hoạt động, tín ngưỡng."}, {"num": "03", "label": "Xuất xứ", "text": "Nơi phát hiện giúp đặt hiện vật trong bối cảnh."}] },
            { layout: "comparison", title: "Hiện vật và truyền thuyết", leftTitle: "Hiện vật", leftPoints: ["Có thể khảo sát vật liệu, hoa văn và tầng tìm thấy.", "Cần đối chiếu hồ sơ khai quật."], rightTitle: "Truyền thuyết", rightPoints: ["Cho thấy ký ức và cách cộng đồng kể về nguồn gốc.", "Cần phân biệt chức năng văn hóa với chứng cứ niên đại."] }
          ],
          exercise: { title: "Hai dòng chú thích cho người xem", context: "Viết chú thích cho ảnh trống đồng, chỉ dựa trên chi tiết thấy được.", mechanism: "Tách quan sát về vành hoa văn khỏi diễn giải về nghi lễ.", takeaway: "Dùng “có thể gợi” nếu chưa có tư liệu để khẳng định." },
          check: { title: "Cần gì để liên hệ chắc hơn một trống đồng với địa điểm khảo cổ?", options: ["Hồ sơ phát hiện và bối cảnh lớp đất", "Màu màn hình", "Tên người chụp ảnh gần đây", "Số lượt xem ảnh"] },
          notes: [
            { title: "Một hiện vật, nhiều câu hỏi", lead: "Hoa văn cho câu hỏi về đời sống; kỹ thuật đúc cho câu hỏi về nghề thủ công." },
            { title: "Đông Sơn là tên quy ước khảo cổ", lead: "Phân biệt tên nền văn hóa khảo cổ với tên gọi dân cư trong truyền thuyết." },
            { title: "Chú thích ảnh có ngày kép", lead: "Năm chụp và niên đại hiện vật là hai thông tin khác nhau." },
          ]
        },
        {
          name: "Từ tự chủ đến thiết chế Đại Việt",
          question: "Sau khi giành độc lập, nhà nước xây dựng và duy trì thiết chế bằng những cách nào?",
          concepts: [
            { layout: "timeline", title: "Bốn mốc để dựng trục thời gian", steps: [{"step": "938", "title": "Bạch Đằng", "desc": "Ngô Quyền đánh bại quân Nam Hán."}, {"step": "1010", "title": "Dời đô", "desc": "Lý Công Uẩn chuyển kinh đô về Thăng Long."}, {"step": "1070", "title": "Văn Miếu", "desc": "Văn Miếu được lập dưới thời Lý."}, {"step": "1428", "title": "Nhà Lê sơ", "desc": "Lê Lợi lên ngôi sau thắng lợi khởi nghĩa Lam Sơn."}] },
            { layout: "comparison", title: "Kinh đô và cơ sở giáo dục", leftTitle: "Kinh đô", leftPoints: ["Tập trung triều đình và thiết chế quản trị.", "Chọn vị trí liên quan giao thông và phòng thủ."], rightTitle: "Văn Miếu – Quốc Tử Giám", rightPoints: ["Gắn với nghi lễ và việc học.", "Biểu hiện vai trò của giáo dục trong nhà nước."] }
          ],
          exercise: { title: "Chọn một hiện vật để thuyết minh về giáo dục", context: "So một bia tiến sĩ với ảnh rộng của cổng Văn Miếu.", mechanism: "Xem nguồn nào ghi được tên người đỗ và niên khoa.", takeaway: "Bia hỗ trợ câu hỏi về khoa cử, ảnh cổng hỗ trợ câu hỏi về không gian." },
          check: { title: "Mốc 1010 gắn với sự kiện nào?", options: ["Dời đô về Thăng Long", "Thành lập nhà Lê sơ", "Dựng Văn Miếu", "Trận Bạch Đằng của Ngô Quyền"] },
          notes: [
            { title: "Mốc 1076", lead: "Quốc Tử Giám được lập sau Văn Miếu, hai mốc cần phân biệt." },
            { title: "Đọc địa danh theo thời", lead: "Tên gọi Thăng Long và Hà Nội thuộc những bối cảnh khác nhau." },
            { title: "Đặt triều đại vào trục thời gian", lead: "Cần phân biệt các bước xây dựng nhà nước thời Lý, Trần và Lê sơ." },
          ]
        },
        {
          name: "Tây Sơn và biến chuyển thế kỷ XVIII",
          question: "Vì sao phải tách nhiều mốc và mục tiêu khi kể về phong trào Tây Sơn?",
          concepts: [
            { layout: "timeline", title: "Ba mốc trong lịch sử Tây Sơn", steps: [{"step": "1771", "title": "Khởi nghĩa Tây Sơn", "desc": "Phong trào nổi lên ở vùng Tây Sơn."}, {"step": "1785", "title": "Rạch Gầm – Xoài Mút", "desc": "Đánh bại lực lượng Xiêm trên sông Tiền."}, {"step": "1789", "title": "Ngọc Hồi – Đống Đa", "desc": "Quang Trung chỉ huy đánh bại quân Thanh."}] },
            { layout: "comparison", title: "Địa bàn và tư liệu", leftTitle: "Bản đồ địa hình", leftPoints: ["Cho thấy sông, đường và quan hệ vị trí.", "Hữu ích khi đọc không gian một trận đánh."], rightTitle: "Tường thuật lịch sử", rightPoints: ["Cho biết người kể và mạch diễn biến.", "Cần đối chiếu xuất xứ và thời điểm viết."] }
          ],
          exercise: { title: "Chú thích một tượng đài", context: "Một bức ảnh chụp tượng Quang Trung ở thời hiện đại.", mechanism: "Tách thời điểm dựng hoặc chụp tượng khỏi thời điểm nhân vật sống.", takeaway: "Ghi ảnh là tư liệu tưởng niệm thời sau về nhân vật lịch sử." },
          check: { title: "Mốc 1789 gắn với thắng lợi nào của quân Tây Sơn?", options: ["Ngọc Hồi – Đống Đa", "Bạch Đằng", "Điện Biên Phủ", "Chi Lăng – Xương Giang"] },
          notes: [
            { title: "Hai trận ở hai không gian", lead: "Rạch Gầm – Xoài Mút ở vùng sông Tiền, Ngọc Hồi – Đống Đa gắn với Thăng Long." },
            { title: "Mở cõi là diễn trình dài", lead: "Sự thay đổi lãnh thổ và cư trú phương Nam diễn ra qua nhiều giai đoạn, không gói trong một triều." },
            { title: "Chân dung được tạo về sau", lead: "Cần phân biệt hình tượng tôn vinh với ảnh hay chân dung cùng thời." },
          ]
        },
        {
          name: "Năm 1945 và kháng chiến",
          question: "Điều gì thay đổi giữa việc tuyên bố độc lập và việc bảo vệ nền độc lập?",
          concepts: [
            { layout: "timeline", title: "Bốn mốc để phân biệt sự kiện", steps: [{"step": "8/1945", "title": "Cách mạng Tháng Tám", "desc": "Giành chính quyền tại nhiều địa phương."}, {"step": "2/9/1945", "title": "Tuyên ngôn Độc lập", "desc": "Khai sinh nước Việt Nam Dân chủ Cộng hòa."}, {"step": "1954", "title": "Điện Biên Phủ", "desc": "Thắng lợi quân sự quan trọng trong kháng chiến chống Pháp."}, {"step": "1975", "title": "Kết thúc chiến tranh", "desc": "Chiến tranh kết thúc, mở đường thống nhất nhà nước."}] },
            { layout: "comparison", title: "Bức ảnh và văn bản cùng thời", leftTitle: "Ảnh", leftPoints: ["Cho thấy người, địa điểm hoặc bố cục sự kiện.", "Một khung hình chỉ ghi một lát cắt."], rightTitle: "Văn bản", rightPoints: ["Có tác giả, lập luận và ngôn ngữ.", "Đọc cùng thời điểm công bố và đối tượng hướng tới."] }
          ],
          exercise: { title: "Xác định vai trò của tư liệu", context: "Chọn một ảnh đám đông và một trích đoạn tuyên ngôn.", mechanism: "Hỏi tư liệu nào cho thấy không khí, tư liệu nào nêu lập luận.", takeaway: "Kết hợp hai nguồn với chú thích bối cảnh riêng." },
          check: { title: "Ngày 2/9/1945 gắn với sự kiện?", options: ["Công bố Tuyên ngôn Độc lập", "Mở Chiến dịch Điện Biên Phủ", "Bắt đầu Đổi mới", "Gia nhập ASEAN"] },
          notes: [
            { title: "Giải thích mốc bằng một câu", lead: "Nêu sự kiện và hệ quả trực tiếp, tránh biến chuỗi năm thành danh sách thuộc lòng." },
            { title: "Không suy rộng từ một bức ảnh", lead: "Khung hình ở một địa phương chưa phản ánh toàn bộ quốc gia." },
            { title: "Thống nhất nhà nước", lead: "Năm 1976, Quốc hội quyết định tên nước là Cộng hòa Xã hội Chủ nghĩa Việt Nam." },
          ]
        },
        {
          name: "Đổi mới, hội nhập và ký ức",
          question: "Làm thế nào trình bày thay đổi dài hạn mà không quy mọi kết quả cho một mốc?",
          concepts: [
            { layout: "timeline", title: "Ba mốc thời kỳ hội nhập", steps: [{"step": "1986", "title": "Đại hội VI", "desc": "Mốc khởi xướng công cuộc Đổi mới."}, {"step": "1995", "title": "Gia nhập ASEAN", "desc": "Việt Nam tham gia hiệp hội khu vực."}, {"step": "2007", "title": "Thành viên WTO", "desc": "Gia nhập Tổ chức Thương mại Thế giới."}] },
            { layout: "comparison", title: "Mốc chính sách và kết quả xã hội", leftTitle: "Mốc chính sách", leftPoints: ["Có thể xác định ngày hoặc năm.", "Đánh dấu thay đổi định hướng hay thiết chế."], rightTitle: "Kết quả xã hội", rightPoints: ["Thường tích lũy qua nhiều năm.", "Cần chỉ số, giai đoạn và đối chiếu."] }
          ],
          exercise: { title: "Theo dấu một đô thị di sản", context: "Dùng ảnh Hội An để nói về bảo tồn và giao lưu.", mechanism: "Phân biệt vai trò thương cảng xưa với du lịch di sản ngày nay.", takeaway: "Một địa điểm có thể mang nhiều lớp lịch sử." },
          check: { title: "Việt Nam gia nhập ASEAN năm nào?", options: ["1995", "1986", "2007", "1975"] },
          notes: [
            { title: "Hội An được ghi danh năm 1999", lead: "Ghi danh di sản phản ánh đánh giá giá trị, không phải thời điểm đô thị bắt đầu tồn tại." },
            { title: "Đọc số liệu qua nhiều kỳ", lead: "Một cột duy nhất không đủ chứng minh xu hướng dài hạn." },
            { title: "Đặt hai mốc lên cùng trục", lead: "Năm 1986 và 2007 cách nhau 21 năm, đừng gộp thành một sự kiện." },
          ]
        },
      ]
    },
    "su-van-minh": {
      coverIndex: 1,
      introduction: "Đọc những nền văn minh cổ qua dòng sông, chữ viết và không gian công cộng.",
      goals: [
        "So vai trò và rủi ro của từng lưu vực.",
        "Đọc vật liệu và mặt bằng như chứng cứ.",
        "Phân biệt dấu tích hiện có với phần phục dựng.",
      ],
      closing: "Một nền móng cho biết vị trí. Bối cảnh giúp hiểu công dụng.",
      images: [
        illustration({
          file: "Beautiful_nature_along_Nile_River_01.jpg", local: "85b93a95ac95", author: "Fiktube", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Phong cảnh dọc bờ sông Nile",
          observation: "Quan sát sự tiếp giáp của dòng nước, đất thấp và vùng cư trú."
        }),
        illustration({
          file: "Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg", local: "349cfd9aaf85", author: "Douwe C. van der Zee", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Đại kim tự tháp Giza của Khufu",
          observation: "Công trình giúp thảo luận quy mô xây dựng và tổ chức lao động."
        }),
        illustration({
          file: "Mohenjodaro_-_view_of_the_stupa_mound.JPG", local: "b656026e3bb4", author: "Saqib Qayyum", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          caption: "Di tích gạch tại Mohenjo-daro",
          observation: "Góc chụp cho thấy dấu tích vật liệu và một phần mặt bằng."
        }),
        illustration({
          file: "The_Parthenon_in_Athens.jpg", local: "33316efb8878", author: "Steve Swayne", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0",
          caption: "Đền Parthenon tại Athens",
          observation: "Quan sát công trình công cộng và phân biệt kiến trúc với thiết chế chính trị."
        }),
        illustration({
          file: "Colosseo_2020.jpg", local: "2049fa9c0084", author: "FeaturedPics", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Colosseum ở Rome ngày nay",
          observation: "Ảnh hiện trạng cho thấy phần còn lại của công trình cổ."
        }),
      ],
      chapters: [
        {
          name: "Lưu vực sông và đô thị đầu tiên",
          question: "Sông cung cấp nguồn lực gì và đồng thời đặt ra thách thức gì cho cư dân?",
          concepts: [
            { layout: "comparison", title: "Nguồn lợi và rủi ro của dòng sông", leftTitle: "Nguồn lợi", leftPoints: ["Nước, đất bồi và đường vận chuyển.", "Có thể hỗ trợ sản xuất lương thực."], rightTitle: "Rủi ro", rightPoints: ["Lũ hay dòng chảy đổi hướng ảnh hưởng làng ruộng.", "Cần tổ chức thích ứng theo từng lưu vực."] },
            { layout: "annotated-diagram", title: "Xem sông như một hệ thống", callouts: [{"num": "01", "label": "Thượng lưu", "text": "Vùng cung cấp nước và trầm tích."}, {"num": "02", "label": "Đồng bằng", "text": "Nước và đất bồi hỗ trợ canh tác."}, {"num": "03", "label": "Cửa sông", "text": "Kết nối nội địa với vùng biển."}] }
          ],
          exercise: { title: "Đọc vị trí một khu định cư", context: "Một nhóm mô phỏng chọn giữa bờ sông thấp và gò cao sát sông.", mechanism: "So tiện lấy nước với nguy cơ ngập.", takeaway: "Gò cao sát sông cân bằng hai nhu cầu trong mô hình." },
          check: { title: "Cần thêm dữ liệu gì để giải thích đô thị hình thành cạnh sông?", options: ["Dấu tích sản xuất, cư trú và giao thông", "Chỉ chiều dài tên sông", "Chỉ ảnh vệ tinh hiện tại", "Chỉ độ đẹp của bản đồ"] },
          notes: [
            { title: "Địa lý tạo điều kiện", lead: "Thiết chế, kỹ thuật và trao đổi cũng góp phần giải thích sự hình thành đô thị." },
            { title: "Nước dâng có nhiều mặt", lead: "Lũ mang phù sa trong một số bối cảnh nhưng cũng có thể gây thiệt hại." },
            { title: "Cùng là sông, chế độ nước có thể khác", lead: "So kiểu lũ và mùa mưa trước khi so cách quản lý." },
          ]
        },
        {
          name: "Ai Cập và Lưỡng Hà",
          question: "Khối đá và bảng đất sét cho biết những mặt nào khác nhau của xã hội cổ đại?",
          concepts: [
            { layout: "comparison", title: "Kim tự tháp và bảng đất sét", leftTitle: "Kim tự tháp", leftPoints: ["Công trình lớn gắn với quyền lực và nghi lễ.", "Vật liệu bền, để lại dấu tích mạnh."], rightTitle: "Bảng đất sét", rightPoints: ["Có thể lưu ghi chép giao dịch, luật hoặc văn bản.", "Cần đọc chữ và bối cảnh khai quật."] },
            { layout: "process-flow", title: "Từ dấu viết đến tri thức lịch sử", steps: [{"step": "Ghi", "title": "Chép trên vật liệu có sẵn", "desc": "Chữ hình nêm thường thấy trên đất sét."}, {"step": "Lưu", "title": "Văn bản tồn tại qua thời gian", "desc": "Nhiều chất liệu khác có thể mất dấu."}, {"step": "Đọc", "title": "Chuyên gia giải mã và đối chiếu", "desc": "Một văn bản phản ánh mục đích của người viết."}] }
          ],
          exercise: { title: "Chọn tư liệu cho hai câu hỏi", context: "Hỏi về tổ chức xây dựng và hỏi về một giao dịch buôn bán.", mechanism: "Ghép mỗi loại tư liệu với khả năng trả lời.", takeaway: "Công trình gợi quy mô lao động; bảng ghi có thể cho giá hoặc số lượng." },
          check: { title: "Vì sao không nên dùng hình kim tự tháp để suy ra giá lương thực?", options: ["Ảnh công trình không cung cấp dữ liệu giao dịch", "Công trình quá cao", "Đá có nhiều cạnh", "Ảnh chỉ có một màu"] },
          notes: [
            { title: "Niên đại không phải ngày chụp", lead: "Tách thời điểm xây dựng, thời điểm trùng tu và năm chụp ảnh." },
            { title: "Chữ viết có nhiều chức năng", lead: "Sổ sách kinh tế và văn bản nghi lễ phục vụ các mục đích khác nhau." },
            { title: "Ai Cập và Lưỡng Hà", lead: "So sánh điểm chung về sông nhưng giữ đặc thù môi trường và xã hội." },
          ]
        },
        {
          name: "Đô thị Indus và Trung Hoa cổ",
          question: "Nếu chữ viết chưa giải đọc đầy đủ, khảo cổ học có thể cung cấp manh mối nào?",
          concepts: [
            { layout: "annotated-diagram", title: "Nhận diện quy hoạch từ nền gạch", callouts: [{"num": "01", "label": "Đường", "text": "Hướng và bề rộng giúp đọc tổ chức không gian."}, {"num": "02", "label": "Nền nhà", "text": "Mặt bằng gợi cách sử dụng khu vực."}, {"num": "03", "label": "Thoát nước", "text": "Dấu tích đường dẫn nước gợi kỹ thuật đô thị."}] },
            { layout: "comparison", title: "Đô thị Indus và tư liệu chữ khắc Hoa Bắc", leftTitle: "Indus", leftPoints: ["Mohenjo-daro để lại mặt bằng và công trình gạch.", "Nhiều ký hiệu Indus chưa được giải đọc thuyết phục."], rightTitle: "Hoa Bắc", rightPoints: ["Giáp cốt văn cung cấp dữ liệu chữ viết thời Thương.", "Ngữ cảnh bói hỏi ảnh hưởng nội dung văn bản."] }
          ],
          exercise: { title: "Chú thích dấu tích thoát nước", context: "Ảnh cho thấy rãnh xây bằng gạch trong khu di tích.", mechanism: "Dựa vị trí và sơ đồ để xem nó có thuộc mạng thoát nước.", takeaway: "Ghi mức chắc chắn theo hồ sơ khảo cổ." },
          check: { title: "Điều nào quan sát được trực tiếp trên mặt bằng khai quật?", options: ["Vị trí có dấu tích tường gạch", "Ngôn ngữ mọi cư dân nói", "Tên từng người thiết kế", "Mục đích chính xác của mọi gian"] },
          notes: [
            { title: "Khảo cổ có khoảng trống", lead: "Công trình bằng vật liệu dễ hỏng thường để lại ít dấu vết hơn đá và gạch." },
            { title: "Giáp cốt văn là nguồn có ngữ cảnh", lead: "Nhiều bản khắc liên quan thực hành bói hỏi, cần thận trọng khi suy rộng." },
            { title: "Đối chiếu hai đô thị", lead: "Dùng cùng tiêu chí: vật liệu, mạng đường và hệ thống nước." },
          ]
        },
        {
          name: "Hy Lạp và La Mã",
          question: "Vì sao “công dân” ở Athens cổ không đồng nghĩa toàn bộ cư dân?",
          concepts: [
            { layout: "comparison", title: "Tham gia chính trị và cư trú", leftTitle: "Công dân Athens", leftPoints: ["Một bộ phận nam giới có địa vị công dân được tham gia.", "Cơ chế có yếu tố dân chủ trực tiếp."], rightTitle: "Cư dân ngoài tư cách công dân", rightPoints: ["Phụ nữ, người nô lệ và ngoại kiều bị loại khỏi quyền tham gia chính trị tương đương.", "Phải phân biệt cư trú với quyền công dân."] },
            { layout: "timeline", title: "Ba mốc ở hai hệ thống khác nhau", steps: [{"step": "TK V TCN", "title": "Athens cổ điển", "desc": "Thời kỳ nhiều thiết chế dân chủ trực tiếp phát triển."}, {"step": "27 TCN", "title": "Augustus", "desc": "Mốc quy ước mở đầu Đế chế La Mã."}, {"step": "80", "title": "Đấu trường Colosseum", "desc": "Khánh thành công trình tại Rome."}] }
          ],
          exercise: { title: "Viết câu so sánh chính xác", context: "Một bản nháp viết “Athens có dân chủ nên mọi người đều bỏ phiếu”.", mechanism: "Thêm điều kiện về địa vị công dân và giới.", takeaway: "Nhiều nam công dân có quyền tham gia, nhiều nhóm cư dân bị loại trừ." },
          check: { title: "Cơ chế nào thường gắn với Athens cổ điển?", options: ["Dân chủ trực tiếp của công dân", "Phổ thông đầu phiếu hiện đại", "Bầu quốc hội kiểu hiện đại", "Quyền bỏ phiếu ngang nhau cho mọi cư dân"] },
          notes: [
            { title: "Ngôn ngữ chính trị có lịch sử", lead: "Cùng từ “dân chủ” nhưng phạm vi quyền và cơ chế tham gia có thể khác thời nay." },
            { title: "Kiến trúc công cộng", lead: "So vị trí, quy mô và nhóm người sử dụng khi đọc công trình." },
            { title: "Tránh gộp Hy Lạp với La Mã", lead: "Đặt hai hệ thống lên trục thời gian trước khi nêu điểm ảnh hưởng." },
          ]
        },
        {
          name: "Bảo tồn và cách trình bày di sản",
          question: "Bản phục dựng giúp ta hiểu di tích thế nào và cần ghi rõ phần nào?",
          concepts: [
            { layout: "comparison", title: "Di tích và bản phục dựng", leftTitle: "Dấu tích", leftPoints: ["Vật chất hiện có tại địa điểm.", "Có thể hư hại hoặc chỉ còn từng phần."], rightTitle: "Phục dựng", rightPoints: ["Diễn giải dựa trên bằng chứng và phần giả định.", "Cần chú thích mức chắc chắn."] },
            { layout: "process-flow", title: "Viết nhãn bảo tàng ngắn", steps: [{"step": "Tên", "title": "Gọi đúng di tích", "desc": "Ghi địa điểm và niên đại gần đúng."}, {"step": "Chứng cứ", "title": "Chọn một chi tiết thấy được", "desc": "Liên hệ với hồ sơ nghiên cứu."}, {"step": "Bối cảnh", "title": "Giải thích trong vài câu", "desc": "Phân biệt quan sát và suy luận."}] }
          ],
          exercise: { title: "Sửa nhãn một ảnh Colosseum", context: "Nháp: “Công trình ngày nay vẫn giống hệt khi mới xây”.", mechanism: "So dấu tích hiện tại với ảnh hoặc sơ đồ phục dựng.", takeaway: "Nêu ảnh hiện trạng và ghi các phần đã mất hoặc trùng tu." },
          check: { title: "Tại sao cần ghi “phục dựng” dưới một hình?", options: ["Để người xem biết đây là diễn giải dựa trên bằng chứng", "Vì mọi phục dựng đều sai", "Vì công trình không có thật", "Vì mọi ảnh đều chụp cùng năm"] },
          notes: [
            { title: "Di sản không dừng ở đá", lead: "Hồ sơ bảo tồn còn xem xét cách cộng đồng hiểu và sử dụng địa điểm." },
            { title: "Một ảnh không đủ một mặt bằng", lead: "Thêm bản đồ hoặc ảnh góc khác để tránh đoán toàn cảnh." },
            { title: "Kể chuyện theo dấu chứng cứ", lead: "Đưa tư liệu cạnh mệnh đề mà nó hỗ trợ." },
          ]
        },
      ]
    },
    "su-hien-dai": {
      coverIndex: 1,
      introduction: "Từ một hội trường hậu chiến đến bức tường, container và ảnh Mặt Trăng.",
      goals: [
        "Phân biệt diễn đàn quốc tế với liên minh.",
        "Nối mốc ASEAN với bối cảnh khu vực.",
        "Đọc tác giả, thời điểm và mục đích của tư liệu.",
      ],
      closing: "Một tấm ảnh mạnh vẫn cần ngày, nơi và góc nhìn.",
      images: [
        illustration({
          file: "UN_General_Assembly_hall.jpg", local: "fa2e90dc417a", author: "Patrick Gruban, cropped and downsampled by Pine", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
          caption: "Hội trường Đại hội đồng Liên Hợp Quốc",
          observation: "Không gian hội họp gợi vai trò diễn đàn, bên cạnh nội dung Hiến chương."
        }),
        illustration({
          file: "Berlinermauer.jpg", local: "6651bd5fa9d6", author: "Noir", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
          caption: "Một phần Bức tường Berlin",
          observation: "Bức tường là dấu tích vật chất của sự chia cắt đô thị."
        }),
        illustration({
          file: "Association_of_Southeast_Asian_Nations_(orthographic_projection).svg", local: "2b9206c7ba15", author: "Addicted04", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", fit: "contain",
          caption: "Bản đồ các nước ASEAN theo tư liệu gốc",
          observation: "Đọc thời điểm bản đồ trước khi đối chiếu các mốc gia nhập."
        }),
        illustration({
          file: "MAERSK_MC_KINNEY_MÖLLER_&_MARSEILLE_MAERSK_(48694054418).jpg", local: "56004df35742", author: "kees torn", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
          caption: "Hai tàu container Maersk",
          observation: "Hình ảnh minh họa mạng lưới vận tải dùng đơn vị hàng chuẩn hóa."
        }),
        illustration({
          file: "A_Man_on_the_Moon,_AS11-40-5903_(cropped).jpg", local: "6eee4f69ec1a", author: "Neil A. Armstrong", license: "Public domain",
          caption: "Phi hành gia Buzz Aldrin trong ảnh Apollo 11",
          observation: "Ảnh NASA là nguồn trực quan về hoạt động trên bề mặt Mặt Trăng."
        }),
      ],
      chapters: [
        {
          name: "Trật tự quốc tế sau 1945",
          question: "Vì sao các quốc gia lập thiết chế quốc tế mới sau Thế chiến II?",
          concepts: [
            { layout: "timeline", title: "Ba mốc hậu chiến", steps: [{"step": "1945", "title": "Liên Hợp Quốc", "desc": "Hiến chương có hiệu lực vào tháng 10."}, {"step": "1948", "title": "Tuyên ngôn Nhân quyền", "desc": "Đại hội đồng thông qua bản tuyên ngôn."}, {"step": "1949", "title": "NATO", "desc": "Hiệp ước Bắc Đại Tây Dương được ký."}] },
            { layout: "comparison", title: "Diễn đàn quốc tế và liên minh", leftTitle: "Liên Hợp Quốc", leftPoints: ["Có nhiều cơ quan và thành viên toàn cầu.", "Phạm vi gồm hòa bình, hợp tác và phát triển."], rightTitle: "Liên minh phòng thủ", rightPoints: ["Cam kết giữa các thành viên theo hiệp ước.", "Có phạm vi thành viên và nhiệm vụ cụ thể."] }
          ],
          exercise: { title: "Ghép đúng nguồn với câu hỏi", context: "Tìm ngày Hiến chương có hiệu lực và tìm mục đích của tổ chức.", mechanism: "Tra mốc năm ở trang lịch sử và trích điều khoản phù hợp.", takeaway: "Một nguồn gốc hỗ trợ ngày, văn bản giúp đọc mục tiêu pháp lý." },
          check: { title: "Mốc 1945 thường gắn với sự kiện nào?", options: ["Thành lập Liên Hợp Quốc", "Bức tường Berlin mở", "ASEAN ra đời", "Apollo 11 hạ cánh"] },
          notes: [
            { title: "Bản tuyên ngôn và hiến chương", lead: "Hai loại văn kiện có vai trò và bối cảnh ra đời riêng." },
            { title: "Thành viên và cơ quan", lead: "Tách số quốc gia thành viên khỏi số ghế ở một cơ quan cụ thể." },
            { title: "Không đồng nhất hậu chiến", lead: "Các khu vực trải qua những thay đổi chính trị và kinh tế khác nhau." },
          ]
        },
        {
          name: "Chiến tranh Lạnh và cạnh tranh khoa học",
          question: "Một ảnh Bức tường Berlin phản ánh được điều gì về xung đột toàn cầu?",
          concepts: [
            { layout: "timeline", title: "Từ dựng tường tới mở biên giới", steps: [{"step": "1961", "title": "Dựng Bức tường Berlin", "desc": "Hạn chế việc đi từ Đông sang Tây Berlin."}, {"step": "1969", "title": "Apollo 11", "desc": "Hoa Kỳ đưa người lên Mặt Trăng."}, {"step": "1989", "title": "Mở các cửa qua tường", "desc": "Sự kiện đánh dấu chuyển biến lớn ở châu Âu."}] },
            { layout: "comparison", title: "Bức tường và cuộc đua vũ trụ", leftTitle: "Bức tường", leftPoints: ["Thể hiện chia cắt trong đời sống đô thị.", "Đọc qua bản đồ và lời kể cư dân."], rightTitle: "Đua vũ trụ", rightPoints: ["Thể hiện cạnh tranh về năng lực khoa học và biểu tượng.", "Đọc qua hồ sơ kỹ thuật và truyền thông cùng thời."] }
          ],
          exercise: { title: "Một ảnh, hai chú thích", context: "Viết nhãn cho ảnh chụp phần tường còn lại sau 1989.", mechanism: "Phân biệt ngày chụp, quá trình hình thành và phần được bảo tồn.", takeaway: "Ảnh ngày nay là dấu tích, không phải ảnh ngày mở cửa." },
          check: { title: "Bức tường Berlin mở cửa qua các điểm kiểm soát vào năm nào?", options: ["1989", "1945", "1961", "1997"] },
          notes: [
            { title: "Chiến tranh Lạnh không có một hình ảnh duy nhất", lead: "Tư liệu địa phương cho thấy trải nghiệm mà bản đồ khối liên minh khó thể hiện." },
            { title: "Sputnik và Apollo", lead: "Sputnik 1 năm 1957 và Apollo 11 năm 1969 là hai dạng thành tựu khác nhau." },
            { title: "Tư liệu báo chí có góc nhìn", lead: "Đọc nơi xuất bản, độc giả và mục đích khi so hai bản tin cùng sự kiện." },
          ]
        },
        {
          name: "ASEAN và hợp tác khu vực",
          question: "Từ năm thành lập đến năm Việt Nam gia nhập, ASEAN đã mở rộng như thế nào?",
          concepts: [
            { layout: "timeline", title: "Ba mốc của ASEAN", steps: [{"step": "1967", "title": "Tuyên bố Bangkok", "desc": "Năm quốc gia ký văn kiện thành lập."}, {"step": "1995", "title": "Việt Nam gia nhập", "desc": "Trở thành thành viên thứ bảy."}, {"step": "2015", "title": "Cộng đồng ASEAN", "desc": "Cộng đồng được hình thành với ba trụ cột."}] },
            { layout: "comparison", title: "Hợp tác khu vực và xóa khác biệt", leftTitle: "Hợp tác", leftPoints: ["Tạo diễn đàn và chương trình chung.", "Các nước phối hợp ở những vấn đề cụ thể."], rightTitle: "Khác biệt giữa các nước", rightPoints: ["Thiết chế trong nước và mức phát triển có thể khác.", "Kết quả thực thi có thể khác theo từng nước."] }
          ],
          exercise: { title: "Bỏ cách diễn đạt quá rộng", context: "Nháp: “Năm 1967, tất cả các nước Đông Nam Á lập ASEAN”.", mechanism: "Tra danh sách thành viên sáng lập trong Tuyên bố Bangkok.", takeaway: "Đổi thành năm quốc gia sáng lập rồi mới mở rộng thành viên." },
          check: { title: "Việt Nam là thành viên thứ mấy khi gia nhập ASEAN?", options: ["Thứ bảy", "Thứ năm", "Thứ sáu", "Thứ mười"] },
          notes: [
            { title: "Nguồn đọc về ASEAN", lead: "Đối chiếu mốc trên asean.org với bản tuyên bố hoặc hồ sơ hội nghị." },
            { title: "Ba trụ cột", lead: "Chính trị–an ninh, kinh tế và văn hóa–xã hội." },
            { title: "Đọc bản đồ theo năm", lead: "Một bản đồ ASEAN phải ghi thời điểm vì thành viên thay đổi trong lịch sử." },
          ]
        },
        {
          name: "Kết nối toàn cầu",
          question: "Một container đi qua nhiều nước nói lên điều gì về sản xuất và thương mại?",
          concepts: [
            { layout: "process-flow", title: "Theo hành trình một lô hàng", steps: [{"step": "Đóng", "title": "Chuẩn hóa đơn vị vận chuyển", "desc": "Container có thể đổi phương thức vận tải."}, {"step": "Chuyển", "title": "Qua cảng và tuyến hàng hải", "desc": "Lịch tàu và thủ tục ảnh hưởng thời gian."}, {"step": "Nhận", "title": "Đưa vào kho hay nơi tiêu dùng", "desc": "Chặng cuối vẫn cần đường bộ hoặc đường sắt."}] },
            { layout: "comparison", title: "Kết nối và phụ thuộc", leftTitle: "Kết nối", leftPoints: ["Tiếp cận nhiều thị trường và nguồn hàng.", "Vận tải chuẩn hóa hỗ trợ trao đổi."], rightTitle: "Phụ thuộc", rightPoints: ["Gián đoạn ở một mắt xích có thể lan xa.", "Cần nhìn mạng lưới, không chỉ một tuyến."] }
          ],
          exercise: { title: "Kể lịch sử từ một sản phẩm", context: "Chọn bút bi hoặc áo, hỏi các chặng nguyên liệu, chế tạo và bán lẻ.", mechanism: "Chỉ đánh dấu chặng có bằng chứng trên nhãn hoặc tài liệu.", takeaway: "Chừa dấu hỏi cho phần chưa xác minh." },
          check: { title: "Container chuẩn hóa giúp nhất ở công đoạn nào?", options: ["Chuyển hàng giữa các phương thức vận tải", "Thay đổi khí hậu lập tức", "Loại mọi thủ tục hải quan", "Biến mọi cảng thành cảng lớn"] },
          notes: [
            { title: "Dòng hàng và dòng vốn", lead: "Hai loại kết nối toàn cầu cần dữ liệu khác nhau." },
            { title: "Đọc một bản đồ luồng", lead: "Mũi tên dày chỉ có ý nghĩa khi có đơn vị và chú giải." },
            { title: "Rủi ro qua nhiều tầng", lead: "Chậm ở cảng có thể ảnh hưởng nhà cung cấp, kho và nơi bán." },
          ]
        },
        {
          name: "Phê bình tư liệu lịch sử",
          question: "Hai nguồn ghi cùng sự kiện nhưng khác chi tiết thì xử lý thế nào?",
          concepts: [
            { layout: "process-flow", title: "Đọc xuất xứ trước khi trích", steps: [{"step": "Ai", "title": "Xác định tác giả hoặc cơ quan", "desc": "Ghi vai trò và vị trí người tạo."}, {"step": "Khi nào", "title": "So ngày tạo và ngày sự kiện", "desc": "Tư liệu có thể hồi tưởng về sau."}, {"step": "Vì sao", "title": "Xác định mục đích", "desc": "Đối chiếu nguồn độc lập."}] },
            { layout: "comparison", title: "Nguồn sơ cấp và thứ cấp", leftTitle: "Sơ cấp", leftPoints: ["Tạo trong bối cảnh đang nghiên cứu hoặc bởi người tham dự.", "Có thể vẫn thiên lệch."], rightTitle: "Thứ cấp", rightPoints: ["Diễn giải dựa trên nhiều nguồn.", "Cần kiểm chứng phương pháp và trích dẫn."] }
          ],
          exercise: { title: "So ảnh Apollo 11 và bài kỷ niệm", context: "Ảnh NASA ghi hoạt động, bài viết muộn tổng hợp bối cảnh.", mechanism: "Chọn nguồn theo câu hỏi đang đặt.", takeaway: "Dùng ảnh cho chi tiết thấy được và bài viết cho diễn giải có dẫn nguồn." },
          check: { title: "Hai nguồn khác nhau về một thời điểm. Bước đầu hữu ích nhất?", options: ["So xuất xứ và cách từng nguồn ghi thời gian", "Lấy trung bình hai mốc", "Chọn nguồn có ảnh lớn", "Bỏ cả hai và đoán"] },
          notes: [
            { title: "Chú thích giúp kiểm chứng", lead: "Ghi cơ quan lưu trữ, tác giả, ngày và ký hiệu hồ sơ nếu có." },
            { title: "Hai nguồn chưa chắc độc lập", lead: "Một bài báo chép lại thông cáo thì không tạo thêm chứng cứ độc lập." },
            { title: "Tư liệu im lặng", lead: "Điều nguồn không nhắc tới chưa chứng minh sự kiện không có." },
          ]
        },
      ]
    },
    "dia-khi-hau": {
      coverIndex: 2,
      introduction: "Đọc Trái Đất theo các đường mảng, luồng gió và dòng vật liệu ra biển.",
      goals: [
        "Giải thích ba nhóm ranh giới mảng.",
        "Theo dấu nước và trầm tích tới cửa sông.",
        "Đọc ngập qua hiểm họa, phơi lộ và khả năng chống chịu.",
      ],
      closing: "Bản đồ luôn có thang, thời điểm và mục đích.",
      images: [
        illustration({
          file: "Tectonic_plates_2022.svg", local: "283b697503ab", author: "M.Bitton", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", fit: "contain",
          caption: "Bản đồ các mảng kiến tạo lớn",
          observation: "Đối chiếu đường ranh giới mảng với các dải địa hình và hoạt động địa chất."
        }),
        illustration({
          file: "Monsoon_clouds_near_Nagercoil.jpg", local: "f0ca9e4a7f9e", author: "w:user:PlaneMad", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
          caption: "Mây gió mùa gần Nagercoil, Ấn Độ",
          observation: "Ảnh ghi một trạng thái; cần quan trắc nhiều thời điểm để nhận ra mùa."
        }),
        illustration({
          file: "Lena_River_Delta_-_Landsat_2000.jpg", local: "458a399aad10", author: "none (Landsat)", license: "Public domain",
          caption: "Ảnh Landsat của châu thổ sông Lena",
          observation: "Các nhánh mở rộng ra vùng cửa biển thể hiện dấu tích bồi tụ."
        }),
        illustration({
          file: "Mekong_Delta_in_Vietnam.png", local: "d325e4841320", author: "Vietic2", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", fit: "contain",
          caption: "Bản đồ Đồng bằng sông Cửu Long",
          observation: "Xác định dòng chính và vùng tiếp giáp biển trước khi đọc ranh mặn."
        }),
        illustration({
          file: "1880-_Global_average_sea_level_rise_(SLR)_-_annually.svg", local: "8771ee999128", author: "RCraig09", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Chuỗi mực nước biển trung bình toàn cầu",
          observation: "Đọc giai đoạn, chuẩn tham chiếu và độ dao động giữa các năm."
        }),
      ],
      chapters: [
        {
          name: "Kiến tạo mảng và địa hình",
          question: "Vì sao núi lửa, động đất thường tập trung thành những dải?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc ba kiểu ranh giới mảng", callouts: [{"num": "01", "label": "Tách giãn", "text": "Hai mảng chuyển ra xa, có thể tạo vỏ mới."}, {"num": "02", "label": "Hội tụ", "text": "Hai mảng tiến lại gần, có thể hút chìm hoặc va chạm."}, {"num": "03", "label": "Trượt ngang", "text": "Hai mảng trượt qua nhau dọc ranh giới."}] },
            { layout: "comparison", title: "Kiến tạo và ngoại lực", leftTitle: "Kiến tạo", leftPoints: ["Có thể nâng địa hình hoặc tạo bồn trũng.", "Bắt nguồn từ hoạt động bên trong Trái Đất."], rightTitle: "Ngoại lực", rightPoints: ["Phong hóa, xói mòn và bồi tụ làm đổi bề mặt.", "Tác động qua nước, gió, băng và sinh vật."] }
          ],
          exercise: { title: "Đọc mạng động đất trên bản đồ", context: "Nhiều điểm tạo thành dải dọc rìa Thái Bình Dương.", mechanism: "Đối chiếu vị trí điểm chấn với đường ranh giới mảng.", takeaway: "Sự trùng khớp hỗ trợ giải thích kiến tạo, vẫn có động đất nội mảng." },
          check: { title: "Tại ranh giới tách giãn, hai mảng thường?", options: ["Chuyển ra xa nhau", "Tiến thẳng vào nhau", "Đứng yên hoàn toàn", "Đồng thời chìm cả hai"] },
          notes: [
            { title: "Tốc độ nhỏ, thời gian dài", lead: "Chuyển động cỡ centimet mỗi năm có thể tạo thay đổi lớn qua hàng triệu năm." },
            { title: "Điểm và dải", lead: "Bản đồ nhiều sự kiện cho thấy mẫu không gian rõ hơn một trận đơn lẻ." },
            { title: "Núi có nhiều nguồn gốc", lead: "Không quy mọi dãy núi cho núi lửa, có thể liên quan uốn nếp và nâng kiến tạo." },
          ]
        },
        {
          name: "Khí quyển và gió mùa",
          question: "Tại sao hướng gió và mùa mưa có thể đổi theo mùa?",
          concepts: [
            { layout: "process-flow", title: "Một mô hình đơn giản về gió mùa", steps: [{"step": "Nóng lạnh", "title": "Đất và biển nhận, mất nhiệt khác nhau", "desc": "Tương phản nhiệt thay đổi theo mùa."}, {"step": "Áp suất", "title": "Hình thành chênh lệch áp suất", "desc": "Dòng khí chịu thêm ảnh hưởng quay của Trái Đất."}, {"step": "Ẩm", "title": "Gió vận chuyển hơi nước", "desc": "Mưa còn tùy đường đi, địa hình và nhiễu động."}] },
            { layout: "comparison", title: "Thời tiết và khí hậu", leftTitle: "Thời tiết", leftPoints: ["Thay đổi trong giờ hay ngày.", "Một trận mưa cho biết trạng thái ngắn hạn."], rightTitle: "Khí hậu", rightPoints: ["Mô tả thống kê dài hạn và biến thiên.", "Dùng dữ liệu nhiều năm."] }
          ],
          exercise: { title: "Một ngày lạnh nói được gì?", context: "Một trạm có ngày hôm nay lạnh hơn mức thường.", mechanism: "Cần chuỗi quan trắc và mốc chuẩn để đánh giá xu thế.", takeaway: "Một ngày là dữ liệu thời tiết, không đủ kết luận xu thế khí hậu." },
          check: { title: "Vì sao cùng mùa gió nhưng lượng mưa hai sườn núi khác nhau?", options: ["Địa hình làm khí ẩm nâng lên ở sườn đón gió", "Mọi sườn nhận lượng ẩm bằng nhau", "Gió không vận chuyển hơi nước", "Nhiệt độ mọi nơi bằng nhau"] },
          notes: [
            { title: "Bản đồ gió có độ cao", lead: "Đọc mực áp hoặc độ cao trước khi so hướng gió." },
            { title: "Độ ẩm của khối khí", lead: "Gió đi qua biển có thể mang ẩm, nhưng mưa còn cần điều kiện ngưng tụ." },
            { title: "Địa hình là tác nhân địa phương", lead: "Sườn khuất có thể khô hơn dù ở gần sườn đón gió." },
          ]
        },
        {
          name: "Sông, trầm tích và cửa biển",
          question: "Khi dòng nước chậm lại ở cửa sông, vật liệu đi đâu?",
          concepts: [
            { layout: "process-flow", title: "Một chu trình xói mòn–bồi tụ", steps: [{"step": "Tách", "title": "Dòng nước bóc vật liệu", "desc": "Tùy sức dòng và tính chất bề mặt."}, {"step": "Chở", "title": "Vận chuyển hạt theo dòng", "desc": "Kích cỡ hạt ảnh hưởng cách di chuyển."}, {"step": "Lắng", "title": "Năng lượng dòng giảm", "desc": "Một phần trầm tích bồi tích."}] },
            { layout: "comparison", title: "Châu thổ và cửa sông ngập triều", leftTitle: "Châu thổ bồi tụ", leftPoints: ["Tích lũy trầm tích tạo địa hình mới.", "Có thể phân thành nhiều nhánh sông."], rightTitle: "Cửa sông chịu triều mạnh", rightPoints: ["Sóng và thủy triều tái phân phối trầm tích.", "Dạng địa hình phụ thuộc cân bằng động lực."] }
          ],
          exercise: { title: "Đọc ảnh đồng bằng cửa sông", context: "Khoanh các nhánh tách khỏi dòng chính gần biển.", mechanism: "Đối chiếu bản đồ địa hình và hướng thoát nước.", takeaway: "Nhiều nhánh hỗ trợ nhận diện châu thổ nhưng còn cần dấu tích bồi tụ." },
          check: { title: "Khi sức vận chuyển giảm, vật liệu lơ lửng có thể?", options: ["Lắng xuống và góp phần bồi tụ", "Luôn bay hơi", "Biến ngay thành muối", "Tự chuyển thành mây"] },
          notes: [
            { title: "Lưu vực vượt ranh giới hành chính", lead: "Đường phân thủy xác định nơi nước mặt tập hợp, không theo biên giới tỉnh." },
            { title: "Dòng biển chuyển nhiệt", lead: "Dòng nước biển có thể phân bố lại nhiệt giữa các vùng." },
            { title: "Con đập và bùn cát", lead: "Giữ trầm tích phía thượng lưu có thể làm giảm vật liệu về hạ lưu." },
          ]
        },
        {
          name: "Thiên nhiên Việt Nam và đồng bằng",
          question: "Vì sao cùng một đồng bằng lại có vùng ưu tiên nước ngọt và vùng thích ứng nước lợ?",
          concepts: [
            { layout: "comparison", title: "Ngọt và lợ trong sản xuất", leftTitle: "Nước ngọt", leftPoints: ["Phù hợp với nhiều giống lúa và cây ăn quả.", "Cần kiểm soát mặn theo mùa."], rightTitle: "Nước lợ", rightPoints: ["Có thể phù hợp một số mô hình thủy sản.", "Cần theo dõi độ mặn và chất lượng nước."] },
            { layout: "annotated-diagram", title: "Đọc một lát cắt đồng bằng", callouts: [{"num": "01", "label": "Dòng chính", "text": "Đưa nước và trầm tích về hạ lưu."}, {"num": "02", "label": "Vùng ven biển", "text": "Chịu tác động triều và nước mặn."}, {"num": "03", "label": "Mạng kênh", "text": "Điều tiết và vận chuyển nước theo tiểu vùng."}] }
          ],
          exercise: { title: "Một bản đồ mặn cho ai?", context: "So người trồng cây ăn quả ở sâu trong đồng bằng và người nuôi thủy sản ven biển.", mechanism: "Đọc độ mặn theo vị trí, mùa và ngưỡng phù hợp từng mô hình.", takeaway: "Một màu trên bản đồ có ý nghĩa khác nhau với hai người dùng." },
          check: { title: "Yếu tố nào có thể làm ranh mặn vào sâu hơn trong mùa khô?", options: ["Dòng nước ngọt sông giảm, triều vẫn tác động", "Mưa lớn kéo dài ở toàn lưu vực", "Triều biến mất", "Tăng nước ngọt chảy về biển"] },
          notes: [
            { title: "Thời gian lấy mẫu nước", lead: "Cùng nơi nhưng ở đỉnh triều và đáy triều có thể đo khác nhau." },
            { title: "Đất, nước và sinh kế", lead: "Một phương án sử dụng đất cần đọc cả đặc điểm tự nhiên lẫn điều kiện cộng đồng." },
            { title: "Gió mùa Việt Nam có tính phân hóa", lead: "Địa hình và vị trí khiến thời điểm mùa mưa khác nhau giữa các miền." },
          ]
        },
        {
          name: "Biến đổi khí hậu và thích ứng",
          question: "Cùng một mực nước, vì sao hai cộng đồng có thể chịu thiệt hại khác nhau?",
          concepts: [
            { layout: "process-flow", title: "Đọc rủi ro ở ba lớp", steps: [{"step": "Hiểm họa", "title": "Mức ngập và tần suất", "desc": "Mô tả hiện tượng vật lý."}, {"step": "Phơi lộ", "title": "Người và tài sản nằm trong vùng ảnh hưởng", "desc": "Dùng bản đồ chồng lớp."}, {"step": "Dễ tổn thương", "title": "Khả năng chống chịu khác nhau", "desc": "Xem hạ tầng, sinh kế và cảnh báo."}] },
            { layout: "comparison", title: "Giảm phát thải và thích ứng", leftTitle: "Giảm phát thải", leftPoints: ["Tác động vào nguyên nhân làm khí hậu nóng lên.", "Ví dụ nâng hiệu quả sử dụng năng lượng."], rightTitle: "Thích ứng", rightPoints: ["Giảm tác hại hoặc tận dụng điều kiện mới.", "Ví dụ bố trí công trình tránh vùng ngập."] }
          ],
          exercise: { title: "Đề xuất một cách theo dõi ngập", context: "Lớp đánh dấu mức nước tại cùng điểm qua các trận mưa.", mechanism: "Ghi thời gian, mưa và ảnh có thước theo dõi.", takeaway: "Chuỗi đo hỗ trợ lập bản đồ rủi ro với điều kiện đo rõ ràng." },
          check: { title: "Một khu dễ bị ngập nhưng chưa có nhà ở có mức nào thấp hơn khu đã đông dân tương tự?", options: ["Mức phơi lộ của dân cư", "Mực nước biển toàn cầu", "Tần suất mưa vùng rộng", "Độ cao đỉnh triều"] },
          notes: [
            { title: "Mực biển tương đối", lead: "Chịu ảnh hưởng cả nước biển dâng và chuyển động nền đất tại địa phương." },
            { title: "So kịch bản, ghi giả thiết", lead: "Bản đồ tương lai cần nêu khoảng thời gian và kịch bản dùng." },
            { title: "Giải pháp theo lớp", lead: "Kết hợp cảnh báo, quy hoạch và cải thiện hạ tầng tùy vùng." },
          ]
        },
      ]
    },
    "dia-kinh-te": {
      coverIndex: 3,
      introduction: "Theo dấu người, việc làm và hàng hóa từ đô thị đến hậu phương cảng.",
      goals: [
        "Tính và đọc tỷ lệ dân thành thị.",
        "So cơ cấu lao động với giá trị tăng thêm.",
        "Chọn tiêu chí đo khi đề xuất phương án vùng.",
      ],
      closing: "Một con số chỉ so được khi hai bên cùng đơn vị và phạm vi.",
      images: [
        illustration({
          file: "CityPop_PercUrban-2018.png", local: "15c9a762e12a", author: "Nicxjo", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Bản đồ tỷ lệ dân thành thị năm 2018",
          observation: "Đọc tỷ lệ theo chú giải và định nghĩa thống kê trước khi so vùng."
        }),
        illustration({
          file: "Economic_sectors_and_income.JPG", local: "30e60eaaa77f", author: "Rcragun", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
          caption: "Biểu đồ cơ cấu khu vực kinh tế",
          observation: "Đối chiếu số trên biểu đồ với đại lượng và giai đoạn của nguồn."
        }),
        illustration({
          file: "Botanical_Garden_V.L._Komarov_Botanical_Institute.jpg", local: "675025353877", author: "User:Владимир Иванов", license: "Public domain",
          caption: "Nhà kính thuộc Vườn thực vật Komarov",
          observation: "Khung kính cho thấy cách che chắn một không gian trồng cây."
        }),
        illustration({
          file: "Port_of_Singapore.jpg", local: "beed64f21fe7", author: "Aaaatu", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Cảng Singapore",
          observation: "Vị trí cầu bến và khu chứa hàng gợi các chặng chuyển tiếp của logistics."
        }),
        illustration({
          file: "Circle_Bus_Station,Accra,Ghana.jpg", local: "08b4b2760e2b", author: "Joris Darlington Quarshie", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Bến xe buýt tại Accra, Ghana",
          observation: "Hình ảnh cho thấy một điểm gom chuyến trong mạng vận tải công cộng."
        }),
      ],
      chapters: [
        {
          name: "Dân cư và đô thị hóa",
          question: "Tăng số dân thành thị có đồng nghĩa tỷ lệ thành thị luôn tăng?",
          concepts: [
            { layout: "formula-spotlight", title: "Tỷ lệ dân thành thị", formula: "p = (Dân thành thị / Tổng dân số) × 100%", annotations: [{"tag": "Tử số", "text": "Số dân được phân loại thành thị."}, {"tag": "Mẫu số", "text": "Tổng dân số cùng thời điểm."}, {"tag": "So sánh", "text": "Giữ định nghĩa đô thị nhất quán."}] },
            { layout: "data-chart", title: "Một tỉnh giả định qua hai kỳ", bars: [{"label": "Thành thị A", "val": 30, "unit": "nghìn"}, {"label": "Tổng A", "val": 100, "unit": "nghìn"}, {"label": "Thành thị B", "val": 36, "unit": "nghìn"}, {"label": "Tổng B", "val": 120, "unit": "nghìn"}], insightBody: "Dân thành thị tăng 6 nghìn nhưng cả hai tỷ lệ đều là 30%." }
          ],
          exercise: { title: "Chọn đơn vị so hai vùng", context: "Vùng A đông dân hơn vùng B nhưng sống trên diện tích lớn hơn.", mechanism: "Chia dân số cho diện tích nếu cần mật độ.", takeaway: "Dùng người/km² để so cường độ cư trú." },
          check: { title: "Tỷ lệ thành thị có thể giữ nguyên dù dân thành thị tăng nếu?", options: ["Tổng dân số tăng cùng tỷ lệ", "Diện tích giảm một nửa", "Dân nông thôn luôn bằng 0", "Mẫu số đô thị không đổi"] },
          notes: [
            { title: "Đổi ranh giới và thay đổi thống kê", lead: "Một khu được phân loại lại có thể làm số dân thành thị đổi mà không có ai di chuyển." },
            { title: "Mật độ trung bình che giấu phân bố", lead: "So thêm bản đồ khu tập trung và khu thưa dân." },
            { title: "Đô thị hóa có chiều chất lượng", lead: "Mạng dịch vụ và hạ tầng là những chiều khác ngoài tỷ lệ dân thành thị." },
          ]
        },
        {
          name: "Cơ cấu kinh tế và việc làm",
          question: "Vì sao tỷ trọng việc làm và tỷ trọng sản lượng của một khu vực có thể khác?",
          concepts: [
            { layout: "comparison", title: "Hai cách đọc cơ cấu", leftTitle: "Theo việc làm", leftPoints: ["Đếm người làm trong từng nhóm ngành.", "Phản ánh phân bố lao động."], rightTitle: "Theo giá trị tăng thêm", rightPoints: ["Đo giá trị tạo thêm theo ngành.", "Phụ thuộc năng suất và giá tương đối."] },
            { layout: "data-chart", title: "Giá trị tăng thêm của vùng giả lập", bars: [{"label": "Nông nghiệp", "val": 18, "unit": "%"}, {"label": "Công nghiệp, xây dựng", "val": 37, "unit": "%"}, {"label": "Dịch vụ", "val": 45, "unit": "%"}], insightBody: "Ba tỷ trọng cộng thành 100%; đây là cơ cấu minh họa, không phải số liệu một tỉnh thật." }
          ],
          exercise: { title: "Tách hai nhận định về tăng trưởng", context: "Tỷ trọng nông nghiệp giảm, nhưng tổng kinh tế tăng mạnh.", mechanism: "Tính giá trị tuyệt đối bằng tổng nhân tỷ trọng.", takeaway: "Tỷ trọng giảm vẫn có thể đi cùng giá trị tuyệt đối tăng." },
          check: { title: "Chỉ từ tỷ trọng việc làm có suy ra đúng tỷ trọng sản lượng từng ngành không?", options: ["Không, hai bảng dùng đại lượng khác nhau", "Có, tỷ trọng luôn trùng", "Có nếu đủ ba ngành", "Có nếu xếp ngành đúng thứ tự"] },
          notes: [
            { title: "Tỷ trọng cần một tổng rõ", lead: "Nêu phần trăm của lao động hay của giá trị, cùng năm và vùng." },
            { title: "Đọc biến động bằng điểm phần trăm", lead: "Từ 18% lên 20% là tăng 2 điểm phần trăm." },
            { title: "Dịch vụ có nhiều nhánh", lead: "Bán lẻ, logistics và du lịch dùng nguồn lực địa phương khác nhau." },
          ]
        },
        {
          name: "Sản xuất và sử dụng tài nguyên",
          question: "Công nghệ cao trong sản xuất có thể giải quyết bài toán gì và đổi chi phí thế nào?",
          concepts: [
            { layout: "comparison", title: "Nhà kính và canh tác ngoài trời", leftTitle: "Nhà kính", leftPoints: ["Cho phép điều chỉnh một số điều kiện sinh trưởng.", "Cần đầu tư và vận hành hạ tầng."], rightTitle: "Ngoài trời", rightPoints: ["Phụ thuộc nhiều hơn vào thời tiết.", "Có thể có chi phí xây dựng thấp hơn."] },
            { layout: "process-flow", title: "Đo hiệu quả một thay đổi sản xuất", steps: [{"step": "Đo gốc", "title": "Ghi nước và sản lượng", "desc": "Tính cùng mùa vụ hoặc có đối chứng."}, {"step": "Áp dụng", "title": "Thay một yếu tố", "desc": "Ví dụ điều chỉnh cách tưới."}, {"step": "Đối chiếu", "title": "So lít/kg và chi phí", "desc": "Xem cả tác động chất lượng và công lao động."}] }
          ],
          exercise: { title: "So hai phương án tưới giả định", context: "A dùng 100 L để thu 5 kg; B dùng 84 L để thu 6 kg.", mechanism: "Chia tổng nước cho khối lượng thu hoạch.", takeaway: "A dùng 20 L/kg và B 14 L/kg trong ví dụ." },
          check: { title: "Muốn so lượng nước trên mỗi sản phẩm nên dùng?", options: ["Lít trên kilogram sản phẩm", "Tổng lít không kèm sản lượng", "Số ảnh nhà kính", "Số loại cây trên bản đồ"] },
          notes: [
            { title: "Năng lượng cũng là đầu vào", lead: "Một phương án tiết kiệm nước có thể cần điện hoặc vật tư bổ sung." },
            { title: "Chuỗi lạnh", lead: "Giữ nhiệt độ phù hợp khi bảo quản và vận chuyển có thể giảm hỏng hàng." },
            { title: "Đặt ranh giới khi so", lead: "Nêu đo ở ruộng, ở xưởng hay qua cả vận chuyển." },
          ]
        },
        {
          name: "Giao thông, cảng và dịch vụ",
          question: "Một cảng thuận lợi cần gì ngoài vị trí sát biển?",
          concepts: [
            { layout: "process-flow", title: "Từ tàu biển đến nơi bán", steps: [{"step": "Dỡ", "title": "Hàng rời tàu ở cảng", "desc": "Kế hoạch cầu bến ảnh hưởng thời gian."}, {"step": "Chuyển", "title": "Đưa vào kho hoặc trung tâm phân phối", "desc": "Thủ tục và đường kết nối đều quan trọng."}, {"step": "Giao", "title": "Đi chặng cuối", "desc": "Phương thức phụ thuộc thời gian và điểm đến."}] },
            { layout: "comparison", title: "Cảng cửa ngõ và điểm trung chuyển", leftTitle: "Cửa ngõ", leftPoints: ["Chuyển hàng giữa vùng nội địa và biển.", "Cần kết nối hậu phương."], rightTitle: "Điểm trung chuyển", rightPoints: ["Nối nhiều tuyến tàu.", "Tần suất chuyến và độ tin cậy là lợi thế."] }
          ],
          exercise: { title: "Chọn tuyến cho hàng dễ hỏng", context: "Tuyến A rẻ nhưng thời gian chờ biến động, tuyến B ổn định hơn.", mechanism: "Đặt chi phí vận tải cạnh rủi ro hư hỏng.", takeaway: "Chọn theo tổng chi phí và thời hạn, không chỉ cước." },
          check: { title: "Cụm từ “hậu phương cảng” nói về?", options: ["Vùng nội địa mà cảng phục vụ", "Vùng ngay dưới đáy cảng", "Tầng khí quyển trên cảng", "Chỉ chỗ đỗ tàu ban đêm"] },
          notes: [
            { title: "Sức chứa du lịch", lead: "Lượng khách cần xem cùng năng lực dịch vụ và tác động môi trường." },
            { title: "Nút thắt có thể ở ngoài cảng", lead: "Đường vào cảng và kho bãi có thể giới hạn luồng hàng dù cầu bến còn chỗ." },
            { title: "Đếm theo đơn vị thích hợp", lead: "Lượt khách, tấn và TEU trả lời các câu hỏi khác nhau." },
          ]
        },
        {
          name: "Chọn chiến lược cho vùng",
          question: "Vì sao không nên dùng một chiến lược giống nhau cho mọi địa phương?",
          concepts: [
            { layout: "comparison", title: "Lợi thế sẵn có và năng lực cần xây", leftTitle: "Sẵn có", leftPoints: ["Vị trí, đất, cảnh quan và mạng hiện tại.", "Đo được bằng bản đồ và hiện trạng."], rightTitle: "Năng lực cần xây", rightPoints: ["Kỹ năng, hạ tầng hoặc quản trị mới.", "Đòi hỏi thời gian và nguồn lực."] },
            { layout: "process-flow", title: "Đánh giá đề xuất trước khi chọn", steps: [{"step": "Tiêu chí", "title": "Đặt mục tiêu rõ", "desc": "Có việc làm, giảm thời gian hoặc giảm tác động."}, {"step": "Phương án", "title": "Đưa hai lựa chọn có số liệu", "desc": "So cùng khung thời gian."}, {"step": "Kiểm tra", "title": "Hỏi ai được lợi và ai chịu chi phí", "desc": "Nêu đánh đổi."}] }
          ],
          exercise: { title: "So xe buýt và mở bãi xe", context: "Khu trường học đông vào giờ vào lớp.", mechanism: "So thời gian đi lại, an toàn, diện tích và khả năng tiếp cận.", takeaway: "Đề xuất cần dựa trên nhu cầu thực đo thay vì một ảnh chụp giờ cao điểm." },
          check: { title: "Tiêu chí nào giúp so phương án giảm ùn tắc?", options: ["Thời gian di chuyển theo khung giờ", "Màu phương tiện", "Tên nhà thầu", "Số trang của đề xuất"] },
          notes: [
            { title: "So trên cùng thang", lead: "Đánh giá hai vùng cần giữ đơn vị và năm dữ liệu tương đương." },
            { title: "Phân nhóm người sử dụng", lead: "Học sinh, người lao động và người cao tuổi có thể cần dịch vụ khác nhau." },
            { title: "Theo dõi sau triển khai", lead: "Chọn chỉ số đo trước và lặp lại sau khi phương án vận hành." },
          ]
        },
      ]
    },
    "cn-ai-cs": {
      coverIndex: 2,
      introduction: "Từ lưu đồ tìm điểm lớn nhất đến một buổi demo AI có kiểm chứng.",
      goals: [
        "Viết thuật toán với điều kiện đầu vào rõ.",
        "Tách ví dụ dùng học khỏi ví dụ dùng kiểm thử.",
        "Đối chiếu kết quả AI với nguồn trước khi dùng.",
      ],
      closing: "Demo tốt cho người xem thấy lúc nào cần người kiểm tra.",
      images: [
        illustration({
          file: "LampFlowchart.svg", local: "59bfd4d095cf", author: "svg by Booyabazookaoriginal png by Wapcaplet", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", fit: "contain",
          caption: "Lưu đồ kiểm tra đèn không hoạt động",
          observation: "Các điểm rẽ thể hiện điều kiện ảnh hưởng thứ tự kiểm tra."
        }),
        illustration({
          file: "Decision_Tree.jpg", local: "00587369a036", author: "Gilgoldm", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Ví dụ cây quyết định",
          observation: "Theo mỗi nhánh từ điều kiện tới lá để đọc kết quả."
        }),
        illustration({
          file: "Colored_neural_network.svg", local: "9d789244d18b", author: "Glosser.ca", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", fit: "contain",
          caption: "Sơ đồ các lớp của mạng nơ-ron",
          observation: "Quan sát cách nhiều nút kết nối từ đầu vào tới đầu ra."
        }),
        illustration({
          file: "Web_server_serving_static_content.svg", local: "43a700a872a6", author: "Giga Bang", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Máy chủ web phục vụ tài nguyên tĩnh",
          observation: "Theo đường gửi yêu cầu và đường trả dữ liệu về trình duyệt."
        }),
        illustration({
          file: "Voice_recognition.png", local: "d3b3d6343bfa", author: "DoctorButtsMD", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", fit: "contain",
          caption: "Minh họa tương tác với máy tính bằng giọng nói",
          observation: "Một giao diện cần được đánh giá qua cách người dùng thực hiện nhiệm vụ."
        }),
      ],
      chapters: [
        {
          name: "Thuật toán và dữ liệu",
          question: "Hai lời giải cho ra cùng kết quả thì còn khác nhau ở điểm nào?",
          concepts: [
            { layout: "process-flow", title: "Tìm điểm lớn nhất trong danh sách", steps: [{"step": "Khởi tạo", "title": "Giữ điểm đầu", "desc": "Giả sử danh sách có ít nhất một điểm."}, {"step": "Duyệt", "title": "So từng điểm còn lại", "desc": "Cập nhật khi thấy điểm lớn hơn."}, {"step": "Trả", "title": "Xuất giá trị đang giữ", "desc": "Sau n−1 phép so sánh."}] },
            { layout: "comparison", title: "Danh sách và bảng tra khóa", leftTitle: "Danh sách", leftPoints: ["Giữ thứ tự phần tử.", "Tìm theo giá trị có thể cần duyệt nhiều phần tử."], rightTitle: "Bảng tra khóa", rightPoints: ["Ánh xạ khóa sang giá trị.", "Hợp với truy vấn theo khóa đã biết."] }
          ],
          exercise: { title: "Vẽ lưu đồ cho danh sách rỗng", context: "Chương trình cần in điểm lớn nhất, nhưng có thể không có điểm nào.", mechanism: "Thêm nhánh kiểm tra trước khi lấy phần tử đầu.", takeaway: "Trả về trạng thái “chưa có điểm” khi đầu vào rỗng." },
          check: { title: "Tìm phần tử lớn nhất trong danh sách chưa sắp, n≥1, cần bao nhiêu so sánh bằng cách duyệt?", options: ["n−1", "n²", "2ⁿ", "0 với mọi n"] },
          notes: [
            { title: "Kiểm tra một phần tử", lead: "Danh sách chỉ có một phần tử trả ngay giá trị đó và không cần so sánh." },
            { title: "Tên biến mang nghĩa", lead: "Tên maxScore dễ đọc hơn m nếu đây là giá trị điểm lớn nhất." },
            { title: "Sắp xếp có giá", lead: "Nếu chỉ cần giá trị lớn nhất, không cần sắp xếp toàn danh sách trước." },
          ]
        },
        {
          name: "Học máy từ ví dụ",
          question: "Một mô hình đoán tốt trên dữ liệu đã gặp có thể thất bại ở lần dùng mới vì sao?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc cây quyết định", callouts: [{"num": "01", "label": "Nút", "text": "Đặt câu hỏi về một đặc trưng."}, {"num": "02", "label": "Nhánh", "text": "Chọn đường theo câu trả lời."}, {"num": "03", "label": "Lá", "text": "Đưa ra nhãn hoặc giá trị dự báo."}] },
            { layout: "comparison", title: "Tập huấn luyện và tập kiểm thử", leftTitle: "Huấn luyện", leftPoints: ["Dùng để điều chỉnh mô hình.", "Mô hình được tiếp xúc với các ví dụ."], rightTitle: "Kiểm thử", rightPoints: ["Đo trên ví dụ giữ riêng.", "Giúp ước lượng hiệu quả với dữ liệu mới tương tự."] }
          ],
          exercise: { title: "Phát hiện một cách chia sai", context: "Các ảnh gần như trùng nhau của cùng một vật bị tách vào hai tập.", mechanism: "Chia theo vật hoặc phiên chụp trước khi huấn luyện.", takeaway: "Tập kiểm thử bớt giống bản sao dữ liệu huấn luyện." },
          check: { title: "Tại sao không chỉnh mô hình liên tục theo kết quả tập kiểm thử?", options: ["Tập kiểm thử sẽ dần mất vai trò đánh giá độc lập", "Vì số liệu kiểm thử luôn sai", "Vì mô hình không thể điều chỉnh", "Vì phải dùng lại đúng ảnh đã học"] },
          notes: [
            { title: "Đường ranh từ ví dụ", lead: "Cây có thể học các điều kiện rẽ nhánh từ dữ liệu, không cần người viết từng luật." },
            { title: "Quá khớp", lead: "Sai số tập học thấp nhưng sai số trên dữ liệu mới cao là một dấu hiệu cần kiểm tra." },
            { title: "Mẫu lệch nhãn", lead: "Nếu 95 trong 100 mẫu là lớp A, đoán toàn A đã đạt 95% nhưng bỏ sót lớp B." },
          ]
        },
        {
          name: "Mạng nơ-ron và mô hình sinh",
          question: "Điều gì khiến câu trả lời trôi chảy vẫn có thể chứa thông tin sai?",
          concepts: [
            { layout: "annotated-diagram", title: "Ba phần thường thấy của mạng nơ-ron", callouts: [{"num": "01", "label": "Đầu vào", "text": "Biểu diễn dữ liệu thành các giá trị số."}, {"num": "02", "label": "Lớp trung gian", "text": "Biến đổi biểu diễn qua các phép tính."}, {"num": "03", "label": "Đầu ra", "text": "Biểu diễn điểm số, dự báo hoặc bước sinh tiếp theo."}] },
            { layout: "comparison", title: "Dự báo và xác minh", leftTitle: "Mô hình sinh", leftPoints: ["Tạo chuỗi theo mẫu đã học và ngữ cảnh.", "Có thể viết thuyết phục dù sự kiện sai."], rightTitle: "Xác minh bằng nguồn", rightPoints: ["Đối chiếu mệnh đề với tài liệu độc lập.", "Cần đọc nội dung nguồn, không chỉ tiêu đề."] }
          ],
          exercise: { title: "Kiểm tra một câu AI nêu năm", context: "AI viết một câu có mốc lịch sử và gắn tên nguồn.", mechanism: "Mở nguồn, tìm đúng thông tin và kiểm tra ngày.", takeaway: "Giữ câu nếu được nguồn hỗ trợ, sửa hoặc bỏ nếu thiếu bằng chứng." },
          check: { title: "Khi AI ghi một nguồn nghe có vẻ đáng tin, bước phù hợp là?", options: ["Mở nguồn và đối chiếu với mệnh đề", "Tin vì câu viết trôi chảy", "Chỉ đếm số trích dẫn", "Xem nguồn là tài liệu chắc chắn có thật"] },
          notes: [
            { title: "Sửa yêu cầu theo tiêu chí", lead: "Nêu đối tượng, độ dài và loại đầu ra để giảm mơ hồ." },
            { title: "Sáng tác hay tra cứu", lead: "Với sáng tác, đánh giá tính phù hợp; với sự kiện, kiểm tra độ chính xác." },
            { title: "Phân biệt tóm tắt và thêm ý", lead: "Khi tóm tắt tài liệu, đánh dấu những suy luận vượt khỏi nội dung nguồn." },
          ]
        },
        {
          name: "Web, dữ liệu và quyền truy cập",
          question: "Trang web thực sự diễn ra những bước nào giữa lúc bấm nút và lúc nhìn thấy kết quả?",
          concepts: [
            { layout: "process-flow", title: "Một lượt yêu cầu và phản hồi", steps: [{"step": "Gửi", "title": "Trình duyệt gửi yêu cầu", "desc": "Địa chỉ và phương thức cho biết thao tác."}, {"step": "Xử lý", "title": "Máy chủ kiểm tra và chuẩn bị dữ liệu", "desc": "Có thể đọc tệp hoặc cơ sở dữ liệu."}, {"step": "Nhận", "title": "Trình duyệt xử lý phản hồi", "desc": "Hiển thị giao diện hoặc thông báo lỗi."}] },
            { layout: "comparison", title: "Dữ liệu công khai và riêng tư", leftTitle: "Công khai", leftPoints: ["Có thể đi kèm mã giao diện tải về.", "Nên ghi nguồn khi dùng lại."], rightTitle: "Riêng tư", rightPoints: ["Chỉ người có quyền mới được truy cập.", "Quyền cần được kiểm tra phía máy chủ."] }
          ],
          exercise: { title: "Sắp xếp dữ liệu cho website lớp", context: "Có thời khóa biểu công khai và danh sách thông tin liên hệ cá nhân.", mechanism: "Xác định dữ liệu nào cần quyền truy cập.", takeaway: "Chỉ đưa dữ liệu công khai vào tài nguyên tĩnh." },
          check: { title: "Ẩn nút trên giao diện có đủ để bảo vệ dữ liệu riêng tư không?", options: ["Không, còn cần kiểm tra quyền ở máy chủ", "Có, nếu nút nhỏ", "Có, nếu nút đổi màu", "Có, nếu nút chỉ hiện trên máy tính"] },
          notes: [
            { title: "Vai trò HTTPS", lead: "Bảo vệ đường truyền; quyền xem dữ liệu vẫn cần kiểm tra riêng." },
            { title: "Trạng thái lỗi có ích", lead: "Hiển thị thông báo có thể hành động, không để trang trống im lặng." },
            { title: "Giữ dữ liệu tối thiểu", lead: "Chỉ thu những trường cần thiết cho chức năng đã định." },
          ]
        },
        {
          name: "Demo và trách nhiệm với AI",
          question: "Một demo thuyết phục cần cho người xem thấy thành công và giới hạn nào?",
          concepts: [
            { layout: "process-flow", title: "Trình diễn từ tình huống thật", steps: [{"step": "Đặt cảnh", "title": "Giới thiệu người dùng và nhu cầu", "desc": "Chọn một công việc rõ."}, {"step": "Chạy", "title": "Nhập một trường hợp điển hình", "desc": "Hiển thị cả đầu vào và kết quả."}, {"step": "Thử biên", "title": "Cho một trường hợp khó", "desc": "Chỉ ra lúc cần kiểm tra thủ công."}] },
            { layout: "comparison", title: "Hiệu quả và tác động", leftTitle: "Hiệu quả", leftPoints: ["Tính thời gian hoặc lỗi trên nhiệm vụ.", "Giữ cùng tiêu chí trước và sau."], rightTitle: "Tác động", rightPoints: ["Xem ai được lợi và ai có thể bị bỏ sót.", "Giữ dữ liệu và phản hồi phù hợp."] }
          ],
          exercise: { title: "Tổ chức demo tóm tắt bài học", context: "Dùng văn bản công khai hoặc tự viết, thử đoạn rõ và đoạn mơ hồ.", mechanism: "Yêu cầu một bạn tìm ý bị bỏ sót.", takeaway: "Ghi cả lỗi bỏ ý để nhóm biết khi nào phải đọc bản gốc." },
          check: { title: "Chi tiết nào làm demo AI có ích hơn cho người dùng?", options: ["Có ví dụ thất bại và cách kiểm tra kết quả", "Chỉ chọn ví dụ đúng hoàn toàn", "Ẩn dữ liệu đầu vào", "Bỏ các tiêu chí đánh giá"] },
          notes: [
            { title: "Hỏi trước khi dùng dữ liệu cá nhân", lead: "Có thể đổi sang dữ liệu giả lập khi chỉ cần minh họa chức năng." },
            { title: "Thành công ở lớp chưa đủ để suy rộng", lead: "Muốn dùng ở nhiều lớp, cần thử với ngôn ngữ và dạng bài khác nhau." },
            { title: "Người duyệt có vai trò cụ thể", lead: "Giao người đọc kiểm số, người đối chiếu nguồn và người rà diễn đạt." },
          ]
        },
      ]
    },
    "cn-robotics-iot": {
      coverIndex: 2,
      introduction: "Theo một số đo từ cảm biến qua robot tới bảng giám sát.",
      goals: [
        "Phân biệt khối đo, xử lý và điều khiển.",
        "Mô tả vòng phản hồi bám vạch.",
        "Đặt tiêu chí cho nhiều lượt thử.",
      ],
      closing: "Một nguyên mẫu đáng tin phải làm việc lặp lại được trong điều kiện đã nêu.",
      images: [
        illustration({
          file: "DHCOM_Computer_On_Module_-_AM35x.jpg", local: "b68e509c1f4f", author: "Pe wiki editor", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          caption: "Một module máy tính nhúng AM35x",
          observation: "Quan sát phần xử lý và đầu nối trên cùng một module."
        }),
        illustration({
          file: "Arduino_Uno_-_R3.jpg", local: "894eb6064b4b", author: "SparkFun Electronics from Boulder, USA", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0",
          caption: "Bo mạch Arduino Uno R3",
          observation: "Định vị hàng chân và cổng USB trên bo."
        }),
        illustration({
          file: "Line_follower.jpg", local: "981b3e82274f", author: "Marcmccomb", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          caption: "Robot bám vạch dùng cảm biến hồng ngoại",
          observation: "Bố trí cảm biến gần mặt đường giúp theo dõi tín hiệu phản xạ ở hai bên."
        }),
        illustration({
          file: "Internet_of_Things_using_NEST.png", local: "6895f451072d", author: "Leenaborbarua", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Thiết bị Nest có kết nối mạng",
          observation: "Minh họa việc theo dõi và điều khiển một thiết bị qua kết nối."
        }),
        illustration({
          file: "Breadboard_in_electronics.jpg", local: "f364f8800d9d", author: "SAHAYA RAJAN S", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
          caption: "Breadboard dành cho mạch thử",
          observation: "Đọc nhóm lỗ nối điện với nhau trước khi rà vị trí linh kiện."
        }),
      ],
      chapters: [
        {
          name: "Hệ thống nhúng và IoT",
          question: "Một thiết bị có điều khiển tự động có nhất thiết kết nối Internet?",
          concepts: [
            { layout: "annotated-diagram", title: "Ba khối của một hệ thống nhúng", callouts: [{"num": "01", "label": "Đầu vào", "text": "Nhận tín hiệu từ nút bấm hoặc cảm biến."}, {"num": "02", "label": "Xử lý", "text": "Vi điều khiển chạy chương trình."}, {"num": "03", "label": "Đầu ra", "text": "Điều khiển đèn, màn hình hoặc cơ cấu."}] },
            { layout: "comparison", title: "Thiết bị độc lập và thiết bị IoT", leftTitle: "Độc lập", leftPoints: ["Xử lý ngay tại chỗ.", "Có thể hoạt động khi mất mạng."], rightTitle: "IoT", rightPoints: ["Trao đổi dữ liệu qua mạng.", "Cần kế hoạch khi kết nối gián đoạn."] }
          ],
          exercise: { title: "Phân loại đèn học tự động", context: "Đèn bật khi cảm biến phát hiện tối và không có kết nối mạng.", mechanism: "Tách tự động hóa khỏi truyền dữ liệu.", takeaway: "Đó có thể là hệ nhúng độc lập, chưa phải một ứng dụng IoT." },
          check: { title: "Khối nào đọc dữ liệu rồi chọn hành động?", options: ["Vi điều khiển", "Vỏ hộp", "Dây nguồn", "Chân đế"] },
          notes: [
            { title: "Phản hồi dùng số đo mới", lead: "Ví dụ bộ điều khiển nhiệt đọc lại nhiệt độ sau mỗi quyết định." },
            { title: "Chọn xử lý tại chỗ", lead: "Phản hồi nhanh có thể chạy cục bộ, gửi dữ liệu tổng hợp sau." },
            { title: "Một chức năng rõ", lead: "Mô tả đầu vào, quy tắc và đầu ra trước khi chọn linh kiện." },
          ]
        },
        {
          name: "Cảm biến và giao tiếp",
          question: "Giá trị đọc từ cảm biến khác gì với đại lượng thật đang đo?",
          concepts: [
            { layout: "annotated-diagram", title: "Đọc các vùng trên bo Arduino Uno", callouts: [{"num": "01", "label": "Chân số", "text": "Nhận hoặc đưa tín hiệu số."}, {"num": "02", "label": "Chân analog", "text": "Có thể lấy mẫu mức điện áp analog."}, {"num": "03", "label": "Cổng USB", "text": "Thường dùng nạp chương trình và giao tiếp."}] },
            { layout: "comparison", title: "Tín hiệu analog và số", leftTitle: "Analog", leftPoints: ["Mức điện áp biến đổi liên tục trong một khoảng.", "Bộ chuyển đổi số hóa theo mức rời rạc."], rightTitle: "Số", rightPoints: ["Quy ước các mức logic.", "Có thể dùng giao thức để truyền nhiều giá trị."] }
          ],
          exercise: { title: "Hiệu chuẩn một mô hình đo sáng", context: "Ghi số đọc trong điều kiện sáng và tối đã định.", mechanism: "Lặp lại để thấy nhiễu và khoảng giá trị.", takeaway: "Chọn ngưỡng giữa hai vùng nếu chúng tách nhau hợp lý." },
          check: { title: "Khi hai điều kiện sáng cho vùng số đo chồng nhau, điều gì nên làm?", options: ["Đo lặp và xem lại ngưỡng hoặc cảm biến", "Khẳng định một số đo luôn đúng", "Xóa đơn vị trong báo cáo", "Dùng tên khác cho cùng phép đo"] },
          notes: [
            { title: "Độ phân giải khác độ chính xác", lead: "Bước đo nhỏ không bảo đảm kết quả gần giá trị thật." },
            { title: "Lọc trung bình có đánh đổi", lead: "Giảm nhiễu ngẫu nhiên nhưng có thể làm phản hồi chậm." },
            { title: "Chân nguồn và tín hiệu", lead: "Đọc sơ đồ bo để phân biệt chân cấp nguồn với chân truyền giá trị." },
          ]
        },
        {
          name: "Robot bám vạch",
          question: "Robot dùng một dấu hiệu đơn giản trên sàn để giữ hướng bằng cách nào?",
          concepts: [
            { layout: "process-flow", title: "Vòng điều khiển bám vạch", steps: [{"step": "Đọc", "title": "Đo phản xạ hai bên", "desc": "Tín hiệu phụ thuộc vạch và nền."}, {"step": "So", "title": "Ước lượng lệch trái hoặc phải", "desc": "Dùng kết quả đã hiệu chuẩn."}, {"step": "Sửa", "title": "Đổi tốc độ hai bánh", "desc": "Đo lại ở chu kỳ sau."}] },
            { layout: "comparison", title: "Quay tại chỗ và sửa lệch nhẹ", leftTitle: "Quay tại chỗ", leftPoints: ["Hai bánh có thể chuyển động ngược chiều.", "Thay đổi hướng nhanh."], rightTitle: "Sửa lệch nhẹ", rightPoints: ["Điều chỉnh chênh lệch tốc độ nhỏ.", "Hợp khi còn đang bám gần vạch."] }
          ],
          exercise: { title: "Robot lắc mạnh trên đoạn thẳng", context: "Cảm biến vẫn thấy vạch nhưng robot liên tục sửa quá góc.", mechanism: "Thử giảm độ mạnh sửa và so cùng đoạn đường.", takeaway: "Giữ dữ liệu lượt chạy để đánh giá dao động." },
          check: { title: "Vì sao phải đo lại sau khi sửa hướng?", options: ["Để biết robot lệch bao nhiêu sau tác động", "Để đổi tên đoạn đường", "Để ngắt toàn bộ nguồn", "Để vạch đổi màu"] },
          notes: [
            { title: "Thử ở hơn một điều kiện sáng", lead: "Phản xạ cảm biến có thể đổi khi môi trường sáng khác." },
            { title: "Đường cong là ca thử riêng", lead: "Robot chạy tốt trên đoạn thẳng có thể còn lạc ở góc gắt." },
            { title: "Đo bằng tiêu chí cụ thể", lead: "Đếm số lần mất vạch và thời gian hoàn thành trên cùng tuyến." },
          ]
        },
        {
          name: "Kết nối và giám sát",
          question: "Nếu đường truyền mất tạm thời, hệ giám sát nên thể hiện điều gì cho người dùng?",
          concepts: [
            { layout: "process-flow", title: "Đường đi của một số đo", steps: [{"step": "Ghi", "title": "Cảm biến gửi số đo và giờ", "desc": "Thiết bị có thể lưu tạm."}, {"step": "Truyền", "title": "Đưa bản ghi qua kết nối", "desc": "Xử lý mất mạng hoặc gửi lại."}, {"step": "Hiển thị", "title": "Bảng theo dõi ghi thời gian cập nhật", "desc": "Người xem biết số liệu cũ hay mới."}] },
            { layout: "comparison", title: "Không có dữ liệu và có số 0", leftTitle: "Thiếu dữ liệu", leftPoints: ["Thiết bị chưa gửi hoặc đường truyền gián đoạn.", "Hiển thị dấu thiếu cùng giờ gần nhất."], rightTitle: "Giá trị 0", rightPoints: ["Là một kết quả đo hợp lệ nếu đại lượng cho phép.", "Vẫn cần đơn vị và thời điểm."] }
          ],
          exercise: { title: "Thiết kế bảng nhiệt độ khi mất Wi-Fi", context: "Số cuối cùng đến lúc 10 giờ, bây giờ đã 10 giờ 20.", mechanism: "Hiển thị số cũ kèm dấu trạng thái.", takeaway: "Ghi “cập nhật lần cuối 10:00” để tránh nhầm dữ liệu trực tiếp." },
          check: { title: "Chỉ báo nào phân biệt dữ liệu mới và dữ liệu cũ tốt nhất?", options: ["Thời điểm phép đo và trạng thái kết nối", "Đổi màu vỏ cảm biến", "Tên dự án dài hơn", "Đổi font số"] },
          notes: [
            { title: "Gửi lại có thể sinh trùng", lead: "Mỗi bản ghi có mã hoặc dấu giờ để hệ thống nhận diện bản sao." },
            { title: "Lấy mẫu khác tần suất gửi", lead: "Có thể tích nhiều mẫu tại chỗ rồi gửi gộp để tiết kiệm đường truyền." },
            { title: "Điều khiển an toàn khi mất mạng", lead: "Phản hồi thiết yếu có thể giữ ở thiết bị, cùng trạng thái mặc định đã xác định." },
          ]
        },
        {
          name: "Thử nghiệm STEM",
          question: "Một lượt chạy tốt có đủ để kết luận nguyên mẫu ổn định?",
          concepts: [
            { layout: "data-chart", title: "Tỷ lệ hoàn thành giả lập trên 10 lượt", bars: [{"label": "Đường thẳng", "val": 9, "unit": "lượt"}, {"label": "Cua rộng", "val": 8, "unit": "lượt"}, {"label": "Cua gắt", "val": 5, "unit": "lượt"}], insightBody: "Cua gắt là nhóm cần điều tra trước trong bộ số liệu mô phỏng." },
            { layout: "comparison", title: "Kiểm tra chức năng và độ bền", leftTitle: "Chức năng", leftPoints: ["Xem hệ có làm đúng một nhiệm vụ.", "Dùng ca thử rõ đầu vào và kết quả."], rightTitle: "Độ bền", rightPoints: ["Xem hoạt động lặp lại ở nhiều điều kiện.", "Ghi sự cố và giới hạn chịu lỗi."] }
          ],
          exercise: { title: "Tạo kế hoạch thử cho nguyên mẫu", context: "Robot cần bám vạch ở đường thẳng, hai kiểu cua và điều kiện sáng khác nhau.", mechanism: "Mỗi tổ hợp chạy nhiều lượt theo cùng chỉ số.", takeaway: "Báo cả tỷ lệ hoàn thành và tình huống lỗi." },
          check: { title: "Khi chỉ thay độ sáng để thử ảnh hưởng, các yếu tố khác nên?", options: ["Giữ nhất quán nếu có thể", "Thay đồng thời mọi tham số", "Không ghi lại", "Xóa kết quả lỗi"] },
          notes: [
            { title: "Đánh dấu phiên bản", lead: "Ghi cấu hình và phiên bản mã trên từng đợt thử." },
            { title: "Thử từng thay đổi", lead: "Nếu đổi cả thuật toán lẫn vạch cùng lúc, khó biết yếu tố nào gây khác biệt." },
            { title: "Định nghĩa “thành công”", lead: "Ví dụ hoàn thành đường trong 30 giây và không rời vạch quá một lần." },
          ]
        },
      ]
    },
    "van-co-dien": {
      coverIndex: 1,
      introduction: "Từ câu lục bát mở đầu đến lựa chọn của Kiều và cách đọc thơ Nôm.",
      goals: [
        "Phân biệt tác giả, người kể và nhân vật.",
        "Phân tích nhịp, hình ảnh và từ ngữ trong ngữ cảnh.",
        "Dùng chi tiết văn bản để so hai cách đọc.",
      ],
      closing: "Một từ nhỏ có thể thay đổi cả giọng của cảnh thơ.",
      images: [
        illustration({
          file: "Tượng_đài_cụ_Nguyễn_Du.jpg", local: "d339d8babac7", author: "Vienvo03", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Tượng Nguyễn Du tại khu lưu niệm",
          observation: "Tượng cho thấy cách tưởng niệm tác giả ở thời sau."
        }),
        illustration({
          file: "Kim_Vân_Kiều_tân_truyện.jpg", local: "44219ca8adea", author: "Nôm Foundation", license: "Public domain", fit: "contain",
          caption: "Trang sách Kim Vân Kiều tân truyện",
          observation: "Ảnh bản in cho thấy hình thức lưu truyền của tác phẩm."
        }),
        illustration({
          file: "Chữ_Nôm_(Khải_thư).svg", local: "953c3b69ef04", author: "Lệ Xuân", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Chữ Nôm viết theo kiểu Khải thư",
          observation: "Ảnh chữ giúp phân biệt văn tự với lời phiên âm Quốc ngữ."
        }),
        illustration({
          file: "Streets_of_Hoi_An_Ancient_Town,_Quang_Nam_province,_South_Central_Coast,_Vietnam.jpg", local: "033e80899703", author: "Mstyslav Chernov", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          caption: "Phố cổ Hội An làm tư liệu bối cảnh",
          observation: "Ảnh gợi không gian giao thương nhưng không phải minh họa một cảnh có thật trong truyện."
        }),
        illustration({
          file: "Bánh_Trôi_Nước.png", local: "e0298407aa55", author: "Lachy70", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", fit: "contain",
          caption: "Bài Bánh trôi nước bằng chữ Nôm",
          observation: "Đặt ảnh văn bản cạnh phiên âm khi phân tích hình ảnh và nhịp."
        }),
      ],
      chapters: [
        {
          name: "Nguyễn Du và bối cảnh",
          question: "Bối cảnh giúp đọc tác phẩm ra sao khi nhân vật vẫn cần được hiểu qua văn bản?",
          concepts: [
            { layout: "comparison", title: "Lời tác giả và lời nhân vật", leftTitle: "Tác giả", leftPoints: ["Người sáng tác trong bối cảnh lịch sử cụ thể.", "Tác phẩm có thể tổ chức nhiều giọng."], rightTitle: "Nhân vật", rightPoints: ["Phát ngôn trong một tình huống của truyện.", "Thái độ của nhân vật có thể không trùng với người kể."] },
            { layout: "timeline", title: "Đặt tác phẩm vào bối cảnh", steps: [{"step": "1765", "title": "Nguyễn Du chào đời", "desc": "Xã hội Việt Nam cuối thời Lê trải qua nhiều biến động."}, {"step": "Đầu TK XIX", "title": "Thời Nguyễn", "desc": "Nguyễn Du làm quan dưới triều Nguyễn."}, {"step": "1820", "title": "Nguyễn Du qua đời", "desc": "Tác phẩm tiếp tục được in, truyền đọc và diễn giải."}] }
          ],
          exercise: { title: "Sửa một suy luận lấy tiểu sử thay văn bản", context: "“Nguyễn Du từng trải biến động nên câu nào của Kiều cũng kể đời ông.”", mechanism: "Tách tác giả, người kể và nhân vật.", takeaway: "Dùng bối cảnh để gợi câu hỏi; dùng câu chữ cụ thể để lập luận." },
          check: { title: "Dữ kiện nào trực tiếp nhất khi phân tích tâm trạng Kiều trong một đoạn?", options: ["Lời nói, hành động và hình ảnh ngay trong đoạn", "Chỉ năm sinh tác giả", "Chỉ ảnh tượng đài", "Chỉ độ dài toàn tác phẩm"] },
          notes: [
            { title: "Tượng đài thuộc lịch sử tiếp nhận", lead: "Ảnh tượng Nguyễn Du cho thấy cách tưởng niệm ở thời sau." },
            { title: "Đọc cải biên", lead: "Truyện Kiều tiếp nhận cốt truyện có trước và tái tạo nó bằng tiếng Việt, thể lục bát." },
            { title: "Bối cảnh không thay nhận định", lead: "Chỉ đưa chi tiết lịch sử khi nó giúp lý giải một tín hiệu trong văn bản." },
          ]
        },
        {
          name: "Lục bát, hình ảnh và nhịp",
          question: "Một hình ảnh mở đầu có thể đưa người đọc vào nỗi bất an bằng cách nào?",
          concepts: [
            { layout: "quote-focus", title: "Hai câu mở đầu Truyện Kiều", quote: "Trăm năm trong cõi người ta,\nChữ tài chữ mệnh khéo là ghét nhau.", author: "Nguyễn Du · Truyện Kiều", note: "Chuyển từ một cõi chung sang xung đột giữa “tài” và “mệnh”." },
            { layout: "annotated-diagram", title: "Theo mối nối âm thanh trong lục bát", callouts: [{"num": "01", "label": "Dòng lục", "text": "Câu sáu tiếng mở nhịp."}, {"num": "02", "label": "Dòng bát", "text": "Câu tám tiếng nối và mở rộng."}, {"num": "03", "label": "Vần", "text": "Tiếng cuối dòng lục thường vần với tiếng thứ sáu dòng bát."}] }
          ],
          exercise: { title: "Tìm mối nối giữa hai dòng mở đầu", context: "Đọc thành tiếng “người ta” và “khéo là”.", mechanism: "Đếm tiếng và nhận ra vần ta–là.", takeaway: "Vần nối hai dòng, còn từ “ghét” tạo căng thẳng trong ý." },
          check: { title: "Thể lục bát luân phiên hai độ dài nào?", options: ["Sáu và tám tiếng", "Bốn và sáu tiếng", "Bảy và bảy tiếng", "Tám và mười tiếng"] },
          notes: [
            { title: "Đọc “trăm năm” trong ngữ cảnh", lead: "Cụm từ có thể gợi kiếp người, không nhất thiết là tuổi thọ chính xác." },
            { title: "Nhịp đọc không chỉ do số tiếng", lead: "Dấu câu, cụm nghĩa và điểm nhấn từ ngữ có thể gợi cách ngắt khác nhau." },
            { title: "Phân tích một từ", lead: "Thử thay “ghét” bằng “khác” để thấy sắc thái đối kháng giảm đi." },
          ]
        },
        {
          name: "Kiều trong tình thế lựa chọn",
          question: "Lời nói có thể vừa dịu giọng vừa hé lộ áp lực của nhân vật như thế nào?",
          concepts: [
            { layout: "quote-focus", title: "Lời mở của cảnh Trao duyên", quote: "Cậy em, em có chịu lời,\nNgồi lên cho chị lạy rồi sẽ thưa.", author: "Nguyễn Du · Truyện Kiều", note: "“Cậy” và “lạy” cùng cho thấy lời nhờ gửi có sức nặng." },
            { layout: "comparison", title: "Kể lại và đọc gần", leftTitle: "Kể lại", leftPoints: ["Trình bày những việc đã xảy ra.", "Cho người nghe nắm mạch tình huống."], rightTitle: "Đọc gần", rightPoints: ["Chọn từ, ngôi xưng hoặc cử chỉ.", "Giải thích tác dụng của chi tiết trong câu."] }
          ],
          exercise: { title: "Phân tích động từ “cậy”", context: "Đặt “cậy” cạnh “nhờ” trong lời Kiều nói với Vân.", mechanism: "“Cậy” gợi gửi gắm niềm tin và kỳ vọng.", takeaway: "Liên hệ với động tác “lạy” để thấy mức khẩn thiết." },
          check: { title: "Cách nào làm phân tích cảnh Trao duyên cụ thể nhất?", options: ["Chỉ ra từ “cậy” và giải thích tác dụng trong cảnh", "Kể lại toàn bộ đời Kiều", "Chỉ khen câu thơ hay", "Liệt kê mọi nhân vật trong truyện"] },
          notes: [
            { title: "Tương quan chị và em", lead: "Cử chỉ của người chị làm không khí lời nhờ trở nên trang trọng khác thường." },
            { title: "Một từ có nhiều sắc độ", lead: "Có thể bàn cả niềm tin lẫn sức ép trong lời nhờ, dựa vào ngữ cảnh." },
            { title: "Dị bản và dấu câu", lead: "Các ấn bản có thể trình bày dấu câu khác; ghi bản dùng để trích." },
          ]
        },
        {
          name: "Giá trị hiện thực và nhân đạo",
          question: "Cùng một cảnh, cách đọc về thiết chế xã hội khác gì cách đọc về phẩm giá nhân vật?",
          concepts: [
            { layout: "comparison", title: "Hai hướng đặt câu hỏi", leftTitle: "Hiện thực", leftPoints: ["Hỏi điều kiện xã hội nào giới hạn lựa chọn.", "Xem sức ép gia đình, địa vị và tiền bạc."], rightTitle: "Nhân đạo", rightPoints: ["Hỏi tác phẩm nhìn con người bằng thái độ nào.", "Xem quyền được yêu, được lựa chọn và được cảm thông."] },
            { layout: "process-flow", title: "Từ biến cố đến nhận định văn học", steps: [{"step": "Chọn", "title": "Nêu đúng sự kiện và hoàn cảnh", "desc": "Kiều quyết định bán mình để cứu gia đình."}, {"step": "Đọc", "title": "Tìm lời kể và ngôn ngữ quanh lựa chọn", "desc": "Chú ý ai có quyền quyết định."}, {"step": "Nối", "title": "Lập luận bằng chi tiết", "desc": "Nêu sức ép xã hội cùng sự cảm thông với nhân vật."}] }
          ],
          exercise: { title: "Tránh dùng ảnh thay cho dẫn chứng", context: "Một ảnh phố cổ được dùng làm nền khi bàn về trao đổi và tiền bạc.", mechanism: "Ghi ảnh là tư liệu không gian, rồi chọn đoạn truyện làm bằng chứng.", takeaway: "Ý về nhân vật phải dựa trên câu chữ và diễn biến trong tác phẩm." },
          check: { title: "Để chứng minh tác phẩm cảm thông với nhân vật, chọn gì?", options: ["Cách lời kể thể hiện nỗi đau trong cảnh cụ thể", "Ảnh phố cổ thời nay", "Chỉ năm tác giả mất", "Tổng số nhân vật"] },
          notes: [
            { title: "Một lựa chọn trong thế hạn hẹp", lead: "Nêu chủ động của nhân vật cùng những ràng buộc khiến lựa chọn trở nên đau đớn." },
            { title: "Tránh áp nhãn phẳng", lead: "Giá trị nhân đạo nên được giải thích qua cảnh cụ thể thay vì chỉ nhắc thuật ngữ." },
            { title: "Tiền bạc trong truyện", lead: "Phân biệt vật trao đổi, quan hệ quyền lực và giọng điệu kể chuyện." },
          ]
        },
        {
          name: "Đọc tiếp thơ Nôm",
          question: "So hai văn bản thế nào để thấy điểm gặp và nét riêng?",
          concepts: [
            { layout: "comparison", title: "Truyện thơ và bài thơ ngắn", leftTitle: "Truyện Kiều", leftPoints: ["Tâm lý và xung đột mở qua mạch tự sự dài.", "Đọc một cảnh bên cạnh cả tuyến nhân vật."], rightTitle: "Bánh trôi nước", rightPoints: ["Hình ảnh cô đọng trong bốn câu.", "Đọc lớp nghĩa tả vật cùng nghĩa gợi thân phận."] },
            { layout: "process-flow", title: "Viết một đoạn liên hệ có giới hạn", steps: [{"step": "Chọn", "title": "Đặt một trục so sánh", "desc": "Ví dụ quyền tự quyết của người phụ nữ."}, {"step": "Đọc", "title": "Tìm một chi tiết ở mỗi văn bản", "desc": "Giải thích tác dụng trong từng thể loại."}, {"step": "Kết", "title": "Nêu điểm gặp và khác biệt", "desc": "Không gộp hai tiếng nói thành một."}] }
          ],
          exercise: { title: "Sửa một câu so sánh quá rộng", context: "“Hai tác phẩm giống nhau vì cùng nói về phụ nữ.”", mechanism: "Đặt cạnh một lựa chọn của Kiều và hình ảnh “lòng son”.", takeaway: "So cách biểu hiện phẩm giá qua hành động tự sự và qua hình ảnh thơ." },
          check: { title: "Liên hệ hai tác phẩm nên bắt đầu bằng?", options: ["Một tiêu chí so sánh rõ, có dẫn chứng ở cả hai", "Chỉ cùng thời thì đủ", "Hai lời khen chung", "Đếm chữ để chọn tác phẩm hay hơn"] },
          notes: [
            { title: "Ứng xử với chữ Nôm", lead: "Ảnh bản in là tư liệu về văn bản; phiên âm cần được ghi rõ nguồn." },
            { title: "Vật và người trong một hình ảnh", lead: "“Bánh trôi” có nghĩa tả thực và có thể gợi thân phận qua cấu trúc toàn bài." },
            { title: "Tự chọn cách đọc", lead: "Viết hai câu về sự khác nhau giữa giọng kể bi cảm và giọng khẳng định phẩm giá." },
          ]
        },
      ]
    },
    "van-nghi-luan": {
      coverIndex: 0,
      introduction: "Từ một câu hỏi thu hẹp đến lập luận có thể nói, nghe và phản biện.",
      goals: [
        "Xác định phạm vi của vấn đề.",
        "Viết câu nối dẫn chứng với luận điểm.",
        "Đưa ra kiến nghị có người làm và cách đo.",
      ],
      closing: "Luận điểm đứng vững khi người nghe có thể lần lại đường suy luận.",
      images: [
        illustration({
          file: "SanDiegoCityCollegeLearningResource_-_bookshelf.jpg", local: "a3732d32d1a5", author: "Joe Crawford from Moorpark, California, USA", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0",
          caption: "Giá sách tại thư viện San Diego City College",
          observation: "Một địa điểm đọc cụ thể giúp thu hẹp đề từ việc đọc nói chung tới điều kiện tiếp cận sách."
        }),
        illustration({
          file: "Debate_estudiantil.jpg", local: "8923e8ac3dc3", author: "Santiagoguevara1357", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          caption: "Một buổi tranh biện học sinh",
          observation: "Khi xem ảnh, tách phần bố trí lượt nói khỏi chất lượng luận điểm."
        }),
        illustration({
          file: "NYTimes-Page1-11-11-1918.jpg", local: "52af0d0f91b6", author: "Charles Ransom Miller", license: "Public domain", fit: "contain",
          caption: "Trang nhất The New York Times ngày 11/11/1918",
          observation: "Tên báo và ngày xuất bản là thông tin đầu tiên khi đọc một tư liệu báo chí."
        }),
        illustration({
          file: "Reijiro_Wakatsuki_giving_a_speech_at_the_London_Naval_Conference.jpg", local: "f1a3563d8808", author: "毎日新聞社", license: "Public domain",
          caption: "Reijirō Wakatsuki phát biểu tại Hội nghị Hải quân London",
          observation: "Ảnh lưu trữ cho thấy người nói trong một bối cảnh và trước một nhóm người nghe."
        }),
        illustration({
          file: "Gutenberg_Bible,_Lenox_Copy,_New_York_Public_Library,_2009._Pic_01.jpg", local: "e97665d4efbc", author: "NYC Wanderer (Kevin Eng)", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", fit: "contain",
          caption: "Kinh Thánh Gutenberg tại Thư viện Công cộng New York",
          observation: "Một cuốn sách có thể được ghi danh, lưu trữ và tiếp cận theo cách riêng."
        }),
      ],
      chapters: [
        {
          name: "Chọn vấn đề có thể bàn",
          question: "Làm thế nào biến một chủ đề rộng thành câu hỏi đủ hẹp để tìm dẫn chứng?",
          concepts: [
            { layout: "comparison", title: "Chủ đề và vấn đề nghị luận", leftTitle: "Chủ đề", leftPoints: ["Là phạm vi rộng, ví dụ việc đọc sách.", "Có thể chứa nhiều câu hỏi."], rightTitle: "Vấn đề", rightPoints: ["Có điểm cần giải thích, đánh giá hoặc đề xuất.", "Xác định đối tượng và điều kiện."] },
            { layout: "process-flow", title: "Thu hẹp đề bài theo ba quyết định", steps: [{"step": "Đối tượng", "title": "Chọn nhóm cụ thể", "desc": "Ví dụ học sinh trong lớp."}, {"step": "Hành động", "title": "Chọn hành vi quan sát được", "desc": "Đọc tự chọn trước giờ học."}, {"step": "Câu hỏi", "title": "Hỏi hiệu quả và điều kiện", "desc": "Thói quen có duy trì được không?"}] }
          ],
          exercise: { title: "Thu hẹp chủ đề “mạng xã hội”", context: "Muốn bàn cả lợi ích, hại và tương lai trong ba phút.", mechanism: "Chọn một hành vi và nhóm người cụ thể.", takeaway: "Ví dụ: nên tắt thông báo nhóm chat trong một tiết tự học không?" },
          check: { title: "Câu nào đủ rõ để bắt đầu tìm dẫn chứng?", options: ["Đọc tự chọn 10 phút đầu giờ có giúp lớp duy trì thói quen đọc không?", "Việc đọc sách", "Giới trẻ hiện nay", "Hãy nói về mọi thói quen tốt"] },
          notes: [
            { title: "Câu hỏi trung tính", lead: "Câu hỏi tốt để ngỏ khả năng kết quả khác dự đoán ban đầu." },
            { title: "Nêu điều kiện ngay đầu", lead: "Nếu nói về học sinh trong một lớp, đừng chuyển thành khẳng định cho mọi người." },
            { title: "Câu hỏi nghiên cứu và tiêu đề", lead: "Tiêu đề có thể ngắn hơn nhưng cần giữ đúng phạm vi câu hỏi." },
          ]
        },
        {
          name: "Luận điểm và cầu nối suy luận",
          question: "Vì sao dẫn chứng chính xác vẫn có thể chưa nâng đỡ được luận điểm?",
          concepts: [
            { layout: "comparison", title: "Luận điểm và dẫn chứng", leftTitle: "Luận điểm", leftPoints: ["Điều người viết muốn bảo vệ.", "Cần đủ rõ để có thể phản biện."], rightTitle: "Dẫn chứng", rightPoints: ["Dữ kiện, trích đoạn hoặc ví dụ cụ thể.", "Cần một câu nối để giải thích liên quan."] },
            { layout: "process-flow", title: "Dựng một đoạn ba bước", steps: [{"step": "Nêu", "title": "Viết luận điểm một câu", "desc": "Đặt phạm vi cụ thể."}, {"step": "Dẫn", "title": "Đưa một bằng chứng có nguồn", "desc": "Chọn dữ kiện sát với luận điểm."}, {"step": "Giải", "title": "Nói vì sao dữ kiện hỗ trợ kết luận", "desc": "Thừa nhận giới hạn còn lại."}] }
          ],
          exercise: { title: "Tìm câu còn thiếu", context: "“12 bạn chọn đọc truyện. Lớp nên có góc truyện.”", mechanism: "Nêu tổng số người hỏi và vì sao lựa chọn liên quan đến việc chuẩn bị sách.", takeaway: "Thêm mức quan tâm trong mẫu rồi đề xuất thử nghiệm quy mô nhỏ." },
          check: { title: "Trong một đoạn nghị luận, câu nối dẫn chứng làm nhiệm vụ gì?", options: ["Giải thích dữ kiện hỗ trợ luận điểm ra sao", "Lặp nguyên tiêu đề", "Thay thế mọi nguồn tham khảo", "Thêm lời khen cho dài"] },
          notes: [
            { title: "Một luận điểm chính mỗi đoạn", lead: "Hai ý lớn trong cùng đoạn khó theo dõi nếu mỗi ý cần một loại chứng cứ." },
            { title: "Tránh khẳng định vòng tròn", lead: "“Quan trọng vì rất quan trọng” chưa bổ sung lý do." },
            { title: "Dẫn đúng mức", lead: "Một trường hợp có thể minh họa khả năng, chưa chứng minh tần suất." },
          ]
        },
        {
          name: "Dẫn chứng và phản biện",
          question: "Phản biện một ý tưởng khác phê phán người nêu ý như thế nào?",
          concepts: [
            { layout: "comparison", title: "Ví dụ minh họa và bằng chứng đại diện", leftTitle: "Ví dụ", leftPoints: ["Giúp hình dung một trường hợp.", "Có thể được chọn vì nổi bật."], rightTitle: "Bằng chứng đại diện", rightPoints: ["Cần cách lấy mẫu, phạm vi và nguồn rõ.", "Hỗ trợ suy rộng trong giới hạn xác định."] },
            { layout: "process-flow", title: "Phản biện công bằng trong ba câu", steps: [{"step": "Nhắc", "title": "Diễn đạt đúng ý đối phương", "desc": "Hỏi lại nếu lập trường chưa rõ."}, {"step": "Xét", "title": "Tìm điểm mạnh và điều kiện", "desc": "Đối chiếu với dữ liệu."}, {"step": "Đáp", "title": "Sửa phạm vi hoặc kết luận", "desc": "Giữ phần hợp lý của ý kiến khác."}] }
          ],
          exercise: { title: "Phản hồi ý kiến về điện thoại", context: "“Có bạn dùng điện thoại tra từ, nên nên mở điện thoại suốt mọi tiết.”", mechanism: "Tách ích lợi tra từ khỏi kết luận về thời lượng.", takeaway: "Đề nghị dùng trong hoạt động được xác định, kèm quy tắc và đánh giá." },
          check: { title: "Phản biện nào tập trung vào lập luận?", options: ["Ví dụ đó chưa đại diện cho toàn lớp", "Người nói chẳng hiểu gì", "Bạn ấy nói nhỏ nên sai", "Ý này sai vì tôi không thích"] },
          notes: [
            { title: "Ảnh báo cần bối cảnh", lead: "Ngày, nơi và mục đích xuất bản giúp đọc đúng phạm vi sự kiện." },
            { title: "Nguồn độc lập quan trọng", lead: "Ba bản đăng lại cùng thông cáo không tương đương ba khảo sát khác nhau." },
            { title: "Dữ kiện không cùng mẫu số", lead: "So phần trăm chỉ khi biết mẫu nào và cùng cách tính." },
          ]
        },
        {
          name: "Trình bày trước lớp",
          question: "Người nghe cần dấu hiệu gì để theo kịp mạch lập luận trong vài phút?",
          concepts: [
            { layout: "data-chart", title: "Kịch bản nói 3 phút mẫu", bars: [{"label": "Mở vấn đề", "val": 30, "unit": "giây"}, {"label": "Phân tích", "val": 90, "unit": "giây"}, {"label": "Phản biện", "val": 40, "unit": "giây"}, {"label": "Kết luận", "val": 20, "unit": "giây"}], insightBody: "Tổng 180 giây; phân phối này dành cho một bài nói thử." },
            { layout: "comparison", title: "Slide và lời nói", leftTitle: "Slide", leftPoints: ["Cho từ khóa, số liệu hoặc hình cần nhìn.", "Ưu tiên tín hiệu thị giác rõ."], rightTitle: "Lời nói", rightPoints: ["Giải thích và chuyển mạch.", "Thêm ví dụ hoặc điều kiện vừa đủ."] }
          ],
          exercise: { title: "Rút gọn một slide có nhiều chữ", context: "Bản nháp chứa cả đoạn mở và toàn bộ dẫn chứng.", mechanism: "Giữ câu luận điểm, một con số và nguồn.", takeaway: "Chuyển phần giải thích thành lời nói, tập theo đồng hồ." },
          check: { title: "Một slide nên giữ thứ nào khi lời nói sẽ giải thích chi tiết?", options: ["Luận điểm và dẫn chứng cần nhìn", "Toàn văn bài nói từng chữ", "Mọi câu hỏi có thể xảy ra", "Mọi định nghĩa từng học"] },
          notes: [
            { title: "Tập khoảng dừng", lead: "Dừng ngắn sau con số chính để người nghe có thời gian đọc." },
            { title: "Chuyển đoạn có mục đích", lead: "Câu chuyển nên nói quan hệ giữa hai ý, ví dụ từ lợi ích sang điều kiện." },
            { title: "Chuẩn bị trả lời", lead: "Tách câu hỏi về bằng chứng khỏi câu hỏi về giải pháp." },
          ]
        },
        {
          name: "Từ kết luận tới hành động",
          question: "Một kiến nghị làm sao đủ cụ thể để thử và đánh giá?",
          concepts: [
            { layout: "process-flow", title: "Biến ý tưởng thành thử nghiệm nhỏ", steps: [{"step": "Chọn", "title": "Nêu hành động rõ", "desc": "Bố trí góc đổi sách trong lớp."}, {"step": "Đo", "title": "Đặt chỉ số và thời gian", "desc": "Ghi lượt mượn qua hai tuần."}, {"step": "Sửa", "title": "Xem phản hồi và kết quả", "desc": "Điều chỉnh danh mục nếu cần."}] },
            { layout: "comparison", title: "Kêu gọi chung và đề xuất khả thi", leftTitle: "Kêu gọi chung", leftPoints: ["Nêu mong muốn lớn.", "Chưa rõ ai làm, khi nào hoặc bằng cách nào."], rightTitle: "Đề xuất khả thi", rightPoints: ["Nêu người thực hiện và thời hạn.", "Có tiêu chí để biết tiến độ."] }
          ],
          exercise: { title: "Viết lại câu “Hãy đọc nhiều hơn”", context: "Lớp muốn thử hoạt động sau giờ sinh hoạt.", mechanism: "Chọn hành động, thời lượng và cách ghi nhận.", takeaway: "Ví dụ hai tuần giới thiệu sách tự chọn, khảo sát phản hồi cuối kỳ." },
          check: { title: "Chi tiết nào giúp kiến nghị có thể đánh giá?", options: ["Mốc thời gian và dấu hiệu đo được", "Tăng số dấu chấm than", "Chỉ dùng từ “cần”", "Bỏ tên nhóm thực hiện"] },
          notes: [
            { title: "Kết bài có phạm vi", lead: "Nhắc lại điều được chứng minh và việc còn cần đối chiếu thêm." },
            { title: "Phản hồi có câu hỏi cụ thể", lead: "Hỏi phần nào khiến bạn đổi ý hoặc còn chưa tin." },
            { title: "Bản sửa sau phản biện", lead: "Giữ luận điểm mạnh, rút phần suy diễn chưa có chứng cứ." },
          ]
        },
      ]
    },
  };

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
    },
    'hero-photo-bleed': {
      orb1: { x: 82, y: 18, size: 45, rot: 28, radius: '50%', opacity: 0.12 },
      orb2: { x: 20, y: 80, size: 28, rot: 25, radius: '30%', opacity: 0.12 },
      frame: { x: 4, y: 6, w: 92, h: 88, rot: 0, radius: '20px', opacity: 0.08 },
      ribbon: { x: 6, y: 86, w: 28, h: 0.8, rot: 0, opacity: 0.45 }
    },
    'editorial-split-photo': {
      orb1: { x: 75, y: 45, size: 40, rot: 60, radius: '48%', opacity: 0.21 },
      orb2: { x: 13, y: 70, size: 20, rot: 45, radius: '32%', opacity: 0.12 },
      frame: { x: 57, y: 14, w: 36, h: 72, rot: 0, radius: '18px', opacity: 0.22 },
      ribbon: { x: 6, y: 19, w: 35, h: 0.8, rot: 0, opacity: 0.6 }
    },
    'photo-gallery-triptych': {
      orb1: { x: 18, y: 58, size: 45, rot: 90, radius: '46%', opacity: 0.22 },
      orb2: { x: 87, y: 24, size: 24, rot: 30, radius: '44%', opacity: 0.12 },
      frame: { x: 5, y: 29, w: 90, h: 58, rot: 0, radius: '18px', opacity: 0.22 },
      ribbon: { x: 6, y: 22, w: 88, h: 0.8, rot: 0, opacity: 0.46 }
    },
    'stat-showcase': {
      orb1: { x: 25, y: 44, size: 39, rot: 110, radius: '42%', opacity: 0.22 },
      orb2: { x: 78, y: 74, size: 24, rot: 100, radius: '34%', opacity: 0.11 },
      frame: { x: 7, y: 24, w: 53, h: 54, rot: 0, radius: '20px', opacity: 0.23 },
      ribbon: { x: 8, y: 74, w: 42, h: 0.8, rot: 0, opacity: 0.66 }
    },
    'annotated-diagram': {
      orb1: { x: 29, y: 53, size: 41, rot: 140, radius: '48%', opacity: 0.17 },
      orb2: { x: 84, y: 31, size: 20, rot: 82, radius: '28%', opacity: 0.13 },
      frame: { x: 6, y: 26, w: 47, h: 58, rot: 0, radius: '18px', opacity: 0.29 },
      ribbon: { x: 54, y: 25, w: 40, h: 0.8, rot: 0, opacity: 0.48 }
    },
    'case-study-card': {
      orb1: { x: 20, y: 50, size: 37, rot: 172, radius: '36%', opacity: 0.24 },
      orb2: { x: 78, y: 75, size: 24, rot: 122, radius: '44%', opacity: 0.14 },
      frame: { x: 6, y: 22, w: 42, h: 63, rot: 0, radius: '16px', opacity: 0.22 },
      ribbon: { x: 55, y: 25, w: 35, h: 0.8, rot: 0, opacity: 0.5 }
    },
  };

  // The six parts inside a chapter are ordered according to the subject's way of
  // teaching. An image, two explanations, an exercise, a check and a takeaway
  // stay in every edition, even when the presentation is shortened.
  const PACING = {
    quantitative: [
      ['image', 'first', 'second', 'task', 'check', 'takeaway'],
      ['first', 'image', 'task', 'second', 'takeaway', 'check'],
      ['image', 'first', 'task', 'second', 'check', 'takeaway'],
      ['first', 'second', 'image', 'task', 'check', 'takeaway'],
      ['image', 'first', 'second', 'takeaway', 'task', 'check']
    ],
    experimental: [
      ['image', 'first', 'task', 'second', 'check', 'takeaway'],
      ['image', 'first', 'second', 'task', 'takeaway', 'check'],
      ['first', 'image', 'second', 'task', 'check', 'takeaway'],
      ['image', 'first', 'task', 'second', 'takeaway', 'check'],
      ['image', 'first', 'second', 'task', 'check', 'takeaway']
    ],
    documentary: [
      ['image', 'first', 'second', 'task', 'check', 'takeaway'],
      ['image', 'first', 'task', 'second', 'check', 'takeaway'],
      ['first', 'image', 'second', 'task', 'takeaway', 'check'],
      ['image', 'first', 'second', 'takeaway', 'task', 'check'],
      ['first', 'second', 'image', 'task', 'check', 'takeaway']
    ],
    literary: [
      ['image', 'first', 'task', 'second', 'takeaway', 'check'],
      ['first', 'image', 'second', 'task', 'check', 'takeaway'],
      ['image', 'first', 'second', 'task', 'check', 'takeaway'],
      ['image', 'first', 'second', 'takeaway', 'task', 'check'],
      ['first', 'image', 'task', 'second', 'check', 'takeaway']
    ]
  };

  const SUBJECT_PACING = {
    toan: 'quantitative', ly: 'quantitative',
    hoa: 'experimental', sinh: 'experimental', congnghe: 'experimental',
    su: 'documentary', dia: 'documentary', van: 'literary'
  };
  const CONCEPT_KICKERS = {
    'formula-spotlight': 'Mô hình & công thức',
    'data-chart': 'Đọc số liệu',
    timeline: 'Trục thời gian',
    comparison: 'Đặt cạnh nhau',
    'process-flow': 'Theo dõi từng bước',
    'annotated-diagram': 'Đọc cấu trúc',
    'quote-focus': 'Đọc gần văn bản',
    'stat-showcase': 'Định lượng'
  };

  function numberLabel(index) {
    return String(index + 1).padStart(2, '0');
  }

  function makeImageSlide(image, index, hero) {
    const { observation, ...media } = image;
    return {
      layout: hero ? 'hero-photo-bleed' : 'editorial-split-photo',
      tone: hero ? 'photo' : index % 2 ? 'dark' : 'light',
      kicker: hero ? 'Qua ống kính' : 'Đọc hình minh họa',
      title: media.caption,
      lead: observation,
      media,
      mediaPosition: index % 2 ? 'left' : 'right'
    };
  }

  function makeConceptSlide(concept, image, tone) {
    return {
      tone: concept.layout === 'quote-focus' ? 'accent' : tone,
      kicker: concept.kicker || CONCEPT_KICKERS[concept.layout],
      ...concept,
      ...(concept.layout === 'annotated-diagram' && { media: { ...image, fit: 'contain' } })
    };
  }

  function makeTaskSlide(exercise, image, chapterIndex) {
    const { title, context, mechanism, takeaway } = exercise;
    if (chapterIndex % 2 === 0) {
      return {
        layout: 'case-study-card', tone: 'dark', kicker: 'Tình huống vận dụng',
        title, caseStudy: { context, mechanism, takeaway },
        media: image
      };
    }
    return {
      layout: 'bento-grid', tone: 'light', kicker: 'Thử giải thích',
      title,
      cards: [
        { tag: '01', title: 'Dữ kiện', body: context },
        { tag: '02', title: 'Cách tiếp cận', body: mechanism },
        { tag: '03', title: 'Kết luận', body: takeaway }
      ]
    };
  }

  function makeCheckSlide(check, chapterIndex, coverIndex) {
    const answer = (chapterIndex + coverIndex) % check.options.length;
    const [correct, ...options] = check.options;
    options.splice(answer, 0, correct);
    return {
      layout: 'quiz-check', tone: chapterIndex % 2 ? 'dark' : 'light',
      kicker: 'Kiểm tra cách hiểu', title: check.title, options, answer
    };
  }

  function makeTakeawaySlide(note, chapterIndex) {
    if (chapterIndex === 0) {
      return {
        layout: 'quote-focus', tone: 'dark', kicker: note.title,
        quote: note.lead
      };
    }
    return {
      layout: 'split-visual', tone: 'accent', kicker: 'Điểm dễ bỏ sót',
      title: note.title, lead: note.lead
    };
  }

  function buildSlidesForTemplate(template, custom) {
    const c = custom || {};
    const { chapters, images, coverIndex, introduction, goals, closing } = DECKS[template.id];
    const deckTitle = c.title || template.title;
    const studentName = c.student || 'Nhóm Học sinh Fernora';
    const className = c.className || 'Lớp 11A1 · Học kỳ I';
    const teacherName = c.teacher || 'GVHD: Thầy/Cô bộ môn';
    const targetCount = Math.max(40, Math.min(50, Math.round(Number(c.slideCount) || template.slideCount)));
    const extraCount = targetCount - (5 + chapters.length * 7);
    const pacing = PACING[SUBJECT_PACING[template.subject]];

    const slides = [];
    function pushSlide(chapterIndex, slide) {
      const idx = slides.length;
      const base = MORPH_PRESETS[slide.layout];
      const drift = ((idx * 7) % 9) - 4;
      slides.push({
        number: idx + 1,
        chapterIndex,
        chapterName: chapters[chapterIndex].name,
        ...slide,
        morph: {
          orb1: { ...base.orb1, rot: base.orb1.rot + idx * 9, x: base.orb1.x + drift * 0.6 },
          orb2: { ...base.orb2, rot: base.orb2.rot - idx * 6 },
          frame: { ...base.frame },
          ribbon: { ...base.ribbon }
        }
      });
    }

    pushSlide(0, {
      layout: 'cover', tone: 'dark',
      kicker: template.subjectLabel, title: deckTitle,
      subtitle: c.prompt || introduction,
      meta: [studentName, className, teacherName],
      media: images[coverIndex]
    });
    pushSlide(0, {
      layout: 'agenda', tone: 'light', kicker: 'Mục lục', title: 'Năm phần của bài',
      items: chapters.map((chapter, index) => ({
        num: numberLabel(index), title: chapter.name, desc: chapter.question
      }))
    });
    pushSlide(0, {
      layout: 'objectives', tone: 'accent', kicker: 'Mục tiêu', title: 'Sau bài này, bạn có thể',
      cards: goals.map((goal, index) => ({ num: numberLabel(index), title: goal }))
    });
    pushSlide(0, {
      layout: 'photo-gallery-triptych', tone: 'dark', kicker: template.subjectLabel,
      title: 'Ba hình ảnh để bắt đầu',
      gallery: [images[(coverIndex + 1) % images.length], images[(coverIndex + 3) % images.length], images[(coverIndex + 4) % images.length]]
    });

    chapters.forEach((chapter, index) => {
      const image = images[index];
      const opener = index === coverIndex;
      pushSlide(index, {
        layout: 'section-break', tone: index % 2 ? 'dark' : 'accent',
        kicker: 'Chương ' + numberLabel(index), bigNum: numberLabel(index),
        title: chapter.name, subtitle: chapter.question
      });

      const parts = {
        image: makeImageSlide(image, index, opener),
        first: makeConceptSlide(chapter.concepts[0], image, 'light'),
        second: makeConceptSlide(chapter.concepts[1], image, index % 2 ? 'light' : 'dark'),
        task: makeTaskSlide(chapter.exercise, image, index),
        check: makeCheckSlide(chapter.check, index, coverIndex),
        takeaway: makeTakeawaySlide(chapter.notes[0], index)
      };
      for (const part of pacing[index]) pushSlide(index, parts[part]);

      // Spread extension slides evenly across chapters while preserving the
      // core lesson, quiz and closing at every requested length.
      if (extraCount > index) {
        pushSlide(index, {
          layout: 'objectives', tone: 'light', kicker: 'Mở rộng',
          title: chapter.notes[1].title,
          cards: [{ num: numberLabel(index), title: chapter.notes[1].lead }]
        });
      }
      if (extraCount > chapters.length + index) {
        pushSlide(index, {
          layout: 'split-visual', tone: 'light', kicker: 'Thử thêm một góc nhìn',
          ...chapter.notes[2]
        });
      }
    });

    pushSlide(chapters.length - 1, {
      layout: 'summary-closing', tone: 'dark',
      kicker: 'Tổng kết · Hỏi đáp', title: 'Cùng trao đổi',
      subtitle: deckTitle, note: closing
    });

    return slides;
  }

  const TEMPLATES = TEMPLATES_META.map(template => {
    const deck = DECKS[template.id];
    return {
      ...template,
      chapters: deck.chapters.map(chapter => chapter.name),
      topics: deck.chapters.flatMap(chapter => [
        ...chapter.concepts.map(concept => concept.title),
        chapter.exercise.title
      ]),
      coverMedia: deck.images[deck.coverIndex]
    };
  });

  global.FERNORA_DATA = { SUBJECTS, PURPOSES, TEMPLATES, buildSlidesForTemplate };
})(window);
