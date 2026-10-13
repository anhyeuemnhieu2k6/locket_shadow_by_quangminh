# QuangMinh V5 – phụ thuộc và bảo mật

- Script nội bộ lấy từ repo cá nhân: `anhyeuemnhieu2k6/locket_shadow_by_quangminh`.
- Bản Full/Stable còn ba đường dẫn Sub-Store từ `sub-store-org` bên ngoài. Bản Independent không có các hook Sub-Store.
- Script có thể cần API/CDN bên ngoài ngay cả khi file JS tự lưu trữ.
- Bản Full có thể chạy nhiều response handlers trên cùng endpoint RevenueCat (`VSCO`, `revenuecat`, `RevenueCatVip`). Điều này có thể tạo xung đột; chỉ dùng nếu đã đánh giá kỹ.
- Đừng bật `.conf` Full đồng thời với `.sgmodule` Full: tránh chạy script lặp.
- Quy tắc MITM có thể đọc/sửa nội dung HTTPS. Chỉ tin cậy chứng chỉ của chính bạn và không công khai chứng chỉ riêng, mật khẩu, token.
- Sản phẩm hoặc ứng dụng bên ngoài tự quản lý quyền trả phí. Script không có quyền cấp thuê bao hợp lệ, và không có bảo đảm bản Full sẽ kích hoạt Gold.
- Giữ ghi nhận tác giả, giấy phép và các điều kiện được cho phép với mã nguồn ban đầu.
