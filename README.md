# InternHub Vietnam

Frontend application built with React, Vite, Tailwind CSS, and Base44 SDK.

## Giới thiệu

`InternHub Vietnam` là một nền tảng đa portal cho:
- Sinh viên/ứng viên tìm việc, tìm mentor và tham gia challenge
- Mentor quản lý học viên, buổi học và thu nhập
- Doanh nghiệp quản lý tuyển dụng, ứng viên, challenge và phân tích

Ứng dụng được thiết kế để chạy trên Base44 và tích hợp với hệ thống auth của Base44.

## Tính năng chính

- Layout student với trang chủ, việc làm, mentor, thử thách, tin nhắn, thông báo, hồ sơ
- Portal Mentor với dashboard, học viên, lịch, thu nhập
- Portal Doanh nghiệp với dashboard, tin tuyển dụng, ứng viên, challenge, analytics
- Hệ thống auth Base44 và kiểm tra trạng thái user
- UI responsive với sidebar mobile và header cố định

## Cài đặt nhanh

```bash
npm install
npm run dev
```

Mở trình duyệt theo địa chỉ local do Vite cung cấp.

## Biến môi trường

Tạo file `.env.local` với giá trị:

```env
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=your_backend_url
VITE_BASE44_FUNCTIONS_VERSION=your_functions_version
```

## Các lệnh thường dùng

- `npm run dev` - khởi động dev server
- `npm run build` - build production
- `npm run preview` - chạy preview bản build
- `npm run lint` - kiểm tra eslint
- `npm run lint:fix` - sửa lỗi eslint tự động
- `npm run typecheck` - kiểm tra type bằng `jsconfig.json`

## Cấu trúc chính

- `src/App.jsx` - cấu hình route và layout
- `src/main.jsx` - render app vào DOM
- `src/components/layout/` - `AppLayout`, `MentorLayout`, `CompanyLayout`
- `src/pages/` - từng trang ứng dụng
- `src/api/base44Client.js` - khởi tạo Base44 client
- `src/lib/AuthContext.jsx` - auth provider và trạng thái auth
- `src/lib/app-params.js` - lấy param từ URL hoặc env
- `src/components/ui/` - component UI chung

## Tài liệu chi tiết

Xem thêm hướng dẫn và kiến trúc dự án tại `DOCUMENTATION.md`.

## Links

- Base44 docs: https://docs.base44.com/Integrations/Using-GitHub
- Base44 support: https://app.base44.com/support
