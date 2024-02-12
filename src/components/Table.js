export default class Table extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const template = this.generateTemplate();
        const style = this.createStyle();
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    createStyle() {
        const style = document.createElement('style');
        style.textContent = `
        table, tr, td{
           border: 1px solid white;
        }
        `;
        return style;
    }

    generateTemplate() {
        let template = document.createElement("template");
        template.innerHTML = `
            <table id="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        `;
        return template;
    }
}