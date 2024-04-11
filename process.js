const fs = require('fs');
const data = [
    {
        "comment": "Từ nay đến hết 31/07/2024, khi mua 04 hộp (01 lốc) Thức uống Sữa Lúa Mạch TH true CHOCOMALT MISTORI 110 ml và 180 ml sẽ được tặng 01 thẻ sticker. Nhập mã quay thưởng in trên thẻ lên website https://khuyenmaimistori.thmilk.vn để tham gia Chương trình Quay thưởng và Tích thẻ đổi quà online với cơ hội trúng hàng chục ngàn quà tặng hấp dẫn:",
        "from": "Phạm Thủy",
        "time": "Cách đây TH true CHOCOMALT MISTORI | Săn thẻ sticker, Nhận quà đỉnh chóp - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true CHOCOMALT MISTORI | Săn thẻ sticker, Nhận quà đỉnh chóp",
        "from": "TH true MILK",
        "time": "Cách đây 1 ngày - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 ngày",
        "from": "Phạm Thủy",
        "time": "Cách đây 23 giờ - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "TH true MILK",
        "time": "Cách đây Ảnh từ bài viết của TH true MILK - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "23 giờ",
        "from": "Mai Mai",
        "time": "Cách đây 1 ngày - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ưu đãi hấp dẫn từ Kem TH true ICE CREAM áp dụng khi mua hàng trực tiếp tại hệ thống cửa hàng TH true mart từ 5/4 – 14/4 như sau:- Tặng 01 túi giữ nhiệt hoặc túi mỹ phẩm khi mua 3 kem cùng loại (Kem Sandwich/ Kem Hộp 50 g/ Kem Ốc Quế) (áp dụng cửa hàng TH true mart khu vực Miền Bắc, Miền Trung)- Tặng 01 chai trà TH true TEA khi mua 2 kem ốc quế Dâu – Vanilla (áp dụng TH true mart khu vực Miền Nam)",
        "from": "TH true MILK",
        "time": "Cách đây 23 giờ - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ảnh từ bài viết của TH true MILK",
        "from": "Kim Phương Anh",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "chi nhánh nam định có chương trình tặng túi ko ak",
        "from": "TH true MILK",
        "time": "Cách đây 5 ngày - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 ngày",
        "from": "Hoàng Hoa",
        "time": "Cách đây 3 ngày - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, chương trình khuyến mãi tặng 01 túi giữ nhiệt hoặc túi mỹ phẩm khi mua 3 kem cùng loại (Kem Sandwich/ Kem Hộp 50 g/ Kem Ốc Quế) được áp dụng tại cửa hàng TH true mart khu vực Miền Bắc, Miền Trung bạn nhé. Bạn xem danh sách cửa hàng TH true ma… Xem thêm",
        "from": "TH true MILK",
        "time": "Cách đây Thức uống Sữa Lúa Mạch TH true CHOCOMALT MISTORI - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "23 giờ",
        "from": "Nhi Phạm",
        "time": "Cách đây 2 ngày - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Bánh Red Velvet - Gửi yêu thương từ trái tim ",
        "from": "TH true MILK",
        "time": "Cách đây 1 ngày - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Lê Ngọc Banikha",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bơ Lạt của TH dùng được cho bé 8 tháng tuổi được không ạ",
        "from": "TH true MILK",
        "time": "Cách đây 2 ngày - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 ngày",
        "from": "NGUYỄN VĂN QUYẾT",
        "time": "Cách đây 1 ngày - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, hiện tại các sản phẩm sữa của TH dành cho các bé từ 01 tuổi trở lên. Đối với các bé dưới 01 tuổi, có lưu ý đặc biệt về chế độ dinh dưỡng và chăm sóc sức khoẻ, quý khách hàng vui lòng tham vấn bác sĩ / cán bộ y tế để được tư vấn và hướng dẫn c… Xem thêm",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "3 ngày",
        "from": "Tú Như Tắm Bé",
        "time": "Cách đây TH True Mart - Sữa Từ Thiên Nhiên | Đặt Món & Giao ship tận nơi | shopeefood.vn - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Từ nay đến hết 31/07/2024, khi mua 04 hộp (01 lốc) Thức uống Sữa Lúa Mạch TH true CHOCOMALT MISTORI 110 ml và 180 ml sẽ được tặng 01 thẻ sticker. Nhập mã quay thưởng in trên thẻ lên website https://khuyenmaimistori.thmilk.vn để tham gia Chương trình Quay thưởng và Tích thẻ đổi quà online với cơ hội trúng hàng chục ngàn quà tặng hấp dẫn:",
        "from": "TH true MILK",
        "time": "Cách đây 2 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thức uống Sữa Lúa Mạch TH true CHOCOMALT MISTORI",
        "from": "Ngoc Anh",
        "time": "Cách đây 2 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Có ship k shop ơi",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "2 ngày",
        "from": "Nguyễn Tâm",
        "time": "Cách đây 3 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn có thể đặt mua online qua website https://www.thtruemart.vn/, ứng dụng THeLIFE hoặc các ứng dụng giao hàng thực phẩm để được giao hàng tận nơi nhé:► ShopeeFood: http://bit.ly/THtruemart-ShopeeFood► Grabmart: http://bit.ly/THtruemart-Gra… Xem thêm",
        "from": "TH true MILK",
        "time": "Cách đây 2 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 ngày",
        "from": "Tuyêt Vo",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Ngon lành, đậm vị với Bánh Tart mặn cùng TH true CHEESE!",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Nguyễn AnhMari",
        "time": "Cách đây 4 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Pho mai que giá tn ạ?",
        "from": "TH true MILK",
        "time": "Cách đây 4 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "2 ngày",
        "from": "Bình Nguyễn",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Phomat Que Mozzarella có giá 39.300 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thmilk.vn/san-pham/?csrt=13340620935879583027",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 ngày",
        "from": "Dương Linh",
        "time": "Cách đây 5 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng tham gia chương trình Thu gom vỏ hộp, Lan tỏa sống xanh 2024 bằng cách vệ sinh và thu gom vỏ hộp sữa giấy tại nhà theo các bước sau: ",
        "from": "TH true MILK",
        "time": "Cách đây 5 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Nắng Tường Vy",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Nhận ngay 01 sản phẩm cùng loại khi mua 08 sản phẩm Sữa chua ăn và Sữa chua ăn men sống TH true YOGURT 100 g từ nay đến hết 31/05/2024!Đến ngay các cửa hàng bán lẻ, siêu thị, cửa hàng TH true mart và kênh thương mại điện tử để tận hưởng khuyến mại cùng Sữa chua TH true YOGURT.",
        "from": "TH true MILK",
        "time": "Cách đây 5 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH True Mart - Sữa Từ Thiên Nhiên | Đặt Món & Giao ship tận nơi | shopeefood.vn",
        "from": "Nắng Tường Vy",
        "time": "Cách đây 4 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Một thùng sữa chua bao nhiêu ạ. Có ship không ạ",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "2 tuần",
        "from": "Nguyễn Hiền",
        "time": "Cách đây 1 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo tại: https://www.thtruemart.vn/",
        "from": "TH true MILK",
        "time": "Cách đây 1 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "2 tuần",
        "from": "Nhung Tran",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng TH chung tay bảo vệ môi trường bằng cách làm sạch và gấp gọn các vỏ hộp sữa đã qua sử dụng để mang tới 20 cửa hàng TH true mart thu gom và có cơ hội nhận được những phần quà may mắn là những chiếc túi vải canvas thân thiện với môi trường nhé!  ",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Nguyễn Hiền",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xin giá 1 thùng a",
        "from": "TH true MILK",
        "time": "Cách đây 4 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "3 tuần",
        "from": "Hà Trương",
        "time": "Cách đây 3 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn muốn mua sản phẩm nào ạ? Bạn vui lòng inbox fanpage để được hỗ trợ đặt hàng nhé.",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "2 tuần",
        "from": "Hoàng Hương",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ưu đãi hấp dẫn từ Sữa tươi tiệt trùng bổ sung ngũ cốc dạng hạt TH true MILK LIGHT MEAL: Nhận ngay 01 sản phẩm cùng loại khi mua 08 sản phẩm TH true MI… Xem thêm",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Hoàng Na",
        "time": "Cách đây Trang chủ - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ưu đãi hấp dẫn từ Sữa tươi tiệt trùng bổ sung ngũ cốc dạng hạt TH true MILK LIGHT MEAL: Nhận ngay 01 sản phẩm cùng loại khi mua 08 sản phẩm TH true MILK LIGHT MEAL 180ml.Là sự kết hợp hoàn hảo dưỡng chất của sữa tươi trang trại, sạch, nguyên chất theo chuẩn của Trang trại TH và dinh dưỡng từ thực vật (yến mạch dạng hạt, dịch hạt óc chó và mắc ca), TH true MILK LIGHT MEAL đem lại trải nghiệm bữa nhẹ hoàn toàn mới, tiện lợi và bổ dưỡng cho cả gia đình.",
        "from": "TH true MILK",
        "time": "Cách đây 7 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Hai Nguyen",
        "time": "Cách đây 7 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bên mình có nước lọc dạng bình to không",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "Mai Quỳnh Lâm",
        "time": "Cách đây 12 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn muốn mua sản phẩm nào ạ? Bạn vui lòng inbox fanpage để được hỗ trợ đặt hàng nhé.",
        "from": "TH true MILK",
        "time": "Cách đây 12 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "4 tuần",
        "from": "Bảo Bình",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 01 sản phẩm cùng loại khi mua 08 sản phẩm Sữa tươi tiệt trùng TH true MILK HILO 180ml. Chương trình áp dụng từ 1/3-30/4 tại các cửa hàng TH … Xem thêm",
        "from": "TH true MILK",
        "time": "Cách đây 16 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Thu Thảo",
        "time": "Cách đây 16 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 01 sản phẩm cùng loại khi mua 08 sản phẩm Sữa tươi tiệt trùng TH true MILK HILO 180ml. Chương trình áp dụng từ 1/3-30/4 tại các cửa hàng TH true mart, kênh thương mại điện tử, siêu thị và các cửa hàng bán lẻ có bán sản phẩm TH trên toàn quốc có tham gia chương trình.",
        "from": "TH true MILK",
        "time": "Cách đây Làm mỳ Ý cùng Bơ TH true BUTTER - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Tam Tran",
        "time": "Cách đây 14 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": ".",
        "from": "Phan Vân",
        "time": "Cách đây 14 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 tuần",
        "from": "TH true MILK",
        "time": "Cách đây Thử ngay công thức làm bánh bông lan sô cô la cực dễ cho ngày thêm ngọt ngào nhé. - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cảm ơn bạn đã quan tâm và ủng hộ TH nhé.",
        "from": "Như Nguyệt",
        "time": "Cách đây 14 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 14 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Được làm hoàn toàn từ sữa tươi trang trại, sạch, nguyên chất theo chuẩn của Trang trại TH và yến mạch dạng hạt, TH true MILK LIGHT MEAL bổ sung dinh dưỡng cho bữa sáng lành mạnh của cả gia đình.  Ghé thăm hệ thống cửa hàng TH true mart toàn quốc và gian hàng online của TH trên các ứng dụng giao hàng, sàn thương mại điện tử để nhận ngay ưu đãi bạn nhé.  Mua ngay tại: ► Hệ thống cửa hàng TH true mart: https://www.thmilk.vn/he-thong-cua-hang/► Website: thtruemart.vn►… Xem thêm",
        "from": "Hàng Nguyen",
        "time": "Cách đây Cùng làm bắp rang bơ caramel cùng TH true BUTTER - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây Làm bánh Red Velvet cùng TH true BUTTER - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xin giá thùng bn",
        "from": "Tuyền Tóc",
        "time": "Cách đây 15 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 15 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Thùng sữa tươi tiệt trùng bổ sung ngũ cốc dạng hạt TH true MILK LIGHT MEAL 180ml x 48 hộp có giá 589.200 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/.../sua-tuoi-tiet-trung.html",
        "from": "Nini Yeu",
        "time": "Cách đây Giảm 20% khi mua Bơ 5KG - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "4 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 15 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Được làm hoàn toàn từ sữa tươi trang trại, sạch, nguyên chất theo chuẩn của Trang trại TH và yến mạch dạng hạt, TH true MILK LIGHT MEAL là sự lựa chọn hoàn hảo cho các bé tiếp thêm năng lượng sau mỗi giờ tan học.  Ghé thăm hệ thống cửa hàng TH true mart toàn quốc và gian hàng online của TH trên các ứng dụng giao hàng, sàn thương mại điện tử để nhận ngay ưu đãi bạn nhé",
        "from": "Phan Thị Đoan",
        "time": "Cách đây 14 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây Giảm 20% khi mua 1 bơ 200g - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xin giá ạ",
        "from": "Trương Thanh",
        "time": "Cách đây 15 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 15 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo tại: https://www.thtruemart.vn/",
        "from": "Tú Quyên",
        "time": "Cách đây Thưởng thức Brownie ấm nóng, thơm nức mùi bơ với TH true BUTTER bạn nhé. - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 tuần",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true MILK LIGHT MEAL là sự lựa chọn phù hợp cho bữa nhẹ của dân văn phòng. Sản phẩm cung cấp vitamin và khoáng chất từ sữa tươi và yến mạch dạng hạt. Với dạng hộp tiện lợi, bạn có thể dễ dàng mang theo mọi lúc, mọi nơi để cung cấp năng lượng cho một ngày dài. Ghé thăm hệ thống cửa hàng TH true mart toàn quốc và gian hàng online của TH trên các ứng dụng giao hàng, sàn thương mại điện tử để nhận ngay ưu đãi bạn nhé",
        "from": "Cảnh C.I.D",
        "time": "Cách đây 16 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây 16 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true MILK LIGHT MEAL giúp cung cấp năng lượng sau những phút chơi thể thao mệt mỏi. Sản phẩm được làm từ hoàn toàn từ sữa tươi trang trại, sạch, nguyên chất theo chuẩn của Trang trại TH, kết hợp với yến mạch dạng hạt tạo trải nghiệm “nhai” thật đã. Ghé thăm hệ thống cửa hàng TH true mart toàn quốc và gian hàng online của TH trên các ứng dụng giao hàng, sàn thương mại điện tử để nhận ngay ưu đãi bạn nhé",
        "from": "Kim Huong Tran",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây 20 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 01 sản phẩm cùng loại khi mua 08 sản phẩm Sữa chua uống tiệt trùng TH true YOGURT 180 ml từ nay đến hết 15/05/2024.Đến ngay các cửa hàng bán lẻ, siêu thị, cửa hàng TH true mart và kênh thương mại điện tử để tận hưởng khuyến mại cùng Sữa chua uống tiệt trùng TH true YOGURT!",
        "from": "Tuấn Văn",
        "time": "Cách đây 20 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây Mua 1 Bơ 200G tặng 1 đường vàng NASU 1kg - Áp dụng tại TH true mart miền Nam từ 2-30/11 - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Hương viêt quát bao nhiêu thùng",
        "from": "Tâm Minh",
        "time": "Cách đây 21 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 21 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Thùng sữa chua uống tiệt trùng việt quất 180 ml x 48 chai có giá 385.200 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/.../s-a-chua-u-ng-t-nhien.html",
        "from": "Phạm T.Nguyệt",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "3 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 24 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Tham gia \"Thu gom vỏ hộp, Lan tỏa sống xanh 2024\" bằng cách thu gom các vỏ hộp sữa đã qua sử dụng và đem tới 20 cửa hàng TH true mart tại Hà Nội và TP… Xem thêm",
        "from": "Thanh Mai",
        "time": "Cách đây 24 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây TH true YOGURT - Trang chủ - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng TH chung tay bảo vệ môi trường bằng cách làm sạch và gấp gọn các vỏ hộp sữa đã qua sử dụng để mang tới 20 cửa hàng TH true mart thu gom và có cơ … Xem thêm",
        "from": "Thuý Đặng",
        "time": "Cách đây 25 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây 25 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng TH chung tay bảo vệ môi trường bằng cách làm sạch và gấp gọn các vỏ hộp sữa đã qua sử dụng để mang tới 20 cửa hàng TH true mart thu gom và có cơ … Xem thêm",
        "from": "Muối Chanh Tiêu",
        "time": "Cách đây TH true YOGURT - Trang chủ - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây 25 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "THAM GIA THU GOM VỎ HỘP, LAN TỎA SỐNG XANH 2024",
        "from": "Nhi Nguyễn",
        "time": "Cách đây 24 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trang chủ",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cách thức vệ sinh vỏ hộp sữa???",
        "from": "Thuý Hiền",
        "time": "Cách đây 26 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "7 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 24 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo hướng dẫn chi tiết tại: https://thugomvohop.thmilk.vn/",
        "from": "Muội Muội",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "7 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 26 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Giai đoạn đầu đời của bé là giai đoạn phát triển vàng về cả thể chất lẫn trí tuệ. Mẹ đừng quên bổ sung cho bé bộ dinh dưỡng đầy đủ và phù hợp. Bộ sản phẩm dinh dưỡng công thức TH true FORMULA với công thức độc quyền CARE ADVANCE giúp tăng cường sức đề kháng, tốt cho hệ tiêu hóa và não bộ, tạo nền tảng vững chắc, hỗ trợ sự phát triển khỏe mạnh của con:",
        "from": "Nhung Trần",
        "time": "Cách đây Sữa Cacao Lúa mạch TH true CHOCOMALT MISTORI | Mua 8 tặng 1 - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây 26 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": ".",
        "from": "Nguyễn Huỳnh",
        "time": "Cách đây 26 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "12 tuần",
        "from": "TH true MILK",
        "time": "Cách đây Săn thẻ vui, Khui quà đỉnh cùng TH TOPKID - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Ngô Hương",
        "time": "Cách đây 23 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "12 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 23 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ưu đãi hấp dẫn giảm 20% khi mua 1 thùng sữa dinh dưỡng cho người lớn TH true MILK GOLD 24 hộp. Chương trình kéo dài từ nay tới hết 15/1/2024. Hãy ghé thăm hệ thống cửa hàng TH true mart toàn quốc và gian hàng online của TH trên các ứng dụng giao hàng, sàn thương mại điện tử mua hàng và nhận được nhiều ưu đãi bạn nhé. Là sản phẩm sữa dinh dưỡng cho người lớn, TH true MILK GOLD được bổ sung bộ dưỡng chất hỗ trợ cải thiện sức khỏe tổng thể với 6 nhóm lợi ích:- Sterol este… Xem thêm",
        "from": "Huyen Dang",
        "time": "Cách đây Săn thẻ vui, Khui quà đỉnh cùng TH TOPKID - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây 24 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Loại của người lớn bao nhiêu 1 thùng vậy",
        "from": "Tình Phan",
        "time": "Cách đây 24 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "16 tuần",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo tại: https://www.thtruemart.vn/catalogsearch/result/?q=gold",
        "from": "Donna Andrea Nguyễn",
        "time": "Cách đây 28 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "16 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 28 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Làm mỳ ý thơm ngon chưa bao giờ đơn giản đến vậy với Bơ Lạt Tự Nhiên TH true BUTTER.Và đừng quên tham gia cuộc thi \"Thử thách bánh ngon\"  với TH true BUTTER để rinh những phần quà cực hấp dẫn với tổng giá trị tới gần 50 triệu :- Giải Nhất: 1 máy trộn bột cao cấp Smeg trị giá 18 triệu đồng- Giải Nhì: 5 lò nướng Sharp (trị giá 5 triệu đồng/giải thưởng)- Giải Ba: 100 Evoucher trị giá 100.000đ mua hàng tại hệ thống cửa hàng TH true mart toàn quốc… Xem thêm",
        "from": "Phượng Vĩ",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Làm mỳ Ý cùng Bơ TH true BUTTER",
        "from": "TH true MILK",
        "time": "Cách đây Sữa Cacao Lúa Mạch TH MISTORI \"Nhận thẻ sticker vui, Quay số trúng quà chất\" - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Quá ngon",
        "from": "Thiên Ân Tạp Hoá",
        "time": "Cách đây 30 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "14 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 29 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Lê Ngọc",
        "time": "Cách đây Sữa Cacao Lúa Mạch TH true CHOCOMALT MISTORI- Nhận thẻ sticker vui, Quay số trúng quà chất - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "14 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 30 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thử ngay công thức làm bánh bông lan sô cô la cực dễ cho ngày thêm ngọt ngào nhé. Chỉ còn 2 ngày nữa, cuộc thi \"Thử thách bánh ngon\"  với Bơ Lạt Tự Nhiên TH true BUTTER với tổng giá trị giải thưởng tới gần 50 triệu sẽ kết thúc vào ngày 10/12/2023. Hãy tham gia ngay với chúng mình để có cơ hội nhận ngay những phần quà hấp dẫn:- Giải Nhất: 1 máy trộn bột cao cấp Smeg trị giá 18 triệu đồng- Giải Nhì: 5 lò nướng Sharp (trị giá 5 triệu đồng/giải thưởng)- Giải Ba: 100 Evoucher… Xem thêm",
        "from": "Thanh Trương",
        "time": "Cách đây 29 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Thử ngay công thức làm bánh bông lan sô cô la cực dễ cho ngày thêm ngọt ngào nhé.",
        "from": "TH true MILK",
        "time": "Cách đây Sữa Cacao Lúa Mạch TH true CHOCOMALT MISTORI - Nhận thẻ sticker vui, Quay số trúng quà chất - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ngon",
        "from": "Luu Quỳnh Anh",
        "time": "Cách đây 29 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "14 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 29 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Cẩm Phương",
        "time": "Cách đây Thu gom vỏ hộp, Lan tỏa sống xanh cùng TH true MILK - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "14 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 32 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng làm bắp rang bơ caramel thơm ngon cho cuối tuần thêm chill nào bạn.Và nếu bạn là một người yêu bếp thì hãy thử sức với cuộc thi \"Thử thách bánh ngon\"  với TH true BUTTER (Kết thúc vào ngày 10/12/2023); tổng giá trị giải thưởng tới gần 50 triệu:- Giải Nhất: 1 máy trộn bột cao cấp Smeg trị giá 18 triệu đồng- Giải Nhì: 5 lò nướng Sharp (trị giá 5 triệu đồng/giải thưởng)- Giải Ba: 100 Evoucher trị giá 100.000đ mua hàng tại hệ thống cửa hàng TH true mart toàn quốc… Xem thêm",
        "from": "Lê Ngọc",
        "time": "Cách đây 32 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Cùng làm bắp rang bơ caramel cùng TH true BUTTER",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Red velvet cupcake cream cheese béo ngậy cực phù hợp cho các tín đồ phô mai cùng Bơ Lạt Tự Nhiên TH true BUTTER. Cùng vào bếp với cuộc thi \"Thử thách bánh ngon\"  với TH true BUTTER (Kết thúc vào ngày 10/12/2023) để rinh ngay cơ hội nhận hàng loạt giải thưởng với tổng giá trị lên tới gần 50 triệu  đồng:- Giải Nhất: 1 máy trộn bột cao cấp Smeg trị giá 18 triệu đồng- Giải Nhì: 5 lò nướng Sharp (trị giá 5 triệu đồng/giải thưởng)- Giải Ba: 100 Evoucher trị giá 100.000đ mua hà… Xem thêm",
        "from": "Bao Ngoc Nguyen",
        "time": "Cách đây 33 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Làm bánh Red Velvet cùng TH true BUTTER",
        "from": "TH true MILK",
        "time": "Cách đây 33 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Y",
        "from": "Huong Phan Thi Giang",
        "time": "Cách đây Trọn vị mùa hè cùng kem TH true ICE CREAM - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "15 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 31 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, TH đã nhận được phản hồi của bạn. Cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Mộc Lan Hoàng",
        "time": "Cách đây 30 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "15 tuần",
        "from": "TH true MILK",
        "time": "Cách đây Trọn vị mùa hè cùng kem TH true ICE CREAM - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Ghé thăm hệ thống cửa hàng TH true mart toàn quốc từ 1/12-31/12 để nhận ưu đãi giảm 20% khi mua 1 Bơ Lạt Tự Nhiên TH true BUTTER 5 kg.   Bơ lạt tự nhiên TH true BUTTER được làm hoàn toàn bằng chất béo của sữa tươi sạch nguyên chất từ Trang trại TH cùng với quá trình lên men tự nhiên tạo nên hương vị thơm ngon. Sản phẩm mang lại kết cấu mềm mịn, thơm ngậy mùi sữa, chắc chắn sẽ giúp món ăn của bạn thơm ngon hơn đấy!   Danh sách cửa hàng: https://www.thmilk.vn/he-thong-cua-hang/",
        "from": "Hoàng Văn Hiền",
        "time": "Cách đây 30 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Giảm 20% khi mua Bơ 5KG",
        "from": "TH true MILK",
        "time": "Cách đây 29 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bnhiu tiền 1kg vậy ak",
        "from": "Luu Quỳnh Anh",
        "time": "Cách đây Trang chủ - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "15 tuần",
        "from": "TH true MILK",
        "time": "Cách đây Trang chủ - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo tại: https://www.thtruemart.vn/",
        "from": "Thuy Phan",
        "time": "Cách đây 29 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "14 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 29 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Ghé thăm hệ thống cửa hàng TH true mart toàn quốc từ 1/12-31/12 để nhận ưu đãi giảm 20% khi mua 1 Bơ Lạt Tự Nhiên TH true BUTTER 200 g.   Bơ lạt tự nhiên TH true BUTTER được làm hoàn toàn bằng chất béo của sữa tươi sạch nguyên chất từ Trang trại TH cùng với quá trình lên men tự nhiên tạo nên hương vị thơm ngon. Sản phẩm mang lại kết cấu mềm mịn, thơm ngậy mùi sữa, chắc chắn sẽ giúp món ăn của bạn thơm ngon hơn đấy!   Danh sách cửa hàng: https://www.thmilk.vn/he-thong-cua-hang/",
        "from": "Vương Thị Chiến",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Giảm 20% khi mua 1 bơ 200g",
        "from": "TH true MILK",
        "time": "Cách đây 30 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Y",
        "from": "Nguyen Tinh Nguyen",
        "time": "Cách đây 29 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "15 tuần",
        "from": "TH true MILK",
        "time": "Cách đây Sữa chua ăn tự nhiên - Sữa chua tự nhiên - Sản phẩm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, TH đã nhận được phản hồi của bạn. Cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Nguyễn Đỗ Hoài An",
        "time": "Cách đây 34 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "15 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 34 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thưởng thức Brownie ấm nóng, thơm nức mùi bơ với TH true BUTTER bạn nhé. ",
        "from": "Ngọc Mai",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thưởng thức Brownie ấm nóng, thơm nức mùi bơ với TH true BUTTER bạn nhé.",
        "from": "TH true MILK",
        "time": "Cách đây 35 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Là sản phẩm sữa dinh dưỡng dành cho người lớn, TH true MILK GOLD được bổ sung bộ dưỡng chất hỗ trợ cải thiện sức khỏe tổng thể với 6 nhóm lợi ích:- Sterol este thực vật tốt cho tim mạch- GABA – hỗ trợ cải thiện chất lượng giấc ngủ- Calci, vitamin D3, K2 và collagen tốt cho xương khớp- Chất xơ inulin tốt cho tiêu hóa… Xem thêm",
        "from": "Hà Hiền",
        "time": "Cách đây 35 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây Sữa chua ăn tự nhiên - Sữa chua tự nhiên - Sản phẩm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Người bị bệnh gút có uống được sữa này không ạ",
        "from": "Hiep Nguyen",
        "time": "Cách đây 35 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "16 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 35 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Với người lớn tuổi không có bệnh lý, bạn nên sử dụng 1- 2 hộp STTT Vị Tự Nhiên TH true MILK GOLD 180 ml mỗi ngày. Khuyến nghị này được đưa ra dựa trên bảng nhu cầu dinh dưỡng khuyến nghị cho người Việt Nam (Ban hành kèm theo Thông tư số 43/2014/TT-BYT… Xem thêm",
        "from": "Kim Chung",
        "time": "Cách đây Sữa chua ăn tự nhiên - Sữa chua tự nhiên - Sản phẩm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "16 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 33 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Tặng ngay 1 sữa tươi thanh trùng TH true MILK 450 ml khi mua 1 Bơ Lạt Tự Nhiên TH true BUTTER 200 g. Chương trình áp dụng tại hệ thống cửa hàng TH true mart miền Bắc và miền Trung từ 16/11 tới hết 16/12/2023. ",
        "from": "Hien Hoang",
        "time": "Cách đây 33 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây TH true MILK LIGHT MEAL - Bữa nhẹ tiện lợi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ad ơi Cho mình xin link shope hàng chính hãng sữa bột TH số 4 với ạ",
        "from": "Linh Linh",
        "time": "Cách đây 36 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "20 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 36 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm trên kho hàng shopee hiện đang tạm hết hàng ạ. Bạn vui lòng tham khảo tại: https://formula.thmilk.vn/",
        "from": "Bùi Thị Thùy Linh",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "20 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 36 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Tặng ngay 1 đường vàng NASU 1 KG khi mua 1 Bơ Lạt Tự Nhiên TH true BUTTER 200 G. Chương trình áp dụng tại hệ thống cửa hàng TH true mart miền Nam từ 2/11-30/11/2023.  Bơ lạt tự nhiên TH true BUTTER được làm hoàn toàn bằng chất béo của sữa tươi sạch nguyên chất từ Trang trại TH cùng với quá trình lên men tự nhiên tạo nên hương vị thơm ngon. Sản phẩm mang lại kết cấu mềm mịn, thơm ngậy mùi sữa, chắc chắn sẽ giúp món ăn của bạn thơm ngon hơn đấy! Danh sách cửa hàng TH true ma… Xem thêm",
        "from": "Quang Lê",
        "time": "Cách đây 36 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Mua 1 Bơ 200G tặng 1 đường vàng NASU 1kg - Áp dụng tại TH true mart miền Nam từ 2-30/11",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xin giá bơ ạ",
        "from": "Phạm Châu",
        "time": "Cách đây 36 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "21 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 36 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Bơ lạt tự nhiên TH true BUTTER 200 g có giá 59.400 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/san-pham/bo-va-phomat.html",
        "from": "Sánh Phạm",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "21 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 34 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chắc hẳn mẹ đã từng trải qua những tháng ngày lo lắng khi bé thường xuyên ốm vặt, nhất là vào thời điểm gia mùa. Cùng chuyên gia dinh dưỡng TH giải đáp những nguyên nhân phổ biến đằng sau tình trạng này và các cách giúp con yêu khỏe mạnh hơn mẹ nhé!",
        "from": "Sóc Thi",
        "time": "Cách đây 34 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "TH true MILK",
        "time": "Cách đây Bộ sản phẩm dinh dưỡng công thức TH true FORMULA - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sản phẩm rất tốt",
        "from": "TH true MILK",
        "time": "Cách đây 37 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "24 tuần",
        "from": "Sinh Huỳnh",
        "time": "Cách đây 37 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "24 tuần",
        "from": "Panda Huyền Trang",
        "time": "Cách đây 36 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TIẾP NĂNG LƯỢNG, LẬP CHIẾN CÔNG, TRÚNG HƠN 100.000 QUÀ TẶNG CÙNG SỮA CHUA UỐNG TIỆT TRÙNG TH true YOGURT",
        "from": "TH true MILK",
        "time": "Cách đây 36 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true YOGURT - Trang chủ",
        "from": "NgÂn Hà",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sai thể lệ, Th làm không đúng qui định, kiện thôi",
        "from": "TH true MILK",
        "time": "Cách đây 38 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "25 tuần",
        "from": "Thuy Nguyen",
        "time": "Cách đây 38 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cảm ơn bạn đã quan tâm và tham gia chương trình “Tiếp năng lượng, lập chiến công, trúng hơn 100.000 quà tặng của TH true Yogurt”! Sau khi nhận được phản hồi của bạn, chúng tôi đã làm việc cùng đối tác vận hành hệ thống của chương trình để làm rõ, chúng… Xem thêm",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "25 tuần",
        "from": "Quang Lê",
        "time": "Cách đây 39 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TIẾP NĂNG LƯỢNG, LẬP CHIẾN CÔNG, TRÚNG HƠN 100.000 QUÀ TẶNG CÙNG SỮA CHUA UỐNG TIỆT TRÙNG TH true YOGURT",
        "from": "TH true MILK",
        "time": "Cách đây 39 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true YOGURT - Trang chủ",
        "from": "Quang Lê",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Th bị lỗi gì hay sao mà bảng điểm có mấy bạn nhập vượt quá 12 code một ngày. Ko thấy Admin cập nhật lại và sửa lỗi luôm",
        "from": "TH true MILK",
        "time": "Cách đây 41 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "25 tuần",
        "from": "Quang Lê",
        "time": "Cách đây 41 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng liên hệ tổng đài CSKH 1800 545440 bấm phím 4 trong giờ làm việc hành chính để được hỗ trợ thông tin nhé.",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "24 tuần",
        "from": "Nguyễn Thị Thúy Hường",
        "time": "Cách đây 40 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Những ngày đầu ở lớp bé của mẹ như thế nào rồi? Chắc hẳn con đã có nhiều trải nghiệm thú vị của những “lần đầu tiên” khi được tham gia vào các hoạt động tại trường lớp. Dù là lúc học tập và vui chơi, mẹ yên tâm vì có TH true FORMULA kề bên cùng bé yêu phát triển não bộ và thể chất một cách toàn diện, giúp con thông minh nhanh nhẹn tự tin đến lớp.TH true FORMULA sở hữu công thức CARE ADVANCE độc quyền phát triển bởi Viện Dinh dưỡng TH với dưỡng chất “vàng” MFGM, DHA & ARA hỗ… Xem thêm",
        "from": "TH true MILK",
        "time": "Cách đây 39 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Lệ Na",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Huỳnh Phúc Tín mai mua cho Gold lon này nha a",
        "from": "TH true MILK",
        "time": "Cách đây 41 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "26 tuần",
        "from": "Dâu Tây",
        "time": "Cách đây 41 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "24 tuần",
        "from": "Thom Nguyen Thi",
        "time": "Cách đây 40 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sau gần 2 tháng diễn ra, chương trình \"Thu gom vỏ hộp, Lan tỏa sống xanh 2023\" đã thu gom được gần 83.000 vỏ hộp sữa, giảm thiểu tương đương hơn 490kg rác thải giấy ra môi trường.",
        "from": "TH true MILK",
        "time": "Cách đây 39 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Quang Lê",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Hôm trc m có nhận được tin nhắn nhưng mình ra hỏi các ban nhân viên bạn ấy nói phải mua hàng giá 100k mới được tặng 1 lốc TH ,vậy nếu m tích mã E coupon rồi mua đơn hàng 100k thì có được áp dụng tất cả các mã e coupon ( ví dụ 4  mã 4 lốc sữa không ạ )",
        "from": "TH true MILK",
        "time": "Cách đây TH true FORMULA - Dinh dưỡng vàng cho trẻ phát triển toàn diện - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "26 tuần",
        "from": "Mai Le",
        "time": "Cách đây 43 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay ưu đãi mua 8 tặng 1 từ Sữa Cacao Lúa mạch TH true CHOCOMALT MISTORI! Tặng ngay 1 sản phẩm cùng loại khi mua 8 sản phẩm Sữa Cacao Lúa mạch TH true CHOCOMALT MISTORI từ nay đến hết ngày 30/11/2023. ",
        "from": "TH true MILK",
        "time": "Cách đây 43 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa Cacao Lúa mạch TH true CHOCOMALT MISTORI | Mua 8 tặng 1",
        "from": "Thu Hoài",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xin gia ak",
        "from": "TH true MILK",
        "time": "Cách đây 46 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "26 tuần",
        "from": "Kim Chi Củ Cải",
        "time": "Cách đây 45 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Thùng sữa lúa mạch TH true CHOCOMALT MISTORI 180 ml x 48 hộp có giá 400.800 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/.../sua.../s-a-tuoi-lua-m-ch.html",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "26 tuần",
        "from": "Tran Sang",
        "time": "Cách đây 45 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Tham gia Chương trình Săn thẻ vui, Khui quà đỉnh cùng TH TOPKID theo các bước sau đây để nhận ngay những phần quà hấp dẫn!",
        "from": "TH true MILK",
        "time": "Cách đây 45 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Săn thẻ vui, Khui quà đỉnh cùng TH TOPKID",
        "from": "Quốc Dũng",
        "time": "Cách đây TH true mart - Website thương mại điện tử của TH - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Hồng Vân Trần mua sữa cóp thẻ đổi quà đi nào",
        "from": "TH true MILK",
        "time": "Cách đây 42 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "23 tuần",
        "from": "Lương Cường",
        "time": "Cách đây 42 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "TH true MILK",
        "time": "Cách đây TH true mart Official Store - Shopee Mall Online | Shopee Việt Nam - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "23 tuần",
        "from": "Thuy Nguyen",
        "time": "Cách đây 45 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Tham gia Chương trình Săn thẻ vui, Khui quà đỉnh cùng TH TOPKID theo các bước sau đây để nhận ngay những phần quà hấp dẫn!",
        "from": "TH true MILK",
        "time": "Cách đây 45 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Săn thẻ vui, Khui quà đỉnh cùng TH TOPKID",
        "from": "Trần T.Thuý Ann",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xinh wa à cô gái ơi..",
        "from": "TH true MILK",
        "time": "Cách đây Lốc sữa lúa mạch TH true CHOCOMALT MISTORI 180 ml x 4 hộp - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "24 tuần",
        "from": "Khuyen Hoang",
        "time": "Cách đây 44 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Trần Ngọc Minh",
        "time": "Cách đây 44 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "24 tuần",
        "from": "TH true MILK",
        "time": "Cách đây Chương Trình Khuyến Mãi Chi Tiết - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Dinh dưỡng phù hợp cho con luôn là điều ba mẹ đặc biệt quan tâm. Bữa ăn hàng ngày có đủ để con phát triển toàn diện và khỏe mạnh theo đúng lứa tuổi?Ba mẹ đừng lo vì đã có TH true FORMULA đồng hành trên hành trình nuôi con khôn lớn. Sản phẩm với công thức CARE ADVANCE độc quyền nghiên cứu bởi Viện Dinh dưỡng TH đem đến bộ 3 lợi ích vượt trội:- MFGM, DHA, ARA hỗ trợ phát triển não bộ, con nhanh nhẹn tự tin- HMO (2’ -FL), Nucleotide cùng 24 loại vitamin, khoáng chất thiết yếu… Xem thêm",
        "from": "Teresa Nguyễn",
        "time": "Cách đây 47 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Nguyễn Thảo",
        "time": "Cách đây 47 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ib giúp e ạ",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "28 tuần",
        "from": "Thanh Hợp",
        "time": "Cách đây 43 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn,Sản phẩm dinh dưỡng công thức TH true FORMULA được nghiên cứu và xây dựng trên cơ sở khoa học về dinh dưỡng, đáp ứng đầy đủ các chất dinh dưỡng cần thiết cho sự phát triển của trẻ trong từng giai đoạn. Bên cạnh đó, hương vị của sản phẩm cũng … Xem thêm",
        "from": "Yến Nhi",
        "time": "Cách đây 43 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "28 tuần",
        "from": "Yến Nguyễn",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Từ nay đến hết 30/11/2023, khi mua 04 hộp (01 lốc) Sữa Cacao Lúa Mạch TH true CHOCOMALT MISTORI 110 ml và 180 ml sẽ được tặng 01 thẻ sticker dạ quang.… Xem thêm",
        "from": "TH true MILK",
        "time": "Cách đây 47 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Nhà Vườn Hương Đức",
        "time": "Cách đây 47 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Từ nay đến hết 30/11/2023, khi mua 04 hộp (01 lốc) Sữa Cacao Lúa Mạch TH true CHOCOMALT MISTORI 110 ml và 180 ml sẽ được tặng 01 thẻ sticker dạ quang.  ",
        "from": "TH true MILK",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa Cacao Lúa Mạch TH MISTORI \"Nhận thẻ sticker vui, Quay số trúng quà chất\"",
        "from": "Tran Ha",
        "time": "Cách đây 47 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Châm s",
        "from": "TH true MILK",
        "time": "Cách đây 47 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "30 tuần",
        "from": "Tuoi Pham",
        "time": "Cách đây TH True Mart - Sữa Từ Thiên Nhiên | Đặt Món & Giao ship tận nơi | shopeefood.vn - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, TH đã nhận được phản hồi của bạn. Cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "TH true MILK",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "29 tuần",
        "from": "Phương Thảo",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Từ nay đến hết 30/11/2023, khi mua 04 hộp (01 lốc) Sữa Cacao Lúa Mạch TH true CHOCOMALT MISTORI 110 ml và 180 ml sẽ được tặng kèm 01 thẻ sticker dạ quang.  ",
        "from": "TH true MILK",
        "time": "Cách đây TH true MILK HILO - Giàu Canxi - Ít Béo - Không Lactose - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa Cacao Lúa Mạch TH true CHOCOMALT MISTORI- Nhận thẻ sticker vui, Quay số trúng quà chất",
        "from": "Hồ Minh Thuận",
        "time": "Cách đây 51 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "30 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 50 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Do Nguyen",
        "time": "Cách đây TH true MILK HILO - Giảm 60% chất béo giúp vóc dáng cân đối - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "29 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 50 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Từ nay đến hết 30/11/2023, khi mua 04 hộp (01 lốc) Sữa Cacao Lúa Mạch TH true CHOCOMALT MISTORI 110 ml và 180 ml sẽ được tặng 01 thẻ sticker dạ quang.  ",
        "from": "Hằng Phạm",
        "time": "Cách đây 50 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa Cacao Lúa Mạch TH true CHOCOMALT MISTORI - Nhận thẻ sticker vui, Quay số trúng quà chất",
        "from": "TH true MILK",
        "time": "Cách đây TH true MILK - Thật  Sự Thiên Nhiên - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Mình muốn mua sữa cho bé trên 1 tuổi",
        "from": "Hanhphuc Cho",
        "time": "Cách đây 51 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "29 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 51 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, hiện tại các sản phẩm sữa của TH dành cho các bé từ 01 tuổi trở lên. Đối với các bé dưới 01 tuổi, có lưu ý đặc biệt về chế độ dinh dưỡng và chăm sóc sức khoẻ, quý khách hàng vui lòng tham vấn bác sĩ / cán bộ y tế để được tư vấn và hướng dẫn c… Xem thêm",
        "from": "Nguyễn Hương",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "29 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 51 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng TH chung tay bảo vệ môi trường bằng cách làm sạch và gấp gọn các vỏ hộp sữa đã qua sử dụng để mang tới 20 cửa hàng TH true mart thu gom và có cơ hội nhận được những phần quà may mắn nhé! ",
        "from": "Nhất Nhất",
        "time": "Cách đây 51 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Thu gom vỏ hộp, Lan tỏa sống xanh cùng TH true MILK",
        "from": "TH true MILK",
        "time": "Cách đây TH true MILK - Thật sự thiên nhiên - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mih thích ct đợt trước hơn. Tặng sổ tay tái chế",
        "from": "Na Hân",
        "time": "Cách đây 52 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "32 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 51 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH đã nhận được phản hồi của bạn và sẽ làm việc với các bộ phận liên quan. Cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Tran Mai Ngoc",
        "time": "Cách đây 48 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "32 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 47 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true MILK GOLD - THAY LỜI BÁO HIẾU DÀNH TẶNG CHA MẸ Là sản phẩm sữa tươi dinh dưỡng dành cho người lớn tuổi đầu tiên tại Việt Nam, TH true MILK GOLD là món quà tuyệt vời để thể hiện tình cảm và sự biết ơn đến các đấng sinh thành của chúng ta trong dịp Vu Lan này. Sản phẩm được bổ sung bộ dưỡng chất hỗ trợ cải thiện sức khỏe tổng thể cho người lớn tuổi với 6 nhóm lợi ích:Sterol esters thực vật tốt cho tim mạchGABA – hỗ trợ cải thiện chất lượng giấc ngủCanxi, vitamin D3,… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây TH true MILK HILO - Tăng 70% Canxi cho xương chắc khỏe - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây 42 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sau minh mua sua th khong duong ng ta khong ban",
        "from": "Không xác định",
        "time": "Cách đây 41 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "33 tuần",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn có thể đặt mua online qua website https://www.thtruemart.vn/, ứng dụng THeLIFE hoặc các ứng dụng giao hàng thực phẩm để được giao hàng tận nơi nhé:► ShopeeFood: http://bit.ly/THtruemart-ShopeeFood► Grabmart: http://bit.ly/THtruemart-Gra… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "33 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Trọn vị mùa hè với chương trình khuyến mãi của kem TH true ICE CREAM tại hệ thống cửa hàng TH true mart toàn quốc: Nhận ngay 1 TÚI GIỮ NHIỆT khi mua 9 kem que 52 g/ 9 kem hộp 50 g/ 4 kem ốc quế/ 4 kem hộp 180 g. Chương trình kéo dài từ nay tới hết 31/8 hoặc khi hết quà tặng.  Được làm hoàn toàn từ sữa tươi sạch của trang trại TH, kem TH true ICE CREAM có kết cấu mềm mịn, giữ trọn các dưỡng chất có trong sữa tươi. Sản phẩm kết hợp cùng các nguyên liệu tự nhiên mang đến vị… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây TH true MILK HILO - Không Lactose giúp dễ tiêu hóa - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọn vị mùa hè cùng kem TH true ICE CREAM",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "31 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "30 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Trọn vị mùa hè với chương trình khuyến mãi của kem TH true ICE CREAM tại hệ thống cửa hàng TH true mart toàn quốc: Nhận ngay 1 TÚI GIỮ NHIỆT khi mua 9 kem que 52 g/ 9 kem hộp 50 g/ 4 kem ốc quế/ 4 kem hộp 180 g. Chương trình kéo dài từ nay tới hết 31/8 hoặc khi hết quà tặng.  Được làm hoàn toàn từ sữa tươi sạch của trang trại TH, kem TH true ICE CREAM có kết cấu mềm mịn, giữ trọn các dưỡng chất có trong sữa tươi. Sản phẩm kết hợp cùng các nguyên liệu tự nhiên mang đến vị… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọn vị mùa hè cùng kem TH true ICE CREAM",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Tuyệt vời",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "30 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, TH đã nhận được phản hồi của bạn. Cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "29 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng tham gia chương trình Thu gom vỏ hộp, Lan tỏa sống xanh 2023 bằng cách vệ sinh và thu gom vỏ hộp sữa giấy tại nhà theo các bước sau: ",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trang chủ",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng TH chung tay bảo vệ môi trường bằng cách thu gom và tái chế vỏ hộp sữa giấy đã qua sử dụng ngay bạn nhé! Chương trình \"Thu gom vỏ hộp, Lan tỏa sống xanh 2023\" chính thức diễn ra từ hôm nay 15/08 đến hết ngày 31/12/2023. ",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trang chủ",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thơm",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "29 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, TH đã nhận được phản hồi của bạn. Cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "29 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Trọn vị mùa hè với chương trình khuyến mãi của kem TH true ICE CREAM tại hệ thống cửa hàng TH true mart toàn quốc: Nhận ngay 1 TÚI GIỮ NHIỆT khi mua 9 kem que 52 g/ 9 kem hộp 50 g/ 4 kem ốc quế/ 4 kem hộp 180 g. Chương trình kéo dài từ nay tới hết 31/8 hoặc khi hết quà tặng. ",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Nước uống sữa trái cây JUICE milk TOPKID - Khỏe mạnh tự nhiên, Vị ngon thật đỉnh - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "....",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "30 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH.",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "29 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 1 sản phẩm cùng loại khi mua 8 sản phẩm Sữa Chua Ăn TH true YOGURT bất kỳ từ 15/7 - 15/9/2023.Đến ngay các điểm bán để tận hưởng ưu đãi hấp dẫn từ TH true YOGURT!",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa chua ăn tự nhiên - Sữa chua tự nhiên - Sản phẩm",
        "from": "Không xác định",
        "time": "Cách đây Làm bánh Red  Velvet cùng TH true BUTTER - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trẻ mấy tháng tuổi ăn được loại này ạ",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "34 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, hiện tại các sản phẩm sữa của TH true MILK dành cho các bé từ 01 tuổi trở lên. Đối với các bé dưới 01 tuổi, có lưu ý đặc biệt về chế độ dinh dưỡng và chăm sóc sức khoẻ, quý khách hàng vui lòng tham vấn bác sĩ / cán bộ y tế để được tư vấn và h… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "34 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa Chua Nếp Cẩm Tự Nhiên TH true YOGURT - Hoàn toàn từ thiên nhiên.",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Làm mỳ Ý cùng Bơ TH true BUTTER - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bn ạ",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "35 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Sữa Chua Xoài - Hạt Chia Tự Nhiên có giá 33.000 VND. Sản phẩm Sữa Chua Nếp Cẩm Tự Nhiên có giá 30.075 VNDBạn tham khảo thông tin sản phẩm tại: https://www.thmilk.vn/san-pham/",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "35 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa Chua TH true YOGURT - Vị ngon thật sự thiên nhiên.",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Sữa chua ăn tự nhiên - Sữa chua tự nhiên - Sản phẩm",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mình thích mẫu người như này, không quá gầy mà nhìn có da thịt khoẻ mạnh",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "35 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "35 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa Chua Xoài - Hạt Chia Tự Nhiên TH true YOGURT - Hoàn toàn từ thiên nhiên.",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa chua ăn tự nhiên - Sữa chua tự nhiên - Sản phẩm",
        "from": "Không xác định",
        "time": "Cách đây Lốc sữa chua ăn táo sơ ri TH true YOGURT 100g x 4 hộp - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bao nhiêu 1 Loc vậy shop",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "33 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo sản phẩm tại: https://www.thtruemart.vn/ bạn nhé.",
        "from": "Không xác định",
        "time": "Cách đây Lốc sữa chua ăn táo sơ ri TH true YOGURT 100g x 4 hộp - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "33 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true MILK LIGHT MEAL là sự lựa chọn phù hợp cho bữa nhẹ của dân văn phòng. Sản phẩm cung cấp vitamin và khoáng chất từ sữa tươi và yến mạch dạng hạt. Với dạng hộp tiện lợi, bạn có thể dễ dàng mang theo mọi lúc, mọi nơi để cung cấp năng lượng cho một ngày dài.",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true MILK LIGHT MEAL - Bữa nhẹ tiện lợi",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xin gia",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "36 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, Thùng sữa tươi tiệt trùng bổ sung ngũ cốc dạng hạt TH true MILK LIGHT MEAL 180ml x 48 hộp có giá khuyến nghị là 589.200 đ bạn nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "36 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Được làm hoàn toàn từ sữa tươi sạch và yến mạch dạng hạt, TH true MILK LIGHT MEAL là sự lựa chọn hoàn hảo cho các bé tiếp thêm năng lượng sau mỗi giờ tan học. ",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhiu thungbn",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "36 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Thùng sữa tươi tiệt trùng bổ sung ngũ cốc dạng hạt TH true MILK LIGHT MEAL 180ml x 48 hộp có giá 589.200 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/.../sua-tuoi-tiet-trung.html",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "36 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true MILK LIGHT MEAL giúp cung cấp năng lượng sau những phút chơi thể thao mệt mỏi. Sản phẩm được làm từ hoàn toàn từ sữa tươi sạch của trang trại TH, kết hợp với yến mạch dạng hạt tạo trải nghiệm “nhai” thật đã.",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Mùa lễ hội Uống TOPKID | Quay số trúng quà xịn - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Có bán lẻ k b",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "36 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Dạ có bạn nhé. Bạn vui lòng tham khảo mua hàng tại: ► Danh sách cửa hàng toàn quốc: https://www.thmilk.vn/he-thong-cua-hang/► Shopee: https://shopee.vn/th_truemart_officialstore… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Mùa lễ hội Uống TOPKID | Đổi thẻ nhận quà xinh - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "36 tuần",
        "from": "Không xác định",
        "time": "Cách đây TH true CHEESE - Vui trọn món ngon - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Được làm hoàn toàn từ sữa tươi sạch của trang trại TH và yến mạch dạng hạt, TH true MILK LIGHT MEAL bổ sung dinh dưỡng cho bữa sáng lành mạnh của cả gia đình. ",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Có sữa kg đường kg sop",
        "from": "Không xác định",
        "time": "Cách đây TH true BUTTER - Vui trọn món ngon - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "34 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, STTT bổ sung ngũ cốc TH true MILK LIGHT MEAL có vị ngọt nhẹ từ công thức ít đường. Sản phẩm có hàm lượng đường bổ sung giảm khoảng 34% so với STTT TH true MILK Có Đường. Để biết thêm về lượng đường bổ sung cũng như các thông tin dinh dưỡng kh… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "34 tuần",
        "from": "Không xác định",
        "time": "Cách đây TH true CHEESE & BUTTER - Vui trọn món ngon - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sản Phẩm Dinh Dưỡng Công Thức Từ Sữa Tươi TH true FORMULA chính thức ra mắt đầu tiên tại thị trường Việt Nam. Mang lại nguồn dinh dưỡng vàng cho trẻ phát triển toàn diện, sản phẩm được làm hoàn toàn từ sữa tươi sạch của trang tại TH kết hợp cùng bộ công thức độc quyền CARE ADVANCE mang lại công dụng:· Hỗ trợ phát triển não bộ: MFGM, DHA, ARA· Tăng cường sức đề kháng: HMO (2’ -FL), Nucleotid, Vitamin và khoáng chất· Hỗ trợ tiêu hóa và hấp thu: Prebiotic (GOS, FOS)… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Kem TH true ICE CREAM - Kem ngon thật sự - Sẻ chia cực chất - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Bộ sản phẩm dinh dưỡng công thức TH true FORMULA",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Đây là sữa bột hay sữa tươi ạ",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "37 tuần",
        "from": "Không xác định",
        "time": "Cách đây Kem TH true ICE CREAM - Kem Ngon Thật Sự - Sẻ Chia Cực Chất - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Kính thưa Quý khách hàng,Bộ sản phẩm dinh dưỡng công thức TH true FORMULA với công thức độc quyền CARE ADVANCE của Viện Dinh dưỡng TH, giúp tăng cường sức đề kháng, tốt cho hệ tiêu hóa và não bộ, tạo nền tảng vững chắc, hỗ trợ sự phát triển khỏe mạnh … Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "37 tuần",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sản phẩm Dinh dưỡng công thức TH true FORMULA sản xuất và nhập khẩu từ Úc với bộ công thức CARE ADVANCE hỗ trợ bé:• Phát triển não bộ cùng bộ dưỡng chất MFGM, DHA, ARA• Tăng cường sức đề kháng với HMO (2’-FL), Nucleotid, Vitamin và khoáng chất• Tiêu hóa hấp thu khỏe cùng bộ đôi Probiotic và Prebiotic.TH true FORMULA là công thức DINH DƯỠNG TOÀN DIỆN cho con trẻ trong giai đoạn vàng phát triển ở những năm tháng đầu đời.… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Tư vấn",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "36 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Huyen Dang chào bạn, page đã inbox bạn, hoặc bạn có thể gọi 1800545443 để được hỗ trợ",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "36 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 1 sản phẩm cùng loại khi mua 8 sản phẩm Sữa Chua Ăn TH true YOGURT bất kỳ từ 15/7 - 15/9/2023.Đến ngay các điểm bán để tận hưởng ưu đãi hấp dẫn từ TH true YOGURT!",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa chua bn ah",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "38 tuần",
        "from": "Không xác định",
        "time": "Cách đây Lốc sữa chua ăn táo sơ ri TH true YOGURT 100g x 4 hộp - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo tại: https://www.thtruemart.vn/.../s-a-chua-an-t-nhien.html",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "38 tuần",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " HƯỚNG DẪN THAM GIA CHƯƠNG TRÌNH \"VUI HÈ CHẤT, TRÚNG HƠN 70.000 QUÀ TẶNG''",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Làm s để lấy đc mã dự thưởng",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "39 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng nhấn chọn \"Đăng ký\" ở bài viết khuyến mại để nhận được ưu đãi nhé.",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "39 tuần",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "VUI HÈ CHẤT TRÚNG HƠN 70.000 QUÀ TẶNG CÙNG SỮA CHUA UỐNG TIỆT TRÙNG TH true YOGURT Giải thưởng “Săn quà chất” 35.000 Giải thẻ nạp điện thoại mệnh giá 20.000 đồng 35.000 Giải thẻ nạp esport Garena mệnh giá 20.000 đồng 50 Giải Tai nghe Sony WH – 1000XM5 … Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Có ship k shop",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "41 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn có thể đặt mua online qua website https://www.thtruemart.vn/, ứng dụng THeLIFE hoặc các ứng dụng giao hàng thực phẩm để được giao hàng tận nơi nhé:► ShopeeFood: http://bit.ly/THtruemart-ShopeeFood► Grabmart: http://bit.ly/THtruemart-Gra… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây TH true YOGURT Mua 8 tặng 1 - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "41 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "VUI HÈ CHẤT TRÚNG HƠN 70.000 QUÀ TẶNG CÙNG SỮA CHUA UỐNG TIỆT TRÙNG TH true YOGURT",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây UỐNG TOPKID - ĐỔI THẺ NHẬN QUÀ XINH - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Vào ko nhập được số đt",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "40 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng liên hệ tổng đài CSKH 1800 545440 bấm phím 4 trong giờ làm việc hành chính để được hỗ trợ thông tin nhé.",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "39 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọn vị mùa hè cùng kem TH true ICE CREAM với những khuyến mại hấp dẫn: Từ ngày 9/6 - 31/7, TH true ICE CREAM tặng bạn 1 TÚI GIỮ NHIỆT CỰC XINH khi mua từ 9 kem hộp 50 G/ 4 kem hộp 180 G/ 9 kem ốc quế/ 9 kem que 52 G/ 9 kem sandwich.",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Túi có mấy màu ạ",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "41 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, túi giữ nhiệt quà tặng của TH true MILK sẽ có 4 màu bạn nhé. Bạn vui lòng ghé các cửa hàng TH true mart để nhận được quà tặng cực xinh của TH nhé.",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "41 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọn vị mùa hè cùng kem TH true ICE CREAM với những khuyến mại hấp dẫn: Từ ngày 9/6 - 31/7, TH true ICE CREAM tặng bạn 1 TÚI GIỮ NHIỆT CỰC XINH khi mua từ 9 kem hộp 50 G/ 4 kem hộp 180 G/ 9 kem ốc quế/ 9 kem que 52 G/ 9 kem sandwich.",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Quà tặng TH true YOGURT - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Còn chương trình tặng túi ko sho",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "40 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, chương trình khuyến mãi sẽ diễn ra từ ngày 09/06 tới ngày 31/07 bạn nhé.",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "39 tuần",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "THU THẬP NGÔI SAO MAY MẮN, SĂN NGAY QUÀ CHẤT",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true FORMULA là nguồn dinh dưỡng được kết hợp từ việc lựa chọn nguồn sữa tươi nguyên liệu từ các trang trại chuẩn quốc tế và sự nỗ lực nghiên cứu không ngừng nghỉ của Viện Dinh Dưỡng TH cùng các tổ chức dinh dưỡng uy tín trên thế giới cho ra đời những công thức phù hợp cho sự phát triển toàn diện trong từng giai đoạn của con trẻ.",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true FORMULA - Dinh dưỡng vàng cho trẻ phát triển toàn diện",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "43 tuần",
        "from": "Không xác định",
        "time": "Cách đây Uống TOPKID - Trúng quà xịn - Đổi quà xinh - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cảm ơn bạn đã quan tâm và ủng hộ TH nhé.",
        "from": "Không xác định",
        "time": "Cách đây 23 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "43 tuần",
        "from": "Không xác định",
        "time": "Cách đây 22 tuần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọn vị mùa hè cùng kem TH true ICE CREAM với những khuyến mại hấp dẫn:  Mua 5 kem cùng loại (Kem Que 52g/Kem Ốc Quế/Kem Sandwich/Kem Hộp 50g) tặng 3 hộp SCUTT TOPKID 110ml  Chương trình áp dụng khi mua hàng trực tiếp tại cửa hàng TH true mart từ 5/5 tới hết 5/6/2023 (hoặc đến khi hết quà tặng, chương trình có thể kết thúc trước thời hạn). Ghé ngay cửa hàng gần nhất để không bỏ lỡ các ưu đãi bạn nhé: https://www.thmilk.vn/he-thong-cua-hang/(*): Vị của sản phẩm tặng sẽ t… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Trọng - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trần An cho bắp ngô",
        "from": "Không xác định",
        "time": "Cách đây 1 năm - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "46 tuần",
        "from": "Không xác định",
        "time": "Cách đây Vy Trần - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Đang hoạt động - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "45 tuần",
        "from": "Không xác định",
        "time": "Cách đây Vy - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọn vị mùa hè cùng kem TH true ICE CREAM với những khuyến mại hấp dẫn:  Mua 5 kem cùng loại (Kem Que 52g/Kem Ốc Quế/Kem Sandwich/Kem Hộp 50g) tặng 3 hộp SCUTT TOPKID 110ml  Chương trình áp dụng khi mua hàng trực tiếp tại cửa hàng TH true mart từ 5/5 tới hết 5/6/2023 (hoặc đến khi hết quà tặng, chương trình có thể kết thúc trước thời hạn). Ghé ngay cửa hàng gần nhất để không bỏ lỡ các ưu đãi bạn nhé: https://www.thmilk.vn/he-thong-cua-hang/(*): Vị của sản phẩm tặng sẽ t… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Bạn đã gửi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Bạn đã gửi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Giao e 2 combo kem với 1thùng trà xanh nhé",
        "from": "Không xác định",
        "time": "Cách đây Bạn đã gửi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "45 tuần",
        "from": "Không xác định",
        "time": "Cách đây Bạn đã gửi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo mua hàng tại:► Website: https://www.thtruemart.vn/► Danh sách cửa hàng: https://www.thmilk.vn/he-thong-cua-hang/",
        "from": "Không xác định",
        "time": "Cách đây Vy - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "45 tuần",
        "from": "Không xác định",
        "time": "Cách đây Vy - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Tận hưởng các dưỡng chất tự nhiên từ yến mạch với sản phẩm Sữa Yến Mạch Vị Tự Nhiên TH true OAT hoàn toàn mới:- Dinh dưỡng lành mạnh từ thiên nhiên- Vị ngọt tự nhiên từ yến mạch, không bổ sung đường- Chất xơ tốt cho tiêu hóa- Omega-6 tốt cho tim mạch… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Bạn đã gửi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true mart - Website thương mại điện tử của TH",
        "from": "Không xác định",
        "time": "Cách đây Bạn đã gửi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cho mình xin giá 1 thùng",
        "from": "Không xác định",
        "time": "Cách đây Bạn đã gửi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "42 tuần",
        "from": "Không xác định",
        "time": "Cách đây Vy - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Thùng sữa yến mạch vị tự nhiên TH true OAT 180ml x 48 hộp có giá 528.000 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/san-pham/th-c-u-ng-t-h-t.html",
        "from": "Không xác định",
        "time": "Cách đây Bạn đã gửi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "42 tuần",
        "from": "Không xác định",
        "time": "Cách đây Bạn đã gửi - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thức uống Sữa lúa mạch TH true CHOCOMALT MISTORI được làm hoàn toàn từ sữa tươi sạch nguyên chất của trang trại TH kết hợp với chiết xuất lúa mạch và cacao tự nhiên. Sữa cacao lúa mạch TH true CHOCOMALT MISTORI cung cấp các chất dinh dưỡng từ sữa tươi như calci, vitamin… cùng chiết xuất lúa mạch tự nhiên mang đến nguồn năng lượng hoàn toàn từ thiên nhiên, cho trẻ luôn sẵn sàng cho mọi hoạt động hàng ngày.---► Website: https://www.thtruemart.vn/► Danh sách cửa hàng: https:… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true mart Official Store - Shopee Mall Online | Shopee Việt Nam",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mình đã sử dụng và rất tuyệt vời",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "45 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cảm ơn bạn đã quan tâm và ủng hộ TH nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "45 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thức uống Sữa lúa mạch TH true CHOCOMALT MISTORI được làm hoàn toàn từ sữa tươi sạch nguyên chất của trang trại TH kết hợp với chiết xuất lúa mạch và … Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thức uống Sữa lúa mạch TH true CHOCOMALT MISTORI được làm hoàn toàn từ sữa tươi sạch nguyên chất của trang trại TH kết hợp với chiết xuất lúa mạch và cacao tự nhiên. Sữa cacao lúa mạch TH true CHOCOMALT MISTORI cung cấp các chất dinh dưỡng từ sữa tươi như calci, vitamin… cùng chiết xuất lúa mạch tự nhiên mang đến nguồn năng lượng hoàn toàn từ thiên nhiên, cho trẻ luôn sẵn sàng cho mọi hoạt động hàng ngày.---► Website: https://www.thtruemart.vn/► Danh sách cửa hàng: https:… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Lốc sữa lúa mạch TH true CHOCOMALT MISTORI 180 ml x 4 hộp",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa này bé mấy tuổi là uống được ạ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "44 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, hiện tại các sản phẩm sữa của TH true MILK dành cho các bé từ 01 tuổi trở lên. Đối với các bé dưới 01 tuổi, có lưu ý đặc biệt về chế độ dinh dưỡng và chăm sóc sức khoẻ, quý khách hàng vui lòng tham vấn bác sĩ / cán bộ y tế để được tư vấn và h… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "44 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thức uống Sữa lúa mạch TH true CHOCOMALT MISTORI được làm hoàn toàn từ sữa tươi sạch nguyên chất của trang trại TH kết hợp với chiết xuất lúa mạch và cacao tự nhiên. Sữa cacao lúa mạch TH true CHOCOMALT MISTORI cung cấp các chất dinh dưỡng từ sữa tươi như calci, vitamin… cùng chiết xuất lúa mạch tự nhiên mang đến nguồn năng lượng hoàn toàn từ thiên nhiên, cho trẻ luôn sẵn sàng cho mọi hoạt động hàng ngày.---► Website: https://www.thtruemart.vn/► Danh sách cửa hàng: https:… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Chương Trình Khuyến Mãi Chi Tiết",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "47 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "47 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 1 sản phẩm cùng loại khi mua 6 sản phẩm Sữa Chua Xoài - Hạt Chia Tự Nhiên và Nếp Cẩm Tự Nhiên TH true YOGURT từ nay đến 31.5.2023.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "43 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cảm ơn bạn đã quan tâm và ủng hộ TH nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "43 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 1 sản phẩm cùng loại khi mua 6 sản phẩm Sữa Chua Xoài - Hạt Chia Tự Nhiên và Nếp Cẩm Tự Nhiên TH true YOGURT từ nay đến 31.5.2023.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa chua này đúng ngon luôn á",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "47 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "47 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 1 sản phẩm cùng loại khi mua 6 sản phẩm Sữa Chua Xoài - Hạt Chia Tự Nhiên và Nếp Cẩm Tự Nhiên TH true YOGURT từ nay đến 31.5.2023.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": ".",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "47 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "47 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 01 sản phẩm cùng loại khi mua 08 sản phẩm Sữa chua uống tiệt trùng TH true YOGURT 180 ml từ nay đến hết 31/05/2023.Đến ngay cửa hàng, siêu thị để tận hưởng khuyến mại vui hè cùng Sữa chua uống tiệt trùng TH true YOGURT!-------------------------► Chi tiết CTKM: https://www.thmilk.vn/khuyen-mai-vui-he-mua-8-tang-1-sua.../► Danh sách cửa hàng TH true mart: https://www.thmilk.vn/he-thong-cua-hang/… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH True Mart - Sữa Từ Thiên Nhiên | Đặt Món & Giao ship tận nơi | shopeefood.vn",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 thùng sửa dâu  giá bao nhiêu",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo sản phẩm tại: https://www.thtruemart.vn/",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa tươi tiệt trùng TH true MILK HILO Giàu Canxi, Ít Béo, Không Lactose: Tăng 70% canxi giúp xương chắc khoẻ, giảm 60% chất béo cho vóc dáng cân đối (*), không lactose giúp dễ tiêu hoá. Sản phẩm phù hợp cho mọi lứa tuổi.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true MILK HILO - Giàu Canxi - Ít Béo - Không Lactose",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mình muốn mua sữa TH.helo ở đâu  ,thị xã an nhơn tỉnh bình định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "51 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn có thể đặt mua online qua website https://www.thtruemart.vn/, ứng dụng THeLIFE hoặc các ứng dụng giao hàng thực phẩm để được giao hàng tận nơi nhé:► ShopeeFood: http://bit.ly/THtruemart-ShopeeFood► Grabmart: http://bit.ly/THtruemart-Gra… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "50 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa tươi tiệt trùng TH true MILK HILO giảm 60% chất béo (*) giúp vóc dáng cân đối và vẫn giữ trọn vị tự nhiên của sữa tươi thông thường. ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true MILK HILO - Giảm 60% chất béo giúp vóc dáng cân đối",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Bé 2-3  tuổi dùng được ko ạ?",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "50 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa Tươi Tiệt Trùng Vị Tự Nhiên TH true MILK HILO có thể sử dụng cho cả gia đình, ngoại trừ trẻ em dưới 01 tuổi. Đặc biệt, sản phẩm thích hợp sử dụng cho cả người bất dung nạp lactose trong sữa. Trong trường hợp dị ứng với thành phần của sữa, bạn vui l… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "50 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Hoàn toàn từ sữa tươi sạch nguyên chất của Trang trại TH - Trang trại bò sữa tập trung ứng dụng công nghệ cao lớn nhất thế giới (*), Sữa tươi sạch TH true MILK giữ vẹn nguyên dưỡng chất và tinh tuý từ thiên nhiên, tốt cho sức khoẻ cả gia đình.Mua ngay tại: ► Hệ thống cửa hàng TH true mart: https://www.thmilk.vn/he-thong-cua-hang/► Website: thtruemart.vn► Ứng dụng: TH eLIFE… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true MILK - Thật  Sự Thiên Nhiên",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "C vẫn còn 3 c",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "51 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "51 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 1 sản phẩm cùng loại khi mua 8 sản phẩm Sữa Chua Ăn TH true YOGURT bất kỳ từ nay đến 31.5.2023.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "bạn ơi cong ch tr mua sc 8 tang 1 k",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "51 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo các chương trình khuyến mại của TH tại: https://www.thmilk.vn/khuyen-mai/",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "51 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Hoàn toàn từ sữa tươi sạch nguyên chất của Trang trại TH - Trang trại bò sữa tập trung ứng dụng công nghệ cao lớn nhất thế giới, Sữa tươi sạch TH true MILK giữ vẹn nguyên dưỡng chất và tinh tuý từ thiên nhiên, tốt cho sức khoẻ cả gia đình.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true MILK - Thật sự thiên nhiên",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thùng loại 110ml giá sao",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "52 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm có giá khuyến nghị là 278.400 đồng/thùng bạn nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "51 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 1 sản phẩm cùng loại khi mua 8 sản phẩm Sữa Chua Ăn TH true YOGURT bất kỳ từ nay đến 31.5.2023.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "48 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, chúng tôi có nhận được thông tin bạn phản hồi về sự cố với sản phẩm. Thay mặt bộ phận Dịch vụ Khách Hàng xin được gửi tới bạn lời xin lỗi chân thành cho những bất tiện mà bạn gặp phải trong quá trình trải nghiệm sản phẩm. Qua hình ảnh mà bạn … Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "47 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Giải pháp hoàn hảo cho sức khỏe với sữa tươi tiệt trùng TH true MILK HILO: Tăng 70% Canxi cho xương chắc khỏe. (*)",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true MILK HILO - Tăng 70% Canxi cho xương chắc khỏe",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Bầu dùng được không ạ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "42 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa Tươi Tiệt Trùng Vị Tự Nhiên TH true MILK HILO có thể sử dụng cho cả gia đình, ngoại trừ trẻ em dưới 01 tuổi. Đặc biệt, sản phẩm thích hợp sử dụng cho cả người bất dung nạp lactose trong sữa.Đối với các mẹ bầu có lưu ý đặc biệt về chế độ dinh dưỡng… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "41 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Tặng ngay 1 sản phẩm cùng loại khi mua 12 sản phẩm Sữa chua uống tiệt trùng TH true YOGURT TOPKID hoặc Nước uống sữa trái cây TH true JUICE milk TOPKID từ nay đến hết 15/06/2023. ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": ".",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cảm ơn bạn đã quan tâm và ủng hộ TH nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa tươi tiệt trùng TH true MILK HILO không chứa lactose giúp tiêu hóa dễ dàng, phù hợp cho cả gia đình.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true MILK HILO - Không Lactose giúp dễ tiêu hóa",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Không xác định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "️Chúc mừng năm mới Quý Mão ️",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Có mở cửa ở hn k v",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Phạm Châu TH true MILK trân trọng thông báo lịch nghỉ Tết Nguyên Đán 2023: Hệ thống TH true MILK nghỉ lễ từ: 17h00 ngày 20.01.2023 (tức ngày 29 Tết) Mở cửa và phục vụ trở lại từ: 08h30 ngày 26.01.2023 (tức ngày 05 Tết)Q… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "SỮA UỐNG LÊN MEN 18 TỶ LỢI KHUẨN - TĂNG CƯỜNG ĐỀ KHÁNG HOÀN TOÀN MỚI",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Từ khi đi đổi quà thì mới biết cửa hàng của TH còn toàn mua siêu thị",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "SỮA UỐNG LÊN MEN 18 TỶ LỢI KHUẨN - TĂNG CƯỜNG ĐỀ KHÁNG HOÀN TOÀN MỚI",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xin giá ạ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Lốc sữa uống lên men có đường TH true YOGURT PROBIOTICS 85ml x 4 chai có giá 22.000 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/.../s-a-chua-u-ng-t-nhien.html",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "[HOÀN TOÀN MỚI] Kem TH true ICE CREAM vị Caramel Cà Phê Muối Tự Nhiên  - Hương vị độc đáo, mới lạ: hòa quyện giữa vị cà phê tự nhiên cùng caramel muối giúp trải nghiệm đậm đà mới lạ đầy hấp dẫn.- Chất kem mềm mịn, giữ được vị thơm ngon đặc trưng và các dưỡng chất có trong sữa tươi.- Thơm ngon tự nhiên, không chất phụ gia và  không chất bảo quản.- Sản xuất theo tiêu chuẩn quốc tế.… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "[HOÀN TOÀN MỚI] Kem TH true ICE CREAM vị Caramel Cà Phê Muối Tự Nhiên  - Hương vị độc đáo, mới lạ: hòa quyện giữa vị cà phê tự nhiên cùng caramel muối giúp trải nghiệm đậm đà mới lạ đầy hấp dẫn.- Chất kem mềm mịn, giữ được vị thơm ngon đặc trưng và các dưỡng chất có trong sữa tươi.- Thơm ngon tự nhiên, không chất phụ gia và  không chất bảo quản.- Sản xuất theo tiêu chuẩn quốc tế.… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chuẩn bị có người sẽ nói :  Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng làm bắp rang bơ caramel thơm ngon cho cuối tuần thêm chill nào bạn.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhờ video hướng dẫn dễ hiểu của Ad TH true MILK mà gia đình mình đã có món bắp rang bơ rất ngon cùng chill tại nhà đây nè Ad ơi! Cảm ơn Ad nhiều nha! Chúc Ad TH true MILK năm mới mọi điều tuyệt vời  sẽ đến ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Panda Huyền Trang Cảm ơn bạn đã quan tâm và ủng hộ chương trình của TH.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "  NƯỚC UỐNG SỮA TRÁI CÂY TH true JUICE milk TOPKID HOÀN TOÀN MỚI  Với mong muốn đem lại nhiều lựa chọn và trải nghiệm sản phẩm đa dạng hơn dành cho trẻ em, TH trân trọng giới thiệu hai sản phẩm mới: Nước uống sữa trái cây TH true JUICE milk TOPKID Cam Tự Nhiên 180 ml và Nước uống sữa trái cây TH true JUICE milk TOPKID Dâu Tự Nhiên 180 ml. Hai sản phẩm này được nghiên cứu và phát triển với các đặc điểm nổi bật: Sữa tươi sạch nguyên chất của trang trại TH Nước trái câ… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Nước uống sữa trái cây JUICE milk TOPKID - Khỏe mạnh tự nhiên, Vị ngon thật đỉnh",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "E xin giá ạ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Thùng Nước uống sữa trái cây TH true JUICE milk TOPKID Tự Nhiên 180 ml có giá 348.000 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thmilk.vn/san-pham/",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thử ngay công thức làm bánh bông lan sô cô la cực dễ cho ngày thêm ngọt ngào nhé. ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xin giá bơ Lạt",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Bơ Lạt Tự Nhiên 200 g có giá 59.400 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thmilk.vn/san-pham/",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Red velvet cupcake cream cheese béo ngậy cực phù hợp cho các tín đồ phô mai cùng TH true BUTTER.  Cùng vào bếp với cuộc thi “Vui trọn món ngon” với TH true BUTTER và TH true CHEESE (Diễn ra từ ngày 10/11 tới 10/12/2022) để rinh ngay cơ hội nhận hàng loạt giải thưởng với tổng giá trị lên tới gần 100 triệu đồng:- 2 Giải ngon Tuyệt Đỉnh: iPAD Pro 11 trị giá 25 triệu đồng- 1 Giải ngon Dinh Dưỡng: Airpod 3 trị giá 4.6 triệu đồng- 75 Giải ngon Tự Nhiên: Voucher trị giá 500 ngà… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Làm bánh Red  Velvet cùng TH true BUTTER",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Không xác định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thưởng thức Brownie ấm nóng, thơm nức mùi bơ với TH true BUTTER bạn nhé. ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Không xác định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Vào bếp với món mỳ ý thơm ngon chưa bao giờ đơn giản đến vậy với TH true BUTTER. Cùng tham gia cuộc thi “Vui trọn món ngon” với TH true BUTTER và TH true CHEESE để rinh những phần quà cực hấp dẫn với tổng giá trị tới gần 100 triệu:- Giải ngon Tuyệt Đỉnh: 2 iPAD Pro 11 trị giá 25 triệu đồng- Giải ngon Dinh Dưỡng: 1 Airpod 3 trị giá 4.6 triệu đồng- Giải ngon Tự Nhiên: 75 Voucher trị giá 500 ngàn đồng khi mua hàng tại TH true mart… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Làm mỳ Ý cùng Bơ TH true BUTTER",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Không xác định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " BÌNH NƯỚC TOPKID ĐỒNG HÀNH CÙNG BÉ TRONGNHỮNG GIỜ HỌC VÀ CHƠI",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Khu vực Hoà Tiến. Đà Nẵng có cửa hàng nào đổi k ạ.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, một số cửa hàng TH true mart hiện nay ở Đà Nẵng là: - TH true mart 165 Đống Đa, Đà Nẵng165 Đống Đa, Phường Thạch Thang, Quận Hải Châu, Đà Nẵng… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " KÍCH THÍCH KHẢ NĂNG TƯ DUY CỦA BÉ VỚI BỘ XẾP HÌNH TOPKID ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhà con đã sưu tập đc rồi ạ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, đối với chương trình Uống TOPKID - Đổi 01 bộ xếp hình TOPKID 3in1, sau khi đã sưu tầm đủ số lượng thẻ Lớp Học Mật Ngữ, quý khách hàng vui lòng tới các cửa hàng TH true mart hoặc điểm bán lẻ có bán sản phẩm có tham gia chương trình để tham gia… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa chua TH true YOGURT được làm hoàn toàn từ sữa tươi sạch nguyên chất, lên men tự nhiên kết hợp cùng nguyên liệu trái cây tự nhiên, mang lại vị ngon thật sự thiên nhiên, cho gia đình vui khỏe mỗi ngày.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thanh Lê  ăn sữa chua loại này nè a. Sữa tươi ko đường bịt. Hiệu này ln",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa chua TH true YOGURT được làm hoàn toàn từ sữa tươi sạch nguyên chất, lên men tự nhiên kết hợp cùng nguyên liệu trái cây tự nhiên, mang lại vị ngon thật sự thiên nhiên, cho gia đình vui khỏe mỗi ngày.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Lốc sữa chua ăn táo sơ ri TH true YOGURT 100g x 4 hộp",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Loại này 1 tuổi ăn được không",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm có thể sử dụng cho trẻ từ 01 tuổi trở lên bạn nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa chua TH true YOGURT được làm hoàn toàn từ sữa tươi sạch nguyên chất, lên men tự nhiên kết hợp cùng nguyên liệu trái cây tự nhiên, mang lại vị ngon thật sự thiên nhiên, cho gia đình vui khỏe mỗi ngày.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Lốc sữa chua ăn táo sơ ri TH true YOGURT 100g x 4 hộp",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Không xác định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "CÙNG THAM GIA MINIGAME: BẮT TRỌN KHOẢNH KHẮC CÙNG TH true RICE Tham gia ngay minigame trên fanpage Nước gạo rang TH true RICE để nhận ngay voucher mua hàng trị giá 200.000 đồng từ TH.Cùng like fanpage và chia sẻ minigame đến bạn bè để nhận được những phần quà vô cùng hấp dẫn từ Nước gạo TH true RICE nhé! #THtrueRICE  #HoànToànTừThiênNhiên",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "MINIGAME: BẮT TRỌN KHOẢNH KHẮC CÙNG TH TRUE RICE ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": ".",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " TƯNG BỪNG MÙA LỄ HỘI - TRÚNG HƠN 50.000 QUÀ CHẤT CÙNG SỮA CHUA UỐNG TIỆT TRÙNG TH true YOGURT",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Không xác định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Thu Hoai Chào bạn, cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " TƯNG BỪNG MÙA LỄ HỘI - TRÚNG HƠN 50.000 QUÀ CHẤT CÙNG SỮA CHUA UỐNG TIỆT TRÙNG TH true YOGURT",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mua ở đâu thì có chương trình này",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Kim Chi Củ Cải Chào bạn, bạn có thể đặt mua online qua website https://www.thtruemart.vn/, ứng dụng THeLIFE hoặc các ứng dụng giao hàng thực phẩm để được giao hàng tận nơi nhé:► ShopeeFood: http://bit.ly/THtruemart-ShopeeFood► Grabmart: http://bit.ly… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " TƯNG BỪNG MÙA LỄ HỘI - TRÚNG HƠN 50.000 QUÀ CHẤT CÙNG SỮA CHUA UỐNG TIỆT TRÙNG TH true YOGURT",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "hi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Tran Sang Chào bạn, bạn muốn mua sản phẩm nào ạ? Bạn vui lòng inbox fanpage để được hỗ trợ đặt hàng nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Mùa lễ hội Uống TOPKID | Quay số trúng quà xịn ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mùa lễ hội Uống TOPKID | Quay số trúng quà xịn",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mình chưa điền thông tin nhận thưởng, giờ vào đâu để điền ạ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cảm ơn bạn đã luôn ủng hộ sản phẩm của TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Mùa lễ hội Uống TOPKID | Đổi thẻ nhận quà xinh  ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mùa lễ hội Uống TOPKID | Đổi thẻ nhận quà xinh",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng TH true CHEESE lan tỏa niềm vui vào bếp - Thêm yêu căn bếp, vui trọn món ngon",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true CHEESE - Vui trọn món ngon",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "@phim",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn muốn mua sản phẩm nào ạ? Bạn vui lòng inbox fanpage để được hỗ trợ đặt hàng nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng TH true BUTTER lan tỏa niềm vui vào bếp - Thêm yêu căn bếp, vui trọn món ngon",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true BUTTER - Vui trọn món ngon",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Xin giá bơ Lạt 200 g",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Bơ Lạt Tự Nhiên 200 g có giá 59.400 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thmilk.vn/san-pham/",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng TH true CHEESE & BUTTER lan tỏa niềm vui vào bếp - Thêm yêu căn bếp, vui trọn món ngon",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "TH true CHEESE & BUTTER - Vui trọn món ngon",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Kem TH true ICE CREAM - Kem ngon thật sự, sẻ chia cực chất ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Kem TH true ICE CREAM - Kem ngon thật sự - Sẻ chia cực chất",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Ăn hết rồi công nhận ngon ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ và đồng hành cùng TH true MILK.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Kem TH true ICE CREAM - Kem ngon thật sự, sẻ chia cực chất Hạnh phúc là khi cùng chia sẻ những điều tích cực, những sự lạc quan, những niềm vui cùng nhau. Là những khoảnh khắc rộn ràng sau giờ học; những phút giây thư giãn cuối ngày bên gia đình… Hay chỉ là những phút giây “me time” rảnh rang tám chuyện rộn rã bên bạn bè với bao bí mật được “bật mí”.Có bạn thân TH true ICE CREAM thì khoảnh khắc và những sẻ chia nào cũng sẽ thật “high”, thêm năng lượng tích cực và sẻ chia c… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Kem TH true ICE CREAM - Kem Ngon Thật Sự - Sẻ Chia Cực Chất",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Thèm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Kem TH true ICE CREAM - Kem ngon thật sự, sẻ chia cực chất ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nguyễn T. Thúy Hiền thèm quá m ơi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã luôn ủng hộ và đồng hành cùng TH true MILK. ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 01 sản phẩm cùng loại khi mua 12 sản phẩm Sữa chua uống tiệt trùng TH true YOGURT Công thức TOPKID 110 ml từ nay đến hết 31/10/2022.Đến ngay cửa hàng, siêu thị để nhận ưu đãi từ sữa chua uống tiệt trùng TH true YOGURT!-------------------------► Danh sách cửa hàng TH true mart: https://www.thmilk.vn/he-thong-cua-hang/► Website: https://www.thtruemart.vn/san-pham.html?cat=44… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ad ơi mua trên tiktok có dc tặng ko?",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 01 sản phẩm cùng loại khi mua 8 sản phẩm Sữa chua uống tiệt trùng TH true YOGURT 180 ml từ nay đến hết 31/10/2022.Đến ngay cửa hàng, siêu thị để nhận ưu đãi từ sữa chua uống tiệt trùng TH true YOGURT!-------------------------► Danh sách cửa hàng TH true mart: https://www.thmilk.vn/he-thong-cua-hang/► Website: https://www.thtruemart.vn/san-pham.html?cat=44… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Giá sao vậy s",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm LỐC SỮA CHUA UỐNG TIỆT TRÙNG 180 ML X 4 HỘP có giá 30.500 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/.../s-a-chua-u-ng-t-nhien.html",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa chua TH true YOGURT nay đã có vị Táo - Sơ ri tự nhiên hoàn toàn mới!Thưởng thức vị ngon độc đáo từ sản phẩm sữa chua ăn TH true YOGURT mới nhất, được làm từ sữa tươi sạch kết hợp mứt Táo – Sơ Ri Tự Nhiên mang tới trải nghiệm tuyệt hảo: ngon, mới lạ, hấp dẫn. ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chúc cả nhà fb ngủ ngon nhé",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa chua TH true YOGURT nay đã có vị Táo - Sơ ri tự nhiên hoàn toàn mới!Thưởng thức vị ngon độc đáo từ sản phẩm sữa chua ăn TH true YOGURT mới nhất, được làm từ sữa tươi sạch kết hợp mứt Táo – Sơ Ri Tự Nhiên mang tới trải nghiệm tuyệt hảo: ngon, mới lạ, hấp dẫn. ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Lốc sữa chua ăn táo sơ ri TH true YOGURT 100g x 4 hộp",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ngon nha, khen",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 01 sản phẩm cùng loại khi mua 12 sản phẩm Sữa chua uống tiệt trùng TH true YOGURT Công thức TOPKID 110 ml từ nay đến hết 31/10/2022.Đến ngay cửa hàng, siêu thị để nhận ưu đãi từ sữa chua uống tiệt trùng TH true YOGURT!-------------------------► Danh sách cửa hàng TH true mart: https://www.thmilk.vn/he-thong-cua-hang/► Website: https://www.thtruemart.vn/san-pham.html?cat=44… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Sữa tươi TH true Milk ít đường giá bao nhiêu một thùng zay shop",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Thùng sữa Tươi Tiệt Trùng Ít Đường 110 ml có giá 259.200 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/.../sua-tuoi-tiet-trung.html",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 01 sản phẩm cùng loại khi mua 8 sản phẩm Sữa chua uống tiệt trùng TH true YOGURT 180 ml từ nay đến hết 31/10/2022.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mình hỏi mua sữa tươi th ít đường",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm THÙNG SỮA TƯƠI TIỆT TRÙNG ÍT ĐƯỜNG 1 L X 12 HỘP có giá 412.800 VND. Bạn tham khảo thông tin sản phẩm tại: https://www.thtruemart.vn/.../thung-s-a-tuoi-ti-t-trung...",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Ghé GS25 mua 2 kem TH true ICE CREAM, rinh ngay quà tặng hấp dẫn ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Ghé GS25 mua 2 kem TH true ICE CREAM, rinh ngay quà tặng hấp dẫn ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 1 sản phẩm cùng loại khi mua 8 sản phẩm Sữa Chua Ăn, Sữa Chua Ăn TOPKID, Sữa Chua Uống Thanh Trùng TH true YOGURT bất kỳ từ nay đến 15.9.2022.Đến ngay cửa hàng, siêu thị để nhận ưu đãi từ TH true YOGURT!-------------------------► Danh sách cửa hàng TH true mart: https://www.thmilk.vn/he-thong-cua-hang/► Website: https://www.thtruemart.vn/san-pham/s-a-chua-t-nhien-x.html… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Kem có km ko sh ơi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, trong khoảng thời gian từ 01/07 – 31/07, khi mua 4 kem TH true ICE CREAM trên các ứng dụng giao hàng Grab, ShopeeFood, Baemin, Loship, NGON bạn sẽ được tặng 1 kem TH true ICE CREAM cùng loại nhé. Bạn có thể tham khảo thêm các chương trình khu… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhận ngay 1 sản phẩm cùng loại khi mua 8 sản phẩm Sữa Chua Ăn, Sữa Chua Ăn TOPKID, Sữa Chua Uống Thanh Trùng TH true YOGURT bất kỳ từ nay đến 15.9.2022.Đến ngay cửa hàng, siêu thị để nhận ưu đãi từ TH true YOGURT!-------------------------► Danh sách cửa hàng TH true mart: https://www.thmilk.vn/he-thong-cua-hang/► Website: https://www.thtruemart.vn/san-pham/s-a-chua-t-nhien-x.html… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "TH true YOGURT Mua 8 tặng 1",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cho  em hoi  sua chua  nay  tre  duoi  2tuoi  dug  dk  chua  ạ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, sản phẩm Sữa chua TH true YOGURT có thể sử dụng cho trẻ từ 1 tuổi trở lên nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "UỐNG TOPKID - ĐỔI THẺ NHẬN QUÀ XINHNhanh tay sưu tầm thẻ Đổi quà trong mỗi lốc Sữa chua uống tiệt trùng TH true YOGURT TOPKID 110 ml để có cơ hội đổi được những quà tặng hấp dẫn sau: 8 thẻ Đổi quà đổi 1 hộp bút 12 thẻ Đổi quà đổi 1 bộ xếp hình Chi tiết chương trình xem tại:  https://quatangtopkid.thmilk.vn/",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "UỐNG TOPKID - ĐỔI THẺ NHẬN QUÀ XINH",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Đổi ở đâu b ơi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, khi đã sưu tầm đủ số lượng thẻ Đổi quà theo thể lệ của chương trình: \"8 thẻ Đổi quà đổi được 01 hộp bút\"; \"12 thẻ Đổi quà đổi được 01 bộ xếp hình\", bạn vui lòng đến cửa hàng TH true mart gần nhất để đổi quà hoặc liên hệ điểm bán hàng có bán s… Xem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " RINH NGÀN QUÀ TẶNG CÙNG KEM TH TRUE ICE CREAM ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ê",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo thông tin chương trình khuyến mãi tại đây nhé: https://kemngontrungqua.thmilk.vn/",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " RINH NGÀN QUÀ TẶNG CÙNG KEM TH TRUE ICE CREAM ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Hop lon",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn tham khảo thông tin sản phẩm tại đây nhé: https://www.thtruemart.vn/.../kem-tu-sua-tuoi-nguyen-chat...",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhập hội chơi hè, mua ngay Sữa chua uống tiệt trùng TH true YOGURT để có cơ hội trúng hơn 50,000 quà tặng cực chất chỉ với 03 bước:  Tìm thẻ dự thưởng trong mỗi lốc  Nhập mã dự thưởng trên website https://quatangyogurt.thmilk.vn  Quay và nhận thưởng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " Hà Thành",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn tham khảo thông tin chương trình khuyến mãi tại đây nhé: https://www.thmilk.vn/th-true-yogurt-nhap-hoi-choi-he.../",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nhập hội chơi hè, mua ngay Sữa chua uống tiệt trùng TH true YOGURT để có cơ hội trúng hơn 50,000 quà tặng cực chất chỉ với 03 bước:  Tìm thẻ dự thưởng trong mỗi lốc  Nhập mã dự thưởng trên website https://quatangyogurt.thmilk.vn  Quay và nhận thưởng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Quà tặng TH true YOGURT",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "B",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn tham khảo thông tin chương trình khuyến mãi tại đây nhé: https://www.thmilk.vn/th-true-yogurt-nhap-hoi-choi-he.../",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nếu bạn thuộc team yêu biển thì hẳn sẽ muốn thử vị kem dừa tự nhiên TH true ICE CREAM. Với miếng mứt dừa sần sật và lớp kem mềm mịn giúp sảng khoái tức thì giữa hè oi ả.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Không xác định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn tham khảo thông tin sản phẩm tại đây nhé: https://www.thtruemart.vn/.../kem-tu-sua-tuoi-nguyen-chat...",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": " MINIGAME SƯU TẦM THẺ - VIẾT LỜI HAY – TRÚNG QUÀ NGAY ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Tuyệt vời nhỉ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng tham khảo thông tin chương trình khuyến mãi tại đây nhé: https://www.thmilk.vn/uong-topkid-trung-qua-xin-doi-qua.../",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cùng TH TOPKID khám phá có gì thú vị trong các món quà tặng của chương trình \"Uống TOPKID - Trúng quà xịn - Đổi quà xinh\"\nĐể sở hữu những món quà siêu chất này, hãy tham gia chương trình Quay thưởng trúng quà xịn và Đổi thẻ nhận quà xinh ngay thôi nào!\nChi tiết chương trình xem tại: https://quatangtopkid.thmilk.vn/",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Uống TOPKID - Trúng quà xịn - Đổi quà xinh",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mở ở đâu rứa chị",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "23 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn vui lòng xem thông chi tiết chương trình tại: https://quatangtopkid.thmilk.vn/",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "22 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Để hưởng ứng Ngày Môi trường thế giới 05/06, tiếp tục khuyến khích khách hàng chung tay bảo vệ môi trường và lan tỏa lối sống xanh, thứ bảy và chủ nhật (04 - 05/06) này, TH sẽ đem lại nhiều lựa chọn quà tặng hơn cho khách hàng tham gia chương trình thu gom vỏ hộp sữa. Khi mang từ 20 vỏ hộp sữa TH đã làm sạch theo hướng dẫn tới cửa hàng để thu gom, bạn không chỉ nhận được 01 sổ tay tái chế, mà còn được lựa chọn thêm 01 trong 04 món quà đặc biệt như hình bên dưới đấy.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "Trọng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Mình vừa ra ngày cuối cùng vẫn có quà. Vui quá là vui!!! ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, cảm ơn bạn đã quan tâm tới chương trình \"Thu gom vỏ hộp, lan tỏa sống xanh\".",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 năm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Vy Trần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Đang hoạt động",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Vy",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bạn đã gửi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bạn đã gửi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bạn đã gửi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bạn đã gửi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Không xác định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Vy",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Vy",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bạn đã gửi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bạn đã gửi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bạn đã gửi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Vy",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bạn đã gửi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bạn đã gửi",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Thu Apr 11 2024 21:52:44 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    }
];

//write data to file csv
fs.writeFileSync('TH true MILK.csv', 'comment,from,time,status\n');
data.forEach((item) => {
    fs.appendFileSync('TH true MILK.csv', `${item.comment},${item.from},${item.time},${item.status}\n`);
});
console.log('Write file success!');