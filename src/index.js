import "../css/style.css";
// import imgHeader from "../images/desktop/image-header.jpg";
// import imgLogo from "../images/logo.svg";

// console.log("i'm  here");
const content = document.querySelector(".content");

const html = `
  <header class="header">
    <div class="header__logo">
      <img src="../images/logo.svg" alt="Logo" class="logo" />
    </div>

    <div class="header__text">
      <h1 class="heading">
      	 WE ARE CREATIVE
      </h1>
      <img
        src="../images/icon-arrow-down.svg"
        alt="arrow donw icon"
        class="arrow"/>
  </header>
`;
content.insertAdjacentHTML("afterbegin", html);
