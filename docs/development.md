# Development

Sau khi đã cài đặt thành công các phần mềm, công cụ liên quan đến việc phát triển. Chúng ta sẽ bước vào giai đoạn phát triển:

- Phát triển các dự án tương ứng trong thư mục `src`
- Tạo file `.env.development.local` cho mục đích phát triển để các biến môi trường chỉ nhận ở máy local và không bị đẩy lên git
- Cập nhật cấu hình trong file `.env.development.local` dựa theo file `.env.example`
- Nếu thêm biến môi trường đảm bảo thêm cả trong file `.env.example` và `app-env.d.ts` để các bên liên quan cùng follow
- Các câu lệnh cho phần development

```bash
# Build ứng dụng và chạy ứng dụng
yarn start

# Build ứng dụng và chạy đồng thời theo dõi sự thay đổi của source code
yarn start:dev

# Build ứng dụng
yarn build

# Chạy ứng dụng đã được build
yarn start:prod

# Type-checking và format code
yarn lint
```

> Tiếp theo [Code Rules](/src/docs/code-rules.md)
> Tiếp theo [Best Practice](/src/docs/best-practice.md)
> Tiếp theo [Deployment](/src/docs/deployment.md)
