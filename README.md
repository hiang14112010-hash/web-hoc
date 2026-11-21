# Fernhollow

Trang giới thiệu Fernhollow với thung lũng hoa 3D. Cuộn hoặc vuốt để di chuyển. Rê chuột lên nút mũi tên để hoa tản ra. Bấm biểu tượng loa để bật âm thanh.

## Mã nguồn

- `index.html` chứa nội dung và bố cục.
- `style.css` điều khiển kiểu chữ và giao diện trên máy tính, điện thoại.
- `hero.js` khởi chạy cảnh 3D và kết nối các điều khiển.
- `vendor/` chứa mã đã biên dịch của cảnh Gladeye.
- `valley/` và `fonts/` chứa tài nguyên 3D, hình ảnh, âm thanh và phông chữ.

## Chạy trên GitHub Pages

Trong repo, mở **Settings → Pages**. Chọn **Deploy from a branch**, nhánh **main** và thư mục **/ (root)**. GitHub hiển thị link web ở đó khi triển khai xong.

Để chạy thử trên máy, mở terminal trong thư mục dự án và chạy `python -m http.server 8000`. Mở `http://localhost:8000/` trên trình duyệt.
