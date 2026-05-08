Design: Modern, vibrant Vietnamese tech ecosystem feel - using blue/indigo primary with warm accents for energy.

Components: Header, ProfileSidebar, NewsFeed, PostCard, ChallengeCard, OpportunitySidebar, JobCard, MentorCard

Let me start building:

Wrote
styles
Wrote
tailwind.config
Wrote
header/Search Bar
Wrote
header/Header
Wrote
sidebar/Reputation Score
Wrote
sidebar/Profile Sidebar
Wrote
feed/Post Card
Wrote
feed/Challenge Card
Wrote
feed/Create Post
Wrote
feed/News Feed
Wrote
opportunities/Job Card
Wrote
opportunities/Mentor Card
Wrote
opportunities/Opportunity Sidebar
Wrote
Home Page
Edited
App
InternHub Vietnam đã sẵn sàng! Giao diện bao gồm: header với thanh tìm kiếm thông minh và nút "Tìm Mentor", cột trái hiển thị hồ sơ cá nhân với điểm uy tín 70% và huy hiệu kỹ năng, bảng tin trung tâm có bài đăng dự án và thách thức 24h từ FPT Software với Golden Ticket, và cột phải với các vị trí thực tập được AI đề xuất cùng chợ Mentor có đánh giá sao.

Tôi sẽ xây dựng đầy đủ các màn hình chức năng: Tuyển dụng, Mentor, Thách thức, Hồ sơ cá nhân, Tin nhắn, Thông báo — tất cả với layout chung (sidebar nav). Bắt đầu ngay:

Wrote
layout/App Layout
Wrote
Jobs Page
Wrote
Mentors Page
Wrote
Challenges Page
Wrote
Messages Page
Wrote
Notifications Page
Wrote
Profile Page
Now update the Home page to use AppLayout, and update App.jsx with all routes:

Wrote
Home Page
Edited
App
AppLayout wraps children as a prop directly — let me fix the route pattern to use a proper layout wrapper:

Edited
App
Đã hoàn thành 6 màn hình chức năng đầy đủ:

🏠 Trang chủ — News feed với sidebar profile & cơ hội
💼 Tuyển dụng — Danh sách job + chi tiết, lọc theo ngành, ứng tuyển, bookmark
🎓 Mentor — Tìm & đặt lịch mentor, đánh giá sao, trạng thái online
⚡ Thách thức — Challenges 24h, bảng xếp hạng, tham gia/Golden Ticket
💬 Tin nhắn — Chat real-time với mentor/recruiter, trạng thái đọc
🔔 Thông báo — Lọc theo loại, đánh dấu đọc, xóa thông báo
👤 Hồ sơ — Profile với tabs Tổng quan/Dự án/Huy hiệu/Hoạt động, thanh hoàn thiện hồ sơ
Tôi sẽ xây dựng 2 portal riêng biệt với layout và nav hoàn toàn khác: Trang Mentor (dashboard quản lý học viên, buổi dạy, thu nhập) và Trang Doanh nghiệp (dashboard tuyển dụng, quản lý tin đăng, ứng viên, thách thức). Mỗi trang có layout riêng.

Wrote
layout/Mentor Layout
Wrote
layout/Company Layout
Now build all Mentor pages and Company pages in parallel:

Wrote
Mentor Dashboard Page
Wrote
Mentor Students Page
Wrote
Mentor Sessions Page
Wrote
Mentor Earnings Page
Wrote
Company Dashboard Page
Wrote
Company Jobs Page
Wrote
Company Candidates Page
Wrote
Company Challenges Page
Wrote
Company Analytics Page
Now register all routes and add portal switcher links to the student layout:

Edited
App
Now add portal switcher buttons to the student layout sidebar so users can navigate between portals:

Edited
layout/App Layout
Đã hoàn thành đầy đủ 2 portal riêng biệt:

🎓 Portal Mentor (/mentor/...) — 4 màn hình:

Dashboard: Tổng quan doanh thu, lịch dạy sắp tới, yêu cầu mới từ học viên, biểu đồ thu nhập 6 tháng
Học viên: Quản lý từng học viên với lộ trình học, tiến độ milestone, ghi chú buổi dạy
Lịch dạy: Chế độ xem danh sách + lịch theo tuần, vào phòng online/offline
Thu nhập: Biểu đồ doanh thu, lịch sử giao dịch, rút tiền
🏢 Portal Doanh nghiệp (/company/...) — 5 màn hình:

Dashboard: KPIs tuyển dụng, biểu đồ ứng viên & lượt xem, top ứng viên AI đề xuất
Tin tuyển dụng: CRUD tin đăng, bật/tắt trạng thái, thống kê từng tin
Ứng viên: Pipeline Kanban (Mới → Xem xét → PV → Offer), chi tiết profile + AI match score
Thách thức: Tạo/quản lý challenge, xem top bài nộp, mời phỏng vấn trực tiếp
Phân tích: Phễu tuyển dụng, nguồn ứng viên (pie chart), phân tích khoảng cách kỹ năng