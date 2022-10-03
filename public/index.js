var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from "./services/charactes.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const charactes = yield getCharacters();
            this.render(charactes);
        });
    }
    render(charactes) {
        if (!this.shadowRoot)
            return;
        const personajes = charactes.map(({ character, characterDirection, image, quote }) => `
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
