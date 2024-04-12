const comments = document.getElementsByClassName("xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs");
const owners = document.getElementsByClassName("x193iq5w xeuugli x13faqbe x1vvkbs xlh3980 xvmahel x1n0sxbx x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x676frb x1pg5gke x1sibtaa x1s688f xzsf02u");
const currentTime = new Date();

const hubReaction = document.getElementsByClassName("xrbpyxo x6ikm8r x10wlt62 xlyipyv x1exxlbk")
const hubShare = document.getElementsByClassName("x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x1ypdohk xdl72j9 x2lah0s xe8uvvx x2lwn1j xeuugli xggy1nq x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz xjyslct xjbqb8w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1heor9g xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 xt0b8zv x1hl2dhg x1ja2u2z")
const countReactPost = hubReaction[0]?.innerText || "Không xác định";
const countCommentPost = comments.length;
const countSharePost = hubShare[0]?.innerText || "Không xác định";
const contentPost = document.getElementsByClassName("x1iorvi4 x1pi30zi x1l90r2v x1swvt13")[0]?.innerText || "Không xác định";

const postDetail = {
    countReactPost: countReactPost,
    countCommentPost: countCommentPost,
    countSharePost: countSharePost,
    contentPost: contentPost
}

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
let sumPositive = 0;
let sumNegative = 0;
let sumNeutral = 0;

array.forEach((item) => {
    let status = "";
    if (positive.test(item.comment)) {
        status = "Positive";
        sumPositive++;
    } else if (negative.test(item.comment)) {
        status = "Negative";
        sumNegative++;
    } else {
        status = "Neutral";
        sumNeutral++;
    }

    const obj = {
        ...item,
        status: status
    };

    result.push(obj);

    postDetail.sumPositive = sumPositive;
    postDetail.sumNegative = sumNegative;
    postDetail.sumNeutral = sumNeutral;
});

console.log(result);
console.log(postDetail);