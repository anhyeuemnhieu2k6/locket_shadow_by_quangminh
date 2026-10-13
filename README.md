# QuangMinh All In One V4 – FULL

**Kho riêng:** <https://github.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh>  
**Người duy trì bản tùy biến:** QuangMinh. Bộ mã được tùy biến từ `duyvinh09/Module_IOS` và những thành phần khác. Việc đổi tên không làm thay đổi tác quyền của mã nguồn.

## Bản V4 mặc định

- `All_In_One.conf` — **FULL** Shadowrocket config (bao gồm 3 hook Sub-Store chính thức).
- `All_In_One.sgmodule` — **FULL** dạng module Shadowrocket.
- `All_In_One_Full.conf` và `All_In_One_Full.sgmodule` — tên thay thế, nội dung tính năng tương đương các file Full ở trên.
- `All_In_One_Independent.conf` và `All_In_One_Independent.sgmodule` — không dùng Sub-Store; ít phụ thuộc ngoài hơn.
- `js/`, `modules/`, `assets/` — bộ tài nguyên đi kèm từ V3.

## Những thay đổi V4

1. Tắt mặc định các **hook script** `VSCO` và `RevenueCatVip` trong cả 6 file cấu hình/module bằng dấu `#` trước dòng script. **File JavaScript vẫn giữ nguyên** để không làm mất dữ liệu; chỉ không tự chạy khi dùng cấu hình mới.
2. Giữ `revenuecat`, `deleteHeader`, `locket_rc` và đường dẫn script tại repo QuangMinh.
3. **Đặt bản FULL làm file `All_In_One.conf` mặc định**, để đường dẫn RAW trước kia vẫn dùng được sau khi cập nhật.
4. Giữ Sub-Store trong bản FULL (3 đường dẫn chính thức ở GitHub `sub-store-org`); không tuyên bố hoàn toàn độc lập khỏi tài nguyên bên ngoài.
5. Không sửa logic JavaScript, không thay đổi các hook khác. Tên cấu hình hiển thị V4.

Việc một ứng dụng hiển thị quyền thuê bao vẫn phụ thuộc xác minh của ứng dụng/máy chủ; kết quả thao tác thủ công không phải bằng chứng đảm bảo hoạt động của V4 về sau. Các script MITM có thể truy cập dữ liệu nhạy cảm. Chỉ bật với domain và tính năng đã đánh giá an toàn.

## Link RAW cho Shadowrocket (sau khi commit)

**Bản Full mặc định:**

`https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/main/All_In_One.conf`

**Module Full:**

`https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/main/All_In_One.sgmodule`

## Cách tải lên GitHub

1. Sao lưu bản cũ đề phòng cần quay lại.
2. Giải nén `QuangMinh_Full_V4.zip` trên máy.
3. Mở repo GitHub → **Add file → Upload files**. Kéo **toàn bộ tệp và thư mục bên trong**, không chỉ ZIP; giữ đúng vị trí gốc cho `js/`, `modules/`, `assets/`.
4. Xác nhận GitHub hiển thị file thay đổi → **Commit changes**. Nếu giao diện trình duyệt không cho ghi đè file trùng tên, dùng GitHub Desktop để đồng bộ thay vì chỉ tải một phần.
5. Mở URL RAW trên; kiểm tra đầu file hiển thị `#!name=QuangMinh All In One V4`, có 3 Sub-Store script và hai dòng `# V4 DISABLED`.
6. Trong Shadowrocket: tắt module All In One nếu đang chọn `All_In_One.conf` (tránh chạy trùng), tải lại cấu hình, bật đúng một nguồn. Nếu muốn dùng module, chọn `default.conf` và bật duy nhất module phù hợp.

**Quan trọng:** Các script còn lại vẫn cần dịch vụ/API của bên thứ ba. Kho này không bảo đảm quyền sử dụng hay khả năng hoạt động của các dịch vụ trả phí. Xem `PHU_THUOC_VA_AN_TOAN.md` và `KIEM_TRA.md`.
