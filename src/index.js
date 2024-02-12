import './scss/app.scss';

import App from './components/App.js';
import Table from './components/Table.js';
import Form from './components/Form.js';

customElements.define('my-app',App);
customElements.define('app-form',Form);
customElements.define('my-table',Table);