# Báo cáo phụ thuộc – QuangMinh V2

## Phụ thuộc mã nguồn của tác giả gốc

- Các script của `duyvinh09/Module_IOS` cần để thực thi đã nằm trong thư mục `js/` của bạn từ V1.
- Không có `script-path` hoặc icon nào trong cấu hình **độc lập** trỏ sang repository người khác.
- 4 module riêng của đối tác (`BeautyPlus`, `Camera360`, `SODA`, `snow`) đã trỏ tới bản `js/` có sẵn trong repo bạn. **Không bảo đảm bản script trong kho bạn giống chính xác bản đang online của bên thứ ba**.
- Một số comment, nhãn mô tả hoặc đường dẫn nguồn lịch sử vẫn ghi nhận tác giả/dự án gốc; đó không phải sự phụ thuộc để tải code.

## Phụ thuộc còn lại

**Bản độc lập**
- GitHub RAW để tải file, cần duy trì repository, nhánh `main`, đường dẫn đúng và tài khoản GitHub của bạn.
- Server thực tế của các app và API để nhận dữ liệu. Nếu một app thay đổi/hủy API thì script tương ứng có thể lỗi.
- Các JavaScript có API như `api.open-meteo.com` hoặc `nominatim.openstreetmap.org` để cung cấp dữ liệu động; `translate.google.com` trong script YouTube; ảnh CDN trong script Locket có thể còn là phụ thuộc chức năng, nhưng không tải thêm code từ repo gốc.
- Các tính năng liên quan đến trạng thái thuê bao, chặn quảng cáo hoặc sửa phản hồi có thể vi phạm điều khoản dịch vụ của ứng dụng và làm lộ dữ liệu khi MITM.

**Bản Full**
- Ngoài các phụ thuộc trên, có đúng 3 đường dẫn `script-path` còn gọi Sub-Store chính thức từ `sub-store-org/Sub-Store/releases/latest/...`. Nếu Sub-Store xóa bản phát hành hoặc chuyển API, các tính năng ấy có thể lỗi. Dự án Sub-Store áp dụng AGPL-3.0.
- Rủi ro `sub.store`: dự án Sub-Store nêu rõ hostname này không phải domain họ sở hữu; tránh tự truy cập hostname đó ngoài công cụ có MITM đúng cách.

## Điều chưa xác minh

- Chưa chạy trên thiết bị có Shadowrocket, chưa xác nhận 26 script hook hoạt động hoặc đúng cú pháp trên mọi bản ứng dụng.
- Chưa kiểm tra toàn diện quyền sở hữu mã nguồn, license từng script hay sự cho phép của các đồng tác giả.
- Chưa kiểm toán bảo mật các JavaScript bị rối/obfuscation.
- Không đồng nghĩa độc lập hoàn toàn với mọi máy chủ bên ngoài.

## Tham khảo và ghi công

- Dự án gốc: https://github.com/duyvinh09/Module_IOS
- Sub-Store: https://github.com/sub-store-org/Sub-Store (AGPL-3.0)
- Bản sao cá nhân: https://github.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh
