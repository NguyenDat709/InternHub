# InternHub Vietnam - Documentation

## Tổng quan dự án

`InternHub Vietnam` là một ứng dụng frontend React + Vite được xây dựng cho hệ sinh thái nội bộ với:
- Trang sinh viên chính (student app)
- Portal Mentor
- Portal Doanh nghiệp
- Xác thực và cấu hình dựa trên Base44 SDK
- Giao diện UI tùy chỉnh với Tailwind CSS và Radix UI

Dự án sử dụng `react-router-dom` để quản lý điều hướng và `@tanstack/react-query` cho các truy vấn dữ liệu.

## Kiến trúc dự án

### Thư mục chính

- `src/`
  - `components/` - các component UI tái sử dụng và layout
    - `header/` - `Header`, `SearchBar`
    - `feed/` - `NewsFeed`, `PostCard`, `ChallengeCard`, `CreatePost`
    - `sidebar/` - `ProfileSidebar`, `ReputationScore`
    - `oppotunities/` - `JobCard`, `MentorCard`, `OpportunitySidebar`
    - `layout/` - layout chính cho Student, Mentor, Company
    - `ui/` - component giao diện cơ bản (button, input, dialog, badge, toast, v.v.)
  - `hooks/` - hook tiện ích nội bộ
  - `lib/` - thiết lập chung và helper
    - `AuthContext.jsx` - auth provider và kiểm tra trạng thái đăng nhập
    - `query-client.js` - cấu hình React Query
    - `app-params.js` - lấy tham số Base44 + env
    - `PageNotFound.jsx` - trang 404
  - `api/` - cấu hình client Base44
    - `base44Client.js`
  - `pages/` - các trang ứng dụng chính
    - `mentor/` - portal Mentor
    - `company/` - portal Doanh nghiệp

## Lộ trình chức năng

### Trang Student (ứng dụng chính)

- `/` - Trang chủ
- `/jobs` - Tuyển dụng
- `/mentors` - Mentor
- `/challenges` - Thách thức
- `/messages` - Tin nhắn
- `/notifications` - Thông báo
- `/profile` - Hồ sơ cá nhân

### Portal Mentor

- `/mentor/dashboard` - Dashboard Mentor
- `/mentor/students` - Quản lý học viên
- `/mentor/sessions` - Lịch dạy
- `/mentor/earnings` - Thu nhập

### Portal Doanh nghiệp

- `/company/dashboard` - Dashboard Doanh nghiệp
- `/company/jobs` - Tin tuyển dụng
- `/company/candidates` - Ứng viên
- `/company/challenges` - Thách thức
- `/company/analytics` - Phân tích

## Luồng điều hướng và layout

### `src/App.jsx`

- Sử dụng `BrowserRouter` và `Routes` để render các trang.
- Mỗi route chính được bao quanh bằng layout phù hợp:
  - `AppLayout` cho ứng dụng student
  - `MentorLayout` cho portal mentor
  - `CompanyLayout` cho portal doanh nghiệp
- Route mặc định `*` chuyển đến `PageNotFound`.

### Layout

- `AppLayout.jsx`
  - Header với logo, thanh tìm kiếm, icon thông báo và avatar.
  - Sidebar điều hướng trang student.
  - Nút chuyển portal Mentor / Doanh nghiệp.

- `MentorLayout.jsx` và `CompanyLayout.jsx`
  - Header chung với nhãn portal rõ ràng.
  - Sidebar điều hướng chuyên dụng cho từng portal.
  - Link quay lại trang student.

## Tích hợp Base44

### `src/api/base44Client.js`

- Tạo `base44` client bằng `createClient` từ `@base44/sdk`.
- Các tham số cấu hình lấy từ `src/lib/app-params.js`.

### `src/lib/app-params.js`

- Đọc tham số từ URL query string hoặc `localStorage`.
- Hỗ trợ các giá trị mặc định từ env:
  - `VITE_BASE44_APP_ID`
  - `VITE_BASE44_APP_BASE_URL`
  - `VITE_BASE44_FUNCTIONS_VERSION`

### `src/lib/AuthContext.jsx`

- Kiểm tra trạng thái app và auth:
  - Lấy public settings từ Base44 API
  - Kiểm tra token và trạng thái đăng nhập user
  - Xử lý lỗi `auth_required` và `user_not_registered`
- Cung cấp context auth cho toàn bộ ứng dụng.

## Công nghệ chính

- React 18
- Vite
- Tailwind CSS
- Radix UI
- React Router DOM
- React Query
- Base44 SDK
- TypeScript checked via `jsconfig.json`
- `@stripe/react-stripe-js`, `react-leaflet`, `react-quill`, `recharts`...

## Cấu hình môi trường

Tạo file `.env.local` hoặc cấu hình biến env trong môi trường dev.

### Biến môi trường cần thiết

- `VITE_BASE44_APP_ID`
- `VITE_BASE44_APP_BASE_URL`
- `VITE_BASE44_FUNCTIONS_VERSION` (nếu cần)

## Chạy dự án

```bash
npm install
npm run dev
```

Các script khác:

- `npm run build` - build sản phẩm
- `npm run preview` - preview build
- `npm run lint` - chạy ESLint
- `npm run lint:fix` - tự sửa ESLint
- `npm run typecheck` - kiểm tra type với `jsconfig.json`

## Mở rộng và phát triển

### Thêm route mới

1. Tạo page mới trong `src/pages/` hoặc thư mục portal tương ứng.
2. Import page vào `src/App.jsx`.
3. Thêm route mới vào `Routes` với layout phù hợp.

### Thêm component UI

- Sử dụng `src/components/ui/` để tái sử dụng các primitives.
- Nếu cần component mới, thêm vào `src/components/ui/` hoặc thư mục cụ thể.

### Tích hợp API

- Nếu cần gọi API ngoài Base44, nên tạo file trong `src/api/`.
- Sử dụng `@tanstack/react-query` và `queryClientInstance` từ `src/lib/query-client.js`.

## Ghi chú thêm

- UI đã được thiết kế theo tông màu xanh lam/indigo với điểm nhấn ấm, phù hợp phong cách công nghệ Việt Nam.
- `AppLayout`, `MentorLayout`, `CompanyLayout` đều hỗ trợ menu mobile.
- `ProtectedRoute.jsx` hiện tại là một component helper có thể sử dụng để mở rộng cấu hình auth.

---

## Tổng kết

`InternHub Vietnam` là một ứng dụng frontend đa portal, dễ mở rộng và đã sẵn sàng để phát triển thêm tính năng tuyển dụng, mentor và doanh nghiệp. Tài liệu này mô tả cấu trúc chính và cách mở rộng dự án trên nền tảng hiện có.
