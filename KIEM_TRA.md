# QuangMinh V5 – kết quả kiểm tra

- Bản V5 dựa trên chính V4 đã được tạo trong cuộc trò chuyện; hai script Locket lấy từ những file người dùng vừa cung cấp.
- Toàn bộ file JavaScript được kiểm tra cú pháp với `node --check` (nếu có Node.js).
- Từng đường dẫn `script-path` nội bộ trong các file cấu hình được đối chiếu với file thật tại thư mục tương ứng trong gói.
- Kiểm tra tên script, trạng thái active/comment, Sub-Store, header tự tham chiếu và toàn vẹn ZIP.
- Có kiểm tra đầu vào/đầu ra JavaScript mô phỏng cho riêng script Locket V5; không có kiểm thử thực tế bằng Shadowrocket, không xác minh kết quả Gold hay quyền thuê bao trên máy chủ.
- Bản Full **có các rule chồng miền RevenueCat** do người dùng yêu cầu giữ tất cả; bản Stable để sử dụng nếu cần tránh trùng.
