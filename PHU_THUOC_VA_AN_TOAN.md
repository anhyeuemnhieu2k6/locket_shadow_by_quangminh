# Báo cáo phụ thuộc và an toàn

- Gói này được tạo từ file ZIP do người dùng cung cấp, không tự kiểm tra độ tin cậy hay bản quyền của tác giả.
- Repository đích: https://github.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh
- Tổng số file cấu hình/script/asset chuyển vào gói: 38 (không tính 2 tài liệu mới).
- Các URL tham chiếu repository gốc trong những file chuyển vào đã được thay bằng URL thuộc repository đích.
- Các trường author, tên script/module gốc được giữ lại để không đánh đồng bản sao với quyền tác giả.

## Các phụ thuộc chưa được tự lưu trữ

- `All_In_One.conf` và `All_In_One.sgmodule` có **3 đường dẫn script Sub-Store** từ `github.com/sub-store-org/Sub-Store/releases/latest/download/...` (đây là các bản release nằm bên ngoài). Nếu nguồn đó bị xóa hoặc thay đổi, chức năng phụ thuộc có thể lỗi.
- Các module `BeautyPlus.sgmodule`, `Camera360.sgmodule`, `SODA.sgmodule`, `snow.sgmodule` có script-path trỏ sang kho của người khác (ví dụ `vuong2023`, `ohoang7`, `chxm1023`). Không thay thế tùy tiện bằng file có cùng tên vì có thể không tương thích.
- Một số JS còn truy cập API/CDN/DNS bên thứ ba. Việc copy không giúp các dịch vụ đó hoạt động khi nhà cung cấp dừng hoạt động.
- Thiết lập HTTPS/MITM có khả năng truy cập hoặc sửa lưu lượng phản hồi. Nên rà soát script và quyền thiết bị trước khi kích hoạt.
- Các script có mô tả liên quan đến can thiệp trạng thái gói thuê bao của ứng dụng. Bạn chịu trách nhiệm chỉ sử dụng khi có quyền.

## Bản quyền

Không tìm thấy file LICENSE trong ZIP nguồn. Việc dự án gốc công khai trên GitHub **không mặc nhiên** cho phép đăng lại công khai hoặc nhận là tác giả. Nên để repository `Private` trong lúc xin phép hoặc xác định điều khoản, giữ ghi nhận tác giả gốc.

## Kiểm tra sau upload

1. Mở `https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/refs/heads/main/All_In_One.conf` và xác nhận hiện nội dung văn bản (không phải 404).
2. Mở `https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/refs/heads/main/js/youtube.response.js` và xác nhận không 404.
3. Mở `https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/refs/heads/main/assets/img/shadowrocket.webp` và xác nhận có hình.
4. Kiểm tra cấu hình bằng ứng dụng với các tính năng bạn có quyền sử dụng; gói này **chưa** được xác minh hoạt động thực tế.
