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

// landing page button scrolling

function scrollToDiv(elementId) {
  document.getElementById(elementId).scrollIntoView();
}

function scrollToStart() {
  window.scrollTo(0, 0);
}

function date() {
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsOfYear = [
    "Janruary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = monthsOfYear[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  let postDate = "";
  const day2 = day.toString();
  if (
    ["0", "4", "5", "6", "7", "8", "9"].includes(day2.charAt(day2.length - 1))
  ) {
    postDate = "th";
  } else if (day2.charAt(day2.length - 1) == "1") {
    postDate = "st";
  } else if (day2.charAt(day2.length - 1) == "2") {
    postDate = "nd";
  } else if (day2.charAt(day2.length - 1) == "3") {
    postDate = "rd";
  }
  document.getElementById(
    "daye"
  ).innerHTML = `${dayOfWeek}, ${month} ${day}${postDate}, ${year}`;
}
date();
