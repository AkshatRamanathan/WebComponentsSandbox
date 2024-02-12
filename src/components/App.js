const template = document.createElement('template');
template.innerHTML = `<p><h1><slot name="title" /></h1></p>`;

export default class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("p").style.alignItems = 'center';
    }

    connectedCallback(){
        console.log("connected")
    }
}
