class Header extends HTMLElement {
  constructor() {
    super();
    this.lastScroll = 0;
  }

  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar">
                <div class="navbarContent">
                    <div class="home">
                        <a href="index.html"> Blanca</a>
                    </div>
                

            
                    <div class="navbarItems">
                
                        <a href="index.html#about" ><span data-hover="About">About</span></a>
                    
                    
                        <a href="index.html#projects" ><span data-hover="Projects">Projects</span></a>
                    
                    
                        <a href="https://www.linkedin.com/in/blancamaco/" ><span data-hover="CV">CV</span></a>
                    
                    
        
                    
                    </div>
                </div>
                
            
        </nav>
    `;
    this.nav = this.querySelector('nav');
    this._setupScrollBehavior();
}

    _setupScrollBehavior() {
        window.addEventListener('scroll', () => {
        const current = window.scrollY;
        if(current == 0){
            if(this.nav.parentElement.parentElement.classList.contains('landing')){
                this.nav.style.backgroundColor = "transparent";
            }
            this.nav.style.top = '0'; // mostrar en la parte superior
            return;
        }

        if (current > this.lastScroll) {
            
            this.nav.style.top = '-80px'; // ocultar al bajar
        } else {
            if(this.nav.parentElement.parentElement.classList.contains('landing')){
                this.nav.style.backgroundColor = "white";
            }
            this.nav.style.top = '0'; // mostrar al subir
        }

        this.lastScroll = current;
        });
    }

}

customElements.define('header-component', Header);


        
 