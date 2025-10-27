class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer id="footer" class="footer">
               
                        
                            <a   href="mailto:blancamadococa@gmail.com?subject=To%20Blanca%20Madorran" class="email-ver2">
                                <i class="fa fa-envelope growMore" aria-hidden="true"></i>Email
                            </a>
                            <a  href="https://www.linkedin.com/in/blancamaco/">
                                <i class="fa fa-linkedin-square growMore" aria-hidden="true"></i>Linkedin
                            </a>
                            <a href="https://www.behance.net/blancamaco"> 
                                <i class="fa fa-behance-square growMore" aria-hidden="true"></i>Behance
                            </a>
                        

            </footer>
            `;
  }
}

customElements.define('footer-component', Footer);

