
const quotes = [
  "Ba năm áo trắng trôi qua rất nhanh, ngoảnh lại mới biết đó là cả một thời thanh xuân.",
  "Thanh xuân không dài, nhưng kỉ niệm thì đủ để nhớ suốt đời.",
  "Có những ngày tưởng như bình thường, sau này lại trở thành hồi ức.",
  "Chúng ta từng ngồi chung một lớp, rồi sau này đi khắp bốn phương.",
  "Cấp ba khép lại, nhưng tình bạn thì không có hạn sử dụng."
];

let index = 0;
const quoteEl = document.getElementById("quote");

function changeQuote() {
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    quoteEl.textContent = quotes[index];
    quoteEl.style.opacity = 1;
    index = (index + 1) % quotes.length;
  }, 400);
}

changeQuote();
setInterval(changeQuote, 4000);

/* DARK MODE */
function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark") ? "on" : "off"
  );
}

if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark");
}

/* COLOR THEME */
const panel = document.getElementById("colorPanel");

function toggleColorPanel() {
  panel.classList.toggle("show");
}

function setThemeColor(header, bg) {
  document.documentElement.style.setProperty("--header", header);
  document.documentElement.style.setProperty("--bg", bg);
  localStorage.setItem("themeHeader", header);
  localStorage.setItem("themeBg", bg);
}

const savedHeader = localStorage.getItem("themeHeader");
const savedBg = localStorage.getItem("themeBg");

if (savedHeader && savedBg) {
  document.documentElement.style.setProperty("--header", savedHeader);
  document.documentElement.style.setProperty("--bg", savedBg);
}
