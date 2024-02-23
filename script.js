let count = 0;

function toggleMobileNavbar() {
  let mobileBar = document.getElementById("float-bar");
  let mobileNavBar = document.querySelector("nav.mobile-navbar");

  if (count == 0) {
    mobileBar.style.display = "block";
    mobileNavBar.style.backgroundColor = "rgb(24, 28, 37)";
    count = 1;
  } else if (mobileBar.style.display == "none") {
    mobileBar.style.display = "block";
    mobileNavBar.style.backgroundColor = "rgb(24, 28, 37)";
  } else {
    mobileBar.style.display = "none";
    mobileNavBar.style.backgroundColor = "rgba(16, 24, 30, 0.8)";
  }
}

document.createElement;

// copy button on contact page

let copyText = document.getElementById("copy-text");
let copyButton = document.getElementById("copy-action");
let toolTip = document.querySelector("em.copy-text-box");
let toolTipText = toolTip.getAttribute("data-tooltip");

copyButton.onclick = function () {
  navigator.clipboard.writeText("aarishkod@gmail.com");
  toolTip.setAttribute("data-tooltip", "Copied");
  setTimeout(() => {
    toolTip.setAttribute("data-tooltip", "Copy email");
  }, 2000);
};
