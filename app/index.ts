import { getCharacters } from "./services/charactes.js";
import { Character} from "./types/index.js"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback() {
       const charactes = await getCharacters();
        this.render(charactes);
    }

    render(charactes: Array<Character>) {
        if(!this.shadowRoot) return;

        const  personajes = charactes.map(({character, characterDirection, image, quote }) => `
        <link rel="stylesheet" href="/style.css"
        
        <article> 
        
        <div class ="container"> 
            <img src="./images/the_simpsons_logo.png" class="logo">
            <div class="title">✦ random simpson's character quote generetor ✦</div>

        <div class ="info">
            <div class="name"> <b> Character's Name:</b> ${character} </div>
            <div class="direction"> <b> Where's the character looking?👀:</b> ${characterDirection} </div>
        </div>
        <div class ="container2"> 
            <img src="${image}" class="image">
            <div class="quotetitle">✦ quote ✦</div>
            <div class="quote"> "${quote}" </div>
        </div>

        <div class="notice"> ⚠ If you want a new character and quote please refresh the page!😁 ⚠ </div>
       
        </div>
      
        </article>`);

        this.shadowRoot.innerHTML = `<section>
            ${personajes.join("")}
        </section>`;
        }
}

customElements.define('app-container', AppContainer);