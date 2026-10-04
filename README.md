# KIDPRO System - Bộ Mockup Hệ Thống Quản Trị Mầm Non KIDPRO (153 Màn Hình Chi Tiết)

Bộ mockup hoàn chỉnh được thiết kế bám sát 100% hình mẫu cơ sở thương hiệu **Mầm non KIDPRO (KIDPRO)** (xanh rừng sâu `#275A4E` / `#1E4D40`, vàng ấm `#E5A93C`, bạc hà `#78C2AD`, thẻ bo tròn, tối giản, thân thiện với người dùng giáo dục).

Nội dung được trích xuất trực tiếp từ **Mục 1.4.2 Mô tả Chi tiết Danh mục Màn hình** và đối chiếu với **Mục 2 Đặc tả Yêu cầu Chức năng (Functional Specifications)** của Báo cáo `SEP490_G23_Report3_SRS_updated_ready`.

---

## 📂 Danh mục Cấu trúc Thư mục

| Thư mục / Tệp tin | Định Dạng | Mô Tả Chức Năng |
| :--- | :--- | :--- |
| **[`index.html`](./index.html)** | 🌐 Master Hub | **Trung tâm Khám phá & Trình chiếu Trực Tiếp 153 Màn hình**: Tích hợp Live Device Viewport (khung Desktop 1440px và khung iPhone 15 frame), tìm kiếm thời gian thực, lọc theo 7 vai trò người dùng và lọc theo nền tảng (Web, Mobile, Tablet). |
| **[`screens/`](./screens/)** | 📁 153 Màn hình | **Thư mục chứa toàn bộ 153 tệp HTML độc lập**: Từ `screen_001.html` đến `screen_153.html`. Mỗi màn hình có giao diện chi tiết, biểu mẫu, bảng dữ liệu, nút bấm, KPI và luồng nghiệp vụ tương ứng theo SRS. |
| **[`screens_data.js`](./screens_data.js)** | 📊 Dataset JS | Cơ sở dữ liệu cấu trúc hóa đầy đủ **153 màn hình** từ Bảng 8 & Bảng 9 của báo cáo SRS, đã liên kết trực tiếp tới từng tệp màn hình trong thư mục `screens/`. |
| **[`01_web_login.html`](./01_web_login.html)** | 🔑 Core Prototype | **Tái hiện chuẩn xác hình mẫu cơ sở của bạn**: Layout 2 cột ("Mọi trường học. Một hệ thống."), tích hợp nút chuyển đổi nhanh 4 vai trò quản trị (Super Admin, Hiệu trưởng, Giáo vụ, Kế toán). |
| **[`02_web_admin_dashboard.html`](./02_web_admin_dashboard.html)** | 📊 Core Prototype | **Bàn Điều hành Cấp cao (Super Admin & Hiệu trưởng)**: Quản lý tenant cơ sở trường mầm non, giám sát cụm máy chủ và vi dịch vụ AI nhận diện khuôn mặt YOLOv11 + InsightFace. |
| **[`03_web_academic_workspace.html`](./03_web_academic_workspace.html)** | 🎓 Core Prototype | **Cổng Giáo vụ & Hồ sơ Học sinh**: Quản lý hồ sơ y tế, **cảnh báo đỏ dị ứng thực phẩm nặng (đậu phộng, hải sản)**, thẩm tra CCCD người đón ủy quyền, xuất Sổ Điểm danh theo Thông tư 28. |
| **[`04_web_finance_billing.html`](./04_web_finance_billing.html)** | 💳 Core Prototype | **Bàn Tài chính & Quyết toán Động**: Động cơ tự động trừ tiền ăn ngày nghỉ có phép trước 08:00 sáng (-45.000đ/ngày), chiết khấu anh em ruột (10%), đối soát Webhook VietQR PayOS thời gian thực. |
| **[`05_mobile_teacher_app.html`](./05_mobile_teacher_app.html)** | 📱 Core Prototype | **App Giáo viên Mầm non (Khung điện thoại)**: Mô phỏng quét AI đón trẻ buổi sáng (khung YOLOv11, độ khớp > 85%), xác thực người đón an toàn, nhắc dặn thuốc trưa kèm chụp ảnh bằng chứng. |
| **[`06_mobile_parent_app.html`](./06_mobile_parent_app.html)** | 👨‍👩‍👧 Core Prototype | **App Phụ huynh Học sinh (Khung điện thoại)**: Dòng thời gian trực quan của con (ảnh check-in cổng trường, báo cáo ăn ngủ bán trú), thanh toán PayOS VietQR 1-chạm, nộp đơn xin nghỉ học tự động hoàn tiền ăn. |
| **[`07_tablet_kitchen_operations.html`](./07_tablet_kitchen_operations.html)** | 🍲 Core Prototype | **Trạm Tablet Bếp Bán trú (Khung iPad)**: Dashboard khóa số suất ăn lúc 08:30 sáng, phân tách 12 khay ăn dị ứng riêng biệt, Sổ Kiểm thực 3 bước theo QĐ 1246/QĐ-BYT và lưu mẫu thức ăn 24H. |

---

## 📊 Thống Kê Chi Tiết 153 Màn Hình Theo 7 Nhóm Vai Trò

1. **Quản trị Nền tảng (Platform Super Admin - Web)**: 16 màn hình (`screen_001.html` $\rightarrow$ `screen_016.html`)
2. **Ban Giám Hiệu (School Principal - Web)**: 14 màn hình (`screen_017.html` $\rightarrow$ `screen_030.html`)
3. **Cán bộ Giáo vụ (Academic Affairs - Web)**: 26 màn hình (`screen_031.html` $\rightarrow$ `screen_056.html`)
4. **Kế toán Trường học (School Accountant - Web)**: 18 màn hình (`screen_057.html` $\rightarrow$ `screen_074.html`)
5. **Giáo viên Mầm non (Class Teacher - Mobile App)**: 35 màn hình (`screen_075.html` $\rightarrow$ `screen_109.html`)
6. **Phụ huynh Học sinh (Parent - Mobile App)**: 33 màn hình (`screen_110.html` $\rightarrow$ `screen_142.html`)
7. **Nhân viên Bếp Bán trú (Kitchen Staff - Tablet)**: 11 màn hình (`screen_143.html` $\rightarrow$ `screen_153.html`)

---

## 🚀 Hướng Dẫn Trải Nghiệm & Trình Chiếu

1. **Khám phá toàn bộ 153 màn hình tương tác:** Mở [`index.html`](./index.html) bằng bất kỳ trình duyệt nào.
   - Nhấp vào bất kỳ màn hình nào ở cột bên trái: Khung mô phỏng thiết bị (Desktop hoặc iPhone) sẽ **hiển thị trực tiếp màn hình đó** với giao diện, dữ liệu và biểu mẫu chi tiết.
   - Sử dụng các nút lọc vai trò (Super Admin, Hiệu trưởng, Giáo vụ, Kế toán, Giáo viên, Phụ huynh, Bếp) hoặc lọc nền tảng (Web, Mobile, Tablet) để duyệt nhanh.
   - Bấm nút **"Mở Toàn Màn Hình"** để xem màn hình đó ở tab riêng biệt.
2. **Xem từng tệp màn hình độc lập:** Mở trực tiếp bất kỳ tệp nào trong thư mục [`screens/`](./screens/).
