const screens = [
  {
    id: "entry",
    title: "00 功能入口",
    file: "00-entry.png",
    hotspots: [
      { label: "进入购物闺蜜", to: "home", x: 42, y: 92, w: 17, h: 6 },
      { label: "打开加购提醒", to: "home", x: 3, y: 83, w: 94, h: 6 },
    ],
  },
  {
    id: "home",
    title: "01 首页",
    file: "01-home.png",
    hotspots: [
      { label: "问 520 约会穿搭", to: "ready", x: 10, y: 45, w: 38, h: 5 },
      { label: "问小个子穿搭", to: "ready", x: 10, y: 51, w: 41, h: 5 },
      { label: "问 T 恤怎么穿", to: "ready", x: 10, y: 57, w: 54, h: 5 },
      { label: "找常聊姐妹", to: "grouping", x: 5, y: 82, w: 76, h: 6 },
      { label: "输入问题", to: "ready", x: 4, y: 88, w: 92, h: 8 },
    ],
  },
  {
    id: "ready",
    title: "02 准备提问",
    file: "02-ready.png",
    hotspots: [
      { label: "发送问题", to: "asked", x: 74, y: 87, w: 23, h: 7 },
      { label: "收起键盘并发送", to: "asked", x: 4, y: 33, w: 92, h: 27 },
    ],
  },
  {
    id: "asked",
    title: "03 提出问题",
    file: "03-asked.png",
    hotspots: [
      { label: "继续", to: "thinking", x: 4, y: 30, w: 92, h: 45 },
      { label: "输入追问", to: "thinking", x: 4, y: 88, w: 92, h: 8 },
    ],
  },
  {
    id: "thinking",
    title: "04 思考动画",
    file: "04-thinking.png",
    hotspots: [
      { label: "跳过等待", to: "grouping", x: 4, y: 24, w: 92, h: 54 },
    ],
  },
  {
    id: "grouping",
    title: "05 拉群动画",
    file: "05-grouping.png",
    hotspots: [
      { label: "进入讨论组", to: "groupChat", x: 4, y: 26, w: 92, h: 52 },
    ],
  },
  {
    id: "groupChat",
    title: "06 匹配 AI 主理人",
    file: "06-group-chat.png",
    hotspots: [
      { label: "查看最终建议", to: "result", x: 39, y: 83, w: 22, h: 6 },
      { label: "继续聊天", to: "result", x: 4, y: 88, w: 92, h: 8 },
      { label: "回到首页", to: "home", x: 2, y: 6, w: 10, h: 5 },
    ],
  },
  {
    id: "result",
    title: "07 回答结果",
    file: "07-result.png",
    hotspots: [
      { label: "换个人推荐", to: "groupChat", x: 75, y: 19, w: 20, h: 5 },
      { label: "查看商品穿搭", to: "outfit", x: 8, y: 62, w: 82, h: 24 },
      { label: "AI 试衣", to: "upload", x: 4, y: 91, w: 30, h: 7 },
      { label: "查看衣橱记忆", to: "closet", x: 36, y: 91, w: 27, h: 7 },
      { label: "继续问闺蜜", to: "home", x: 65, y: 91, w: 31, h: 7 },
    ],
  },
  {
    id: "closet",
    title: "08 AI 衣橱整理",
    file: "08-closet.png",
    hotspots: [
      { label: "看穿搭推荐", to: "outfit", x: 51, y: 48, w: 42, h: 19 },
      { label: "整理收藏商品", to: "outfit", x: 7, y: 48, w: 42, h: 19 },
      { label: "去 AI 试衣", to: "upload", x: 4, y: 91, w: 92, h: 7 },
      { label: "回到首页", to: "home", x: 3, y: 6, w: 10, h: 5 },
    ],
  },
  {
    id: "outfit",
    title: "09 AI 穿搭推荐",
    file: "09-outfit.png",
    hotspots: [
      { label: "查看购买链接", to: "result", x: 51, y: 48, w: 39, h: 6 },
      { label: "试穿这套", to: "upload", x: 6, y: 37, w: 88, h: 23 },
      { label: "换一套 Look", to: "tryon", x: 6, y: 63, w: 88, h: 13 },
      { label: "回到建议", to: "result", x: 3, y: 6, w: 10, h: 5 },
    ],
  },
  {
    id: "upload",
    title: "10 试衣上传照片",
    file: "10-upload.png",
    hotspots: [
      { label: "上传照片", to: "tryon", x: 6, y: 33, w: 88, h: 47 },
      { label: "回到穿搭", to: "outfit", x: 3, y: 6, w: 10, h: 5 },
    ],
  },
  {
    id: "tryon",
    title: "11 试衣效果",
    file: "11-tryon.png",
    hotspots: [
      { label: "选择法式轻松感", to: "outfit", x: 6, y: 46, w: 28, h: 28 },
      { label: "选择韩系温柔风", to: "outfit", x: 35, y: 46, w: 28, h: 28 },
      { label: "选择微运动少女感", to: "outfit", x: 64, y: 46, w: 28, h: 28 },
      { label: "重新上传", to: "upload", x: 3, y: 6, w: 10, h: 5 },
    ],
  },
];

const screenImage = document.querySelector("#screenImage");
const screenWrap = document.querySelector("#screenWrap");
const phone = document.querySelector(".phone");
const hotspots = document.querySelector("#hotspots");
const prevButton = document.querySelector("#prevScreen");
const nextButton = document.querySelector("#nextScreen");
const replayButton = document.querySelector("#replayFlow");

let currentIndex = 0;

function setScreen(indexOrId, options = {}) {
  const nextIndex =
    typeof indexOrId === "string"
      ? screens.findIndex((screen) => screen.id === indexOrId)
      : indexOrId;

  if (nextIndex < 0) return;
  currentIndex = (nextIndex + screens.length) % screens.length;
  const screen = screens[currentIndex];

  screenWrap.classList.add("is-switching");
  window.setTimeout(() => {
    screenImage.src = `./assets/shopping-girlfriend/${screen.file}`;
    screenImage.alt = screen.title;
    renderHotspots(screen);
  }, options.instant ? 0 : 120);
}

function renderHotspots(screen) {
  hotspots.innerHTML = "";
  screen.hotspots.forEach((spot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hotspot";
    button.setAttribute("aria-label", spot.label);
    button.style.left = `${spot.x}%`;
    button.style.top = `${spot.y}%`;
    button.style.width = `${spot.w}%`;
    button.style.height = `${spot.h}%`;
    button.addEventListener("click", () => setScreen(spot.to));
    hotspots.appendChild(button);
  });
}

function updatePhoneRatio() {
  if (!screenImage.naturalWidth || !screenImage.naturalHeight) return;
  phone.style.setProperty(
    "--phone-ratio",
    `${screenImage.naturalWidth} / ${screenImage.naturalHeight}`,
  );
  screenWrap.classList.remove("is-switching");
}

function step(offset) {
  setScreen(currentIndex + offset);
}

function replayFlow() {
  setScreen("home");
}

prevButton.addEventListener("click", () => step(-1));
nextButton.addEventListener("click", () => step(1));
replayButton.addEventListener("click", replayFlow);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") step(-1);
  if (event.key === "ArrowRight") step(1);
  if (event.key.toLowerCase() === "r") replayFlow();
});

screenImage.addEventListener("load", updatePhoneRatio);
window.addEventListener("resize", updatePhoneRatio);

setScreen("entry", { instant: true });
