class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<h4>Copyright &copy; 2k22 - <span>Amigo\'s</span></h4>';
  }
}
customElements.define('footer-amigos', Footer);
