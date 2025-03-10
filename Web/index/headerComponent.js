class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../../index/index.css">
        <header class="header">
          <a href="../../index/index.html"><img class="logo" src="../../assets/logo1.png" alt="Logo" /></a>
          <form class="search" id="searchForm">
            <input
              type="text"
              name="q"
              id="search"
              class="search-input"
              placeholder="Search..."
            />
            <div class="search-icon" id="searchButton">
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
      
    // Agregar event listeners después de crear el DOM
    this.shadowRoot.getElementById('searchForm').addEventListener('submit', this.handleSearch.bind(this));
    this.shadowRoot.getElementById('searchButton').addEventListener('click', this.handleSearch.bind(this));
  }

  handleSearch(event) {
    event.preventDefault();
    const searchTerm = this.shadowRoot.getElementById('search').value.trim();
    
    if (searchTerm) {
      // Opción 1: Redirigir a una página de resultados con el término de búsqueda como parámetro
      window.location.href = `../../pages/search/search.html?q=${encodeURIComponent(searchTerm)}`;
      
      // Opción 2: Implementar la búsqueda directamente aquí (ejemplo básico)
      // console.log(`Buscando: ${searchTerm}`);
      // Aquí podrías implementar la lógica de búsqueda en el frontend
    }
  }
}

customElements.define("header-component", HeaderComponent);
