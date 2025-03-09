  class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../../index/index.css">
        <header class="header">
          <a href="../../index/index.html"><img class="logo" src="../../assets/logo1.png" alt="Logo" /></a>
          <form class="search" action="/search" method="get">
            <input
              type="text"
              name="q"
              id="search"
              class="search-input"
              placeholder="Search..."
            />
            <div class="search-icon">
              <img class="lupa" alt="lupa" src="../../assets/lupa.png" />
            </div>
          </form>
          <a href="../../pages/Login/login.html"><button class="login">Iniciar sesión</button></a>
          <a href="../../pages/Register/register.html"><button class="login">Registrarse</button></a>
        </header>
        <div class="opciones">
          <a href="../../pages/juegos/juegos.html"><button class="buttonMenu">Juegos</button></a>
          <a href="../../pages/videos/videos.html"><button class="buttonMenu">Videos</button></a>
          <a href="../../pages/radio/radio.html"><button class="buttonMenu">Radio</button></a>
        </div>
      `;
  }
}

customElements.define("header-component", HeaderComponent);
