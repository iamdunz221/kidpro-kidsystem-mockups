# KIDPRO System - Bộ Mockup Hệ Thống Quản Trị Mầm Non KIDPRO

Bộ mockup hoàn chỉnh được thiết kế bám sát 100% hình mẫu cơ sở thương hiệu **Mầm non KIDPRO (KIDPRO)** (xanh rừng sâu `#275A4E` / `#1E4D40`, vàng ấm `#E5A93C`, bạc hà `#78C2AD`, thẻ bo tròn, tối giản, thân thiện với người dùng giáo dục).

Nội dung được trích xuất trực tiếp từ **Mục 1.4.2 Mô tả Chi tiết Danh mục Màn hình** và đối chiếu với **Mục 2 Đặc tả Yêu cầu Chức năng (Functional Specifications)** của Báo cáo `SEP490_G23_Report3_SRS_updated_ready`.

---

## 📂 Danh mục Tệp tin trong Thư mục

| Tên Tệp | Định Dạng | Mô Tả Chức Năng |
| :--- | :--- | :--- |
| **[`index.html`](./index.html)** | 🌐 Web App Hub | **Trung tâm Khám phá & Trình chiếu 153 Màn hình**: Có thanh tìm kiếm, bộ lọc theo 7 phân hệ vai trò, chuyển đổi khung hiển thị thiết bị (Desktop 1440px & Mobile iPhone 15 frame), xem đặc tả chi tiết từng màn hình. |
| **[`screens_data.js`](./screens_data.js)** | 📊 Dataset JS | Cơ sở dữ liệu cấu trúc hóa đầy đủ **153 màn hình** từ Bảng 8 & Bảng 9 của báo cáo SRS. |
| **[`01_web_login.html`](./01_web_login.html)** | 🔑 Interactive Web | **Tái hiện chuẩn xác hình mẫu cơ sở của bạn**: Layout 2 cột ("Mọi trường học. Một hệ thống."), tích hợp nút chuyển đổi nhanh 4 vai trò quản trị (Super Admin, Hiệu trưởng, Giáo vụ, Kế toán). |
| **[`02_web_admin_dashboard.html`](./02_web_admin_dashboard.html)** | 📊 Interactive Web | **Bàn Điều hành Cấp cao (Super Admin & Hiệu trưởng)**: Quản lý tenant cơ sở trường mầm non, giám sát cụm máy chủ và vi dịch vụ AI nhận diện khuôn mặt YOLOv11 + InsightFace. |
| **[`03_web_academic_workspace.html`](./03_web_academic_workspace.html)** | 🎓 Interactive Web | **Cổng Giáo vụ & Hồ sơ Học sinh**: Quản lý hồ sơ y tế, **cảnh báo đỏ dị ứng thực phẩm nặng (đậu phộng, hải sản)**, thẩm tra CCCD người đón ủy quyền, xuất Sổ Điểm danh theo Thông tư 28. |
| **[`04_web_finance_billing.html`](./04_web_finance_billing.html)** | 💳 Interactive Web | **Bàn Tài chính & Quyết toán Động**: Động cơ tự động trừ tiền ăn ngày nghỉ có phép trước 08:00 sáng (-45.000đ/ngày), chiết khấu anh em ruột (10%), đối soát Webhook VietQR PayOS thời gian thực. |
| **[`05_mobile_teacher_app.html`](./05_mobile_teacher_app.html)** | 📱 Mobile Prototype | **App Giáo viên Mầm non (Khung điện thoại)**: Mô phỏng quét AI đón trẻ buổi sáng (khung YOLOv11, độ khớp > 85%), xác thực người đón an toàn, nhắc dặn thuốc trưa kèm chụp ảnh bằng chứng. |
| **[`06_mobile_parent_app.html`](./06_mobile_parent_app.html)** | 👨‍👩‍👧 Mobile Prototype | **App Phụ huynh Học sinh (Khung điện thoại)**: Dòng thời gian trực quan của con (ảnh check-in cổng trường, báo cáo ăn ngủ bán trú), thanh toán PayOS VietQR 1-chạm, nộp đơn xin nghỉ học tự động hoàn tiền ăn. |
| **[`07_tablet_kitchen_operations.html`](./07_tablet_kitchen_operations.html)** | 🍲 Tablet Prototype | **Trạm Tablet Bếp Bán trú (Khung iPad)**: Dashboard khóa số suất ăn lúc 08:30 sáng, phân tách 12 khay ăn dị ứng riêng biệt, Sổ Kiểm thực 3 bước theo QĐ 1246/QĐ-BYT và lưu mẫu thức ăn 24H. |

---

## 🎨 Quy chuẩn Thiết kế (Design Tokens)

- **Màu sắc chủ đạo:**
  - `Primary Forest Green`: `#275A4E` (Màu xanh thương hiệu nhận diện KIDPRO)
  - `Deep Green`: `#1E4D40` (Tông xanh đậm tạo chiều sâu)
  - `Warm Gold Badge`: `#E5A93C` (Điểm nhấn huy hiệu logo KIDPRO)
  - `Mint Green`: `#78C2AD` (Thẻ trạng thái và nhãn phụ)
  - `Background Cream`: `#F4F7F6` / `#F8FAF9` (Màu nền dịu mắt, thân thiện với môi trường học đường)
- **Kiểu chữ (Typography):** Google Fonts **Plus Jakarta Sans** hiện đại, bo tròn góc, nét chữ rõ ràng dễ đọc cho cả giáo viên lẫn phụ huynh lớn tuổi.
- **Tính khả dụng (Usability):** Tối giản, tập trung vào thao tác 1-chạm, có phản hồi màu sắc trực quan (Xanh lá: An toàn / Đã hoàn thành; Vàng: Chờ duyệt / Cảnh báo nhẹ; Đỏ: Dị ứng thực phẩm / Báo động người lạ).

---

## 🚀 Hướng Dẫn Sử Dụng & Trình Chiếu

1. **Xem toàn bộ hệ thống:** Mở tệp [`index.html`](./index.html) bằng bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Firefox).
2. **Xem từng phân hệ độc lập:** Nhấp đúp vào các tệp từ `01_web_login.html` đến `07_tablet_kitchen_operations.html` để trải nghiệm tương tác với kích thước khung hình chuyên biệt.
