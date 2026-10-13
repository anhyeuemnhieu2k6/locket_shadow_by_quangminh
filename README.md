# QuangMinh – iOS / Shadowrocket Configuration

**Chủ repository / người duy trì bản chỉnh sửa:** QuangMinh (`anhyeuemnhieu2k6`).

**Đây là bản tùy biến / sao lưu độc lập đối với các script đi kèm**, không phải khẳng định toàn bộ mã nguồn được QuangMinh viết từ đầu. Bản gốc liên quan đến dự án `duyvinh09/Module_IOS`, do Đinh Duy Vinh tổng hợp. Người dùng cho biết đã được tác giả gốc cho phép tùy biến. Các thành phần của bên thứ ba có điều khoản riêng.

## Chọn cấu hình

| File | Loại | Phụ thuộc bên ngoài để tải script |
|---|---|---|
| `All_In_One.conf` | **Khuyên dùng**: cấu hình Shadowrocket độc lập hơn | Không còn `script-path` gọi kho của người khác |
| `All_In_One.sgmodule` | Module độc lập hơn | Không còn `script-path` gọi kho người khác |
| `All_In_One_Full.conf` | Bản đầy đủ với Sub-Store | Còn 3 `script-path` tới Sub-Store chính thức |
| `All_In_One_Full.sgmodule` | Module đầy đủ với Sub-Store | Còn 3 `script-path` tới Sub-Store chính thức |

## Đường dẫn RAW

- Cấu hình độc lập: `https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/refs/heads/main/All_In_One.conf`
- Cấu hình đầy đủ: `https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/refs/heads/main/All_In_One_Full.conf`
- Module độc lập: `https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/refs/heads/main/All_In_One.sgmodule`
- Module đầy đủ: `https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/refs/heads/main/All_In_One_Full.sgmodule`

Những đường dẫn này hoạt động **sau khi bạn upload toàn bộ nội dung của gói lên nhánh `main`**, giữ đúng cấu trúc thư mục.

## Những thay đổi so với bản cũ

- Cập nhật tên cấu hình và người duy trì thành QuangMinh.
- 4 module độc lập (`BeautyPlus`, `Camera360`, `SODA`, `snow`) tải file `.js` từ **repository của bạn** thay vì kho của bên khác. Đây là các script có sẵn trong bản sao do bạn cung cấp, **chưa được chứng minh tương đương hoàn toàn** với các script bên ngoài trước kia.
- Icon Camera360 dùng ảnh ở `assets/img/` của bạn; sửa icon PNG có phần mở rộng chuẩn, giữ `.webp` cũ để tương thích.
- 2 cấu hình mặc định bỏ 3 hook Sub-Store; 2 bản `Full` vẫn giữ Sub-Store chính thức.
- Chỉnh template `engine={{{script}}}` thành `engine=jsc` cho YouTube, sửa định dạng hook VSCO/CamScanner rõ ràng bị thiếu trường / dư khoảng trắng, và bỏ mục MITM trống. Những mục khác chưa được khẳng định hợp lệ trên mọi phiên bản Shadowrocket.
- Không sửa logic JavaScript của bản gốc, không thêm máy chủ/API thu thập dữ liệu.

## Giới hạn quan trọng

1. **Độc lập với repository gốc** ≠ độc lập Internet hoặc ứng dụng khác. Shadowrocket, GitHub RAW, API của ứng dụng, CDN, DNS, Google Translate, Open-Meteo, OpenStreetMap và các máy chủ bạn dùng vẫn là những bên thứ ba.
2. Mọi file JS / module ở đây chưa được kiểm thử trực tiếp trên iPhone. Tính năng có thể ngừng khi API ứng dụng thay đổi, dù GitHub gốc còn hay mất.
3. Các script phản hồi HTTPS có thể đọc/sửa dữ liệu ứng dụng, một số có liên quan tới trạng thái đăng ký/trả phí; chỉ sử dụng trong phạm vi được phép. **Không bật MITM hàng loạt nếu chưa hiểu rủi ro.**
4. Tác giả Sub-Store phát hành dự án theo giấy phép AGPL-3.0. Vì vậy gói này không tự sao chép/bundled 3 file release Sub-Store; bản Full gọi bản chính thức. Nếu cần tự host Sub-Store, phải bảo đảm tuân thủ giấy phép và cung cấp source tương ứng.
5. Cần xem `PHU_THUOC_VA_AN_TOAN.md` và `KIEM_TRA.md` để kiểm tra an toàn/sự khác biệt.

## Tải lên GitHub không cần lệnh

1. Giải nén `QuangMinh_Independent_V3.zip`.
2. Mở repository: <https://github.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh>.
3. Chọn **Add file → Upload files**; kéo **toàn bộ nội dung bên trong** thư mục đã giải nén vào, giữ các folder `js`, `modules`, `assets`.
4. Nếu GitHub cảnh báo trùng tên (`README.md`, `All_In_One.conf`...), đó là các file cần cập nhật. Chọn **Commit changes**; đừng xóa cả repository.
5. Mở đường dẫn RAW cấu hình sau commit và kiểm tra.

Nếu browser upload không giữ đúng cấu trúc thư mục, dùng GitHub Desktop hoặc Git để commit những thay đổi này.
