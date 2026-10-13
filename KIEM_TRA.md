# Báo cáo kiểm tra tĩnh – QuangMinh V3

Được tạo tự động; **không** phải kiểm thử hoạt động trong Shadowrocket.

| Tệp | Tổng script-path | Script-path ở repo ngoài | Đường dẫn nội bộ thiếu |
|---|---:|---:|---:|
| `All_In_One_Full.conf` | 25 | 3 | 0 |
| `All_In_One.conf` | 22 | 0 | 0 |
| `All_In_One_Full.sgmodule` | 25 | 3 | 0 |
| `All_In_One.sgmodule` | 22 | 0 | 0 |
| `modules/Locket_QuangMinh.sgmodule` | 2 | 0 | 0 |
| `modules/BeautyPlus.sgmodule` | 1 | 0 | 0 |
| `modules/SODA.sgmodule` | 1 | 0 | 0 |
| `modules/ios-location-spoofer.sgmodule` | 1 | 0 | 0 |
| `modules/itunes.sgmodule` | 1 | 0 | 0 |
| `modules/Camera360.sgmodule` | 1 | 0 | 0 |
| `modules/snow.sgmodule` | 1 | 0 | 0 |

- Tất cả 27 tệp `.js` hiện có kiểm tra cú pháp bằng `node --check` thành công; không có nghĩa sẽ chạy đúng trong iOS.
- Chưa thực hiện thử MITM, import module hoặc chạy dữ liệu thực tế.
- Khi cập nhật trên GitHub: các file mới có đường dẫn RAW hợp lệ **chỉ sau khi commit**.
