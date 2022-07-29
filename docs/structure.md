# Cấu trúc dự án

Fullnode service

## Cấu trúc dự án

- Các modules được đặt trong thư mục `src`
- Các `environment` của từng service được cấu hình bởi `dotenv`
- Các file environment sẽ tự động nhận theo `NODE_ENV` cụ thể như sau
  - `.env` : Luôn luôn nhận giá trị ở file này
  - `.env.development`, `.env.development.local` : Sử dụng khi development `NODE_ENV=development`
  - `.env.production`, `.env.production.local` : Sử dụng khi `NODE_ENV=production`
- Thứ tự ưu tiên của các file sẽ là `.env.*.local` -> `.env.{NODE_ENV}` -> `.env`
- Các file `.env.*.local` sẽ được ignore khỏi source code.
- Các modules được đặt trong thư mục `src/modules`
- Module phát triển tuân thủ theo concept của NestJS

### Cấu trúc của 1 module

```txt
.
├── modules
│ ├── module-name
│    ├── dataloaders
│    ├── dto
│    ├── entities
│    ├── repositories
│    ├── resolvers
│    ├── validators
│    ├── services
│    ├── module-name.constants.ts
│    ├── module-name.interface.ts
│    └── module-name.module.ts
```

> Tiếp theo [Phát triển tính năng](/docs/development.md)
