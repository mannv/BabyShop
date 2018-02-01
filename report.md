DEMO android
[http://35.196.93.59/babyshop.apk](http://35.196.93.59/babyshop.apk)


App gồm các màn hình
- Login
- Register
- MainScreen
	+ home tab
	+ cart tab
	+ edit profile tab
- Cart detail
	+ có thể thay đổi số lượng sản phẩm, checkout
- Flash sale list (with paginate)
- Category list product (with paginate)
- Màn hình liệt kê kết quả tìm kiếm (with paginate)
- Product detail
	+ có thể add vào giỏ hàng

App yêu cầu phải đăng ký thành viên mới được phép sử dụng
sau khi đăng ký thành viên có thể đăng nhập luôn và sử dụng App


App được build trên cấu trúc của Ignite
https://github.com/infinitered/ignite

Ignite đã hỗ trợ khá chi tiết và đầy đủ để build 1 ứng dụng trên nền tảng react native
các plugin được sử dụng trong dự án
+ i18n
+ vector-icons
+ redux
+ redux-persist
+ apisauce (tương tác với API)

một số package có sử dụng thêm
+ react-native-drawer: khi ấn vào icon menu góc trái trên ô search sẽ xuất hiện bảng điều khiển chiếm 2/3 màn hình
+ react-native-swiper: làm slide cho main screen, VD chạy các sự kiện sale off, slide ảnh sản phẩm trong màn hình product detail
+ redux-form: sử dụng cho form, login, register, edit profile


Kiến thức có được sau khi hoàn thành DEMO
- cơ bản về layout của react-native
- hiểu về props, state của react native
- sử dụng ignite để build 1 ứng dụng react native
- hiểu rõ cơ chế hoạt động của redux store, reducer, action
- sử dụng redux-persist để lưu những state mà khi ứng dụng tắt hẳn vẫn còn khi ứng đụng được bật lại thay cho AsyncStorage (code hơi bị vất)
- sử dụng đa ngôn ngữ với I18n: https://github.com/AlexanderZaytsev/react-native-i18n
- build ios, android


ISSUE:
trong quá trình thực hiện làm DEMO có gặp phải một số vấn đề

1. Modal của react-native default không ẩn thanh trạng thái của điện thoại trên android

    khác phục: https://github.com/facebook/react-native/issues/7474#issuecomment-288814366

2. Build release mode thì bị crash trên cả ios và android

    khác phục: https://github.com/facebook/react-native/issues/17348#issuecomment-353892314

3. Textinput trên android xuất hiện underline và padding
	
    khác phục: https://github.com/facebook/react-native/issues/6096
	trong styles cho thêm	
```
paddingTop: 0,
paddingBottom: 0
```
	
Textinput thêm props

```
underlineColorAndroid={'transparent'}
````

4. Redux-form trên react-native đang có issue sau khi reset thì validate không còn hoạt động nữa
ISSUE này redux-form vẫn chưa xử lý: https://github.com/erikras/redux-form/issues/2971

Giải pháp có thể sẽ sử dụng gói khác thay cho redux-form

đề cử: https://github.com/gcanti/tcomb-form-native


