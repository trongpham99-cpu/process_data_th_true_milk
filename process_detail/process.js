const fs = require('fs');
const data = [
    {
        "comment": "Nhận ngay 01 sản phẩm cùng loại khi mua 08 sản phẩm Sữa chua uống tiệt trùng TH true YOGURT 180 ml từ nay đến hết 15/05/2024.",
        "from": "Nguyễn Ngọc Hường",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Có sữa này dành cho bà bầu tiểu đường thai kỳ k ạ",
        "from": "TH true MILK",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "3 tuần",
        "from": "Loan Anh",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, hiện tại các sản phẩm sữa của TH dành cho tất cả các thành viên trong gia đình, các bé từ 01 tuổi trở lên. Nếu quý khách hàng có lưu ý đặc biệt về chế độ dinh dưỡng và chăm sóc sức khoẻ, quý khách hàng vui lòng tham vấn bác sĩ / cán bộ y tế để được tư vấn và hướng dẫn cụ thể trước khi sử dụng.",
        "from": "Phước Tường",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "3 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Nguyễn Ngọc Hường\nuống sữa th ko đường. Mình cũng đang uống",
        "from": "Tuyết Minh",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "3 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ib",
        "from": "Lien Ngo",
        "time": "Cách đây 1 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "Thanh Béoo",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn muốn mua sản phẩm nào ạ? Bạn vui lòng inbox fanpage để được hỗ trợ đặt hàng nhé.",
        "from": "Nguyên Phương",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "4 tuần",
        "from": "Phan Nhu",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ib giá",
        "from": "Thuý Phạm",
        "time": "Cách đây 5 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "Bya Ery",
        "time": "Cách đây 5 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn cần hỗ trợ thông tin gì vậy ạ?",
        "from": "Mừng Trần",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bảo nhìu một chay",
        "from": "Nguyễn Nga",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "1 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Th ít đường 180 bnhiu 1t vậy ạ",
        "from": "Diệp Lục",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ib",
        "from": "Hoa Lê",
        "time": "Cách đây 5 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "3 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 5 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ib",
        "from": "Lê Vân",
        "time": "Cách đây 5 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "3 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 5 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Không xác định",
        "from": "Nhanh Tran",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 3 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ib",
        "from": "Dinh Gang",
        "time": "Cách đây 2 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 tuần",
        "from": "TH true MILK",
        "time": "Cách đây 1 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Có cửa hàng TH ở đà lạt k ạ",
        "from": "Nguyễn Kiều",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "Dư Trần",
        "time": "Cách đây 4 tuần - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Một số cửa hàng TH true mart hiện nay ở Đà Lạt là:\n- TH true mart Phan Đình Phùng Lâm Đồng\n108 Phan Đình Phùng, P2, Đà Lạt, Lâm Đồng…\nXem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Bn 1 thùng",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "3 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn muốn mua sản phẩm nào ạ? Bạn vui lòng inbox fanpage để được hỗ trợ đặt hàng nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "3 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Có ở đaklak k ạ",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn có thể đặt mua online qua website https://www.thtruemart.vn/, ứng dụng THeLIFE hoặc các ứng dụng giao hàng thực phẩm để được giao hàng tận nơi nhé:\n► ShopeeFood: http://bit.ly/THtruemart-ShopeeFood\n► Grabmart: http://bit.ly/THtruemart-Gra…\nXem thêm",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "3 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Phạm Hương",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Cảm ơn bạn đã quan tâm và ủng hộ TH nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ib",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn cần hỗ trợ thông tin gì vậy ạ?",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "5 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ib",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "3 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn muốn mua sản phẩm nào ạ? Bạn vui lòng inbox fanpage để được hỗ trợ đặt hàng nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "3 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Ib",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "2 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Chào bạn, bạn muốn mua sản phẩm nào ạ? Bạn vui lòng inbox fanpage để được hỗ trợ đặt hàng nhé.",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Positive"
    },
    {
        "comment": "1 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "Không xác định",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "2GB",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    },
    {
        "comment": "4 tuần",
        "from": "Không xác định",
        "time": "Cách đây Không xác định - được tính từ Fri Apr 12 2024 09:22:16 GMT+0700 (Indochina Time)",
        "status": "Neutral"
    }
];

const postDetail = {
    "countReactPost": "2,2K",
    "countCommentPost": 59,
    "countSharePost": "51 bình luận",
    "contentPost": "Nhận ngay 01 sản phẩm cùng loại khi mua 08 sản phẩm Sữa chua uống tiệt trùng TH true YOGURT 180 ml từ nay đến hết 15/05/2024.\nĐến ngay các cửa hàng bán lẻ, siêu thị, cửa hàng TH true mart và kênh thương mại điện tử để tận hưởng khuyến mại cùng Sữa chua uống tiệt trùng TH true YOGURT!",
    "sumPositive": 5,
    "sumNegative": 0,
    "sumNeutral": 54
};

fs.writeFileSync('TH_true_MILK_comments.csv', 'comment,from,time,status\n');
data.forEach((item) => {
    fs.appendFileSync('TH_true_MILK_comments.csv', `${item.comment},${item.from},${item.time},${item.status}\n`);
});

fs.writeFileSync('TH_true_MILK_post_detail.csv', 'Count React,Count Comment,Count Share,Content,Sum Positive,Sum Negative,Sum Neutral\n');
fs.appendFileSync('TH_true_MILK_post_detail.csv', `${postDetail.countReactPost},${postDetail.countCommentPost},${postDetail.countSharePost},${postDetail.contentPost},${postDetail.sumPositive},${postDetail.sumNegative},${postDetail.sumNeutral}\n`);

console.log('Write file success!');