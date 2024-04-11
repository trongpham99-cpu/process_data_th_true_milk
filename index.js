const comments = document.getElementsByClassName("xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs");
const owners = document.getElementsByClassName("x193iq5w xeuugli x13faqbe x1vvkbs xlh3980 xvmahel x1n0sxbx x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x676frb x1pg5gke x1sibtaa x1s688f xzsf02u");
const currentTime = new Date();

const countComment = comments.length;
const hubReaction = document.getElementsByClassName("xrbpyxo x6ikm8r x10wlt62 xlyipyv x1exxlbk")
let array = [];

for (let i = 0; i < comments.length; i++) {
    const textComment = comments[i]?.innerText || "Không xác định";
    const from = owners[i]?.innerText || "Không xác định";
    const time = document.getElementsByClassName("html-span xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs")[i]?.innerText || "Không xác định";

    const obj = {
        comment: textComment,
        from: from,
        time: `Cách đây ${time} - được tính từ ${currentTime}`
    };

    array.push(obj);
}

// Using regex for sentiment analysis (positive, negative, neutral) from Vietnamese comments
const positive = /tuyệt vời|tốt|thích|đẹp|ngon|chất|vui|tươi|sạch|sáng|sống|khỏe/gi;
const negative = /tệ|tồi|xấu|chán|đắng|dở/gi;

const result = [];
array.forEach((item) => {
    let status = "";
    if (positive.test(item.comment)) {
        status = "Positive";
    } else if (negative.test(item.comment)) {
        status = "Negative";
    } else {
        status = "Neutral";
    }

    const obj = {
        ...item,
        status: status
    };

    result.push(obj);
});

console.log(result);
