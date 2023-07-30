//写脚本实现具体功能

//1.每秒都执行一次
setInterval(setClock, 1000);

//2.获取dom元素
const hHand = document.querySelector("[data-hour-hand]");
const mHand = document.querySelector("[data-min-hand]");
const sHand = document.querySelector("[data-s-hand]");

function setRotation(element, ratio) {
  element.style.setProperty("--rotation", ratio * 360);
}

function setClock() {
  const curDate = new Date();

  const sRatio = curDate.getSeconds() / 60;
  const mRatio = (sRatio + curDate.getMinutes()) / 60;
  const hRatio = (mRatio + curDate.getHours()) / 12;
  //分别设置这些比率
  setRotation(sHand, sRatio);
  setRotation(mHand, mRatio);
  setRotation(hHand, hRatio);
}
//加不加都行，不加要过1s，才有时钟效果
setClock();
