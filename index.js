const heart = document.querySelectorAll(".middle .feed .uil-heart");

heart.forEach((he) => {
  he.addEventListener("click", () => {
    he.style.backgroundColor = "red";
    he.style.borderRadius = 50 + "%";
  });
});

const menuItem = document.querySelectorAll(".menu-item");
const messageNoti = document.querySelector("#messages");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.getElementById("message-search");

const theme = document.querySelector("#theme");
const modal = document.querySelector(".customize-theme");

const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

const colorPallete = document.querySelectorAll(".choose-color span");

const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

const changeActiveItem = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id !== "noti") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";

      document.querySelector(".noti-count").style.display = "none";
    }
  });
});

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage);

messageNoti.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNoti.querySelector(".noti-count").style.display = "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

const openThemeModal = function () {
  modal.style.display = "grid";
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    modal.style.display = "none";
  }
};
modal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

const removeActive = () => {
  fontSizes.forEach((font) => {
    font.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeActive();
    let fontSizes;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSizes = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSizes = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSizes = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSizes = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSizes = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSizes;
  });
});

const removeActiveBg = () => {
  colorPallete.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPallete.forEach((color) => {
  color.addEventListener("click", () => {
    removeActiveBg();
    let primary;
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
      color.classList.add("active");
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
      color.classList.add("active");
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
      color.classList.add("active");
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
      color.classList.add("active");
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
      color.classList.add("active");
    }
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

function changeBg() {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

bg1.addEventListener("click", () => {
  bg1.classList.add("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBg();
});
