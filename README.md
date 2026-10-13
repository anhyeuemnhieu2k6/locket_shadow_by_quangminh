# QuangMinh All In One — V6 Isolated

Repo: https://github.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh

Bản dựa trên V5 No VSCO. Toàn bộ thư mục `js/`, `modules/`, `assets/` được giữ lại.

## Các cấu hình

- `All_In_One.conf`: bản Full, Sub-Store và RevenueCatVip được giữ; loại bỏ quy tắc VSCO theo yêu cầu. Hai script RevenueCat được giới hạn theo `User-Agent` để tránh xử lý chéo.
- `All_In_One_Full.conf`: tương tự Full.
- `All_In_One_Stable.conf`: bản thận trọng hơn, không bật RevenueCatVip; giữ Locket.
- `All_In_One_Independent.conf`: loại các đường dẫn Sub-Store ngoài repository (không còn chức năng Sub-Store).
- Các file `.sgmodule` là phiên bản module tương ứng. **Không bật đồng thời All_In_One.conf và All_In_One.sgmodule**.

## Sửa thực tế V6

1. `js/Locket_QuangMinh.js`: chỉ xử lý phản hồi nếu `User-Agent` chứa `Locket`, còn lại `$done({})`.
2. `js/revenuecat.js`: bỏ mục `Locket` khỏi mapping; chỉ sửa phản hồi khi `User-Agent` khớp một ứng dụng còn trong mapping. Không khớp → `$done({})`.
3. Không thay đổi logic thuê bao/dữ liệu ngày tháng trong script Locket, không chỉnh các script khác.
4. VSCO vẫn không có quy tắc chạy trong các profile; `js/VSCO.js` là file lưu trữ không được cấu hình gọi.

## Giới hạn

Không có bằng chứng app trên iPhone luôn gửi `User-Agent` chứa đúng tên ứng dụng. Nếu tên bị thiếu/khác, V6 chủ ý không sửa phản hồi để tránh phá hỏng ứng dụng khác. Các quy tắc URL của RevenueCat vẫn trùng nhau về mặt kỹ thuật nhưng **script được kiểm tra và bỏ qua theo ứng dụng**. Không thể phân biệt các ứng dụng dùng cùng API chỉ từ tên miền.

Các script có thể can thiệp lưu lượng HTTPS và trạng thái thuê bao ứng dụng; chỉ dùng với kết nối và quyền sử dụng phù hợp. Chưa kiểm thử trên Shadowrocket/iPhone; trạng thái thuê bao do dịch vụ xác nhận không được bảo đảm.

Nếu tác giả gốc xóa repository, file đã sao lưu riêng vẫn còn, nhưng một số dịch vụ/API ngoài GitHub vẫn cần kết nối.
