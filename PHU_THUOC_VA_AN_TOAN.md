# Phụ thuộc và an toàn – QuangMinh V4

- Repo gốc của tác giả: các đường dẫn JavaScript được đưa về GitHub riêng `anhyeuemnhieu2k6/locket_shadow_by_quangminh` trong bản V3 trước đó.
- Bản Full vẫn tải 3 script Sub-Store từ các bản phát hành chính thức trên GitHub `sub-store-org`. Nếu bên đó thay đổi/xóa bản phát hành hoặc người dùng mất mạng, tính năng Sub-Store có thể không chạy.
- Các script còn lại có thể gọi API/CDN của ứng dụng bên ngoài. Không thể bảo đảm độc lập hoàn toàn khỏi bên thứ ba.
- V4 chỉ vô hiệu hai hook trùng miền RevenueCat bằng dấu chú thích trong cấu hình, không thay đổi nội dung hai file JS `VSCO.js` và `revenuecat.js`.
- Giải mã HTTPS (MITM) có thể đọc hoặc sửa nội dung mạng từ các hostname được cấu hình. Không nên bật đồng thời file `.conf` và module `.sgmodule` Full; không cài chứng chỉ không rõ nguồn.
- Không nhập mật khẩu/chứng chỉ/khóa riêng vào repository công khai.
- Không thể đảm bảo trạng thái Gold hoặc quyền thuê bao trả phí do ứng dụng và máy chủ quản lý.
