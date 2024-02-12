export default class Form extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const style = this.createStyle();
        this.shadowRoot.appendChild(style);
        const template = this.createTemplate();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    createStyle() {
        const style = document.createElement('style');
        style.textContent = `
        form {
            display: table;
            align-items: center;
        }
        `;
        return style;
    }

    createTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <form>
        <label>Name:&nbsp;</label>
        <input type="text" id="name" name="name"/><br /><br />
        <label>Email:&nbsp;</label>
        <input type="email" id="email" name="email" /><br /><br />
        <label>Phone:&nbsp;</label>
        <input type="tel" id="phone" name="phone" /><br /><br />
        <button type="submit" value="submit">SUBMIT</button><br /><br />
        <hr />
        </form>
        `;
        return template;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('form').addEventListener('submit', this.handleSubmit);
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('form').removeEventListener();
    }

    handleSubmit(event) {
        event.preventDefault();
        let userObj = {};
        new FormData(event.target).forEach((val, key) => userObj[key] = val);
        console.log(userObj);
    }
}