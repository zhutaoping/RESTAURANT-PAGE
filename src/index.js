import "../css/style.css";
// import imgHeader from "../images/desktop/image-header.jpg";
// import imgLogo from "../images/logo.svg";

// console.log("i'm  here");
const content = document.querySelector(".content");

const html = `
  <header class="header">
        <div class="navbar">
          <div class="logo">
            <img src="../images/logo.svg" alt="Logo" class="logo" />
          </div>

          <nav class="menu">
            <ul>
              <li><a href="about">About</a></li>
              <li><a href="services">Services</a></li>
              <li><a href="projects">Projects</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div class="header__text">
          <h1 class="heading">
           WE ARE CREATIVE
          </h1>
          <img
            src="../images/icon-arrow-down.svg"
            alt="arrow donw icon"
            class="arrow"
          />
      </header>
`;
content.insertAdjacentHTML("beforeend", html);
