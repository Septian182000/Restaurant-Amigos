class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <h1 class="hero-title" tabindex="0">Food give us a <span class="span-hero-title">happines</span></h1>
          <h2 class="hero-text" tabindex="0">if people can hurt you but food can't be</h2>`;
  }
}
customElements.define('hero-header', Hero);
