# QuangMinh All In One V5 – FULL

Bộ cấu hình Shadowrocket riêng của QuangMinh, lưu trữ tại `anhyeuemnhieu2k6/locket_shadow_by_quangminh`.

## Chọn một cấu hình

| File | Chức năng |
|---|---|
| `All_In_One.conf` | **FULL mặc định** – giữ bật toàn bộ script như bản Full, có Sub-Store |
| `All_In_One.sgmodule` | Bản module FULL; không bật đồng thời với `.conf` |
| `All_In_One_Full.conf` / `.sgmodule` | Bản sao đầy đủ dùng tên riêng |
| `All_In_One_Stable.conf` / `.sgmodule` | Bản tránh trùng RevenueCat; **tắt mặc định 2 hook VSCO và RevenueCatVip**, nhưng vẫn giữ các file JS |
| `All_In_One_Independent.conf` / `.sgmodule` | Bản ít phụ thuộc hơn: không tải ba script Sub-Store; tắt 2 hook trên |

**Phiên bản Full giữ tất cả các script được bật** theo yêu cầu. Tuy nhiên, `VSCO`, `RevenueCatVip` và Locket đều có thể xử lý cùng URL RevenueCat; bản Full có nguy cơ xung đột. Bản Stable được cung cấp chỉ để bạn tự chọn.

## Các thay đổi so với V4

- Thay `js/Locket_QuangMinh.js` bằng bản **V5** đã được kiểm tra cú pháp; giữ ngày mua 28/06/2006 như bạn đặt.
- Thay `js/Locket_Unlocked.js` bằng file người dùng cung cấp gần nhất (chủ đề và thông điệp Quang Minh).
- Khôi phục **VSCO** và **RevenueCatVip** đang bị chú thích trong V4 ở hai file FULL mặc định và hai file có hậu tố `_Full`.
- Không xóa bất kỳ script, module, hình ảnh nào đang có trong gói V4.
- Giữ các URL `script-path` về repository QuangMinh; ba URL Sub-Store vẫn từ `sub-store-org`.

## Link dùng trong Shadowrocket (sau khi bạn tải lên GitHub)

Full `.conf` (mặc định):
`https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/main/All_In_One.conf`

Stable `.conf`:
`https://raw.githubusercontent.com/anhyeuemnhieu2k6/locket_shadow_by_quangminh/main/All_In_One_Stable.conf`

## Cách upload

1. Giải nén và **upload toàn bộ nội dung** lên nhánh `main` của repo, không tải nguyên ZIP. Giữ nguyên các thư mục `js`, `modules`, `assets`.
2. Ghi đè các file trùng tên (`All_In_One.conf`, `js/Locket_QuangMinh.js`, `js/Locket_Unlocked.js`, ...). Nếu GitHub web không cho ghi đè, hãy mở từng file và sửa bằng biểu tượng bút chì hoặc dùng GitHub Desktop.
3. Nhấn **Commit changes**, mở link RAW ở trên và kiểm tra dòng đầu là `#!name=QuangMinh All In One V5 Full`.
4. Trong Shadowrocket tải lại cấu hình. **Chỉ bật một phương án**: dùng `.conf` hoặc dùng `.sgmodule`, không dùng đồng thời hai bản All In One.

## Giới hạn và an toàn

Kiểm tra tĩnh JavaScript/đường dẫn không phải xác minh chạy trên iOS. Một số script dùng HTTPS MITM, làm thay đổi dữ liệu ứng dụng và có thể xử lý dữ liệu nhạy cảm. Chỉ cài đặt những thành phần bạn đã đánh giá. Không thể bảo đảm kích hoạt quyền thuê bao trên dịch vụ của bên thứ ba. Bản Full còn phụ thuộc ba script Sub-Store từ bên ngoài. Tên người quản lý repository không thay thế quyền tác giả của các thành phần khác; cần tuân thủ giấy phép/giấy phép riêng từ tác giả.

Xem `BAO_CAO_V5.txt`, `KIEM_TRA.md` và `PHU_THUOC_VA_AN_TOAN.md` để biết chi tiết.
