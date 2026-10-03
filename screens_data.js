// Dataset 153 Màn hình Hệ thống Quản trị Mầm non KIDPRO (KIDPRO System)
// Trích xuất từ Mục 1.4.2 Báo cáo SEP490_G23_Report3_SRS_updated_ready
const SCREENS_DATA = [
  {
    "stt": 1,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Xác thực & Bàn Điều hành Cấp cao)",
    "name": "Login Screen",
    "description": "Màn hình đăng nhập tập trung dành cho Quản trị viên Nền tảng (Super Admin), hỗ trợ xác thực tài khoản qua Email/Số điện thoại và mật khẩu mã hóa Argon2id, tích hợp mã CAPTCHA chống tấn công brute-force và cơ chế cấp phát cặp mã thông báo JWT (Access Token & Refresh Token xoay vòng an toàn).",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 2,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Xác thực & Bàn Điều hành Cấp cao)",
    "name": "Forgot Password Screen",
    "description": "Màn hình tiếp nhận yêu cầu khôi phục mật khẩu tài khoản quản trị: xác thực danh tính qua email quản trị đã đăng ký, gửi mã liên kết dùng một lần (Magic Link / mã OTP 6 chữ số qua SMTP an toàn) và điều hướng người dùng sang giao diện đặt lại mật khẩu mới đáp ứng tiêu chuẩn độ phức tạp cao.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 3,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Xác thực & Bàn Điều hành Cấp cao)",
    "name": "System Admin Dashboard (Executive View)",
    "description": "Trung tâm điều hành tổng quan toàn bộ nền tảng KIDPRO: hiển thị các chỉ số đo lường hiệu năng cốt lõi (KPI) thời gian thực gồm tổng số trường học (tenants) đang kích hoạt, tổng số người dùng trực tuyến, lưu lượng API/giây, trạng thái sẵn sàng của cụm máy chủ và đồ thị cảnh báo an ninh tức thời.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 4,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Xác thực & Bàn Điều hành Cấp cao)",
    "name": "View & Edit Profile",
    "description": "Màn hình xem và cập nhật hồ sơ cá nhân của Quản trị viên: hiển thị mã định danh, vai trò phân quyền Super Admin, lịch sử phiên đăng nhập, đồng thời cho phép chỉnh sửa thông tin liên hệ cá nhân, ảnh đại diện và thiết lập giao diện tùy chỉnh (Dark/Light mode) sau khi xác thực mật khẩu.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 5,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Xác thực & Bàn Điều hành Cấp cao)",
    "name": "Change Password Screen",
    "description": "Giao diện thay đổi mật khẩu định kỳ của Super Admin: yêu cầu nhập mật khẩu hiện tại, mật khẩu mới và xác nhận mật khẩu; tự động kiểm tra chính sách mật khẩu mạnh (tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt), hủy toàn bộ phiên làm việc khác khi đổi mật khẩu thành công.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 6,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Xác thực & Bàn Điều hành Cấp cao)",
    "name": "Notification Center",
    "description": "Trung tâm thông báo hệ thống cấp nền tảng: hiển thị danh sách cảnh báo thời gian thực về sự cố máy chủ, ngưỡng giới hạn tài nguyên CPU/RAM, phát hiện truy cập bất thường, trạng thái sao lưu dữ liệu và thông báo gia hạn hợp đồng từ các trường đối tác.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 7,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Quản lý Tài khoản & Phân quyền Đa trường)",
    "name": "User Accounts Management",
    "description": "Bàn làm việc quản trị người dùng toàn hệ thống: cung cấp bộ lọc nâng cao theo trường học (Tenant), vai trò (RBAC), trạng thái hoạt động (Active/Suspended/Locked); hỗ trợ thao tác nhanh: khóa/mở khóa tài khoản, thu hồi phiên làm việc trực tuyến và xuất/nhập danh sách tài khoản qua file Excel.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 8,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Quản lý Tài khoản & Phân quyền Đa trường)",
    "name": "Create & Edit User Form",
    "description": "Biểu mẫu tạo mới và chỉnh sửa tài khoản người dùng: nhập thông tin định danh (Họ tên, Email, SĐT, CCCD), chỉ định cơ sở trường học trực thuộc (Tenant ID), gán nhóm vai trò chuyên môn (Principal, Academic, Accountant, Teacher, Kitchen) và gửi email kích hoạt tự động kèm mật khẩu tạm thời.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 9,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Quản lý Trường học Đa thực thể (Multi-Tenant))",
    "name": "School Tenant Management",
    "description": "Bàn điều khiển danh sách các cơ sở trường mầm non đối tác: hiển thị danh sách trường mầm non theo trạng thái hợp đồng (Đang hoạt động, Chờ kích hoạt, Quá hạn), gói thuê bao (SaaS Tier), quy mô học sinh và phân vùng cơ sở dữ liệu biệt lập trong hệ thống PostgreSQL.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 10,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Quản lý Trường học Đa thực thể (Multi-Tenant))",
    "name": "Create & Edit School Form",
    "description": "Biểu mẫu khởi tạo và cập nhật cơ sở trường mầm non: nhập thông tin pháp lý (Tên trường, Mã cơ sở, Mã số thuế, Địa chỉ, Hotline), cấu hình thương hiệu (Logo, Tên hiển thị app, Màu chủ đạo) và thiết lập tài khoản Hiệu trưởng đầu tiên.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 11,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Quản lý Trường học Đa thực thể (Multi-Tenant))",
    "name": "Approve School Registration Screen",
    "description": "Giao diện thẩm định và phê duyệt hồ sơ trường học: xem xét điều khoản hợp đồng dịch vụ phần mềm, thời hạn hiệu lực thuê bao, kiểm tra số lượng học sinh tối đa được phép đăng ký và kích hoạt tenant tự động.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 12,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Định nghĩa Vai trò & Phân quyền RBAC)",
    "name": "Role & Permission Management (RBAC)",
    "description": "Trung tâm quản lý mô hình kiểm soát truy cập dựa trên vai trò (RBAC): hiển thị danh mục các nhóm vai trò định sẵn và mở rộng, cho phép tạo mới, chỉnh sửa phạm vi truy cập dữ liệu (Platform/School/Class-level) và quy định đặc quyền chuyên trách.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 13,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Định nghĩa Vai trò & Phân quyền RBAC)",
    "name": "Role Matrix & Granular Permissions",
    "description": "Ma trận phân quyền trực quan dạng lưới 2 chiều: cho phép Super Admin tích chọn cấp phát hoặc thu hồi quyền truy cập màn hình và các endpoint API nghiệp vụ cho từng vai trò người dùng trong hệ thống KIDPRO.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 14,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Cấu hình Tích hợp & Trí tuệ Nhân tạo (AI))",
    "name": "System Integrations & API Config (PayOS, FCM, AI)",
    "description": "Bàn cấu hình tích hợp cổng dịch vụ ngoại vi tập trung dạng Tab: quản lý thông số cổng thanh toán VietQR (PayOS API Key, Checksum Key, Webhook URL), máy chủ thư điện tử (SMTP), dịch vụ thông báo đẩy (Firebase Cloud Messaging - FCM) và điểm cuối API nhận diện AI.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "AI Sinh trắc học",
      "PayOS VietQR"
    ]
  },
  {
    "stt": 15,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Cấu hình Tích hợp & Trí tuệ Nhân tạo (AI))",
    "name": "AI Microservice & Model Monitoring",
    "description": "Màn hình giám sát và tinh chỉnh mô hình AI: cấu hình ngưỡng tin cậy nhận diện khuôn mặt (Confidence Threshold >= 85%), theo dõi độ trễ trích xuất vector đặc trưng InsightFace 512D (<0.3s), tỷ lệ nhận diện đúng và tổng tài nguyên suy luận AI tiêu thụ.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "AI Sinh trắc học"
    ]
  },
  {
    "stt": 16,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Quản trị Nền tảng (System Admin) (Giám sát An ninh & Hạ tầng)",
    "name": "Security Audit Logs & Backup/Restore",
    "description": "Trung tâm kiểm toán an ninh và quản lý dữ liệu thảm họa: theo dõi nhật ký truy cập (IP, thời gian, thao tác CRUD), kiểm toán tuân thủ xóa dữ liệu sinh trắc học theo Nghị định 13/2023/NĐ-CP, xuất file báo cáo kiểm toán (CSV/Excel) và kích hoạt sao lưu/phục hồi dữ liệu PostgreSQL định kỳ.",
    "role": "Quản trị Nền tảng (Super Admin)",
    "role_key": "super_admin",
    "tags": [
      "Nghị định 13"
    ]
  },
  {
    "stt": 17,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Xác thực & Điều hành Cấp cao Nhà trường)",
    "name": "Login Screen",
    "description": "Giao diện đăng nhập bảo mật dành cho Hiệu trưởng và Ban Giám Hiệu: xác thực tài khoản qua email công vụ và mật khẩu, hỗ trợ xác thực 2 yếu tố (2FA) bảo vệ dữ liệu điều hành và cấp quyền truy cập toàn diện cấp trường.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghị định 13"
    ]
  },
  {
    "stt": 18,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Xác thực & Điều hành Cấp cao Nhà trường)",
    "name": "Forgot Password Screen",
    "description": "Màn hình yêu cầu cấp lại mật khẩu cho tài khoản Ban Giám Hiệu: kiểm tra email đã đăng ký và gửi mã bảo mật khôi phục truy cập qua kênh liên lạc được phê chuẩn.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 19,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Xác thực & Điều hành Cấp cao Nhà trường)",
    "name": "Principal Executive Dashboard",
    "description": "Bàn làm việc điều hành chiến lược của Hiệu trưởng: hiển thị báo cáo tổng quan đa chiều theo thời gian thực gồm tổng sĩ số toàn trường, tỷ lệ chuyên cần hôm nay, cảnh báo an toàn cổng trường, tiến độ thu học phí và các chỉ số vận hành bán trú quan trọng.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 20,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Xác thực & Điều hành Cấp cao Nhà trường)",
    "name": "View & Edit Profile",
    "description": "Màn hình xem và cập nhật hồ sơ công tác của Hiệu trưởng: thông tin cá nhân, chức vụ, số điện thoại nội bộ, ảnh đại diện và chứng thư chữ ký số phục vụ duyệt văn bản điện tử trên hệ thống.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 21,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Xác thực & Điều hành Cấp cao Nhà trường)",
    "name": "Change Password Screen",
    "description": "Giao diện thay đổi mật khẩu định kỳ của Ban Giám Hiệu nhằm bảo vệ tài khoản quản trị cấp cao, đáp ứng các tiêu chuẩn an toàn bảo mật thông tin giáo dục.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 22,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Xác thực & Điều hành Cấp cao Nhà trường)",
    "name": "Notification Center",
    "description": "Trung tâm thông báo tiếp nhận các sự kiện khẩn cấp toàn trường: cảnh báo người lạ xuất hiện tại cổng đón trẻ, báo cáo trẻ sốt cao/tai nạn học đường, đơn khiếu nại học phí vượt cấp và giáo án chờ ký duyệt.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 23,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Quy hoạch Năm học & Phê duyệt Vận hành)",
    "name": "Academic Year & Term Setup",
    "description": "Bàn quản lý khung kế hoạch năm học: khởi tạo niên khóa mới, thiết lập mốc thời gian khai giảng - bế giảng, phân kỳ học kỳ, lịch nghỉ lễ Tết và ký duyệt ban hành lịch biểu học tập chính thức tới toàn trường.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 24,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Quy hoạch Năm học & Phê duyệt Vận hành)",
    "name": "Classroom Structure & Quota Approval",
    "description": "Màn hình thẩm định và ký duyệt cơ cấu lớp học: xem xét danh sách lớp đề xuất, định mức sĩ số tối đa theo quy chuẩn mầm non, diện tích phòng học khả dụng, phân bổ giáo viên chủ nhiệm/phụ tá và ký duyệt mở lớp mới.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 25,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Quy hoạch Năm học & Phê duyệt Vận hành)",
    "name": "Tuition Policy & Concessions Approval",
    "description": "Giao diện phê duyệt chính sách biểu phí học phí: rà soát định mức học phí, tiền ăn bán trú, đơn giá hoàn trừ tiền ăn ngày nghỉ, chính sách miễn giảm cho học sinh có anh chị em cùng học và ký ban hành áp dụng.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 26,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Quy hoạch Năm học & Phê duyệt Vận hành)",
    "name": "Lesson Plan Approval Portal",
    "description": "Cổng giám sát và ký duyệt kế hoạch bài dạy cấp trường: theo dõi tiến độ nộp giáo án tuần của các khối lớp, ghi chú nhận xét góp ý chuyên môn sư phạm và thực hiện ký duyệt điện tử ban hành giáo án giảng dạy.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 27,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Phân tích Chiến lược & An toàn Trường học)",
    "name": "Enrollment & Student Fluctuation Analytics",
    "description": "Màn hình phân tích xu hướng tuyển sinh và biến động sĩ số: cung cấp đồ thị trực quan so sánh số lượng học sinh nhập học mới, số học sinh chuyển lớp/bảo lưu/thôi học qua các kỳ để ra quyết định cải tiến chất lượng.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 28,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Phân tích Chiến lược & An toàn Trường học)",
    "name": "Financial Cashflow & Revenue Overview",
    "description": "Báo cáo tài chính tổng hợp cấp trường: theo dõi tổng doanh thu đã thu ngân qua VietQR/tiền mặt, tỷ lệ hoàn thành thu học phí theo khối lớp, tổng công nợ tồn đọng và phân tích dòng tiền vận hành bán trú.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 29,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Phân tích Chiến lược & An toàn Trường học)",
    "name": "Campus Safety & Security Audit Log",
    "description": "Trung tâm giám sát an ninh học đường: theo dõi nhật ký sự cố đón trẻ, cảnh báo người lạ cố tiếp cận cổng trường, sự vụ y tế học đường và kiểm toán việc thực thi quyền xóa dữ liệu sinh trắc học theo Nghị định 13.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghị định 13"
    ]
  },
  {
    "stt": 30,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Ban Giám Hiệu (School Principal) (Phân tích Chiến lược & An toàn Trường học)",
    "name": "Emergency Schoolwide Broadcast Form",
    "description": "Biểu mẫu phát thông báo khẩn cấp toàn trường: cho phép Hiệu trưởng soạn thảo và gửi cảnh báo mức độ tối cao (Push notification + SMS) tới toàn bộ cán bộ, giáo viên và phụ huynh khi có tình huống thiên tai, dịch bệnh hoặc an ninh đột xuất.",
    "role": "Ban Giám Hiệu (Hiệu trưởng)",
    "role_key": "principal",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 31,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Xác thực & Bàn Làm việc Giáo vụ)",
    "name": "Login Screen",
    "description": "Màn hình đăng nhập cổng nghiệp vụ Giáo vụ: xác thực an toàn bằng tài khoản cán bộ nhà trường, cấp quyền truy cập các chức năng tuyển sinh, xếp lớp, quản lý thời khóa biểu và hồ sơ học vụ.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 32,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Xác thực & Bàn Làm việc Giáo vụ)",
    "name": "Forgot Password Screen",
    "description": "Giao diện tiếp nhận yêu cầu lấy lại mật khẩu cho cán bộ giáo vụ thông qua email hoặc số điện thoại đã xác minh trong hồ sơ nhân sự.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 33,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Xác thực & Bàn Làm việc Giáo vụ)",
    "name": "Academic Affairs Dashboard",
    "description": "Trung tâm điều phối học vụ hàng ngày: hiển thị số liệu thống kê hồ sơ tuyển sinh mới, danh sách lớp học chờ xếp giáo viên, tiến độ thẩm định giáo án tuần và các yêu cầu đăng ký người đón ủy quyền chờ duyệt.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 34,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Xác thực & Bàn Làm việc Giáo vụ)",
    "name": "View & Edit Profile",
    "description": "Màn hình xem và cập nhật hồ sơ cá nhân cán bộ giáo vụ: thông tin liên hệ, khối lớp chuyên trách quản lý học vụ và các cài đặt giao diện làm việc.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 35,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Xác thực & Bàn Làm việc Giáo vụ)",
    "name": "Change Password Screen",
    "description": "Giao diện đổi mật khẩu tài khoản giáo vụ định kỳ nhằm đảm bảo an toàn bí mật hồ sơ dữ liệu học sinh.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 36,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Xác thực & Bàn Làm việc Giáo vụ)",
    "name": "Notification Center",
    "description": "Trung tâm thông báo giáo vụ: tiếp nhận các đơn xin nghỉ học dài hạn, hồ sơ đăng ký người đưa đón mới nộp từ phụ huynh và giáo án mới gửi từ các tổ chuyên môn.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 37,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Tuyển sinh & Quản lý Hồ sơ Học sinh)",
    "name": "Student Admissions Dashboard",
    "description": "Bàn làm việc quản lý quy trình tuyển sinh: theo dõi số lượng hồ sơ đăng ký nhập học theo từng đợt, trạng thái hồ sơ (Chờ tiếp nhận, Đã bổ sung giấy tờ, Đã tiếp nhận, Đã xếp lớp) và chỉ tiêu tuyển sinh theo độ tuổi.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 38,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Tuyển sinh & Quản lý Hồ sơ Học sinh)",
    "name": "New Student Intake Form",
    "description": "Biểu mẫu tiếp nhận học sinh mới: nhập lý lịch trích ngang của trẻ (Họ tên, Ngày sinh, Giới tính, Dân tộc), thông tin phụ huynh giám hộ, đính kèm giấy khai sinh, sổ tiêm chủng và hồ sơ bệnh án dị ứng.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 39,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Tuyển sinh & Quản lý Hồ sơ Học sinh)",
    "name": "Import Students Bulk Tool (Excel)",
    "description": "Công cụ nhập danh sách học sinh đầu vào hàng loạt: hỗ trợ đọc file Excel theo mẫu chuẩn của ngành GD&ĐT, tự động kiểm tra tính hợp lệ của mã định danh học sinh và số điện thoại phụ huynh.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 40,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Tuyển sinh & Quản lý Hồ sơ Học sinh)",
    "name": "Student Profile & Health Dossier View",
    "description": "Màn hình hồ sơ điện tử toàn diện của học sinh: tổng hợp thông tin gia đình, banner cảnh báo dị ứng thực phẩm/thuốc nổi bật, nhóm máu, chỉ số thể chất và lịch sử học tập qua các năm.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 41,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Tuyển sinh & Quản lý Hồ sơ Học sinh)",
    "name": "Class Placement Workspace",
    "description": "Không gian xếp lớp cho học sinh mới: lựa chọn khối học phù hợp với độ tuổi (Mầm, Chồi, Lá), kiểm tra sĩ số khả dụng của từng lớp và thực hiện ghi danh chính thức vào danh sách lớp.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 42,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Tổ chức Lớp học & Đội ngũ Giáo viên)",
    "name": "Class & Classroom Management",
    "description": "Bàn điều phối danh mục lớp học: quản lý danh sách lớp học đang hoạt động, gán phòng học cố định, độ tuổi tiếp nhận và thiết lập định mức sĩ số tối đa cho phép.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 43,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Tổ chức Lớp học & Đội ngũ Giáo viên)",
    "name": "Classroom Roster & Student Directory",
    "description": "Màn hình danh sách lớp học: hiển thị chi tiết toàn bộ học sinh trong lớp, giáo viên phụ trách, số điện thoại liên lạc của phụ huynh và trạng thái điểm danh ngày.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 44,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Tổ chức Lớp học & Đội ngũ Giáo viên)",
    "name": "Teacher Assignment Screen (Lead & Assistant)",
    "description": "Màn hình phân công giáo viên phụ trách lớp: chỉ định Giáo viên Chủ nhiệm (Lead Teacher) chịu trách nhiệm chính và Giáo viên Phụ tá (Assistant Teacher) hỗ trợ chăm sóc bán trú.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 45,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Tổ chức Lớp học & Đội ngũ Giáo viên)",
    "name": "Student Transfer & Deferral Approval",
    "description": "Giao diện xử lý chuyển lớp và bảo lưu học tập: tiếp nhận đơn xin chuyển lớp hoặc bảo lưu của phụ huynh, đối chiếu sĩ số lớp đến và cập nhật chuyển giao hồ sơ học bạ tự động.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 46,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thời khóa biểu & Lập lịch Hoạt động)",
    "name": "Timetable Scheduler Workspace (Drag & Drop)",
    "description": "Giao diện xếp thời khóa biểu thông minh dạng kéo - thả (Drag & Drop): phân bổ các môn học (Làm quen chữ viết, Toán, Âm nhạc, STEAM, Thể dục) vào các khung giờ theo phân phối chương trình mầm non.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 47,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thời khóa biểu & Lập lịch Hoạt động)",
    "name": "Timetable Conflict Resolution Screen",
    "description": "Màn hình phát hiện và giải quyết xung đột lịch giảng dạy: tự động rà soát trùng lịch phòng học chức năng (phòng nhạc, phòng thể chất) hoặc giáo viên chuyên trách bị phân công trùng giờ.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 48,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thời khóa biểu & Lập lịch Hoạt động)",
    "name": "Publish Timetable Broadcast Form",
    "description": "Biểu mẫu ban hành thời khóa biểu chính thức: xác nhận lịch biểu áp dụng và gửi thông báo cập nhật thời khóa biểu tới ứng dụng di động của giáo viên và phụ huynh.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 49,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thẩm tra Người đón Ủy quyền)",
    "name": "Authorized Pickup Verification Dashboard",
    "description": "Bàn thẩm tra danh sách người đưa đón học sinh: quản lý hàng đợi các yêu cầu đăng ký người giám hộ phụ (ông bà, người thân) do phụ huynh nộp qua ứng dụng di động.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 50,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thẩm tra Người đón Ủy quyền)",
    "name": "Guardian Dossier & Identity Check Screen",
    "description": "Giao diện đối soát danh tính người đón: cán bộ giáo vụ kiểm tra tính pháp lý của ảnh 2 mặt CCCD, ảnh chân dung rõ nét đạt tiêu chuẩn nhận diện AI và duyệt cấp quyền đón trẻ.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 51,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thẩm tra Người đón Ủy quyền)",
    "name": "Reject Guardian Notice Form",
    "description": "Biểu mẫu từ chối hồ sơ người đón không hợp lệ: ghi rõ nguyên nhân từ chối (ảnh mờ, CCCD hết hạn, thông tin không khớp) và gửi thông báo phản hồi ngay cho phụ huynh nộp lại.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 52,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thẩm định Giáo án & Hồ sơ Lưu trữ)",
    "name": "Lesson Plan Review & Feedback Portal",
    "description": "Cổng thẩm định kế hoạch bài dạy chuyên môn: theo dõi tiến độ nộp giáo án tuần của giáo viên các khối lớp, đối chiếu nội dung với chuẩn chương trình của Bộ GD&ĐT và gửi nhận xét góp ý.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 53,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thẩm định Giáo án & Hồ sơ Lưu trữ)",
    "name": "5 Developmental Domains Evaluation Review",
    "description": "Màn hình rà soát mục tiêu phát triển theo 5 lĩnh vực (Thể chất, Nhận thức, Ngôn ngữ, Tình cảm - Kỹ năng xã hội, Thẩm mỹ) theo Thông tư 51/2020/TT-BGDĐT được tích hợp trong giáo án.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Bộ GD&ĐT"
    ]
  },
  {
    "stt": 54,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thẩm định Giáo án & Hồ sơ Lưu trữ)",
    "name": "Curriculum Equipment & Teaching Aids Roster",
    "description": "Sổ theo dõi và cấp phát đồ dùng, thiết bị dạy học: quản lý danh mục giáo cụ, đồ chơi mầm non, đồ dùng STEAM cấp phát cho từng lớp và lịch thu hồi kiểm kê định kỳ.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 55,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thẩm định Giáo án & Hồ sơ Lưu trữ)",
    "name": "Official Attendance Register Export (Circular 28)",
    "description": "Công cụ xuất Sổ Điểm danh & Theo dõi Sức khỏe: tổng hợp dữ liệu chuyên cần từ trạm AI và xác nhận của giáo viên, tự động kết xuất ra tệp Excel/PDF theo mẫu chuẩn quy định tại Thông tư 28/2020/TT-BGDĐT.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Bộ GD&ĐT"
    ]
  },
  {
    "stt": 56,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Cán bộ Giáo vụ (Academic Affairs) (Thẩm định Giáo án & Hồ sơ Lưu trữ)",
    "name": "Year-End Student Dossier Archiving Screen",
    "description": "Biểu mẫu kết chuyển và khóa sổ học vụ cuối năm: xác nhận hoàn thành chương trình mầm non cho trẻ 5 tuổi (Lá), khóa sổ điểm danh và kết chuyển học bạ vào kho lưu trữ số vĩnh viễn.",
    "role": "Cán bộ Giáo vụ (Academic Affairs)",
    "role_key": "academic",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 57,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Xác thực & Bàn Làm việc Tài chính)",
    "name": "Login Screen",
    "description": "Màn hình đăng nhập cổng nghiệp vụ Kế toán: xác thực tài khoản qua email công vụ, bảo mật kiểm soát phiên làm việc nghiêm ngặt nhằm bảo vệ toàn vẹn dữ liệu thu chi tài chính của nhà trường.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 58,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Xác thực & Bàn Làm việc Tài chính)",
    "name": "Forgot Password Screen",
    "description": "Giao diện khôi phục mật khẩu tài khoản kế toán viên thông qua mã bảo mật OTP gửi về số điện thoại hoặc email đã xác thực.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 59,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Xác thực & Bàn Làm việc Tài chính)",
    "name": "Financial Management Dashboard",
    "description": "Bàn điều hành tài chính trường học: hiển thị trực quan tổng doanh thu phát sinh trong kỳ, tổng số tiền học phí đã thu, số tiền hoàn trả suất ăn vắng phép, dư nợ học phí chưa thanh toán và biểu đồ dòng tiền thu qua VietQR.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 60,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Xác thực & Bàn Làm việc Tài chính)",
    "name": "View & Edit Profile",
    "description": "Màn hình xem và cập nhật hồ sơ cá nhân kế toán viên: thông tin chức danh phụ trách thu chi học phí và cài đặt thông báo số dư biến động tài khoản ngân hàng nhà trường.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 61,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Xác thực & Bàn Làm việc Tài chính)",
    "name": "Change Password Screen",
    "description": "Giao diện thay đổi mật khẩu định kỳ của tài khoản kế toán, tuân thủ quy chế an toàn bảo mật tài chính ngân hàng.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 62,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Xác thực & Bàn Làm việc Tài chính)",
    "name": "Notification Center",
    "description": "Trung tâm thông báo tài chính: cảnh báo các giao dịch chuyển khoản VietQR sai lệch nội dung, đơn khiếu nại học phí mới phát sinh từ phụ huynh và nhắc nhở kỳ chốt hóa đơn hàng tháng.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 63,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Danh mục Khoản thu & Chính sách Miễn giảm)",
    "name": "Fee Catalog Configuration Screen",
    "description": "Bàn quản lý danh mục biểu phí: thiết lập và theo dõi toàn bộ các khoản thu bắt buộc (Học phí, Tiền ăn, Nước uống) và khoản thu tự nguyện (Dịch vụ đón muộn, Câu lạc bộ năng khiếu, Tiếng Anh tăng cường).",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 64,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Danh mục Khoản thu & Chính sách Miễn giảm)",
    "name": "Create & Edit Fee Item Form",
    "description": "Biểu mẫu tạo và chỉnh sửa khoản thu: khai báo tên khoản thu, mã kế toán, số tiền định mức, đơn vị tính (tháng/ngày/buổi), chu kỳ tính phí và chỉ định đối tượng học sinh áp dụng.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 65,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Danh mục Khoản thu & Chính sách Miễn giảm)",
    "name": "Meal Refund & Absence Discount Rates Config",
    "description": "Biểu mẫu cấu hình đơn giá hoàn tiền ăn: thiết lập số tiền hoàn trả cho mỗi ngày học sinh nghỉ học có phép hợp lệ (đã báo nghỉ trước giờ chốt suất ăn bán trú 08:00 sáng).",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 66,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Danh mục Khoản thu & Chính sách Miễn giảm)",
    "name": "Sibling Concession & Deposit Deduction Rules",
    "description": "Biểu mẫu thiết lập quy tắc miễn giảm và khấu trừ cọc: cấu hình mức giảm trừ phần trăm cho học sinh có anh chị em ruột cùng học và quy tắc tự động cấn trừ tiền cọc nhập học vào kỳ học phí đầu tiên.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 67,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Quyết toán Động & Thanh toán VietQR)",
    "name": "Monthly Billing Run Workspace",
    "description": "Không gian kích hoạt động cơ quyết toán tự động: hệ thống tự động quét số ngày chuyên cần thực tế trong tháng, đối soát số ngày nghỉ có phép để tính toán tiền ăn hoàn trừ và cộng dồn phụ phí đón muộn.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 68,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Quyết toán Động & Thanh toán VietQR)",
    "name": "Draft Statements & Batch Invoicing Screen",
    "description": "Màn hình kiểm tra hóa đơn dự thảo và phát hành hàng loạt: kế toán viên rà soát bảng kê chi tiết từng khoản thu, điều chỉnh sai lệch nếu có và bấm phát hành gửi thông báo hóa đơn tới ứng dụng phụ huynh.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 69,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Quyết toán Động & Thanh toán VietQR)",
    "name": "Manual Cash Clearing & Offline Desk",
    "description": "Biểu mẫu thu tiền mặt tại quầy văn phòng: tiếp nhận đóng học phí trực tiếp của phụ huynh, nhập số tiền thu, tạo phiếu thu tiền mặt và tự động gạch nợ trên hệ thống.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 70,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Quyết toán Động & Thanh toán VietQR)",
    "name": "VietQR Webhook Reconciliation Monitor",
    "description": "Màn hình đối soát tín hiệu Webhook ngân hàng: theo dõi các giao dịch chuyển khoản VietQR PayOS thành công theo thời gian thực, tự động gạch nợ hóa đơn tương ứng trong vòng 2 giây.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "PayOS VietQR"
    ]
  },
  {
    "stt": 71,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Quyết toán Động & Thanh toán VietQR)",
    "name": "Payment Electronic Receipts & Invoices Archive",
    "description": "Kho lưu trữ biên lai thu tiền điện tử: hiển thị chi tiết biên lai thu học phí có đóng dấu xác nhận số của nhà trường, mã tra cứu giao dịch và nút in/tải file biên lai PDF.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 72,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Xử lý Khiếu nại, Thu hồi Nợ & Báo cáo)",
    "name": "Tuition Dispute Investigation & Adjustment",
    "description": "Bàn tiếp nhận và giải quyết khiếu nại tài chính: đối chiếu nội dung phản ánh của phụ huynh với nhật ký điểm danh thực tế và lập lệnh cấn trừ tiền học phí (Credit Note) vào kỳ kế tiếp.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 73,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Xử lý Khiếu nại, Thu hồi Nợ & Báo cáo)",
    "name": "Overdue Debt Recovery & Dunning Alerts",
    "description": "Bàn điều hành thu hồi công nợ quá hạn: phân loại các khoản nợ học phí theo tuổi nợ (Quá hạn 1 ngày, 3 ngày, trên 7 ngày), gửi tin nhắn thông báo đẩy và SMS nhắc nợ tự động tới phụ huynh.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 74,
    "type": "web",
    "platform": "Web Desktop",
    "subsystem": "Kế toán Trường học (School Accountant) (Xử lý Khiếu nại, Thu hồi Nợ & Báo cáo)",
    "name": "VAS Financial Reports & Ledger Export",
    "description": "Trung tâm báo cáo tài chính và sổ cái kế toán: phân tích thu chi vận hành, bảng cân đối số phát sinh tài khoản và kết xuất báo cáo tài chính chuẩn mực kế toán Việt Nam (VAS) dưới dạng file Excel.",
    "role": "Kế toán Trường học (Accountant)",
    "role_key": "accountant",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 75,
    "local_stt": 1,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Xác thực & Bàn Làm việc Lớp học)",
    "name": "Teacher Mobile Login",
    "description": "Màn hình đăng nhập ứng dụng di động dành cho Giáo viên Mầm non: hỗ trợ xác thực bằng Số điện thoại + Mật khẩu hoặc sinh trắc học vân tay/FaceID tiện lợi trên thiết bị di động.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 76,
    "local_stt": 2,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Xác thực & Bàn Làm việc Lớp học)",
    "name": "Forgot Password Screen",
    "description": "Màn hình khôi phục mật khẩu ứng dụng di động: tiếp nhận số điện thoại đã đăng ký, gửi mã xác thực OTP qua tin nhắn SMS để giáo viên đặt lại mật khẩu mới.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 77,
    "local_stt": 3,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Xác thực & Bàn Làm việc Lớp học)",
    "name": "Teacher Classroom Dashboard (Executive View)",
    "description": "Màn hình chính của ứng dụng giáo viên: hiển thị dòng trạng thái lớp học hôm nay (Sĩ số đã đến, Chưa đến, Nghỉ phép, Đã đón về), lối tắt điểm danh nhanh, thông báo dặn thuốc khẩn và tin nhắn mới từ phụ huynh.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 78,
    "local_stt": 4,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Xác thực & Bàn Làm việc Lớp học)",
    "name": "View Profile",
    "description": "Màn hình xem hồ sơ giáo viên: họ tên, ảnh đại diện, lớp học được phân công phụ trách, thâm niên công tác và thông tin liên hệ.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 79,
    "local_stt": 5,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Xác thực & Bàn Làm việc Lớp học)",
    "name": "Edit Profile",
    "description": "Giao diện cập nhật thông tin cá nhân giáo viên, ảnh đại diện và tùy chọn cài đặt âm thanh thông báo trên điện thoại.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 80,
    "local_stt": 6,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Xác thực & Bàn Làm việc Lớp học)",
    "name": "Change Password",
    "description": "Màn hình đổi mật khẩu đăng nhập ứng dụng di động của giáo viên nhằm đảm bảo tính bảo mật của tài khoản lớp học.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 81,
    "local_stt": 7,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Xác thực & Bàn Làm việc Lớp học)",
    "name": "Notification Center",
    "description": "Trung tâm thông báo di động: nhận thông báo đẩy tức thời khi phụ huynh gửi đơn xin nghỉ, đơn dặn thuốc, tin nhắn mới hoặc thông báo khẩn cấp từ Ban Giám Hiệu.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 82,
    "local_stt": 8,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Điểm danh Sáng & Nhận diện AI)",
    "name": "Morning Attendance Dashboard",
    "description": "Bàn điều khiển điểm danh buổi sáng: theo dõi tiến độ đón trẻ tại lớp, hiển thị danh sách thẻ ảnh học sinh theo 3 trạng thái trực quan: Đã có mặt (Xanh lá), Chưa đến (Vàng) và Vắng có phép (Xanh dương).",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 83,
    "local_stt": 9,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Điểm danh Sáng & Nhận diện AI)",
    "name": "Camera Face Scan (Real-Time YOLO Scan)",
    "description": "Giao diện quét camera nhận diện khuôn mặt sinh trắc học thời gian thực: ứng dụng mô hình YOLOv11 phát hiện khuôn mặt và InsightFace trích xuất vector đặc trưng trong vòng dưới 0.3 giây với khung chữ nhật nhận diện trẻ tức thì.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "AI Sinh trắc học"
    ]
  },
  {
    "stt": 84,
    "local_stt": 10,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Điểm danh Sáng & Nhận diện AI)",
    "name": "Attendance Result Screen (Match Score & Status)",
    "description": "Màn hình kết quả nhận diện: hiển thị ảnh chụp snapshot lúc trẻ bước vào lớp, độ khớp khuôn mặt (Match Score >= 85%), họ tên bé, giờ đến chính xác và tự động gửi thông báo xác nhận kèm ảnh về app phụ huynh.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 85,
    "local_stt": 11,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Điểm danh Sáng & Nhận diện AI)",
    "name": "Manual Fallback Form (Manual Check-in & Notes)",
    "description": "Biểu mẫu điểm danh thủ công dự phòng: dành cho giáo viên tích chọn điểm danh bằng tay trong các trường hợp mất kết nối mạng hoặc trẻ đeo kính/băng che mặt không nhận diện tự động được.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 86,
    "local_stt": 12,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Điểm danh Sáng & Nhận diện AI)",
    "name": "Health Incident Form (Fever Alert & Temp)",
    "description": "Biểu mẫu ghi nhận thân nhiệt và dấu hiệu sức khỏe bất thường buổi sáng: nhập nhiệt độ cơ thể khi đo bằng nhiệt kế (cảnh báo đỏ nếu >= 38.0°C), ghi chú triệu chứng ho/sổ mũi và kích hoạt thông báo y tế.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 87,
    "local_stt": 13,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Trả trẻ An toàn & Xác thực Người đón)",
    "name": "Dismissal Verification Dashboard",
    "description": "Bàn điều khiển trả trẻ buổi chiều: quản lý danh sách học sinh chờ phụ huynh đón, hỗ trợ gọi tên đón trẻ qua loa và hiển thị người đón đang đứng trước cổng.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 88,
    "local_stt": 14,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Trả trẻ An toàn & Xác thực Người đón)",
    "name": "Scan Guardian Face (InsightFace 512D)",
    "description": "Giao diện quét nhận diện khuôn mặt người đến đón: camera trích xuất vector khuôn mặt 512 chiều của người đón và so khớp với cơ sở dữ liệu phụ huynh/người ủy quyền đã được trường phê chuẩn.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "AI Sinh trắc học"
    ]
  },
  {
    "stt": 89,
    "local_stt": 15,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Trả trẻ An toàn & Xác thực Người đón)",
    "name": "Guardian Detail Screen (Verified Photo & ID)",
    "description": "Màn hình xác nhận người đón hợp lệ: hiển thị thẻ thông tin đối chứng gồm ảnh chân dung đã duyệt, quan hệ với trẻ (Bố/Mẹ/Ông/Bà), ảnh chụp CCCD và thời gian đón để cô giáo yên tâm bàn giao trẻ.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 90,
    "local_stt": 16,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Trả trẻ An toàn & Xác thực Người đón)",
    "name": "Stranger Gate Alert Form (Red Warning & Guard Call)",
    "description": "Màn hình cảnh báo người lạ khẩn cấp: nhấp nháy khung đỏ cảnh báo người đến đón không có trong danh sách ủy quyền, cho phép cô giáo ấn nút báo động khẩn gửi tới Bảo vệ và Ban Giám Hiệu can thiệp.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 91,
    "local_stt": 17,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Trả trẻ An toàn & Xác thực Người đón)",
    "name": "Late Pickup Time Log (Surcharge Calculation)",
    "description": "Biểu mẫu ghi nhận trả trẻ muộn sau giờ quy định (sau 17:30): ghi nhận chính xác số phút muộn, tự động tính toán phụ phí trông muộn và chuyển sang hệ thống thanh toán học phí.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 92,
    "local_stt": 18,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Duyệt Đơn Nghỉ học & Dặn thuốc)",
    "name": "Leave & Medication Dashboard",
    "description": "Bàn theo dõi đơn từ của phụ huynh: tổng hợp danh sách đơn xin nghỉ học trong ngày và danh sách các bé có đơn dặn thuốc cần cho uống theo khung giờ.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 93,
    "local_stt": 19,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Duyệt Đơn Nghỉ học & Dặn thuốc)",
    "name": "Leave Requests Screen (Sick / Planned Leaves)",
    "description": "Danh sách đơn xin nghỉ học của lớp: phân loại theo đơn nghỉ ốm, đơn nghỉ có kế hoạch; hiển thị ngày nộp, khoảng thời gian nghỉ và lý do của gia đình.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 94,
    "local_stt": 20,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Duyệt Đơn Nghỉ học & Dặn thuốc)",
    "name": "Approve Leave Form (Meal Refund Flag)",
    "description": "Biểu mẫu xét duyệt đơn xin nghỉ học: giáo viên xác nhận duyệt đơn, tự động kích hoạt gắn cờ hoàn trả tiền ăn bán trú (nếu nộp trước 08:00 sáng) và gửi phản hồi cho phụ huynh.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 95,
    "local_stt": 21,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Duyệt Đơn Nghỉ học & Dặn thuốc)",
    "name": "Medication Queue Screen (Prescription & Dosage)",
    "description": "Hàng đợi dặn thuốc học sinh: nhắc nhở danh sách các bé cần uống thuốc sau bữa trưa (13:30), hiển thị tên thuốc, liều lượng chỉ định và hướng dẫn của phụ huynh.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 96,
    "local_stt": 22,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Duyệt Đơn Nghỉ học & Dặn thuốc)",
    "name": "Administer Med Form (Capture Photo Proof)",
    "description": "Biểu mẫu thực hiện cho trẻ uống thuốc: yêu cầu cô giáo chụp ảnh thực tế bé uống thuốc làm bằng chứng đối soát, ghi nhận giờ uống và gửi thông báo an tâm về điện thoại phụ huynh.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 97,
    "local_stt": 23,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Nhật ký Hoạt động & Sinh hoạt Bán trú)",
    "name": "Class Daily Timeline Dashboard",
    "description": "Bàn điều hành dòng thời gian hoạt động lớp học: cập nhật các mốc sự kiện trong ngày gồm ăn sáng, thể dục sáng, hoạt động STEAM, ăn trưa, ngủ trưa và hoạt động góc.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 98,
    "local_stt": 24,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Nhật ký Hoạt động & Sinh hoạt Bán trú)",
    "name": "Daily Timeline Screen (Published Class Feed)",
    "description": "Bản tin hoạt động trực quan của lớp: hiển thị bài đăng hình ảnh, video ngắn các hoạt động trải nghiệm trong ngày của học sinh được chia sẻ tới nhóm phụ huynh của lớp.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 99,
    "local_stt": 25,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Nhật ký Hoạt động & Sinh hoạt Bán trú)",
    "name": "Post Activity Journal (Photos, Tags & Story)",
    "description": "Giao diện soạn nhật ký sinh hoạt lớp: cho phép chọn nhiều ảnh/video, gắn thẻ (tag) tên các học sinh tham gia hoạt động và viết lời nhắn chia sẻ về bài học hôm nay.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 100,
    "local_stt": 26,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Nhật ký Hoạt động & Sinh hoạt Bán trú)",
    "name": "Meal Consumption Log (Food Intake Rating)",
    "description": "Biểu mẫu đánh giá mức độ ăn uống bữa trưa: cô giáo đánh giá nhanh khẩu phần ăn của từng bé (Ăn hết suất, Ăn 1/2 suất, Biếng ăn, Kén món) kèm ghi chú dị ứng để phụ huynh nắm bắt.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 101,
    "local_stt": 27,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Nhật ký Hoạt động & Sinh hoạt Bán trú)",
    "name": "Nap Routine Log Form (Sleep Duration & Mood)",
    "description": "Biểu mẫu ghi nhận giấc ngủ trưa: theo dõi thời gian bắt đầu ngủ, thời gian thức dậy, ghi nhận tình trạng giấc ngủ của bé (Ngủ ngon giấc, Khó ngủ, Giật mình khóc đêm).",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 102,
    "local_stt": 28,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Soạn thảo Kế hoạch Bài dạy (Lesson Plan))",
    "name": "Lesson Plan Portal Dashboard",
    "description": "Cổng soạn giáo án di động dành cho giáo viên: quản lý danh sách các kế hoạch bài dạy theo chủ đề tuần, trạng thái phê duyệt của Ban Giám Hiệu và các góp ý chuyên môn nhận được.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 103,
    "local_stt": 29,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Soạn thảo Kế hoạch Bài dạy (Lesson Plan))",
    "name": "Create Lesson Plan Form (5 Developmental Domains)",
    "description": "Biểu mẫu soạn thảo kế hoạch bài dạy: chọn chủ đề tuần, mục tiêu bài học theo 5 lĩnh vực phát triển mầm non, chuẩn bị học cụ và phân bổ các hoạt động học tập chi tiết.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Bộ GD&ĐT"
    ]
  },
  {
    "stt": 104,
    "local_stt": 30,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Soạn thảo Kế hoạch Bài dạy (Lesson Plan))",
    "name": "Save Draft Plan Form (Continue Later)",
    "description": "Biểu mẫu lưu bản nháp giáo án: cho phép giáo viên tạm lưu các ý tưởng hoạt động để tiếp tục hoàn thiện trên máy tính hoặc điện thoại trước khi nộp chính thức.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 105,
    "local_stt": 31,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Soạn thảo Kế hoạch Bài dạy (Lesson Plan))",
    "name": "Lesson Plan History (Approval Status & Notes)",
    "description": "Lịch sử kế hoạch bài dạy: tra cứu toàn bộ các giáo án đã nộp trong học kỳ, xem chi tiết chữ ký số phê duyệt của Ban Giám Hiệu và điểm số đánh giá chuyên môn.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 106,
    "local_stt": 32,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Tương tác Phụ huynh & Bản tin Lớp)",
    "name": "Parent Communication Dashboard",
    "description": "Bàn giao tiếp nhà trường - phụ huynh: quản lý các cuộc trao đổi trực tiếp với gia đình học sinh, duy trì nguyên tắc giao tiếp văn minh và bảo vệ thông tin riêng tư của các gia đình.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 107,
    "local_stt": 33,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Tương tác Phụ huynh & Bản tin Lớp)",
    "name": "Direct Chat Screen (Secure Parent Thread)",
    "description": "Giao diện nhắn tin trực tiếp 1-1 giữa giáo viên chủ nhiệm và phụ huynh học sinh: hỗ trợ gửi tin nhắn văn bản, hình ảnh tình hình của con tại lớp và ghi âm thoại ngắn.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 108,
    "local_stt": 34,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Tương tác Phụ huynh & Bản tin Lớp)",
    "name": "Class Noticeboard View (Announcements Feed)",
    "description": "Bảng tin thông báo lớp học: nơi đăng tải các thông báo chung của lớp về lịch tham quan dã ngoại, nhắc nhở đồng phục thứ Hai hoặc chương trình chuẩn bị sự kiện lễ hội.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 109,
    "local_stt": 35,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Giáo viên (Class Teacher Mobile) (Tương tác Phụ huynh & Bản tin Lớp)",
    "name": "Urgent Class Notice Form (Broadcast Push to Class)",
    "description": "Biểu mẫu phát thông báo khẩn cấp của lớp: soạn thông báo và kích hoạt gửi thông báo đẩy ưu tiên cao tức thì đến toàn bộ phụ huynh trong lớp khi có thay đổi lịch đột xuất.",
    "role": "Giáo viên Mầm non (Teacher)",
    "role_key": "teacher",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 110,
    "local_stt": 36,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Xác thực & Dòng Thời gian)",
    "name": "Parent Mobile Login",
    "description": "Màn hình đăng nhập ứng dụng phụ huynh: hỗ trợ xác thực bằng Số điện thoại + Mật khẩu hoặc sinh trắc học FaceID/Vân tay nhanh chóng và an toàn.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 111,
    "local_stt": 37,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Xác thực & Dòng Thời gian)",
    "name": "Forgot Password Screen",
    "description": "Màn hình khôi phục mật khẩu tài khoản phụ huynh thông qua mã xác minh OTP 6 chữ số gửi qua tin nhắn SMS tới số điện thoại chính chủ.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 112,
    "local_stt": 38,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Xác thực & Dòng Thời gian)",
    "name": "Parent Mobile App Dashboard (Executive View)",
    "description": "Trang chủ ứng dụng phụ huynh: hiển thị dòng thời gian trực quan của con hôm nay (Ảnh check-in sáng lúc đến lớp, trạng thái bữa ăn, đơn thuốc, ảnh trả trẻ chiều) và các thẻ thông báo quan trọng.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 113,
    "local_stt": 39,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Xác thực & Dòng Thời gian)",
    "name": "View Profile",
    "description": "Màn hình xem thông tin tài khoản phụ huynh: họ tên, số điện thoại, địa chỉ gia đình và danh sách các con đang theo học tại trường.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 114,
    "local_stt": 40,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Xác thực & Dòng Thời gian)",
    "name": "Edit Profile",
    "description": "Giao diện cập nhật thông tin liên hệ của phụ huynh, bổ sung số điện thoại phụ phòng trường hợp khẩn cấp.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 115,
    "local_stt": 41,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Xác thực & Dòng Thời gian)",
    "name": "Change Password",
    "description": "Màn hình thay đổi mật khẩu tài khoản phụ huynh định kỳ nhằm bảo vệ dữ liệu sinh hoạt và an toàn đưa đón của con.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 116,
    "local_stt": 42,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Xác thực & Dòng Thời gian)",
    "name": "Notification Center",
    "description": "Trung tâm thông báo dành cho phụ huynh: tiếp nhận thông báo đẩy khi con đến trường kèm ảnh check-in, thông báo duyệt đơn nghỉ học, thông báo phát hành hóa đơn học phí và bản tin trường.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 117,
    "local_stt": 43,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Hồ sơ Trẻ em & Sinh trắc học)",
    "name": "Child Profile & Health Dashboard",
    "description": "Bàn quản lý hồ sơ con yêu: theo dõi thông tin học tập của bé, lớp học, cô giáo phụ trách, bảng theo dõi tăng trưởng chiều cao/cân nặng và biểu đồ thể chất theo chuẩn WHO.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 118,
    "local_stt": 44,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Hồ sơ Trẻ em & Sinh trắc học)",
    "name": "Update Profile Form (Contact & Address)",
    "description": "Biểu mẫu cập nhật thông tin học sinh: cho phép cha mẹ cập nhật địa chỉ nơi ở hiện tại, số điện thoại liên lạc khẩn cấp và đính kèm giấy chứng nhận sức khỏe mới.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 119,
    "local_stt": 45,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Hồ sơ Trẻ em & Sinh trắc học)",
    "name": "Child Health Dossier (Blood, BMI & Allergy)",
    "description": "Hồ sơ y tế điện tử của trẻ: ghi nhận nhóm máu, tiền sử dị ứng thực phẩm (dị ứng đậu phộng, hải sản, sữa bò), lịch sử tiêm chủng và các lưu ý đặc biệt gửi nhà trường.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 120,
    "local_stt": 46,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Hồ sơ Trẻ em & Sinh trắc học)",
    "name": "Face Enrollment Form (Multi-angle Photos)",
    "description": "Giao diện thu thập ảnh sinh trắc học của con: hướng dẫn phụ huynh chụp hoặc tải lên từ 1 đến 3 ảnh chân dung rõ nét ở các góc độ khác nhau để AI trích xuất vector đặc trưng khuôn mặt phục vụ điểm danh.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "AI Sinh trắc học"
    ]
  },
  {
    "stt": 121,
    "local_stt": 47,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Danh sách Người đón Ủy quyền)",
    "name": "Authorized Pickup Dashboard",
    "description": "Bàn quản lý người đưa đón trẻ: hiển thị danh sách những người thân trong gia đình được quyền đón bé và lịch sử các lần đưa đón an toàn trong tháng.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 122,
    "local_stt": 48,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Danh sách Người đón Ủy quyền)",
    "name": "Authorized Pickup List (Approved Relatives)",
    "description": "Danh sách người đón đã được nhà trường duyệt: hiển thị họ tên, mối quan hệ (Ông nội, Bà ngoại, Bác), ảnh chân dung và trạng thái sẵn sàng đón trẻ.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 123,
    "local_stt": 49,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Danh sách Người đón Ủy quyền)",
    "name": "Register Guardian Form (CCCD & Face Portrait)",
    "description": "Biểu mẫu đăng ký người đón mới: phụ huynh nhập thông tin người thân, tải ảnh chân dung và chụp 2 mặt căn cước công dân (CCCD) gửi cán bộ giáo vụ kiểm tra duyệt trước.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "AI Sinh trắc học"
    ]
  },
  {
    "stt": 124,
    "local_stt": 50,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Danh sách Người đón Ủy quyền)",
    "name": "Guardian Detail View (Relationship Info)",
    "description": "Màn hình chi tiết người giám hộ: xem thông tin chi tiết, ngày phê duyệt của trường và tùy chọn tạm dừng hoặc xóa quyền đón trẻ của người thân này.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 125,
    "local_stt": 51,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Danh sách Người đón Ủy quyền)",
    "name": "Emergency Delegation (Same-Day QR Code)",
    "description": "Biểu mẫu ủy quyền đón trẻ khẩn cấp trong ngày: tạo mã QR Code dùng một lần có gắn hạn giờ để phụ huynh chia sẻ cho người đón hộ đột xuất, bảo vệ bé tối đa tại cổng trường.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 126,
    "local_stt": 52,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Dòng Hoạt động & Bán trú của Con)",
    "name": "Daily Timeline Dashboard",
    "description": "Bàn nhật ký sinh hoạt của con: cập nhật từng mốc giờ trong ngày gồm giờ đến lớp, thực đơn bữa trưa, kết quả ăn uống, giờ ngủ trưa và ảnh hoạt động học tập.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 127,
    "local_stt": 53,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Dòng Hoạt động & Bán trú của Con)",
    "name": "Attendance Timeline (Arrival & Dismissal)",
    "description": "Lịch sử chuyên cần chi tiết: hiển thị thời gian chính xác và ảnh chụp bằng chứng lúc bé đến trường vào buổi sáng và lúc bé được bàn giao cho người nhà ra về vào buổi chiều.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 128,
    "local_stt": 54,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Dòng Hoạt động & Bán trú của Con)",
    "name": "Class Photo Gallery (Daily Activities Feed)",
    "description": "Thư viện ảnh hoạt động lớp học: phụ huynh lướt xem và tải về các bức ảnh chất lượng cao ghi lại khoảnh khắc vui chơi, học tập STEAM và biểu diễn của con do cô giáo đăng.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 129,
    "local_stt": 55,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Dòng Hoạt động & Bán trú của Con)",
    "name": "Meal & Nap Report (Nutrition & Sleep)",
    "description": "Báo cáo bán trú chi tiết hàng ngày: thông báo mức độ ăn uống của bé (Ăn hết suất, cần bổ sung dinh dưỡng), số giờ ngủ trưa và các biểu hiện tâm sinh lý trong ngày.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 130,
    "local_stt": 56,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Đơn Xin Nghỉ học & Dặn thuốc Trực tuyến)",
    "name": "Leave & Medication Dashboard",
    "description": "Bàn quản lý đơn từ trực tuyến: nơi phụ huynh gửi các yêu cầu xin nghỉ học hoặc gửi gắm đơn thuốc cho giáo viên hỗ trợ cho bé uống tại trường.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 131,
    "local_stt": 57,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Đơn Xin Nghỉ học & Dặn thuốc Trực tuyến)",
    "name": "Submit Leave Request (Dates & Reason)",
    "description": "Biểu mẫu nộp đơn xin nghỉ học: chọn khoảng ngày nghỉ, ghi rõ lý do (nghỉ ốm, việc gia đình); nếu nộp trước 08:00 sáng hệ thống sẽ tự động kích hoạt lệnh hoàn trả tiền ăn bán trú.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 132,
    "local_stt": 58,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Đơn Xin Nghỉ học & Dặn thuốc Trực tuyến)",
    "name": "Submit Medication Form (Dosage & Drug Photo)",
    "description": "Biểu mẫu dặn thuốc trực tuyến: nhập tên thuốc, liều lượng, giờ cho uống và chụp ảnh đơn thuốc bác sĩ/vỉ thuốc đính kèm để cô giáo kiểm tra đối chiếu an toàn trước khi cho bé uống.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 133,
    "local_stt": 59,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Đơn Xin Nghỉ học & Dặn thuốc Trực tuyến)",
    "name": "Request History Screen (Approval Status)",
    "description": "Lịch sử theo dõi đơn từ: tra cứu trạng thái xét duyệt của cô giáo đối với các đơn xin nghỉ học và xem ảnh xác nhận cô giáo đã cho con uống thuốc thành công.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 134,
    "local_stt": 60,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Học phí & Thanh toán VietQR Không ma sát)",
    "name": "Tuition & Payments Dashboard",
    "description": "Bàn quản lý học phí gia đình: hiển thị hóa đơn học phí tháng hiện tại, hạn chót nộp, số tiền được giảm trừ do nghỉ học có phép và trạng thái thanh toán.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 135,
    "local_stt": 61,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Học phí & Thanh toán VietQR Không ma sát)",
    "name": "Tuition Statement Screen (Itemized Bill & Meal)",
    "description": "Màn hình chi tiết hóa đơn học phí: minh bạch từng khoản thu gồm học phí, tiền ăn, phí cơ sở vật chất và bảng đối chiếu số ngày vắng phép được hoàn tiền ăn trừ trực tiếp vào hóa đơn.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 136,
    "local_stt": 62,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Học phí & Thanh toán VietQR Không ma sát)",
    "name": "Pay via VietQR Form (Dynamic Banking QR)",
    "description": "Màn hình thanh toán PayOS 1-chạm: hiển thị mã VietQR động chuẩn NAPAS247 đã điền sẵn số tiền chính xác và cú pháp chuyển khoản định danh; phụ huynh chạm mở app ngân hàng thanh toán tức thì.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "PayOS VietQR"
    ]
  },
  {
    "stt": 137,
    "local_stt": 63,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Học phí & Thanh toán VietQR Không ma sát)",
    "name": "Payment History (Download E-Receipt)",
    "description": "Lịch sử nộp học phí và lưu trữ biên lai: danh sách các kỳ học phí đã thanh toán thành công, cho phép phụ huynh xem và tải về biên lai điện tử có giá trị pháp lý chứng từ kế toán.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 138,
    "local_stt": 64,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Học phí & Thanh toán VietQR Không ma sát)",
    "name": "Submit Fee Dispute Form (Discrepancy Report)",
    "description": "Biểu mẫu gửi thắc mắc học phí: cho phép phụ huynh phản hồi trực tiếp tới bộ phận kế toán nhà trường khi phát hiện sai sót về số ngày ăn hoặc số tiền thu để được giải quyết nhanh chóng.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 139,
    "local_stt": 65,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Giao tiếp Nhà trường & Quyền Riêng tư NĐ 13)",
    "name": "Communication & Privacy Dashboard",
    "description": "Bàn kết nối gia đình và nhà trường: nơi giao lưu, nhận bản tin hoạt động trường học và thực thi các quyền bảo vệ dữ liệu cá nhân theo quy định pháp luật.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 140,
    "local_stt": 66,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Giao tiếp Nhà trường & Quyền Riêng tư NĐ 13)",
    "name": "Chat with Teacher Screen (Direct Messenger)",
    "description": "Giao diện trò chuyện trực tiếp với giáo viên chủ nhiệm: hỗ trợ trao đổi thông tin chăm sóc bé, dặn dò trang phục và chia sẻ tâm sinh lý của con trong không gian riêng tư bảo mật.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 141,
    "local_stt": 67,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Giao tiếp Nhà trường & Quyền Riêng tư NĐ 13)",
    "name": "School Newsletter Screen (Announcements & Polls)",
    "description": "Bản tin và khảo sát nhà trường: xem các thông báo chung, lịch nghỉ lễ, kế hoạch khám sức khỏe định kỳ và tham gia biểu quyết ý kiến phụ huynh trực tuyến.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 142,
    "local_stt": 68,
    "type": "mobile",
    "platform": "Mobile App",
    "subsystem": "Ứng dụng Phụ huynh (Parent Mobile App) (Giao tiếp Nhà trường & Quyền Riêng tư NĐ 13)",
    "name": "Decree 13 Erasure Form (2FA Biometric Deletion)",
    "description": "Biểu mẫu yêu cầu xóa dữ liệu sinh trắc học theo Nghị định 13/2023/NĐ-CP: cho phép cha mẹ thực hiện quyền rút lại sự đồng thuận và xóa vĩnh viễn vector khuôn mặt của trẻ khỏi hệ thống bằng xác thực OTP 2 yếu tố.",
    "role": "Phụ huynh Học sinh (Parent)",
    "role_key": "parent",
    "tags": [
      "Nghị định 13"
    ]
  },
  {
    "stt": 143,
    "local_stt": 69,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Xác thực & Bàn Điều hành Bếp ăn)",
    "name": "Kitchen Login Screen",
    "description": "Màn hình đăng nhập dành riêng cho Nhân viên Bếp bán trú và Chuyên viên Dinh dưỡng: tối ưu hóa giao diện cho máy tính bảng (Tablet) tại khu vực bếp, xác thực tài khoản chuyên trách an toàn thực phẩm.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 144,
    "local_stt": 70,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Xác thực & Bàn Điều hành Bếp ăn)",
    "name": "Catering & Kitchen Dashboard",
    "description": "Bàn điều hành trung tâm bếp ăn bán trú: hiển thị tổng số suất ăn cần chuẩn bị trong ngày dựa trên số lượng trẻ có mặt sau giờ điểm danh 08:30 sáng, số suất ăn kiêng dị ứng đặc biệt, trạng thái kho nguyên liệu và tiến độ kiểm thực 3 bước.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Chốt suất ăn 08:30"
    ]
  },
  {
    "stt": 145,
    "local_stt": 71,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Xác thực & Bàn Điều hành Bếp ăn)",
    "name": "Kitchen Staff Profile & Hygiene Credentials",
    "description": "Màn hình xem hồ sơ nhân viên bếp: thông tin cá nhân, giấy chứng nhận tập huấn vệ sinh an toàn thực phẩm (ATVSTP), thẻ xanh khám sức khỏe định kỳ và phân công vị trí trong bếp.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Chuẩn ATVSTP"
    ]
  },
  {
    "stt": 146,
    "local_stt": 72,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Xác thực & Bàn Điều hành Bếp ăn)",
    "name": "Change Password Screen",
    "description": "Màn hình đổi mật khẩu đăng nhập tài khoản bếp bán trú định kỳ theo quy định an toàn hệ thống thông tin nhà trường.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 147,
    "local_stt": 73,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Xây dựng Thực đơn Bán trú Tuần)",
    "name": "Weekly Menu Calendar View",
    "description": "Giao diện xem lịch thực đơn bán trú cả tuần: hiển thị chi tiết các món ăn theo từng bữa (Bữa sáng, Bữa trưa, Bữa xế chiều) cho từng khối lớp, kiểm tra định mức calo và tính đa dạng của món ăn.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 148,
    "local_stt": 74,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Xây dựng Thực đơn Bán trú Tuần)",
    "name": "Create & Edit Menu Screen",
    "description": "Biểu mẫu thiết lập và chỉnh sửa thực đơn tuần: chọn món mặn, món xào, món canh, tráng miệng từ ngân hàng món ăn dinh dưỡng mầm non, cân đối 4 nhóm dưỡng chất và gửi phê duyệt.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 149,
    "local_stt": 75,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Xây dựng Thực đơn Bán trú Tuần)",
    "name": "Clone Previous Menu Modal",
    "description": "Hộp thoại sao chép thực đơn tuần trước: cho phép nhân viên bếp chọn nhanh thực đơn của tuần học trước đó đã được Hiệu trưởng phê duyệt để áp dụng cho tuần mới, tiết kiệm thời gian nhập liệu.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 150,
    "local_stt": 76,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Quản lý Dị ứng & Bóc tách Suất ăn Riêng)",
    "name": "Allergy Alerts & Special Diets Screen",
    "description": "Bảng cảnh báo dị ứng thực phẩm trực quan: hiển thị danh sách nổi bật các học sinh dị ứng (dị ứng đậu phộng, hải sản, sữa bò) và hướng dẫn bóc tách khay ăn riêng biệt, gắn nhãn nhận diện tránh nhầm lẫn.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 151,
    "local_stt": 77,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Kiểm thực 3 Bước & Lưu mẫu Thức ăn 24H)",
    "name": "Three-Step Food Inspection Screen",
    "description": "Giao diện số hóa Sổ Kiểm thực 3 bước theo Quyết định 1246/QĐ-BYT: ghi nhận kết quả Bước 1 (Kiểm tra nguyên liệu tươi sống), Bước 2 (Kiểm tra trong quá trình chế biến) và Bước 3 (Kiểm tra trước khi ăn).",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Chuẩn ATVSTP"
    ]
  },
  {
    "stt": 152,
    "local_stt": 78,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Kiểm thực 3 Bước & Lưu mẫu Thức ăn 24H)",
    "name": "Food Sample Retention 24H Screen",
    "description": "Biểu mẫu quản lý lưu mẫu thức ăn 24 giờ: ghi nhận khối lượng mẫu lưu, mã niêm phong tem hũ lưu mẫu, chụp ảnh tem niêm phong và đếm ngược thời gian bảo quản trong tủ lạnh chuyên dụng từ 2°C đến 8°C.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  },
  {
    "stt": 153,
    "local_stt": 79,
    "type": "tablet",
    "platform": "Tablet",
    "subsystem": "Phân hệ Bếp Bán trú (Kitchen Staff Tablet) (Báo cáo Tiêu hao & Phân phối Suất ăn)",
    "name": "Food Consumption & Meal Distribution Report",
    "description": "Màn hình kết xuất báo cáo tiêu hao lương thực - thực phẩm và thống kê số suất ăn thực tế bàn giao cho từng lớp học, đối chiếu với số liệu điểm danh để phục vụ quyết toán tiền ăn minh bạch.",
    "role": "Nhân viên Bếp Bán trú (Kitchen Staff)",
    "role_key": "kitchen",
    "tags": [
      "Nghiệp vụ KIDPRO"
    ]
  }
];
