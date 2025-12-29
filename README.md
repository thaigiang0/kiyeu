# 🎓 Thiệp Kỉ Yếu THPT Cá Nhân

Một trang web **thiệp kỉ yếu cá nhân** được xây dựng bằng **HTML + CSS + JavaScript**, dùng để lưu giữ kỉ niệm thời học sinh THPT theo phong cách hiện đại, nhẹ nhàng và giàu cảm xúc.

> Mỗi người một trang – mỗi trang một thời thanh xuân.

---

## ✨ Tính năng chính

- 🎴 Giao diện thiệp kỉ yếu **cá nhân** (không đại diện tập thể)
- 🖋 Font chữ trẻ trung, phù hợp học sinh THPT
- 🧾 Bố cục đầy đủ: **Header – Body – Footer**
- 💬 Câu trích dẫn về thanh xuân **tự động thay đổi**
- 🎨 Hệ thống **đổi màu giao diện**
  - Chọn màu thủ công (preset, gọn gàng)
  - Chế độ **AUTO** tự đổi màu theo thời gian
- 🌙 **Dark / Night Mode**
- 🎨 Nút chọn màu **riêng biệt**, hoạt động ở cả Light & Dark mode
- 📍 Hiển thị **thời gian – địa điểm chụp kỉ yếu**
- 🗺 Link mở **Google Maps**
- ☎️ Thông tin liên lạc cá nhân
- 💾 Lưu trạng thái giao diện bằng `localStorage`

---

## 🧩 Công nghệ sử dụng

- **HTML5** – Cấu trúc trang
- **CSS3** – Giao diện, gradient, animation
- **JavaScript (Vanilla)** – Logic đổi quote, đổi màu, dark mode
- **Google Fonts**
  - Poppins
  - Playfair Display

---

## 📁 Cấu trúc project

.
├── index.html # File chính (HTML + CSS + JS)
└── README.md # Mô tả project

yaml
Sao chép mã

> Project được viết gọn trong **1 file HTML**, dễ deploy, dễ chỉnh sửa.

---

## 🚀 Cách sử dụng

1. Clone project hoặc tải file `index.html`
2. Mở trực tiếp bằng trình duyệt  
   **hoặc**
3. Deploy nhanh bằng:
   - GitHub Pages
   - Netlify
   - Vercel

---

## ✏️ Tuỳ chỉnh nhanh

- **Tên cá nhân**  
  Sửa trong thẻ:
  ```html
  <span class="name">NÔNG THÁI GIANG</span>
Trường / lớp

html
Sao chép mã
<p>THPT Nguyễn Trãi • Lớp 12A1</p>
Thời gian & địa điểm chụp

html
Sao chép mã
<p>🗓 07:00 – 10/03/2025</p>
<p>📍 Hồ Gươm – Hà Nội</p>
Câu quote

js
Sao chép mã
const quotes = [
  "...",
  "..."
];
Màu preset

js
Sao chép mã
const themes = [
  { h: "#1e3d59", b: "#eef2f3" },
  ...
];
🎯 Mục đích project
Lưu giữ kỉ niệm THPT theo cách cá nhân hoá

Làm thiệp kỉ yếu online gửi bạn bè

Học & thực hành frontend cơ bản

Dùng làm project showcase cá nhân

📸 Demo
👉 Chạy trực tiếp file index.html
👉 Hoặc deploy lên GitHub Pages để chia sẻ link

📝 Giấy phép
Project mang tính cá nhân – học tập – phi thương mại
Bạn có thể chỉnh sửa, tái sử dụng cho mục đích cá nhân.

💬 Lời kết
Ba năm áo trắng trôi qua rất nhanh,
nhưng kỉ niệm thì ở lại rất lâu.

Nếu bạn từng là học sinh cấp 3,
hy vọng project này khiến bạn mỉm cười ❤️

yaml
Sao chép mã

---

Nếu bạn muốn, mình có thể:
- ✨ Viết README **ngắn gọn hơn** (chuẩn repo nhỏ)
- 🌐 Viết README **song ngữ Việt – Anh**
- 🧑‍🎓 Chỉnh README cho **nộp bài / portfolio**

Bạn dùng README này cho **GitHub cá nhân hay nộp môn học**?
